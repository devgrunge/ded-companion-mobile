export type ApiResponseType = {
    status: number;
    statusText: string;
    data: unknown;
    error: unknown;
    loading: boolean;
};