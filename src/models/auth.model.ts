export interface AuthResponse {
    accessToken: string;
    user_id: string;
    user_role: string;
}

export interface AuthRequest {
    username: string;
    email: string;
    hash: string;
}


export interface State {
    status: { loggedIn: boolean };
    user: AuthResponse | null;
}