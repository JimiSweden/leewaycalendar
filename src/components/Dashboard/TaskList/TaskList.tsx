// import React, { FC } from 'react';
// import { DashboardTaskListWrapper } from './Dashboard/TaskList.styled';

// interface DashboardTaskListProps {}

// const DashboardTaskList: FC<DashboardTaskListProps> = () => (
//  <DashboardTaskListWrapper>
//     DashboardTaskList Component
//  </DashboardTaskListWrapper>
// );

// export default DashboardTaskList;
import React, { FC } from 'react';
import { ITask } from '../../Calendar';
import { TaskListWrapper, TaskListItem } from './TaskList.styled';

interface TaskListProps {
  tasks: ITask[];
}

const TaskList: FC<TaskListProps> = ({ tasks }) => {
  return (
    <TaskListWrapper>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <TaskListItem key={task.id}>
            {task.title} - {task.description}
          </TaskListItem>
        ))}
      </ul>
    </TaskListWrapper>
  );
};

export default TaskList;
