class AppError{
    public readonly message: string;
    public readonly statusCode: number;

    constructor(mensage: string, statusCode:number = 400) {
        this.message = mensage;
        this.statusCode = statusCode;
    }
}

export default AppError;
