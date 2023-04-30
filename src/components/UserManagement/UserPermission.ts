import { UserRole } from './UserRole';

export interface IUserPermission {
    userId: string;
    role: UserRole;
}

export { UserRole };
