export interface UsersRequest {
    _id: number;
    email: string;
    password: string;
    repeatPassword: string;
    firstName: string;
    lastName: string;
}

export interface UsersResponse {
    _id: number;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
}