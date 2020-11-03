export interface AuthResponse {
    accessToken: string;
    userId: string;
    userRole: string;
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