import axios from 'axios';
import { useState, useEffect } from 'react';

export type TApiResponse = {
    status: number;
    statusText: string;
    data: any; // Change the type of data to any
    error: any; // Change the type of error to any
    loading: boolean;
};

export const useApiGet = (url: string): TApiResponse => {
    const [status, setStatus] = useState<number>(0);
    const [statusText, setStatusText] = useState<string>('');
    const [data, setData] = useState<any>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);

    const getAPIData = async () => {
        setLoading(true);
        try {
            const request = await axios.get(url);
            setData(request.data);
            setStatus(request.status);
            setStatusText(request.statusText);
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    };

    useEffect(() => {
        getAPIData();
    }, [url]);

    return { status, statusText, data, error, loading };
};

