import React from 'react'
import Branches from '../components/Frontpage/Branches'
import Header from '../components/Frontpage/Header'
import ChooseBranch from '../components/Frontpage/ChooseBranch'

const FrontPage = () => {


    const baseurl = "https://ms-proxy-api.deranged.dk/login";

    const headers = {
        "medlemsservice-association": "dds",
        "Content-Type": "application/json"
    };

    fetch(baseurl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
            "email": "",
            "password": ""
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