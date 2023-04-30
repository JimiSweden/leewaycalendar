import { ICalendar } from "../components/Calendar/Calendar";
import { ITask } from "../components/Calendar/Task/Task";
import { UserRole } from "../components/UserManagement/UserPermission";
import {IUser } from "../states/recoilState";

const Anna: IUser = {
    id: "b1780d23-8ad4-4b4f-9a7d-8b8f0c54fd81",
    name: "Anna",
};

const Bjorn: IUser = {
    id: "d7e960f1-c67d-41f3-81a7-7c0078e3e3f9",
    name: "Bjorn",
};

const Carl: IUser = {
    id: "c191bd23-8f68-4c4e-9a9d-6f0f6c53ed61",
    name: "Carl",
};

const David: IUser = {
    id: "e9d0c3f3-c95d-41e3-89a7-7d0078f3e3f9",
    name: "David",
};

const Elsa: IUser = {
    id: "f2d0e3f3-c96d-41d3-89b7-7d1078f3e3f9",
    name: "Elsa",
};
  
  const Erik: IUser = {
    id: 'f1da63c7-3396-4d80-8fd4-f4f86b07d6a1',
    name: 'Erik',
  };
  
  const Karin: IUser = {
    id: 'e816f82d-1d2f-4e0c-abb0-099c447f298d',
    name: 'Karin',
  };
  
  const Oskar: IUser = {
    id: 'b08f2af9-0b04-47ac-a24a-14e771ee1a28',
    name: 'Oskar',
  };
  
  const Sofia: IUser = {
    id: '9ac84d42-0173-4c68-a7bb-ff71e3a3dccb',
    name: 'Sofia',
  };
  
export const users: IUser[] = [
    Anna,
    Bjorn,
    Carl,
    David,
    Elsa,
    Oskar,Sofia,Erik,Karin
];


export const tasks: ITask[] = [
    {
      id: "c1d0c3f3-c95d-41e3-89a7-7d0078f3e3f3",
      title: "Task 1",
      description: "Description for Task 1",
      startTime: new Date("2023-05-01T09:00:00"),
      endTime: new Date("2023-05-01T10:00:00"),
      owner: Anna.id,
      permissions: [
        { userId: Anna.id, role: UserRole.ADMINISTRATOR },
        { userId: Bjorn.id, role: UserRole.CONTRIBUTOR },
        { userId: Carl.id, role: UserRole.CONTRIBUTOR }
      ]      
    },
    {
      id: "c2d0e3f3-c96d-41d3-89b7-7d1078f3e3f4",
      title: "Task 2",
      description: "Description for Task 2",
      startTime: new Date("2023-05-01T14:00:00"),
      endTime: new Date("2023-05-01T15:00:00"),
      owner: Bjorn.id,      
      permissions: [
        { userId: Anna.id, role: UserRole.CONTRIBUTOR },
        { userId: Bjorn.id, role: UserRole.ADMINISTRATOR },
        { userId: David.id, role: UserRole.CONTRIBUTOR }
      ]    
    },
    {
      id: "c3d0c3f3-c95d-41e3-89a7-7d0078f3e3f5",
      title: "Task 3",
      description: "Description for Task 3",
      startTime: new Date("2023-05-02T10:00:00"),
      endTime: new Date("2023-05-02T11:00:00"),
      owner: Carl.id,      
      permissions: [
        { userId: Carl.id, role: UserRole.ADMINISTRATOR },
        { userId: Elsa.id, role: UserRole.VIEWER },
        { userId: David.id, role: UserRole.CONTRIBUTOR }
      ]    
    },
    {
      id: "c4d0e3f3-c96d-41d3-89b7-7d1078f3e3f6",
      title: "Task 4",
      description: "Description for Task 4",
      startTime: new Date("2023-05-02T15:00:00"),
      endTime: new Date("2023-05-02T16:00:00"),
      owner: David.id,
    //   participants: [Anna.id, Carl.id],
        permissions: [
        { userId: Carl.id, role: UserRole.ADMINISTRATOR },
        { userId: Elsa.id, role: UserRole.VIEWER },
        { userId: Anna.id, role: UserRole.VIEWER },
        { userId: David.id, role: UserRole.ADMINISTRATOR }
      ]    
    },
    {
      id: "c5d0c3f3-c95d-41e3-89a7-7d0078f3e3f7",
      title: "Task 5",
      description: "Description for Task 5",
      startTime: new Date("2023-05-03T09:00:00"),
      endTime: new Date("2023-05-03T10:00:00"),
      owner: Elsa.id,
      //participants: [Bjorn.id, Carl.id, David.id],
      permissions: [
        { userId: Carl.id, role: UserRole.CONTRIBUTOR },
        { userId: Elsa.id, role: UserRole.ADMINISTRATOR },
        { userId: David.id, role: UserRole.CONTRIBUTOR },
        { userId: Bjorn.id, role: UserRole.CONTRIBUTOR }
      ]    
    },
    {
      id: "c6d0e3f3-c96d-41d3-89b7-7d1078f3e3f8",
      title: "Task 6",
      description: "Description for Task 6",
      startTime: new Date("2023-05-03T14:00:00"),
      endTime: new Date("2023-05-03T15:00:00"),
      owner: Anna.id,
        //   participants: [Bjorn.id, David.id],
        permissions: [
        { userId: Anna.id, role: UserRole.ADMINISTRATOR },
        { userId: Elsa.id, role: UserRole.VIEWER },
        { userId: David.id, role: UserRole.CONTRIBUTOR }
      ]    
    },
    {
        id: "c7d0c3f3-c95d-41e3-89a7-7d0078f3e3f9",
        title: "Task 7",
        description: "Description for Task 7",
        startTime: new Date("2023-05-04T10:00:00"),
        endTime: new Date("2023-05-04T11:00:00"),
        owner: Carl.id,
        // participants: [Anna.id, Bjorn.id, Elsa.id],
        permissions: [
            { userId: Carl.id, role: UserRole.ADMINISTRATOR },
            { userId: Elsa.id, role: UserRole.VIEWER },
            { userId: David.id, role: UserRole.CONTRIBUTOR }
          ]    
      },
      {
        id: "c8d0e3f3-c96d-41d3-89b7-7d1078f3e3fa",
        title: "Task 8",
        description: "Description for Task 8",
        startTime: new Date("2023-05-04T14:00:00"),
        endTime: new Date("2023-05-04T15:00:00"),
        owner: David.id,
        // participants: [Anna.id, Carl.id, Elsa.id],
        permissions: [
            { userId: Carl.id, role: UserRole.VIEWER },
            { userId: Elsa.id, role: UserRole.VIEWER },
            { userId: David.id, role: UserRole.ADMINISTRATOR }
          ]    
      },
      {
        id: "c9d0c3f3-c95d-41e3-89a7-7d0078f3e3fb",
        title: "Task 9",
        description: "Description for Task 9",
        startTime: new Date("2023-05-05T09:00:00"),
        endTime: new Date("2023-05-05T10:00:00"),
        owner: Elsa.id,
        // participants: [Bjorn.id, David.id],
        permissions: [
            { userId: Carl.id, role: UserRole.VIEWER },
            { userId: Elsa.id, role: UserRole.ADMINISTRATOR },
            { userId: David.id, role: UserRole.CONTRIBUTOR }
          ]    
      },
      {
        id: "c10d0e3f3-c96d-41d3-89b7-7d1078f3e3fc",
        title: "Task 10",
        description: "Description for Task 10",
        startTime: new Date("2023-05-05T15:00:00"),
        endTime: new Date("2023-05-05T16:00:00"),
        owner: Anna.id,
        // participants: [Carl.id, Elsa.id],
        permissions: [
            { userId: Anna.id, role: UserRole.ADMINISTRATOR },
            { userId: Elsa.id, role: UserRole.CONTRIBUTOR },
            { userId: David.id, role: UserRole.CONTRIBUTOR }
          ]    
      },
    ];
    

