"use client"

import { useRef, useState } from "react"
import ClientRiskProfilingResults from "../clientRiskProfilingResults/clientRiskProfilingResults";
import FlaggingRules from "../flaggingRules/flaggingRules";

const FlaggingRulesEngine = () => {

    const clientNameScreeningRef = useRef(null);

    const [isDataSubmitted, setDataSubmitted] = useState(false);

    return (
        !isDataSubmitted ?
            <FlaggingRules
                ref={clientNameScreeningRef}
                setDataSubmitted={setDataSubmitted}
            /> :
            <ClientRiskProfilingResults setDataSubmitted={setDataSubmitted} />
    )
}

export default FlaggingRulesEngine;