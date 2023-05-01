import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { UpdatePermissionCommand, share, updateTaskOrCalendarPermissions } from './permissionService';
import { 
  calendarsWherePermissionIsBeingManaged, 
  tasksWherePermissionIsBeingManaged 
} from '../../../states/recoilState';

import { UserRole } from "../../types";
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
import { IUser } from '../../types';


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

  const  handleTransferOwnership = () =>  {    
    throw new Error('Function not implemented.');
  }

  const handleRoleChange = (user: IUser, event: React.ChangeEvent<HTMLSelectElement>) => {
    const newRole = event.target.value as UserRole;
        
    if(isTask(item)){
      const updatedTasks = updateTaskOrCalendarPermissions( 
        managedTasks,
        new UpdatePermissionCommand(item, user, newRole)) as ITask[];
      setManagedTasks(updatedTasks); // perhaps not needed, or can be replaced with reducer/ slice deriving from tasks
      handleUpdateTask(updatedTasks.filter((task) => task.id === item.id)[0])
    } else {
      const updatedCalendars = updateTaskOrCalendarPermissions(
        managedCalendars,
        new UpdatePermissionCommand(item, user, newRole)
        ) as ICalendar[];
      setManagedCalendars(updatedCalendars); // perhaps not needed, or can be replaced with reducer / slice deriving from calendars
      handleUpdateCalendar(updatedCalendars.filter((cal) => cal.id === item.id)[0])
    }
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
                  disabled={user.id === item.ownerId}
                  value={item.permissions?.find((perm) => perm.userId === user.id)?.role || ''}
                  onChange={(event) => handleRoleChange(user, event)}
                >
                  <option value={UserRole.None}>None</option>
                  <option value={UserRole.VIEWER}>Viewer</option>
                  <option value={UserRole.CONTRIBUTOR}>Contributor</option>
                  <option value={UserRole.ADMINISTRATOR}>Administrator</option>
                </Select>
              </TableCell>
              <TableCell>
              <ShareButton onClick={handleShare}>Share</ShareButton>
              <ShareButton onClick={handleTransferOwnership}>Transfer</ShareButton>
              </TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default PermissionManagement;