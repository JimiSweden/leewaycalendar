
import { inherits } from "util";
import { ICalendar, ITask, IUser, UserRole } from "../../types";

const BaseUrl = process.env.REACT_APP_APP_BASE_URL;

/** share a calendar or task using a UUID */
export function share(item: ICalendar | ITask): string {
  return `${BaseUrl}/${item.id}`;
}

export interface IUpdatePermissionCommand{
    itemToUpdate: ICalendar | ITask;
    user: IUser;
    newRole: UserRole
}

export class UpdatePermissionCommand implements IUpdatePermissionCommand{
    itemToUpdate: ICalendar | ITask;
    user: IUser;
    newRole: UserRole;

    constructor(itemToUpdate: ICalendar | ITask, user: IUser, newRole: UserRole){
        this.itemToUpdate = itemToUpdate;
        this.user = user;
        this.newRole = newRole;
    }
}


/** Update user permissions for a calendar or task of the current user
 * 
 * Note: this function returns a new list, it does not mutate the original list
 * Nor does it update recoil state or redux store.
 *  @returns a list of updated calendars or tasks - that should be set in recoil state and/or redux store
 * TODO: ? pass only one managedItem instead of a list 
 * TODO: ensure only a person who has the role Administrator or is the owner can update permissions of items
 *  - using auth provider or a custom hook ? 
*/
export const updateTaskOrCalendarPermissions = (managedItems: Array<ICalendar|ITask>, updatePermissionCommand: IUpdatePermissionCommand ) => 
{   
    const updatedItems = managedItems.map((item) => {
      if (item.id === updatePermissionCommand.itemToUpdate.id) {
        let existingPermission = item.permissions
        ?.find((perm) => perm.userId === updatePermissionCommand.user.id);
  
        if (!existingPermission) {
        
          const updatedPermissions = item.permissions?.concat({ 
            userId: updatePermissionCommand.user.id, 
            userName: updatePermissionCommand.user.name, 
            role: updatePermissionCommand.newRole 
          });

          return {
            ...item,
            permissions: updatedPermissions,
          };
        }

        if (existingPermission) {
          const updatedPermissions = item.permissions
          .filter((perm) => perm.userId !== updatePermissionCommand.user.id);

          if(updatePermissionCommand.newRole !== UserRole.None) // remove permission if role is None
            updatedPermissions.push({ ...existingPermission, role: updatePermissionCommand.newRole });
  
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