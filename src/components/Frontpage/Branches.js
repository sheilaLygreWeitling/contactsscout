import React from 'react'
import Mail from "./Mail";

const Branches = () => {

    const queryURL = "https://ms-proxy-api.deranged.dk/query"

    const headers = {
        "medlemsservice-association": "dds",
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uSWQiOiJmZGY0NmMwM2Q3OThlYWE3ZTk0YTk1YjA2ZmViZTEzZGU5NWRjOTk3IiwiZ3JvdXBIYXNEYXRhUHJvY2Vzc2luZ0FncmVlbWVudCI6ZmFsc2UsImlhdCI6MTY3NzgzNzg2OX0.YJE4lrtfRL6AY5sjLBP7TORveu8Kj1SrgyayRU-0ftxQXUStTWRHbkbFppter3vP3_uRDX7N3v5EDJx3Sp-Whw"
    };



    return (
        <div>
            <Mail />
            <div className='pt-2 font-light'>
                <div className='bg-[#D9D9D9] p-5 flex gap-2'>
                    <input type="checkbox" name="sharedMail" id="mailMikroMini" />
                    <h2>Mikro/mini</h2>
                </div>
                <div className='p-5 flex gap-2'>
                    <input type="checkbox" name="sharedMail" id="mailJunior" />
                    <h2>Junior</h2>
                </div>
                <div className='bg-[#D9D9D9] p-5 flex gap-2'>
                    <input type="checkbox" name="sharedMail" id="mailTrop" />
                    <h2>Trop</h2>
                </div>
                <div className='p-5 flex gap-2'>
                    <input type="checkbox" name="sharedMail" id="mailKlan" />
                    <h2>Klan</h2>
                </div>
                <div className='bg-[#D9D9D9] p-5 flex gap-2'>
                    <input type="checkbox" name="sharedMail" id="mailRover" />
                    <h2>Rover</h2>
                </div>
                <div className='p-5 flex gap-2'>
                    <input type="checkbox" name="sharedMail" id="mailBestyrelse" />
                    <h2>Bestyrelse</h2>
                </div>
            </div>
        </div >
    )
}

export default Branches