"use client"

import { useRef, useState } from "react"
import EntityNameScreening from "../entityNameScreening/entityNameScreening";
import EntityNameScreeningResults from "../entityNameScreeningResults/entityNameScreeningResults";

const EntityNameScreeningEngine = () => {

    const clientNameScreeningRef = useRef(null);

    const [isDataSubmitted, setDataSubmitted] = useState(false);

    return (
        !isDataSubmitted ?
            <EntityNameScreening
                ref={clientNameScreeningRef}
                setDataSubmitted={setDataSubmitted}
            /> :
            <EntityNameScreeningResults setDataSubmitted={setDataSubmitted} />
    )
}

export default EntityNameScreeningEngine;