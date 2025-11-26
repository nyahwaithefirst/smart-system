"use client"

import { useEffect, useState } from "react"

export default function Home() {

    const [message, setMessage] = useState("Loading")

    useEffect(() => {
        setTimeout(() => {
            setMessage("Searching Page....")
        }, 2000)
        setTimeout(() => {
            setMessage("Page not available....")
        }, 2000)
        setTimeout(() => {
            setMessage("Swicthing to services....")
        }, 2000)
        setTimeout(() => {
            window.location = "/login";
        }, 2000)
    }, [])

    return (
        <div>{message}</div>
    )
} 