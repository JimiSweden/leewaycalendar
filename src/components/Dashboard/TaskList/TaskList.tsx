
// export default DashboardTaskList;
import React, { FC } from 'react';
import { ITask } from '../../Calendar';
import { TaskListWrapper, TaskListItem, Button, List, TasksAndPermissionManagementWrapper } from './TaskList.styled';
import { useRecoilState } from 'recoil';
import { tasksWherePermissionIsBeingManaged } from '../../../states/recoilState';
import PermissionManagement from '../../Calendar/PermissionManagement/PermissionManagement';


interface TaskListProps {  tasks: ITask[]; }

const TaskList: FC<TaskListProps> = ({ tasks}) => {

  const [managedTasks, setManagedTasks] = useRecoilState(tasksWherePermissionIsBeingManaged);

  const onInviteUsers = (taskId: string) => {
    const taskIndex = managedTasks.findIndex((task) => task.id === taskId);
    if (taskIndex === -1) {
      const selectedTask = tasks.find((task) => task.id === taskId);
      if (selectedTask) {
        setManagedTasks([...managedTasks, selectedTask]);
      }
    } else {
      setManagedTasks(managedTasks.filter((task) => task.id !== taskId));
    }
  };

  //TODO: implement, perhaps as props
   function onShowInCalendar(id: string): void {
      throw new Error('Function not implemented.');
   }

  return (
    <TaskListWrapper>
      <h2>Tasks</h2>
      <List>
        {tasks.map((task) => (
         <TasksAndPermissionManagementWrapper key={`taskItemWrapper-${task.id}`}>
          {/* <div> */}
          <TaskListItem key={task.id}>
            <h3>{task.title} - {task.description}</h3>
            <Button onClick={() => onShowInCalendar(task.id)}>Show in Calendar</Button>
            <Button onClick={() => onInviteUsers(task.id)}>Invite user(s)</Button>
            <ul>
              {task.permissions.map((permission) => (
                <li key={`${task.id}-${permission.userId}`}>
                  {permission.userId} - {permission.role} - {permission.userName}
                </li>
              ))}
            </ul>
          </TaskListItem>
          {/* </div> */}
          {managedTasks.includes(task) && <PermissionManagement item={task} />}
          </TasksAndPermissionManagementWrapper>
        ))}
      </List>
    </TaskListWrapper>
  );
};

export default TaskList;
