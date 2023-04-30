/* eslint-disable */

import TaskList from './TaskList';

export default {
    title: 'DashboardTaskList',
};

const onShowInCalendar = (taskId: string) =>
    console.log('onShowInCalendar', taskId);
const onInviteUsers = (taskId: string) =>
    console.log('onShowInCalendar', taskId);

export const Default = () => (
    <TaskList tasks={[]} />
    // <TaskList
    //     tasks={[]}
    //     onShowInCalendar={onShowInCalendar}
    //     onInviteUsers={onInviteUsers}
    // />
);

Default.story = {
    name: 'default',
};
