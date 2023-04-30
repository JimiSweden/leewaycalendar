
// export default DashboardTaskList;
import React, { FC } from 'react';
import { ITask } from '../../Calendar';
import { TaskListWrapper, TaskListItem, Button, List } from './TaskList.styled';
import { useRecoilState } from 'recoil';
import { tasksWherePermissionIsBeingManaged } from '../../../states/recoilState';


interface TaskListProps {
  tasks: ITask[];
  onShowInCalendar?: (taskId: string) => void;
  onInviteUsers?: (taskId: string) => void;
}

// const TaskList: FC<TaskListProps> = ({ tasks, onShowInCalendar, onInviteUsers }) => {
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
          <TaskListItem key={task.id}>
            {task.title} - {task.description}
            <Button onClick={() => onShowInCalendar(task.id)}>Show in Calendar</Button>
            <Button onClick={() => onInviteUsers(task.id)}>Invite user(s)</Button>
            <ul>
               {/* TODO: user name from UserPermission 
               - and perhaps a userPersmission component to reuse*/}

              {task.permissions.map((permission) => (
                <li key={`${task.id}-${permission.userId}`}>
                  {permission.userId} - {permission.role} - {permission.userName}
                </li>
              ))}
            </ul>
          </TaskListItem>
        ))}
      </List>
    </TaskListWrapper>
  );
};

export default TaskList;
