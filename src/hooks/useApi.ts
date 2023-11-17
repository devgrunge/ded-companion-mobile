import { useState, useEffect } from 'react';
import Toast from 'react-native-toast-message';
import { ApiResponseType } from './types/apiTypes';

export const useApiGet = (url: string): ApiResponseType => {
    const [status, setStatus] = useState<number>(0);
    const [statusText, setStatusText] = useState<string>('');
    const [data, setData] = useState<unknown>();
    const [error, setError] = useState<unknown>();
    const [loading, setLoading] = useState<boolean>(false);

    const getAPIData = async () => {
        setLoading(true);

        try {
            if (!url) {
                throw new Error("URL is undefined");
            }

            const response = await fetch(url, {
                headers: {
                    Accept: 'application/json',
                },
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Network response was not 200. Details: ${errorText}`);
            }

            const responseData = await response.json();
            setData(responseData);
        } catch (error) {
            setError(error);
            console.error("Server error:", error);
        }
    };
    useEffect(() => {
        getAPIData();
    }, [url]);

    return { status, statusText, data, error, loading };
};


