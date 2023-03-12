import React from 'react'
import ChoosenBranch from '../components/Branches/ChoosenBranch'
import Header from '../components/Frontpage/Header'

const Branch = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <ChoosenBranch />
            </div>
        </div>
    )
}

export default Branch