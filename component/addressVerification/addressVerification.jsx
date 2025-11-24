import { useEffect, useRef, useState } from "react";
import styles from "./addressVerification.module.css";
import "ol/ol.css";

import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import { defaults as defaultControls } from "ol/control";
import { fromLonLat, toLonLat } from "ol/proj";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Feature } from "ol";
import Point from "ol/geom/Point";
import { Icon, Style } from "ol/style";
import { ChartNoAxesGantt, ChevronRight, MapPin, Search } from "lucide-react";

const AddressVerification = () => {
    const containerRef = useRef(null);
    const markerLayerRef = useRef(null);
    const mapRef = useRef(null);

    const [address, setAddress] = useState("");
    const [searchText, setSearchText] = useState("");
    const [results, setResults] = useState([]);

    // --- Add marker ---
    const addMarker = (coords) => {
        const marker = new Feature({
            geometry: new Point(fromLonLat(coords)),
        });

        marker.setStyle(
            new Style({
                image: new Icon({
                    src: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
                    scale: 0.07,
                }),
            })
        );

        const source = markerLayerRef.current.getSource();
        source.clear();
        source.addFeature(marker);
    };

    // --- Reverse Geocode ---
    const fetchReverseGeocode = async (lon, lat) => {
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lon=${lon}&lat=${lat}`;
        const response = await fetch(url);
        const data = await response.json();
        setAddress(data.display_name || "No address found");
    };

    // --- Search Address ---
    const searchAddress = async () => {
        if (!searchText) return;

        // In real case: replace this with API call
        setResults(sampleResults);
    };

    // --- Map Init ---
    useEffect(() => {
        if (containerRef.current) {
            const markerLayer = new VectorLayer({ source: new VectorSource() });
            markerLayerRef.current = markerLayer;

            const map = new Map({
                target: containerRef.current,
                layers: [
                    new TileLayer({ source: new OSM(), className: styles.osm }),
                    markerLayer,
                ],
                view: new View({
                    center: fromLonLat([30, -20]),
                    zoom: 6,
                }),
                controls: defaultControls({ zoom: true }),
            });

            mapRef.current = map;

            map.on("click", async (event) => {
                const [lon, lat] = toLonLat(event.coordinate);
                addMarker([lon, lat]);
                fetchReverseGeocode(lon, lat);
            });

            return () => map.setTarget(undefined);
        }
    }, []);

    // --- When clicking card → zoom to address ---
    const handleCardClick = (item) => {
        const coords = [item.xcoord, item.ycoord];
        mapRef.current.getView().animate({
            center: fromLonLat(coords),
            zoom: 17,
        });
        addMarker(coords);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.sidebar}>
                    <div className={styles.header}>
                        <div className={styles.searchBar}>
                            <Search size={16} />
                            <input
                                type="text"
                                placeholder="Search for address here.."
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && searchAddress()}
                            />
                        </div>
                        <button className={styles.controlBtn}>
                            <MapPin size={16} color="#4a90e2" />
                            <span>City</span>
                            <ChevronRight size={16} />
                        </button>
                        {/* <button className={styles.controlBtn}>
                            <ChartNoAxesGantt size={16} color="#4a90e2" />
                            <span>Filters</span>
                        </button> */}
                    </div>
                </div>

                {/* RESULTS PANEL */}
                <div className={styles.masterDetails}>
                    {results.length === 0 ? (
                        <p className={styles.noResults}>No results yet</p>
                    ) : (
                        results.map((item) => (
                            <div
                                key={item.addressId}
                                className={styles.resultCard}
                                onClick={() => handleCardClick(item)}
                            >
                                <h4>{item.fullAddress}</h4>
                                <p>{item.cityTown}, {item.province}</p>
                                <p>{item.country}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>

            <div ref={containerRef} className={styles.mapContainer}></div>
        </div >
    );
};

export default AddressVerification;

// Sample JSON structure
const sampleResults = [
    {
        addressId: 1,
        cityTown: "Pretoria",
        country: "South Africa",
        district: "Gauteng",
        fullAddress: "123 Example Street, Pretoria",
        province: "Gauteng",
        roadName: "Example Street",
        srNum: "12",
        standNum: "504",
        streetNo: "123",
        suburbName: "Arcadia",
        township: "Pretoria Central",
        xcoord: 28.217,
        ycoord: -25.7479,
    },
    {
        addressId: 1,
        cityTown: "Pretoria",
        country: "South Africa",
        district: "Gauteng",
        fullAddress: "123 Example Street, Pretoria",
        province: "Gauteng",
        roadName: "Example Street",
        srNum: "12",
        standNum: "504",
        streetNo: "123",
        suburbName: "Arcadia",
        township: "Pretoria Central",
        xcoord: 28.217,
        ycoord: -25.7479,
    },
    {
        addressId: 1,
        cityTown: "Pretoria",
        country: "South Africa",
        district: "Gauteng",
        fullAddress: "123 Example Street, Pretoria",
        province: "Gauteng",
        roadName: "Example Street",
        srNum: "12",
        standNum: "504",
        streetNo: "123",
        suburbName: "Arcadia",
        township: "Pretoria Central",
        xcoord: 28.217,
        ycoord: -25.7479,
    },
    {
        addressId: 1,
        cityTown: "Pretoria",
        country: "South Africa",
        district: "Gauteng",
        fullAddress: "123 Example Street, Pretoria",
        province: "Gauteng",
        roadName: "Example Street",
        srNum: "12",
        standNum: "504",
        streetNo: "123",
        suburbName: "Arcadia",
        township: "Pretoria Central",
        xcoord: 28.217,
        ycoord: -25.7479,
    }
];
