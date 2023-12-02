import { useState, useEffect } from "react";
import Toast from "react-native-toast-message";

const useLogin = (apiUrl: string) => {
    const [message, setMessage] = useState<string>();

    const apiConnect = async () => {
        try {
            const connect = await fetch(apiUrl);
            const response = await connect.json();
            setMessage(response.success);
        } catch (error) {
            console.error("Error connecting to API:", error);
        }
    };

    const registerUser = async (userData : object) => {
        try {
            const registerRequest = await fetch(`${apiUrl}/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            const response = await registerRequest.json();
            setMessage(response.success);
            if (response.success) {
                Toast.show({
                    type: "success",
                    text1: "Request successful!",
                });
            }
        } catch (error) {
            console.error("Error registering user:", error);
        }
    };

    useEffect(() => {
        apiConnect();
    }, [apiUrl]);

    return {
        apiConnect,
        message,
        registerUser,
    };
};

export default useLogin;