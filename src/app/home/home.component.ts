import { Component, OnInit, ViewChild } from '@angular/core';
import { AppDataService } from '../service/appData.service';
import { CookieService } from 'ngx-cookie-service';
import { Error } from '../../objects/error';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { ToastrService } from 'ngx-toastr';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { OrganizationComponent } from 'src/app/organization/organization.component';
import { LogComponent } from 'src/app/log/log.component';
import { ProjectComponent } from 'src/app/project/project.component';
import { TaskComponent } from 'src/app/task/task.component';
import { AddUserComponent } from 'src/app/add-user/add-user.component';
export interface Project {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  @ViewChild('log') logModel:any;
  @ViewChild('task') taskModel:any;
  @ViewChild('project') projectModel:any;
  @ViewChild('organization') organizationModel:any;
  @ViewChild('addUser') addUserModel:any;
  selected : any;
  startDate = new Date(1990, 0, 1);
  range : any ;
  data: any;
  searchKeyword: string;
  columnNames: any;
  username: string;
  picker: any;
  org: string;
  Profile :string;
  object: string= 'timesheet';
  bIsAdmin: boolean;
  bIsManager: boolean;
  isProjectSelected: boolean = false;
  isTimesheetSelected: boolean = true;
  isUserSelected: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );   

  constructor(
    public dialog:MatDialog,
    private dataService: AppDataService,
    private cookiService: CookieService,
    private apiService: ApiService,
    private router: Router,
    private toastr: ToastrService,
    private breakpointObserver: BreakpointObserver) {
    var session = this.cookiService.get('session') ? JSON.parse(this.cookiService.get('session')) : 0;
    if (!session || !session.isUserLoggedIn || Date.parse(session.expires) < Date.now()) {
      this.router.navigateByUrl('login?returnurl=home');
    } else {
      this.dataService.session = session;
      //this.apiService.httpOptions.headers.append('Authorization', this.dataService.session.sid);
    }
    this.username = this.dataService.session.userName;
    this.bIsAdmin = this.dataService.session.profile == 'Admin' ? true : false;
    this.bIsManager = this.dataService.session.profile == 'Manager' ? true : false;
  }

  ngOnInit(){    
    this.data = this.accountData;
    this.columnNames = this.accountColumn;
  }

  accountColumn = [{id: "project", value: "Project"},
    { id: "task", value: "Task"},
    { id: "comments", value: "Comments" },
    { id: "date", value: "Date" },
    { id: "hours", value: "Hours" },
    { id: "action", value: "Action" }
  ]; 

  accountData = [{ id: 1, project: 'Development and reachers', task: 'Hydrogen', comments: 'Angular 6', date: '02/02/18', hours: 2, action: 'ads' },
  { id: 2, project: 'Research ', task: 'Hydrogen', comments: 'Angular 6', date: '02/02/18', hours: 2, action: 'ads' },
  { id: 3, project: ' Development', task: 'Hyd', comments: 'Angular 7', date: '02/02/18', hours: 2, action: 'aadads' },
  { id: 4, project: 'Coding', task: 'Hydrogen', comments: 'Angular 6', date: '02/02/18', hours: 2, action: 'ads' },
  { id: 5, project: 'Design', task: 'Hydrogen', comments: 'Angular 6', date: '02/02/18', hours: 2, action: 'ads' },
  { id: 6, project: 'Analysis', task: 'Hydrogen', comments: 'Angular 6', date: '02/02/18', hours: 2, action: 'ads' }
  ];  

  onLogout() {
    this.dataService.loading = true;
    this.apiService.logout({sessionId: this.dataService.session.sid})
      .subscribe((responce: Error) => {
        if (responce.success) {
          this.dataService.loading = false;
          this.router.navigateByUrl('login');
          this.cookiService.delete('session');
          this.toastr.success(responce.message, 'Logout');
        }
        else{
          this.dataService.loading = false;
          this.toastr.error(responce.message, 'Error');
        }
      }, (error) => {
          this.dataService.loading = false;
          this.toastr.error(error.message, 'Error');
      })
  }

  onObjectChange(strObject: string){
    this.object = strObject;    
    switch(this.object){
      case 'timesheet':
        this.isTimesheetSelected = true;
        this.isProjectSelected = false;
        this.isUserSelected = false;
        this.dataService.loading = true;
        this.refreshData();
        break;
      case 'project':
        this.isTimesheetSelected = false;
        this.isProjectSelected = true;
        this.isUserSelected = false;
        this.refreshData();
        break;
      case 'user':
        this.isTimesheetSelected = false;
        this.isProjectSelected = false;
        this.isUserSelected = true;
        this.refreshData();
        break;
    }
  }

  refreshData(){
    this.apiService.getAllRecords(this.object)
          .subscribe(
            (responce: Error) => {
              if(responce.success){
                this.dataService.loading = false;
                this.data = responce.record;
                this.columnNames = this.dataService.ProjectHeaders;
              }
              else{
                this.dataService.loading = false;
                this.toastr.error(responce.message);
              }
            },
            (error) =>{
              this.dataService.loading = false;
              this.toastr.error(error.error.message);
            }
          )
  }

  onEdit(id: string){   
      this.logModel.createLog();
  }

  onDelete(id: string){

  }

  ///for dialog
  openDialog(): void {
     
     this.dialog.open(OrganizationComponent,{panelClass: 'my-panel'});

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
      
    // });
  }
  createLog():void
  {
    this.dialog.open(LogComponent,{panelClass: 'log-panel'});
  }
  createProject():void
  {
    this.dialog.open(ProjectComponent,{panelClass: 'project-panel'});
  }
  createTask():void
  {
    this.dialog.open(TaskComponent,{panelClass: 'task-panel'});
  }
  addUser():void
  {
    this.dialog.open(AddUserComponent ,{panelClass: 'addUser-panel'});

  }

}
