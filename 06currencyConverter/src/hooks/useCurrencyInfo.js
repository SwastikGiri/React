import React from 'react'
import { useState,useEffect } from 'react'
function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((resp) => resp.json())
        .then((resp) => setData(resp[currency]))
        console.table(data);
    
    },[currency])
    return data
}

export default useCurrencyInfo