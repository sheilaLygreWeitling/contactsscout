import React from 'react'

const Mail = () => {
    return (
        <div className='flex gap-3 pl-5 pt-2'>
            <div>
                <input type="checkbox" name="sharedMail" id="mail" />
            </div>
            <div>
                <label htmlFor="mail" className=' font-light'>Send fællesmail</label>
            </div>
        </div>
    )
}

export default Mail