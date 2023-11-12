import axios from 'axios';
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
            Toast.show({
                type: 'success',
                text1: 'Hello, ',
                text2: 'Welcome to your battle companion 👋'
            });
        } catch (error) {
            setError(error);
            Toast.show({
                type: 'error',
                text1: 'Hello, ',
                text2: 'Could not connect to server 👋'
            });
        }
        setLoading(false);
    };

    useEffect(() => {
        getAPIData();
    }, [url]);

    return { status, statusText, data, error, loading };
};

