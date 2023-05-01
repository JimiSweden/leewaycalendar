import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { share } from '../../UserManagement/UserManagement';
import { calendarsWherePermissionIsBeingManaged, tasksWherePermissionIsBeingManaged, usersState } from '../../../states/recoilState';

import { UserRole } from '../../UserManagement/UserRole';
import { ICalendar, ITask, isTask } from '../../Calendar';


import {
  Container,
  ShareButton,
  SharedLink,
  Table,
  TableHeader,
  TableCell,
  Select,
} from './PermissionManagement.styled';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../states/store';
import { updateCalendar } from '../../../states/reducers/calendarsReducer';
import { updateTask } from '../../../states/reducers/tasksReducer';


interface PermissionManagementProps {
  item: ICalendar | ITask;
//   users: IUser[];
}

// const PermissionManagement: React.FC<PermissionManagementProps> = ({ item, users }) => {
const PermissionManagement: React.FC<PermissionManagementProps> = ({ item }) => {
  
  // const [users] = useRecoilState(usersState);
  const users = useSelector((state: RootState) => state.users);
  
  //TODO: move to service
  const [managedTasks, setManagedTasks] = useRecoilState(tasksWherePermissionIsBeingManaged);
  const [managedCalendars, setManagedCalendars] = useRecoilState(calendarsWherePermissionIsBeingManaged);

  const displayName = item.hasOwnProperty("name") ? (item as ICalendar).name : (item as ITask).title;
   const [sharedLink, setSharedLink] = useState('');

  const handleShare = () => {
    const link = share(item);
    setSharedLink(link);
  };

  const handleRoleChange = (userId: string, event: React.ChangeEvent<HTMLSelectElement>) => {
    const newRole = event.target.value as UserRole;
        
    if(isTask(item)){
      const updatedTasks = updateTaskOrCalendarPermissions(item, userId, newRole, managedTasks) as ITask[];
      setManagedTasks(updatedTasks); // perhaps not needed, or can be replaced with reducer/ slice deriving from tasks
      handleUpdateTask(updatedTasks.filter((task) => task.id === item.id)[0])
    } else {
      const updatedCalendars = updateTaskOrCalendarPermissions(item, userId, newRole, managedCalendars) as ICalendar[];
      setManagedCalendars(updatedCalendars); // perhaps not needed, or can be replaced with reducer / slice deriving from calendars
      handleUpdateCalendar(updatedCalendars.filter((cal) => cal.id === item.id)[0])
    }
  };

/** Update user permissions for a calendar or task of the current user
 *  TODO: replace with permissionService and redux 
 * 
*/
const updateTaskOrCalendarPermissions = (itemToUpdate: ICalendar | ITask, userId: string, newRole: UserRole, managedItems: Array<ICalendar|ITask>) => 
{   
    //TODO ? : replace with the reduce updateTask.. perhaps call setManagedTasks(updatedTasks); after update of redux store
    const updatedItems = managedItems.map((item) => {
      if (item.id === itemToUpdate.id) {
        let existingPermission = item.permissions.find((perm) => perm.userId === userId);
  
        if (existingPermission) {
          const updatedPermissions = item.permissions.filter((perm) => perm.userId !== userId);
          updatedPermissions.push({ ...existingPermission, role: newRole });
  
          return {
            ...item,
            permissions: updatedPermissions,
          };
        }
      }
      return item;
    });
  
    return updatedItems; 
    
  };
  

  //const calendars = useSelector((state: RootState) => state.calendars);
  const dispatch = useDispatch<AppDispatch>();

  const handleUpdateTask = (updatedTask: ITask) => {
    dispatch(updateTask(updatedTask));
  };

  /**
   * 
   * const updatedCalendar = { ...originalCalendar, newProperty: newValue };
   */
  const handleUpdateCalendar = (updatedCalendar: ICalendar) => {
    dispatch(updateCalendar(updatedCalendar));
  };

  return (
    <Container>
      
      {sharedLink && <SharedLink>Shared link: {sharedLink}</SharedLink>}
      <h3>User Permissions | {displayName} </h3>
      {users.length === 0 && <h4>"no users loaded"</h4>}
      <Table>
        <thead>
          <tr>
            <TableHeader>User</TableHeader>
            <TableHeader>Role</TableHeader>
            <TableHeader>Actions</TableHeader>
          </tr>
        </thead>
        <tbody>
         

          {users.map((user) => (
            <tr key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>
                <Select
                  value={item.permissions.find((perm) => perm.userId === user.id)?.role || ''}
                  onChange={(event) => handleRoleChange(user.id, event)}
                >
                  <option value="">None</option>
                  <option value={UserRole.VIEWER}>Viewer</option>
                  <option value={UserRole.CONTRIBUTOR}>Contributor</option>
                  <option value={UserRole.ADMINISTRATOR}>Administrator</option>
                </Select>
              </TableCell>
              <TableCell>
              <ShareButton onClick={handleShare}>Share</ShareButton>
              </TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default PermissionManagement;