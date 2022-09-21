export interface IAppState<T> {
    data: T[];
    isLoading: boolean;
    error: string;
}
