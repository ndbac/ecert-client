export interface UsersState {
    userAuth: string | undefined;
    loading: boolean;
}

export interface IIamUser {
    id: string;
    token: {
        access_token: string;
        expires_in: Date;
    }
}

export interface IUserLogin {
    email: string;
    password: string;
}