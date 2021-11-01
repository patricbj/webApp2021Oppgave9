import { useEffect, useState } from 'react'

import axios from 'axios'
import Head from 'next/head'

const Dyr = () => {
    const [dyr, setDyr] = useState([])

    const getDyrene = async () => {
        try {
            const response = await axios.get('/api/dyr')
            if (response?.data?.success) {
                setDyr(response.data.data)
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getDyrene()
    }, [])
    
    return (
        <div>
            <Head>
                <title>Dyr</title>
            </Head>
            <h1>Mine dyr</h1>
            <section>
                <ul>
                    {dyr.map((dyret) => (
                        <li key={dyret.name}>{dyret.name}</li>
                    ))}
                </ul>
            </section>
        </div>
    )
}

export default Dyr