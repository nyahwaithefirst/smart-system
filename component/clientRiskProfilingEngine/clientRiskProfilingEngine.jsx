"use client"

import { useEffect, useRef, useState } from "react"
import ClientRiskProfiling from "../clientRiskProfiling/clientRiskProfiling";
import ClientRiskProfilingResults from "../clientRiskProfilingResults/clientRiskProfilingResults";

const ClientRiskProflingEngine = () => {

    const clientNameScreeningRef = useRef(null);

    const [isDataSubmitted, setDataSubmitted] = useState(false);

    useEffect(() => {
        alert("Results Changed");
    }, [results])

    return (
        !isDataSubmitted ?
            <ClientRiskProfiling
                ref={clientNameScreeningRef}
                setDataSubmitted={setDataSubmitted}
                setResults={setResults}
            /> :
            <ClientRiskProfilingResults
                setDataSubmitted={setDataSubmitted}
                results={results}
            />
    )
}

export default ClientRiskProflingEngine;