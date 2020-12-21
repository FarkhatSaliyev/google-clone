import { useState, useEffect } from 'react'
import API_KEY from './keys'

const CONTEXT_KEY = "69b5e0d58d6ca4891";

export default function useGoogleSearch(term) {
    const [data, setData] = useState(null)   

    useEffect(() => {
        const fetchData = async () =>{
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}
            `)
            .then(res=> res.json())
            .then(res => {
                setData(res)
            })
        }

        fetchData()
    }, [term])

    return {data}
}
