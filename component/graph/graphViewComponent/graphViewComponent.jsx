import React, { useEffect, useRef, useState } from "react";
import { Network } from "vis-network";
import { DataSet } from "vis-data";

const VisNetworkGraph = () => {
  const networkRef = useRef(null);
  const networkInstance = useRef(null);
  const miniMapRef = useRef(null);
  const miniMapInstance = useRef(null);

  const [nodesData, setNodesData] = useState(null);
  const [edgesData, setEdgesData] = useState(null);

  useEffect(() => {
    if (!networkRef.current) return;

    let isMounted = true;

    async function fetchGraphData() {
      const response = await fetch("/api/cypher");
      const data = await response.json();

      const nodes = new DataSet(
        data.nodes.map((node) => {
          const title = Object.entries(node)
            .filter(([key]) => key !== "id")
            .map(([key, value]) =>
              value?.low !== undefined
                ? `${key}: ${value.low}`
                : `${key}: ${value}`
            )
            .join("\n");

          return {
            id: node.id,
            label: node.name || node.title || node.id,
            title,
            shape: "image",
            image: `/assets/img/team-2.jpg`,
          };
        })
      );

      const edges = new DataSet(
        data.links.map((link) => ({
          from: link.source,
          to: link.target,
          label: link.type || "",
          font: { align: "middle" },
          arrows: "to",
        }))
      );

      if (!isMounted) return;

      setNodesData(nodes);
      setEdgesData(edges);

      const networkData = { nodes, edges };
      const options = {
        nodes: { borderWidth: 2, size: 25, font: { size: 14 } },
        edges: { color: { color: "#848484" }, smooth: true },
        physics: {
          stabilization: true,
          barnesHut: { gravitationalConstant: -30000, springLength: 200 },
        },
        interaction: { hover: true, multiselect: true },
      };

      networkInstance.current = new Network(
        networkRef.current,
        networkData,
        options
      );
    }

    fetchGraphData();

    return () => {
      isMounted = false;
      networkInstance.current?.destroy();
      miniMapInstance.current?.destroy();
    };
  }, []);

  // Setup mini-map after nodes and edges are ready
  useEffect(() => {
    if (!nodesData || !edgesData || !miniMapRef.current) return;

    const miniMapData = { nodes: nodesData, edges: edgesData };
    const miniMapOptions = {
      nodes: { shape: "dot", size: 10, font: { size: 10 } },
      edges: { color: { color: "#ccc" }, smooth: false },
      interaction: { dragNodes: false, zoomView: false, dragView: false },
      physics: false,
    };

    miniMapInstance.current = new Network(
      miniMapRef.current,
      miniMapData,
      miniMapOptions
    );

    // Sync mini-map box with main network
    const updateMiniMapBox = () => {
      const view = networkInstance.current.getViewPosition();
      const scale = networkInstance.current.getScale();
      const canvasSize =
        networkInstance.current.body.container.getBoundingClientRect();

      const box = {
        x: -view.x / scale + canvasSize.width / 2,
        y: -view.y / scale + canvasSize.height / 2,
        width: canvasSize.width / scale,
        height: canvasSize.height / scale,
      };

      const ctx = miniMapRef.current.getContext("2d");
      if (!ctx) return;

      // Clear previous box
      ctx.clearRect(0, 0, miniMapRef.current.width, miniMapRef.current.height);

      // Draw overlay box
      ctx.strokeStyle = "red";
      ctx.lineWidth = 2;
      ctx.strokeRect(box.x, box.y, box.width, box.height);
    };

    networkInstance.current.on("afterDrawing", updateMiniMapBox);
    networkInstance.current.on("zoom", updateMiniMapBox);
    networkInstance.current.on("dragEnd", updateMiniMapBox);
  }, [nodesData, edgesData]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <div ref={networkRef} style={{ width: "100%", height: "100%" }} />
      <canvas
        ref={miniMapRef}
        width={200}
        height={200}
        style={{
          position: "absolute",
          bottom: 10,
          right: 10,
          border: "1px solid #ccc",
          background: "#fff",
        }}
      />
    </div>
  );
};

export default VisNetworkGraph;
