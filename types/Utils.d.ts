type PromiseReturnType<T> = ReturnType<T> extends Promise<infer T> ? T : never
