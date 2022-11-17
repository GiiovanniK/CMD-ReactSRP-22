export interface UsersRequest {
    email: string;
    password: string;
    confirmPassword: string;
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