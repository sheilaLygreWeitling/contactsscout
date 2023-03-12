import React, { useEffect, useState } from 'react'
import Mail from '../Frontpage/Mail';

const ChoosenBranch = () => {

    const API_KEY = process.env.REACT_APP_SCOUT_API_KEY

    const queryURL = "https://ms-proxy-api.deranged.dk/query"

    const headers = {
        "medlemsservice-association": "dds",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
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


    const [checked, setChecked] = useState(false)
    const [unchecked, setUnchecked] = useState(false)
    const [oneIsChecked, setOneIsChecked] = useState(false)

    useEffect(() => {
        if (checked) {
            document.querySelectorAll('input[name="sharedMail"]').forEach((el) => {
                el.checked = true
            })
        } else {
            document.querySelectorAll('input[name="sharedMail"]').forEach((el) => {
                el.checked = false
            })
        }

    }, [checked])

    useEffect(() => {
        if (unchecked) {
            document.querySelectorAll('input[name="sharedMail"]').forEach((el) => {
                el.checked = false
            })
        } else {
            document.querySelectorAll('input[name="sharedMail"]').forEach((el) => {
                el.checked = true
            })

        }
    }, [unchecked])

    useEffect(() => {
        if (oneIsChecked) {
            document.querySelectorAll('input[name="sharedMail"]').forEach((el) => {
                el.checked = true
            })
        } else {
            document.querySelectorAll('input[name="sharedMail"]').forEach((el) => {
                el.checked = false
            })
        }
    }, [oneIsChecked])

    return (
        <div>
            <div>
                <div className='flex gap-3 pl-5 pt-2'>
                    <div>
                        <input type="checkbox" name="sharedMail" id="mail"

                            onChange={(e) => {
                                if (e.target.checked) {
                                    setChecked(true)
                                    setUnchecked(false)
                                } else {
                                    setChecked(false)
                                    setUnchecked(true)
                                }
                            }}

                        />
                    </div>
                    <div>
                        <label htmlFor="mail" className=' font-light'>Send fællesmail</label>
                    </div>
                </div>
            </div>
            {
                request.map((data, index) => {
                    return (
                        <div className=' border-b border-[#004077] p-5 flex gap-3 items-baseline' key={index}>
                            <input
                                type="checkbox"
                                name="sharedMail"
                                id="branchMail"
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setOneIsChecked(true)
                                    } else {
                                        setOneIsChecked(false)
                                    }
                                }}
                            />
                            <label htmlFor="branchMail" className=' font-light'>
                                <h2>Navn: {data.name}</h2>
                                <h2>
                                    {<a href="tel:+{data.phone}">Telefon: {data.phone}</a>}
                                </h2>
                                <h2>
                                    {<a href="mailto:{data.email}">Email: {data.email}</a>}
                                </h2>
                                <h2>
                                    {<a href="tel:+{data.mobile}">Mobil: {data.mobile}</a>}
                                </h2>
                            </label>
                            {/*<h2>Medlems nr: {data.active_function_ids}</h2>
                            <h2>{data.relation_all_ids}</h2>
                            <h2>{data.partner_id}</h2> */}
                        </div>
                    )
                }
                )
            }
        </div >
    )

}


export default ChoosenBranch