import { useEffect, useState } from "react"
import { makeRequest } from "../makeRequest";

const useFetch = async (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await makeRequest.get(url, {
                    withCredentials: true
                })
                setData(data.data)
            } catch (err) {
                setError(true);
            }
            setLoading(false);
        };
        fetchData();
    }, [])

    return { data, loading, error }
}
export default useFetch