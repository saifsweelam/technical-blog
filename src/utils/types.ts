export declare type AsyncReturnType<T extends (..._args: any) => Promise<any>> = Awaited<ReturnType<T>>;
export declare type PaginationOptions = { page: number, count: number };