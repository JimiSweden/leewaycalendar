import { UserRole } from "../components/UserManagement/UserPermission";
import { IUser, ITask, ICalendar, TaskClass, CalendarClass } from "../components/types";

const Anna: IUser = {
  id: "b1780d23-8ad4-4b4f-9a7d-8b8f0c54fd81",
  name: "Anna",
  lastName: "Magnusson",
};

const Bjorn: IUser = {
  id: "d7e960f1-c67d-41f3-81a7-7c0078e3e3f9",
  name: "Bjorn",
  lastName: "Gustavsson",
};

const Carl: IUser = {
  id: "c191bd23-8f68-4c4e-9a9d-6f0f6c53ed61",
  name: "Carl",
  lastName: "Cronvall",
};

const David: IUser = {
  id: "e9d0c3f3-c95d-41e3-89a7-7d0078f3e3f9",
  name: "David",
  lastName: "von Matern",
};

const Elsa: IUser = {
  id: "f2d0e3f3-c96d-41d3-89b7-7d1078f3e3f9",
  name: "Elsa",
  lastName: "Beskow",
};

const Erik: IUser = {
  id: 'f1da63c7-3396-4d80-8fd4-f4f86b07d6a1',
  name: 'Erik',
  lastName: 'Björkman',
};

const Karin: IUser = {
  id: 'e816f82d-1d2f-4e0c-abb0-099c447f298d',
  name: 'Karin',
  lastName: 'Björkman',
};

const Oskar: IUser = {
  id: 'b08f2af9-0b04-47ac-a24a-14e771ee1a28',
  name: 'Oskar',
  lastName: 'Nordström',
};

const Sofia: IUser = {
  id: '9ac84d42-0173-4c68-a7bb-ff71e3a3dccb',
  name: 'Sofia',
  lastName: 'Lauren',
};

export const users: IUser[] = [
  Anna,
  Bjorn,
  Carl,
  David,
  Elsa,
  Oskar, Sofia, Erik, Karin
];

