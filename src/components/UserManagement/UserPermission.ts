import { UserRole } from './UserRole';

export interface IUserPermission {
    userId: string;
    userName: string;
    role: UserRole;
}

export { UserRole };
