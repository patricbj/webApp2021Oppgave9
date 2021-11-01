import { useEffect, useState } from 'react'

import axios from 'axios'
import Head from 'next/head'

const CreateDyr = () => {
    const [dyrene, setDyrene] = useState([])
    const [dyr, setDyr] = useState('')
    const [error, setError] = useState(null)

    const handleDyrChange = (event) => {
        setDyr(event.target.value)
    }

    const createDyr = async () => {
        try {
            const response = await axios.post('/api/dyr', { name: dyr })
        } catch (err) {
            setError(err?.response?.data?.error)
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        await createDyr()
        setDyr('')
    }

    const getDyrene = async () => {
        try {
            const response = await axios.get('/api/dyr')
            if (response?.data?.success) {
                setDyrene(response.data.data)
            }
            
        } catch (err) {
            setError(err?.response?.data?.error)
        }
        
    }

    useEffect(() => {
        getDyrene()
    }, [])

    useEffect(() => {
        console.log(dyr)
    }, [dyr])

    if (error) {
        return <p>Noe gikk galt: {error}</p>
    }
    
    return (
        <div>
            <Head>
                <title>Lag Dyr</title>
            </Head>
            <h1>Lag dyr</h1>
            <section>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Skriv et dyr: </label>
                    <input 
                        id="name" 
                        type="text" 
                        name="name" 
                        value={dyr} 
                        onChange={handleDyrChange} 
                    />
                    <button type="submit">Lag dyr</button>
                </form>
            </section>
        </div>
    )
}

export default CreateDyr