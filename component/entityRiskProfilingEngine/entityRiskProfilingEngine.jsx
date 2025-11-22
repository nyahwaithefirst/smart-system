"use client"

import { useRef, useState } from "react"
import ClientRiskProfilingResults from "../clientRiskProfilingResults/clientRiskProfilingResults";
import EntityRiskProfiling from "../entityRiskProfiling/entityRiskProfiling";

const EntityRiskProflingEngine = () => {

    const clientNameScreeningRef = useRef(null);

    const [isDataSubmitted, setDataSubmitted] = useState(false);

    return (
        !isDataSubmitted ?
            <EntityRiskProfiling
                ref={clientNameScreeningRef}
                setDataSubmitted={setDataSubmitted}
            /> :
            <ClientRiskProfilingResults setDataSubmitted={setDataSubmitted} />
    )
}

export default EntityRiskProflingEngine;