export const tasks: ITask[] = [
  {    
    id: "c1d0c3f3-c95d-41e3-89a7-7d0078f3e3f3",
    title: "Task 1",
    description: "Description for Task 1",
    startTime: new Date("2023-05-01T09:00:00").toISOString(),
    endTime: new Date("2023-05-01T10:00:00").toISOString(),
    ownerId: Anna.id,
    permissions: [
      { userId: Anna.id, userName: Anna.name, role: UserRole.ADMINISTRATOR },
      { userId: Bjorn.id, userName: Bjorn.name, role: UserRole.CONTRIBUTOR },
      { userId: Carl.id, userName: Carl.name, role: UserRole.CONTRIBUTOR }
    ],
    isTask: true
  },
  {
    id: "c2d0e3f3-c96d-41d3-89b7-7d1078f3e3f4",
    title: "Task 2",
    description: "Description for Task 2",
    startTime: new Date("2023-05-01T14:00:00").toISOString(),
    endTime: new Date("2023-05-01T15:00:00").toISOString(),
    ownerId: Bjorn.id,      
    permissions: [
      { userId: Anna.id, userName:Anna.name, role: UserRole.CONTRIBUTOR },
      { userId: Bjorn.id, userName:Bjorn.name, role: UserRole.ADMINISTRATOR },
      { userId: David.id, userName:David.name, role: UserRole.CONTRIBUTOR }
    ],
    isTask: true
  },
  {
    id: "c3d0c3f3-c95d-41e3-89a7-7d0078f3e3f5",
    title: "Task 3",
    description: "Description for Task 3",
    startTime: new Date("2023-05-02T10:00:00").toISOString(),
    endTime: new Date("2023-05-02T11:00:00").toISOString(),
    ownerId: Carl.id,      
    permissions: [
      { userId: Carl.id,userName:Carl.name, role: UserRole.ADMINISTRATOR },
      { userId: Elsa.id, userName:Elsa.name,role: UserRole.VIEWER },
      { userId: David.id, userName:David.name, role: UserRole.CONTRIBUTOR }
    ],
    isTask: true
  },
  {
    id: "c4d0e3f3-c96d-41d3-89b7-7d1078f3e3f6",
    title: "Task 4",
    description: "Description for Task 4",
    startTime: new Date("2023-05-02T15:00:00").toISOString(),
    endTime: new Date("2023-05-02T16:00:00").toISOString(),
    ownerId: David.id,
  //   participants: [Anna.id, Carl.id],
      permissions: [
      { userId: Carl.id,userName:Carl.name, role: UserRole.ADMINISTRATOR },
      { userId: Elsa.id, userName:Elsa.name,role: UserRole.VIEWER },
      { userId: Anna.id, userName:Anna.name, role: UserRole.VIEWER },
      { userId: David.id,userName:David.name, role: UserRole.ADMINISTRATOR }
    ],
    isTask: true
  },
  {
    id: "c5d0c3f3-c95d-41e3-89a7-7d0078f3e3f7",
    title: "Task 5",
    description: "Description for Task 5",
    startTime: new Date("2023-05-03T09:00:00").toISOString(),
    endTime: new Date("2023-05-03T10:00:00").toISOString(),
    ownerId: Elsa.id,
    //participants: [Bjorn.id, Carl.id, David.id],
    permissions: [
      { userId: Carl.id, userName:Carl.name, role: UserRole.CONTRIBUTOR },
      { userId: Elsa.id, userName:Elsa.name,role: UserRole.ADMINISTRATOR },
      { userId: David.id,userName:David.name, role: UserRole.CONTRIBUTOR },
      { userId: Bjorn.id,userName:Bjorn.name, role: UserRole.CONTRIBUTOR }
    ],
    isTask: true
  },
  {
    id: "c6d0e3f3-c96d-41d3-89b7-7d1078f3e3f8",
    title: "Task 6",
    description: "Description for Task 6",
    startTime: new Date("2023-05-03T14:00:00").toISOString(),
    endTime: new Date("2023-05-03T15:00:00").toISOString(),
    ownerId: Anna.id,
      //   participants: [Bjorn.id, David.id],
      permissions: [
      { userId: Anna.id, userName:Anna.name, role: UserRole.ADMINISTRATOR },
      { userId: Elsa.id, userName:Elsa.name,role: UserRole.VIEWER },
      { userId: David.id, userName:David.name, role: UserRole.CONTRIBUTOR }
    ],
    isTask: true
  },
  {
      id: "c7d0c3f3-c95d-41e3-89a7-7d0078f3e3f9",
      title: "Task 7",
      description: "Description for Task 7",
      startTime: new Date("2023-05-04T10:00:00").toISOString(),
      endTime: new Date("2023-05-04T11:00:00").toISOString(),
      ownerId: Carl.id,
      // participants: [Anna.id, Bjorn.id, Elsa.id],
      permissions: [
          { userId: Carl.id,userName:Carl.name, role: UserRole.ADMINISTRATOR },
          { userId: Elsa.id, userName:Elsa.name, role: UserRole.VIEWER },
          { userId: David.id, userName:David.name,role: UserRole.CONTRIBUTOR }
        ],
    isTask: true
    },
    {
      id: "c8d0e3f3-c96d-41d3-89b7-7d1078f3e3fa",
      title: "Task 8",
      description: "Description for Task 8",
      startTime: new Date("2023-05-04T14:00:00").toISOString(),
      endTime: new Date("2023-05-04T15:00:00").toISOString(),
      ownerId: David.id,
      // participants: [Anna.id, Carl.id, Elsa.id],
      permissions: [
          { userId: Carl.id, userName:Carl.name,role: UserRole.VIEWER },
          { userId: Elsa.id, userName:Elsa.name, role: UserRole.VIEWER },
          { userId: David.id,userName:David.name, role: UserRole.ADMINISTRATOR }
        ],
    isTask: true
    },
    {
      id: "c9d0c3f3-c95d-41e3-89a7-7d0078f3e3fb",
      title: "Task 9",
      description: "Description for Task 9",
      startTime: new Date("2023-05-05T09:00:00").toISOString(),
      endTime: new Date("2023-05-05T10:00:00").toISOString(),
      ownerId: Elsa.id,
      // participants: [Bjorn.id, David.id],
      permissions: [
          { userId: Carl.id, userName:Carl.name, role: UserRole.VIEWER },
          { userId: Elsa.id, userName:Elsa.name,role: UserRole.ADMINISTRATOR },
          { userId: David.id, userName:David.name,role: UserRole.CONTRIBUTOR }
        ],
    isTask: true
    },
    {
      id: "c10d0e3f3-c96d-41d3-89b7-7d1078f3e3fc",
      title: "Task 10",
      description: "Description for Task 10",
      startTime: new Date("2023-05-05T15:00:00").toISOString(),
      endTime: new Date("2023-05-05T16:00:00").toISOString(),
      ownerId: Anna.id,
      // participants: [Carl.id, Elsa.id],
      permissions: [
          { userId: Anna.id, userName:Anna.name, role: UserRole.ADMINISTRATOR },
          { userId: Elsa.id, userName:Elsa.name,role: UserRole.CONTRIBUTOR },
          { userId: David.id, userName:David.name,role: UserRole.CONTRIBUTOR }
        ],
    isTask: true
    },
  ];


