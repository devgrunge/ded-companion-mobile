import { useState, useEffect } from 'react';
import Toast from 'react-native-toast-message';

export type TApiResponse = {
    status: number;
    statusText: string;
    data: unknown;
    error: unknown;
    loading: boolean;
};

export const useApiGet = (url: string): TApiResponse => {
    const [status, setStatus] = useState<number>(0);
    const [statusText, setStatusText] = useState<string>('');
    const [data, setData] = useState<unknown>();
    const [error, setError] = useState<unknown>();
    const [loading, setLoading] = useState<boolean>(false);

    const getAPIData = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            console.log("my response status", response.status);
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Network response was not 200. Details: ${errorText}`);
            }
        } catch (error) {
            setError(error);
            console.error("Server error: ",error);
        }
        setLoading(false);
    };

    useEffect(() => {
        getAPIData();
    }, [url]);

    return { status, statusText, data, error, loading };
};


