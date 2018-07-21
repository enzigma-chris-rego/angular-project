import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { LogComponent } from 'src/app/log/log.component';
import { ApiService } from '../service/api.service';
import { Error } from '../../objects/error';
import { AppDataService } from '../service/appData.service';
import { ToastrService } from 'ngx-toastr';
import { EditUserComponent } from '../edit-user/edit-user.component';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns
  columnNames: any;
  dataSource: any;
  selected : any;
  startDate = new Date(1990, 0, 1);
  range : any ;
  searchKeyword: string;
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
  constructor(private dialog:MatDialog, 
    private apiService: ApiService, 
    private dataService: AppDataService,
    private toastr: ToastrService) { }

  ngOnInit(){  
    this.columnNames = this.accountColumn;
    this.displayedColumns = this.accountColumn.map(x => x.id);
    this.dataSource = new MatTableDataSource(this.accountData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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

  onTableSearch(strKeyword: any){
    if(strKeyword != undefined){
      strKeyword = strKeyword.trim();
      strKeyword = strKeyword.toLowerCase();
      this.dataSource.filter = strKeyword;
    }
  }

  createLog():void {
    this.dialog.open(LogComponent, { panelClass: 'log-panel'});
  }

  onEdit(strId: string){
    this.dialog.open(EditUserComponent, { panelClass: 'log-panel'});
  }

  onDelete(strId: string){
    this.dataService.loading = true;
    this.apiService.delete('timesheet', strId)
    .subscribe(
      (responce: Error) => {
        if(responce.success){
          this.dataService.loading = false;
          this.toastr.success(responce.message, 'Delete');
        }
        else{
          this.dataService.loading = false;
          this.toastr.error(responce.message, 'Delete');
        }
      },
      (error) => {
        this.dataService.loading = false;
        this.toastr.success(error.message, 'Delete');
      }
    )
  }
}
