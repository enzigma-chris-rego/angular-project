import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

  export class AppDataService {
    constructor(){}
    localDebug: boolean = false;
    session: any = {};
    loading = false;
    timesheetHeaders = [{id: "project", value: "Project"},
    { id: "task.name", value: "Task"},
    { id: "comments", value: "Comments" },
    { id: "date", value: "Date" },
    { id: "hours", value: "Hours" },
    { id: "action", value: "Action" }];
    
    ProjectHeaders = [{id: "name", value: "Project"},
    { id: "account.organization.name", value: "Organization"},
    { id: "user", value: "Reporting Manager" },
    { id: "task", value: "Task" },
    { id: "action", value: "Action" }];

    UserHeaders = [{id: "firstName", value: "First Name"},
    { id: "username", value: "Username"},
    { id: "project.name", value: "Project Name" },
    { id: "profile", value: "Profile" },
    { id: "isActive", value: "IsActive" },
    { id: "action", value: "Action" }];

    dummyUserLogin = { "testUser@gmail.com":{ sid: "testUser", userName: "TestUser", profile: "user"},
    "testAdmin@gmail.com": { sid: "testUser", userName: "TestAdmin", profile: "admin"},
    "testManager@gmail.com": { sid: "testUser", userName: "TestManager", profile: "manager"}
  };
  }  