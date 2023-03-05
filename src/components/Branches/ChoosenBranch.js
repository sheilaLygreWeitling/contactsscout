import React from 'react'
import data from '../json/data.json'

const ChoosenBranch = () => {

    const records = data.records;

    return (
        <div>
            {
                records.map((record) => (
                    <div key={record.id} className="p-5">
                        <p>{record.name}</p>
                        <p>{record.mobile}</p>
                        <p>{record.email}</p>
                    </div>
                ))
            }

        </div>
    )
}

export default ChoosenBranch