"use client"

import { useEffect, useRef, useState } from "react"
import ClientNameScreening from "../clientNameScreening/clientNameScreening";
import ClientNameScreeningResults from "../clientNameScreeningResults/clientNameScreeningResults";

const NameScreeningEngine = () => {

    const clientNameScreeningRef = useRef(null);

    const [isDataSubmitted, setDataSubmitted] = useState(false);
    const [results, setResults] = useState([]);

    useEffect(() => {
        console.log("results -> ", results);
    }, [results])

    return (
        !isDataSubmitted ?
            <ClientNameScreening
                ref={clientNameScreeningRef}
                setDataSubmitted={setDataSubmitted}
                results={results}
                setResults={setResults}
            /> :
            <ClientNameScreeningResults
                setDataSubmitted={setDataSubmitted}
                results={results}
            />
    )
}

export default NameScreeningEngine;