
// 
// import { CalendarPermissionManagementWrapper } from './PermissionManagement.styled';
// interface CalendarPermissionManagementProps {}
// const CalendarPermissionManagement: FC<CalendarPermissionManagementProps> = () => (
//  <CalendarPermissionManagementWrapper>
//     CalendarPermissionManagement Component
//  </CalendarPermissionManagementWrapper>
// );


//--

import React, { useState } from 'react';
import { IUser } from '../../../../states/recoilState';
import { share, updateUserPermissions } from '../../../UserManagement/UserManagement';
import { UserRole } from '../../../UserManagement/UserRole';
import { ICalendar } from '../../Calendar';
import { ITask } from '../../Task/Task';

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
  users: IUser[];
}

const PermissionManagement: React.FC<PermissionManagementProps> = ({ item, users }) => {
  const [sharedLink, setSharedLink] = useState('');

  const handleShare = () => {
    const link = share(item);
    setSharedLink(link);
  };

  const handleRoleChange = (userId: string, event: React.ChangeEvent<HTMLSelectElement>) => {
    const newRole = event.target.value as UserRole;
    updateUserPermissions(item, userId, newRole);
  };

  return (
    <Container>
      <ShareButton onClick={handleShare}>Share</ShareButton>
      {sharedLink && <SharedLink>Shared link: {sharedLink}</SharedLink>}
      <h2>User Permissions</h2>
      <Table>
        <thead>
          <tr>
            <TableHeader>User</TableHeader>
            <TableHeader>Role</TableHeader>
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


