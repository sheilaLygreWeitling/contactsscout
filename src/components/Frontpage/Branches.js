import React from 'react'
import Mail from "./Mail";
import { Link } from "react-router-dom";




const Branches = () => {



    return (
        <div>
            <Mail />
            <div className='pt-2 font-light'>
                <Link to="/Gren">
                    <div className='bg-[#D9D9D9] p-5 flex gap-2'>
                        <input type="checkbox" name="sharedMail" id="mailMikroMini" />
                        <h2>Mikro/mini</h2>
                    </div>
                </Link>

                <Link to="/Gren">
                    <div className='p-5 flex gap-2'>
                        <input type="checkbox" name="sharedMail" id="mailJunior" />
                        <h2>Junior</h2>
                    </div>
                </Link>

                <Link to="/Gren">
                    <div className='bg-[#D9D9D9] p-5 flex gap-2'>
                        <input type="checkbox" name="sharedMail" id="mailTrop" />
                        <h2>Trop</h2>
                    </div>
                </Link>

                <Link to="/Gren">
                    <div className='p-5 flex gap-2'>
                        <input type="checkbox" name="sharedMail" id="mailKlan" />
                        <h2>Klan</h2>
                    </div>
                </Link>

                <Link to="/Gren">
                    <div className='bg-[#D9D9D9] p-5 flex gap-2'>
                        <input type="checkbox" name="sharedMail" id="mailRover" />
                        <h2>Rover</h2>
                    </div>
                </Link>

                <Link to="/Gren">
                    <div className='p-5 flex gap-2'>
                        <input type="checkbox" name="sharedMail" id="mailBestyrelse" />
                        <h2>Bestyrelse</h2>
                    </div>
                </Link>
            </div>
        </div >
    )
}

export default Branches