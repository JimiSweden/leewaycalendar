import React, { FC } from 'react';
import { UserManagementWrapper } from './UserManagement.styled';
import { UserRole } from './UserPermission';
import { ICalendar, ITask } from '../Calendar';
import { IUser } from '../types';


interface UserManagementProps {}

const UserManagement: FC<UserManagementProps> = () => (
    <UserManagementWrapper>UserManagement Component</UserManagementWrapper>
);

export default UserManagement;


