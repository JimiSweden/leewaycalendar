import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { share } from '../../UserManagement/UserManagement';

import { tasksWherePermissionIsBeingManaged, usersState } from '../../../states/recoilState';

import { UserRole } from '../../UserManagement/UserRole';
import { ICalendar, ITask } from '../../Calendar';


import {
  Container,
  ShareButton,
  SharedLink,
  Table,
  TableHeader,
  TableCell,
  Select,
} from './PermissionManagement.styled';


interface PermissionManagementProps {
  item: ICalendar | ITask;
//   users: IUser[];
}

// const PermissionManagement: React.FC<PermissionManagementProps> = ({ item, users }) => {
const PermissionManagement: React.FC<PermissionManagementProps> = ({ item }) => {
  
  const [users] = useRecoilState(usersState);
  //TODO: move to service
  const [managedTasks, setManagedTasks] = useRecoilState(tasksWherePermissionIsBeingManaged);

  const displayName = item.hasOwnProperty("name") ? (item as ICalendar).name : (item as ITask).title;
   const [sharedLink, setSharedLink] = useState('');

  const handleShare = () => {
    const link = share(item);
    setSharedLink(link);
  };

  const handleRoleChange = (userId: string, event: React.ChangeEvent<HTMLSelectElement>) => {
    const newRole = event.target.value as UserRole;
    
    
    updateTaskPermissions(item.id, userId, newRole);
  };

/** Update user permissions for a calendar or task of the current user
 *  TODO: replace with permissionService and redux 
 * 
*/
const updateTaskPermissions = (taskId: string, userId: string, newRole: UserRole) => {
        
  //const itemI = item.hasOwnProperty("name") ? (item as ICalendar).name : (item as ITask).title;

    const updatedTasks = managedTasks.map((task) => {
      if (task.id === taskId) {
        let existingPermission = task.permissions.find((perm) => perm.userId === userId);
  
        if (existingPermission) {
          const updatedPermissions = task.permissions.filter((perm) => perm.userId !== userId);
          updatedPermissions.push({ userId, role: newRole });
  
          return {
            ...task,
            permissions: updatedPermissions,
          };
        }
      }
      return task;
    });
  
    setManagedTasks(updatedTasks);
  };

  return (
    <Container>
      
      {sharedLink && <SharedLink>Shared link: {sharedLink}</SharedLink>}
      <h3>User Permissions | {displayName} </h3>
      <Table>
        <thead>
          <tr>
            <TableHeader>User</TableHeader>
            <TableHeader>Role</TableHeader>
            <TableHeader>Actions</TableHeader>
          </tr>
        </thead>
        <tbody>
         {users.length === 0 && "no users loaded"}

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



// import React, { useState } from 'react';
// import { Calendar, Task } from './Calendar';
// import { User } from './User';
// import { UserRole } from './UserRole';
// import { share, updateUserPermissions } from './UserManagement';

// interface PermissionManagementProps {
//   item: Calendar | Task;
//   users: User[];
// }

// const PermissionManagement: React.FC<PermissionManagementProps> = ({ item, users }) => {
//   const [sharedLink, setSharedLink] = useState('');

//   const handleShare = () => {
//     const link = share(item);
//     setSharedLink(link);
//   };

//   const handleRoleChange = (userId: string, event: React.ChangeEvent<HTMLSelectElement>) => {
//     const newRole = event.target.value as UserRole;
//     updateUserPermissions(item, userId, newRole);
//   };

//   return (
//     <div>
//       <button onClick={handleShare}>Share</button>
//       {sharedLink && <div>Shared link: {sharedLink}</div>}
//       <h2>User Permissions</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>User</th>
//             <th>Role</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.id}>
//               <td>{user.name}</td>
//               <td>
//                 <select
//                   value={item.permissions.find((perm) => perm.userId === user.id)?.role || ''}
//                   onChange={(event) => handleRoleChange(user.id, event)}
//                 >
//                   <option value="">None</option>
//                   <option value={UserRole.VIEWER}>Viewer</option>
//                   <option value={UserRole.CONTRIBUTOR}>Contributor</option>
//                   <option value={UserRole.ADMINISTRATOR}>Administrator</option>
//                 </select>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default PermissionManagement;


