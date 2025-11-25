"use client"

import { useEffect, useRef, useState } from "react"
import SocialMedia from "../socialMedia/socialMedia";
import SocialMediaResults from "../socialMediaResults/socialMediaResults";

const SocialMediaEngine = () => {

    const clientNameScreeningRef = useRef(null);

    const [isDataSubmitted, setDataSubmitted] = useState(false);
    const [results, setResults] = useState({
        "socialMediaList": [],
        "adverseMediaList": []
    });

    useEffect(() => {
        console.log("results -> ", results);
    }, [results])

    return (
        !isDataSubmitted ?
            <SocialMedia
                ref={clientNameScreeningRef}
                setDataSubmitted={setDataSubmitted}
                results={results}
                setResults={setResults}
            /> :
            <SocialMediaResults
                setDataSubmitted={setDataSubmitted}
                results={results}
            />
    )
}

export default SocialMediaEngine;