export const calendars: ICalendar[] = [
  {
    id: 'a9d0c3f3-c95d-41e3-89a7-7d0078f3e3f1',
    name: 'Family Calendar',
    ownerId: Anna.id,
    permissions: [
      { userId: Anna.id, userName: Anna.name, role: UserRole.ADMINISTRATOR },
      { userId: Erik.id, userName: Erik.name, role: UserRole.CONTRIBUTOR },
      { userId: Karin.id, userName: Karin.name, role: UserRole.VIEWER },
    ],
    tasks: [],
    isCalendar: true
  },
  {
    id: 'b2d0e3f3-c96d-41d3-89b7-7d1078f3e3f2',
    name: 'Work Calendar',
    ownerId: Erik.id,
    permissions: [
      { userId: Erik.id, userName: Erik.name, role: UserRole.ADMINISTRATOR },
      { userId: Oskar.id, userName: Oskar.name, role: UserRole.CONTRIBUTOR },
      { userId: Sofia.id, userName: Sofia.name, role: UserRole.VIEWER },
    ],
    tasks: [],
    isCalendar: true
  },
  {
    id: 'c2d0e3f3-c96d-41d3-89b7-7d1078f3e3f3',
    name: 'Team A Calendar',
    ownerId: Anna.id,
    permissions: [
      { userId: Anna.id, userName: Anna.name, role: UserRole.ADMINISTRATOR },
      { userId: Erik.id, userName: Erik.name, role: UserRole.CONTRIBUTOR },
      { userId: Karin.id, userName: Karin.name, role: UserRole.VIEWER },
      { userId: Oskar.id, userName: Oskar.name, role: UserRole.CONTRIBUTOR },
    ],
    tasks: [],
    isCalendar: true
  },
  {
    id: 'd2d0e3f3-c96d-41d3-89b7-7d1078f3e3f4',
    name: 'Team B Calendar',
    ownerId: Sofia.id,
    permissions: [
      { userId: Sofia.id, userName: Sofia.name, role: UserRole.ADMINISTRATOR },
      { userId: Karin.id, userName: Karin.name, role: UserRole.CONTRIBUTOR },
      { userId: Oskar.id, userName: Oskar.name, role: UserRole.VIEWER },
    ],
    tasks: [],
    isCalendar: true
  },
  {
    id: 'e2d0e3f3-c96d-41d3-89b7-7d1078f3e3f5',
    name: "Anna's Private Calendar",
    ownerId: Anna.id,
    permissions: [
      { userId: Anna.id, userName: Anna.name, role: UserRole.ADMINISTRATOR },
    ],
    tasks: [],
    isCalendar: true
  },
  {
    id: 'f2d0e3f3-c96d-41d3-89b7-7d1078f3e3f6',
    name: "Eriks Private Calendar",
    ownerId: Erik.id,
    permissions: [
      { userId: Erik.id, userName: Erik.name, role: UserRole.ADMINISTRATOR },
    ],
    tasks: [],
    isCalendar: true
  },
];


/** 
 * Note: creating from Classes is not working /recommended when using the data in redux store
 *  since the data is not serializable
 * 
 * */

