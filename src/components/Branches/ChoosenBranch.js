import React, { useEffect, useState } from 'react'

const ChoosenBranch = () => {

    const queryURL = "https://ms-proxy-api.deranged.dk/query"

    const headers = {
        "medlemsservice-association": "dds",
        "Content-Type": "application/json",
        "Authorization": "Bearer "
    };

    const [request, setRequest] = useState([])
    useEffect(() => {
        async function getData() {
            const response = await fetch(queryURL, {
                method: "POST",
                headers: headers,
                body: JSON.stringify({
                    "model": "member.profile",
                    "fields": [
                        "name",
                        "phone",
                        "email",
                        "mobile",
                        "active_function_ids",
                        "relation_all_ids",
                        "partner_id"
                    ],
                    "domain": [
                        ["state", "=", "active"]
                    ],
                    "offset": 0,
                    "limit": 10000,
                    "sort": "name ASC"
                    ,
                })
            })
            const data = await response.json()
            setRequest(data.records)
        }
        getData();
    }, []);



    console.log(request);


    /* fetch(queryURL, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
            "model": "member.profile",
            "fields": [
                "name",
                "phone",
                "email",
                "mobile",
                "active_function_ids",
                "relation_all_ids",
                "partner_id"
            ],
            "domain": [
                ["state", "=", "active"]
            ],
            "offset": 0,
            "limit": 10000,
            "sort": "name ASC"
            ,
        })
    }).then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    })
     
     
    /* const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
     
    const getData = () => {
        fetch(queryURL, {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                "model": "member.profile",
                "fields": [
                    "name",
                    "phone",
                    "email",
                    "mobile",
                    "active_function_ids",
                    "relation_all_ids",
                    "partner_id"
                ],
                "domain": [
                    ["state", "=", "active"]
                ],
                "offset": 0,
                "limit": 10000,
                "sort": "name ASC"
                ,
            })
        }).then(response => {
            console.log(response);
            return response.json()
        }).then(data => {
            setData(data)
            setLoading(false)
        }).catch(error => {
            console.log(error);
        })
    }
     
    useEffect(() => {
        getData()
    }, []);
     
    if (loading) {
        return <h1>Loading...</h1>
    }
    */


    return (
        <div>
            {
                request.map((data, index) => {
                    return (
                        <div key={index}>
                            <h2>{data.name}</h2>
                            <h2>{data.phone}</h2>
                            <h2>{data.email}</h2>
                            <h2>{data.mobile}</h2>
                            <h2>{data.active_function_ids}</h2>
                            <h2>{data.relation_all_ids}</h2>
                            <h2>{data.partner_id}</h2>
                        </div>
                    )
                }
                )
            }

            {/*<h2>{data.phone}</h2>
            <h2>{data.email}</h2>
            <h2>{data.mobile}</h2>
            <h2>{data.active_function_ids}</h2>
            <h2>{data.relation_all_ids}</h2>
            <h2>{data.partner_id}</h2>*/}
        </div>
    )

}


export default ChoosenBranch