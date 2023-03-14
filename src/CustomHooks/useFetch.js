import React, { useState, useEffect } from 'react';
import axios from 'axios';


function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        if (url === null) return;
        (async function () {
            try {
                setLoading(true);
                const res = await axios.get(url);
                console.log(res.data);
                setData(res.data);
            } catch (error) {
                console.log("Error from fetch", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        })();

    }, [url])


  return {data, loading, error}
}

export default useFetch