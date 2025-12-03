"use client";

import { useEffect } from "react";
import { postApi } from "../../apis";

export default function Page() {

    const postRm = async () => {
        const jsonObject = {
            "full_name": "Steven Matongo",
            "email": "smatongo@cbz.co.zw",
            "whatsapp_number": "0776474219",
            "phone_number": "0776474219",
            "location": "Harare",
            "picture": "/media/dms/relationshipManager_U2o2hja.svg"
        }

        const url = "https://cbzmortgages.cbz.co.zw/api/relationship_managers_post";

        const res = await postApi(url, jsonObject);

        alert(JSON.stringify(res))
    }

    useEffect(() => {
        postRm();
    }, [])


    return (
        <h5>Hello World</h5>
    )
}