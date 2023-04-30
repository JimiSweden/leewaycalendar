import React, { FC } from 'react';
import { UserManagementWrapper } from './UserManagement.styled';
import { UserRole } from './UserPermission';
import { ICalendar, ITask } from '../Calendar';


interface UserManagementProps {}

const UserManagement: FC<UserManagementProps> = () => (
    <UserManagementWrapper>UserManagement Component</UserManagementWrapper>
);

export default UserManagement;
const BaseUrl = process.env.APP_BASE_URL;

/** share a calendar or task using a UUID */
export function share(item: ICalendar | ITask): string {
  return `${BaseUrl}/${item.id}`;
}

 /** Update user permissions for a calendar or task */
export function updateUserPermissions(
  item: ICalendar | ITask,
  userId: string,
  newRole: UserRole
): void {
  const existingPermission = item.permissions.find((perm) => perm.userId === userId);

  if (existingPermission) {
    existingPermission.role = newRole;
  } else {
    item.permissions.push({ userId, role: newRole });
  }
}

/** Remove user permissions for a calendar or task */
