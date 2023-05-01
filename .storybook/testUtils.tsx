import { FC } from 'react';
import { RecoilRoot } from 'recoil';
import { Provider } from 'react-redux';
import rootReducer from '../src/states/reducers';
import { configureStore } from '@reduxjs/toolkit';

import { ICalendar, ITask } from '../src/components/Calendar';
import { IUser } from '../src/states/recoilState';

import { setUsers } from '../src/states/reducers/usersReducer';
import { setTasks } from '../src/states/reducers/tasksReducer';
import { setCalendars } from '../src/states/reducers/calendarsReducer';

import {
    tasks as tasksMocked,
    users as usersMocked,
    calendars as calendarsMocked,
} from '../src/services/apiMockData';


/**
 * How to test with decorators https://storybook.js.org/tutorials/intro-to-storybook/react/en/data/
 * 
 * Component Story Format (CSF)  https://storybook.js.org/docs/react/api/csf
 */


/**
 * initial state , f ex with users, calendars, tasks.
 * @property {any} initialState f ex with users, calendars, tasks; normally the store with mock data is fine
 * @property {any} children the component(s) to be rendered
 */
interface MockStoreProps {
    initialState?: any;
    children: any;
    fillWithAllDefaultMockData?: boolean;
    mockedDataToAddInStore?: {
        users?: Array<IUser>;
        tasks?: Array<ITask>;
        calendars?: Array<ICalendar>;
    };
}
/**
 * wraps the component(s) to test with the RecoilRoot and the Provider
 * 
 * if no initialState is provided you should (unless you want an empty state)
 * - add the prop @see fillWithAllDefaultMockData (from @see apiMockData
 * - or add mocked data in mockedDataToAddInStore.users etc. 
 * 
 * if the prop fillWithAllDefaultMockData is set, the mocked data gets added to the store
 *  (and overwrites the entities in initialState if provided)
 * 
 * if any data is provided in mockedDataToAddInStore, 
 * it will overwrite the mock data for entities that are provided
 */
export const MockedReduxStoreWithRecoilRoot: FC<MockStoreProps> = ({
    initialState,
    children,
    mockedDataToAddInStore,    
    fillWithAllDefaultMockData,
}) => {
    const storeToUse = configureStore({
              reducer: rootReducer,
              preloadedState: initialState, //is set or undefined
          });
    
    if (fillWithAllDefaultMockData) {
        storeToUse.dispatch(setUsers(usersMocked));
        storeToUse.dispatch(setTasks(tasksMocked));
        storeToUse.dispatch(setCalendars(calendarsMocked));
    }

    if (mockedDataToAddInStore?.users) {
        //initialize the store with the mocked users
        storeToUse.dispatch(setUsers(mockedDataToAddInStore.users));
    }

    if (mockedDataToAddInStore?.tasks) {
        //initialize the store with the mocked tasks
        storeToUse.dispatch(setTasks(mockedDataToAddInStore.tasks));
    }

    if (mockedDataToAddInStore?.calendars) {
        //initialize the store with the mocked calendars
        storeToUse.dispatch(setCalendars(mockedDataToAddInStore.calendars));
    }

    return (
        <RecoilRoot>
            <Provider store={storeToUse}>{children}</Provider>
        </RecoilRoot>
    );
};
