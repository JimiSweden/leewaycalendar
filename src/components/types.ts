export * from './Calendar';


export interface IUser {
    id: string;
    name: string;
    lastName?: string; //todo implement
}


export interface IUserPermission {
    userId: string;
    userName: string;
    role: UserRole;
}

export enum UserRole {
    VIEWER = 'viewer',
    CONTRIBUTOR = 'contributor',
    ADMINISTRATOR = 'administrator',
    None = "None"
}
