import { useState, useEffect } from "react"


const useLogin = (apiUrl: string) => {
    const [message, setMessage] = useState<string>();

    const apiConnect = async () => {
        const connect = await fetch(apiUrl);
        const response = await connect.json();
        const apiMessage = setMessage(response.success);
        return apiMessage
    }

    useEffect(() => {
        apiConnect();
    }, [apiUrl])

    return {
        apiConnect,
        message
    }
}

export default useLogin