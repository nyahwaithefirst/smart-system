"use client"

import { useRef, useState } from "react"
import EntityNameScreening from "../entityNameScreening/entityNameScreening";
import EntityNameScreeningResults from "../entityNameScreeningResults/entityNameScreeningResults";

const EntityNameScreeningEngine = () => {

    const clientNameScreeningRef = useRef(null);

    const [isDataSubmitted, setDataSubmitted] = useState(false);
    const [results, setResults] = useState([]);

    return (
        !isDataSubmitted ?
            <EntityNameScreening
                ref={clientNameScreeningRef}
                setDataSubmitted={setDataSubmitted}
                setResults={setResults}
            /> :
            <EntityNameScreeningResults
                setDataSubmitted={setDataSubmitted}
                results={results}
            />
    )
}

export default EntityNameScreeningEngine;