export interface IIamUser {
    id: string;
    token: {
        access_token: string;
        expires_in: Date;
    }
}

export interface UsersState {
    userAuth: IIamUser;
    loading: boolean;
    serverErr: string | undefined;
}

export interface IUserLogin {
    email: string;
    password: string;
}