// export const tasks: ITask[] = [
//   new TaskClass(
//     "c1d0c3f3-c95d-41e3-89a7-7d0078f3e3f3",
//     "Task 1",
//     "Description for Task 1",
//     new Date("2023-05-01T09:00:00").toISOString(),
//     new Date("2023-05-01T10:00:00").toISOString(),
//     Anna.id,
//     [
//       { userId: Anna.id, userName: Anna.name, role: UserRole.ADMINISTRATOR },
//       { userId: Bjorn.id, userName: Bjorn.name, role: UserRole.CONTRIBUTOR },
//       { userId: Carl.id, userName: Carl.name, role: UserRole.CONTRIBUTOR }
//     ]
//   ),
//   new TaskClass(
//     "c2d0e3f3-c96d-41d3-89b7-7d1078f3e3f4",
//     "Task 2",
//     "Description for Task 2",
//     new Date("2023-05-01T14:00:00").toISOString(),
//     new Date("2023-05-01T15:00:00").toISOString(),
//     Bjorn.id,
//     [
//       { userId: Anna.id, userName: Anna.name, role: UserRole.CONTRIBUTOR },
//       { userId: Bjorn.id, userName: Bjorn.name, role: UserRole.ADMINISTRATOR },
//       { userId: David.id, userName: David.name, role: UserRole.CONTRIBUTOR }
//     ]
//   ),
//   new TaskClass(
//     "c3d0c3f3-c95d-41e3-89a7-7d0078f3e3f5",
//     "Task 3",
//     "Description for Task 3",
//     new Date("2023-05-02T10:00:00").toISOString(),
//     new Date("2023-05-02T11:00:00").toISOString(),
//     Carl.id,
//     [
//       { userId: Carl.id, userName: Carl.name, role: UserRole.ADMINISTRATOR },
//       { userId: Elsa.id, userName: Elsa.name, role: UserRole.VIEWER },
//       { userId: David.id, userName: David.name, role: UserRole.CONTRIBUTOR }
//     ]
//   ),
//   new TaskClass(
//     "c4d0e3f3-c96d-41d3-89b7-7d1078f3e3f6",
//     "Task 4",
//     "Description for Task 4",
//     new Date("2023-05-02T15:00:00").toISOString(),
//     new Date("2023-05-02T16:00:00").toISOString(),
//     David.id,
//     [
//       { userId: Carl.id, userName: Carl.name, role: UserRole.ADMINISTRATOR },
//       { userId: Elsa.id, userName: Elsa.name, role: UserRole.VIEWER },
//       { userId: Anna.id, userName: Anna.name, role: UserRole.VIEWER },
//       { userId: David.id, userName: David.name, role: UserRole.ADMINISTRATOR }
//     ]
//   ),
//   new TaskClass(
//     "c5d0c3f3-c95d-41e3-89a7-7d0078f3e3f7",
//     "Task 5",
//     "Description for Task 5",
//     new Date("2023-05-03T09:00:00").toISOString(),
//     new Date("2023-05-03T10:00:00").toISOString(),
//     Elsa.id,
//     [
//       { userId: Carl.id, userName: Carl.name, role: UserRole.CONTRIBUTOR },
//       { userId: Elsa.id, userName: Elsa.name, role: UserRole.ADMINISTRATOR },
//       { userId: David.id, userName: David.name, role: UserRole.CONTRIBUTOR },
//       { userId: Bjorn.id, userName: Bjorn.name, role: UserRole.CONTRIBUTOR }
//     ]
//   ),
//   new TaskClass(
//     "c6d0e3f3-c96d-41d3-89b7-7d1078f3e3f8",
//     "Task 6",
//     "Description for Task 6",
//     new Date("2023-05-03T14:00:00").toISOString(),
//     new Date("2023-05-03T15:00:00").toISOString(),
//     Anna.id,
//     [
//       { userId: Anna.id, userName: Anna.name, role: UserRole.ADMINISTRATOR },
//       { userId: Elsa.id, userName: Elsa.name, role: UserRole.VIEWER },
//       { userId: David.id, userName: David.name, role: UserRole.CONTRIBUTOR }
//     ]
//   ),
//   new TaskClass(
//     "c7d0c3f3-c95d-41e3-89a7-7d0078f3e3f9",
//     "Task 7",
//     "Description for Task 7",
//     new Date("2023-05-04T10:00:00").toISOString(),
//     new Date("2023-05-04T11:00:00").toISOString(),
//     Carl.id,
//     [
//       { userId: Carl.id, userName: Carl.name, role: UserRole.ADMINISTRATOR },
//       { userId: Elsa.id, userName: Elsa.name, role: UserRole.VIEWER },
//       { userId: David.id, userName: David.name, role: UserRole.CONTRIBUTOR }
//     ]
//   ),
//   new TaskClass(
//     "c8d0e3f3-c96d-41d3-89b7-7d1078f3e3fa",
//     "Task 8",
//     "Description for Task 8",
//     new Date("2023-05-04T14:00:00").toISOString(),
//     new Date("2023-05-04T15:00:00").toISOString(),
//     David.id,
//     [
//       { userId: Carl.id, userName: Carl.name, role: UserRole.VIEWER },
//       { userId: Elsa.id, userName: Elsa.name, role: UserRole.VIEWER },
//       { userId: David.id, userName: David.name, role: UserRole.ADMINISTRATOR }
//     ]
//   ),
//   new TaskClass(
//     "c9d0c3f3-c95d-41e3-89a7-7d0078f3e3fb",
//     "Task 9",
//     "Description for Task 9",
//     new Date("2023-05-05T09:00:00").toISOString(),
//     new Date("2023-05-05T10:00:00").toISOString(),
//     Elsa.id,
//     [
//       { userId: Carl.id, userName: Carl.name, role: UserRole.VIEWER },
//       { userId: Elsa.id, userName: Elsa.name, role: UserRole.ADMINISTRATOR },
//       { userId: David.id, userName: David.name, role: UserRole.CONTRIBUTOR }
//     ]
//   ),
//   new TaskClass(
//     "c10d0e3f3-c96d-41d3-89b7-7d1078f3e3fc",
//     "Task 10",
//     "Description for Task 10",
//     new Date("2023-05-05T15:00:00").toISOString(),
//     new Date("2023-05-05T16:00:00").toISOString(),
//     Anna.id,
//     [
//       { userId: Anna.id, userName: Anna.name, role: UserRole.ADMINISTRATOR },
//       { userId: Elsa.id, userName: Elsa.name, role: UserRole.CONTRIBUTOR },
//       { userId: David.id, userName: David.name, role: UserRole.CONTRIBUTOR }
//     ]
//   )
// ];

