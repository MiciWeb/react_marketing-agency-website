import React, { useEffect } from 'react'
import { InfoSection } from "../../components"
import { homeObjFour } from "./Data"

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <InfoSection {...homeObjFour} />
        </>
    )
}

export default Home
