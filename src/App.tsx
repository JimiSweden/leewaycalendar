// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import PermissionManagement from './PermissionManagement';
// import Dashboard from './Dashboard';
import { ICalendar, ITask } from './components/Calendar';

import { fetchUsers as getUsers, fetchCalendars as getCalendars, fetchTasks as getTasks } from './services/api';
import Dashboard from './components/Dashboard/Dashboard';
import PermissionManagement from './components/Calendar/PermissionManagement/PermissionManagement';
import { usersState } from './states/recoilState';
import { useRecoilState } from 'recoil';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './states/store';
import { setUsers } from './states/reducers/usersReducer';
import { setCalendars } from './states/reducers/calendarsReducer';
import { setTasks } from './states/reducers/tasksReducer';

function App() {
  // const [users, setUsers] = useRecoilState(usersState);
  // // const [users, setUsers] = useState<IUser[]>([]);
  // const [calendars, setCalendars] = useState<ICalendar[]>([]);
  // const [tasks, setTasks] = useState<ITask[]>([]);

  const users = useSelector((state: RootState) => state.users);
  const calendars = useSelector((state: RootState) => state.calendars);
  const tasks = useSelector((state: RootState) => state.tasks);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // Fetch data from API
    // const fetchData = async () => {
      // const fetchedUsers = await getUsers();
      // const fetchedCalendars = await getCalendars();
      // const fetchedTasks = await getTasks();

      // setUsers(fetchedUsers);
      // setCalendars(fetchedCalendars);
      // setTasks(fetchedTasks);
    // };
    // fetchData();

       // Fetch data from an API or use mock data, then update the Redux state
      const fetchUsers = async () => {
        const fetchedUsers = await getUsers();
        dispatch(setUsers(fetchedUsers));
      };

      const fetchCalendars = async () => {
        const fetchedCalendars = await getCalendars();
        dispatch(setCalendars(fetchedCalendars));
      };

      const fetchTasks = async () => {
        const fetchedTasks = await getTasks();
        dispatch(setTasks(fetchedTasks));
      };


    fetchUsers();
    fetchCalendars();
    fetchTasks();
  }, [dispatch]);

  /**  Set the logged-in user - 
   * TODO: get from auth service
  */
  const loggedInUser = users[0];

  return (
      <Router>
        <Routes>      
          <Route path="/" element={loggedInUser && <Dashboard user={loggedInUser} calendars={calendars} tasks={tasks} />} />
          {/* TODO: permissions for all calendars */}
          <Route path="/permissions" element={
            loggedInUser 
            && <PermissionManagement item={calendars[0]} />} />
        </Routes>
      </Router>
  );
}

export default App;
