import { MockedReduxStoreWithRecoilRoot } from "../../../../.storybook/testUtils";
/* eslint-disable */

import { RecoilRoot } from 'recoil';
import { Provider } from "react-redux";
import store from '../../../states/store';

import { 
  tasks as tasksMocked, 
  users as usersMocked,
} from '../../../states/apiMockData';

import TaskList from './TaskList';


/**
 * Read this on how to test with decorators
 * https://storybook.js.org/tutorials/intro-to-storybook/react/en/data/
 * 
 * Component Story Format (CSF)  https://storybook.js.org/docs/react/api/csf
 */
export const Default = () => (
  <Provider store={store}>
  <RecoilRoot> 
    <TaskList tasks={tasksMocked} />    
    </RecoilRoot> 
    </Provider>
);

// -- > 
export default {
  component: TaskList,
  title: 'DashboardTaskList',
  decorators: [(story:any) => <div style={{ padding: "3rem" }}>{story()}</div>],
  excludeStories: /.*MockedState$/,
};

const Template = () => <TaskList tasks={tasksMocked} />;

/** the default decorated story to display */
export const DefaultDecoratedWithUsersInStore: any = Template.bind({});
DefaultDecoratedWithUsersInStore.story = {
  name: 'Decorated with users in store',
};
/** add the decorator for MockedReduxStoreWithRecoilRoot, with mockedUsers in store*/
DefaultDecoratedWithUsersInStore.decorators = [
  (story:any) => <MockedReduxStoreWithRecoilRoot 
  children={story()}

  //initialState={{}}   
  mockedDataToAddInStore={{users: usersMocked}}
  //fillWithAllDefaultMockData={true}
   />
];

