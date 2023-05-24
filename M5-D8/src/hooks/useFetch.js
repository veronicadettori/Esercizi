import React from "react";
import { useState, useEffect } from "react";

const useFetch = (endpoint) => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState('')

    const handleFetch = async () => {
        setLoading(true)
        try {
            console.log("Executing fetch")
            const data = await fetch(endpoint,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDMzMjU1N2VmNmI2MDAwMTRmYjM0ZjEiLCJpYXQiOjE2ODM5MDkzNTcsImV4cCI6MTY4NTExODk1N30.UIgjE2csRYlowVb0ZMZqmmStPcYlDbS4jZ7C_oKyjeM"
                    }
                })
            const response = await data.json()
            setData(response)
            setLoading(false)
        } catch (error) {
            if (error) setError('Errore!')
        }
    }
    useEffect(() => {
        handleFetch()
    }, [endpoint])
    
    return {data, loading, error}
}

export default useFetch