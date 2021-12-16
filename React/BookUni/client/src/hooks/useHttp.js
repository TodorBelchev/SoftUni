import { useCallback, useState } from "react"

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (request, applyData) => {
        setIsLoading(true);

        try {
            const response = await request;

            const data = await response.json();

            if (!response.ok) { throw new Error(data.message); }
            setIsLoading(false);
            applyData(data);
        } catch (error) {
            setIsLoading(false);
            setError(error.message);
        }
    }, []);

    return {
        isLoading,
        error,
        sendRequest
    }
}

export default useHttp;