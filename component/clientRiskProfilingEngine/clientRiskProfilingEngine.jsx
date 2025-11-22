"use client"

import { useRef, useState } from "react"
import ClientRiskProfiling from "../clientRiskProfiling/clientRiskProfiling";
import ClientRiskProfilingResults from "../clientRiskProfilingResults/clientRiskProfilingResults";

const ClientRiskProflingEngine = () => {

    const clientNameScreeningRef = useRef(null);

    const [isDataSubmitted, setDataSubmitted] = useState(false);

    return (
        !isDataSubmitted ?
            <ClientRiskProfiling
                ref={clientNameScreeningRef}
                setDataSubmitted={setDataSubmitted}
            /> :
            <ClientRiskProfilingResults setDataSubmitted={setDataSubmitted} />
    )
}

export default ClientRiskProflingEngine;