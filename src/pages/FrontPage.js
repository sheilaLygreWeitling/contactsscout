import React from 'react'
import Branches from '../components/Frontpage/Branches'
import Header from '../components/Frontpage/Header'
import ChooseBranch from '../components/Frontpage/ChooseBranch'

const FrontPage = () => {

    const SHEILA_USERNAME = process.env.REACT_APP_SHEILA_USERNAME;
    const SHEILA_PASSWORD = process.env.REACT_APP_SHEILA_PASSWORD;

    const baseurl = "https://ms-proxy-api.deranged.dk/login";

    const headers = {
        "medlemsservice-association": "dds",
        "Content-Type": "application/json"
    };

    fetch(baseurl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
            "email": `${SHEILA_USERNAME}`,
            "password": `${SHEILA_PASSWORD}`
        })
    }).then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    })

    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <ChooseBranch />
            </div>
            <div>
                <Branches />
            </div>
        </div>
    )
}

export default FrontPage