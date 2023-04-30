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
import PermissionManagement from './components/Calendar/PermissionManagement/Calendar/PermissionManagement';
import { IUser } from './states/recoilState';

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [calendars, setCalendars] = useState<ICalendar[]>([]);
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      const fetchedUsers = await getUsers();
      const fetchedCalendars = await getCalendars();
      const fetchedTasks = await getTasks();

      setUsers(fetchedUsers);
      setCalendars(fetchedCalendars);
      setTasks(fetchedTasks);
    };

    fetchData();
  }, []);

  // Set the logged-in user
  const loggedInUser = users[0];

  return (
      <Router>
        <Routes>      
          <Route path="/" element={loggedInUser && <Dashboard user={loggedInUser} calendars={calendars} tasks={tasks} />} />
          <Route path="/permissions" element={loggedInUser && <PermissionManagement item={calendars[0]} users={users} />} />
        </Routes>
      </Router>
  );
}

export default App;
