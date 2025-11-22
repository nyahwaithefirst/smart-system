"use client"

import { useRef, useState } from "react"
import ClientNameScreening from "../clientNameScreening/clientNameScreening";
import ClientNameScreeningResults from "../clientNameScreeningResults/clientNameScreeningResults";

const NameScreeningEngine = () => {

    const clientNameScreeningRef = useRef(null);

    const [isDataSubmitted, setDataSubmitted] = useState(false);

    return (
        !isDataSubmitted ?
            <ClientNameScreening
                ref={clientNameScreeningRef}
                setDataSubmitted={setDataSubmitted}
            /> :
            <ClientNameScreeningResults setDataSubmitted={setDataSubmitted} />
    )
}

export default NameScreeningEngine;