/* eslint-disable */

import TaskList from './TaskList';

export default {
  title: "DashboardTaskList",
};

export const Default = () => <TaskList tasks={[]} />;

Default.story = {
  name: 'default',
};