// export const calendars: ICalendar[] = [
//   new CalendarClass(
//     'a9d0c3f3-c95d-41e3-89a7-7d0078f3e3f1',
//     'Family Calendar',
//     [],
//     Anna.id,
//     [
//       { userId: Anna.id, userName: Anna.name, role: UserRole.ADMINISTRATOR },
//       { userId: Erik.id, userName: Erik.name, role: UserRole.CONTRIBUTOR },
//       { userId: Karin.id, userName: Karin.name, role: UserRole.VIEWER },
//     ],
//   ),
//   new CalendarClass(
//     'b2d0e3f3-c96d-41d3-89b7-7d1078f3e3f2',
//     'Work Calendar',
//     [],
//     Erik.id,
//     [
//       { userId: Erik.id, userName: Erik.name, role: UserRole.ADMINISTRATOR },
//       { userId: Oskar.id, userName: Oskar.name, role: UserRole.CONTRIBUTOR },
//       { userId: Sofia.id, userName: Sofia.name, role: UserRole.VIEWER },
//     ],
//   ),
//   new CalendarClass(
//     'c2d0e3f3-c96d-41d3-89b7-7d1078f3e3f3',
//     'Team A Calendar',
//     [],
//     Anna.id,
//     [
//       { userId: Anna.id, userName: Anna.name, role: UserRole.ADMINISTRATOR },
//       { userId: Erik.id, userName: Erik.name, role: UserRole.CONTRIBUTOR },
//       { userId: Karin.id, userName: Karin.name, role: UserRole.VIEWER },
//       { userId: Oskar.id, userName: Oskar.name, role: UserRole.CONTRIBUTOR },
//     ],
//   ),
//   new CalendarClass(
//     'd2d0e3f3-c96d-41d3-89b7-7d1078f3e3f4',
//     'Team B Calendar',
//     [],
//     Sofia.id,
//     [
//       { userId: Sofia.id, userName: Sofia.name, role: UserRole.ADMINISTRATOR },
//       { userId: Karin.id, userName: Karin.name, role: UserRole.CONTRIBUTOR },
//       { userId: Oskar.id, userName: Oskar.name, role: UserRole.VIEWER },
//     ],
//   ),
//   new CalendarClass(
//     'e2d0e3f3-c96d-41d3-89b7-7d1078f3e3f5',
//     "Anna's Private Calendar",
//     [],
//     Anna.id,
//     [
//       { userId: Anna.id, userName: Anna.name, role: UserRole.ADMINISTRATOR },
//     ],
//   ),
//   new CalendarClass(
//     'f2d0e3f3-c96d-41d3-89b7-7d1078f3e3f6',
//     "Eriks Private Calendar",
//     [],
//     Erik.id,
//     [
//       { userId: Erik.id, userName: Erik.name, role: UserRole.ADMINISTRATOR },
//     ],
//   ),
// ];


// Add tasks to their respective calendars, 
// 5 to each for the first two calendars
calendars[0].tasks = tasks.slice(0, 5);
calendars[1].tasks = tasks.slice(5);
