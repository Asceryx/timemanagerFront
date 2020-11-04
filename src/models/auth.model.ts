export interface AuthResponse {
    id: number;
    role: number;
}

export interface AuthRequest {
    username: string;
    email: string;
    hash: string;
}


export interface AuthState {
    status: { loggedIn: boolean };
    userResponse: AuthResponse;
}