export const calendars: ICalendar[] = [
    {
      id: 'a9d0c3f3-c95d-41e3-89a7-7d0078f3e3f1',
      name: 'Family Calendar',
      owner: Anna.id,
      permissions: [
        { userId: Anna.id, role: UserRole.ADMINISTRATOR },
        { userId: Erik.id, role: UserRole.CONTRIBUTOR },
        { userId: Karin.id, role: UserRole.VIEWER },
      ],
      tasks: []
    },
    {
      id: 'b2d0e3f3-c96d-41d3-89b7-7d1078f3e3f2',
      name: 'Work Calendar',
      owner: Erik.id,
      permissions: [
        { userId: Erik.id, role: UserRole.ADMINISTRATOR },
        { userId: Oskar.id, role: UserRole.CONTRIBUTOR },
        { userId: Sofia.id, role: UserRole.VIEWER },
    ],
    tasks: []
    },
    {
      id: 'c2d0e3f3-c96d-41d3-89b7-7d1078f3e3f3',
      name: 'Team A Calendar',
      owner: Anna.id,
      permissions: [
        { userId: Anna.id, role: UserRole.ADMINISTRATOR },
        { userId: Erik.id, role: UserRole.CONTRIBUTOR },
        { userId: Karin.id, role: UserRole.VIEWER },
        { userId: Oskar.id, role: UserRole.CONTRIBUTOR },
    ],
    tasks: []
    },
    {
      id: 'd2d0e3f3-c96d-41d3-89b7-7d1078f3e3f4',
      name: 'Team B Calendar',
      owner: Sofia.id,
      permissions: [
        { userId: Sofia.id, role: UserRole.ADMINISTRATOR },
        { userId: Karin.id, role: UserRole.CONTRIBUTOR },
        { userId: Oskar.id, role: UserRole.VIEWER },
    ],
    tasks: []
    },
    {
      id: 'e2d0e3f3-c96d-41d3-89b7-7d1078f3e3f5',
      name: "Anna's Private Calendar",
      owner: Anna.id,
      permissions: [
        { userId: Anna.id, role: UserRole.ADMINISTRATOR},
    ],
    tasks: []
    },
    {
      id: 'f2d0e3f3-c96d-41d3-89b7-7d1078f3e3f6',
      name: "Eriks Private Calendar",
      owner: Erik.id,
      permissions: [
        { userId: Erik.id, role: UserRole.ADMINISTRATOR },
    ],
    tasks: []
    },
];

// Add tasks to their respective calendars, 
// 5 to each for the first two calendars
calendars[0].tasks = tasks.slice(0, 5);
calendars[1].tasks = tasks.slice(5);
