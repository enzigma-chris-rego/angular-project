import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { ApiService } from '../service/api.service';
import { Error } from '../../objects/error';
import { AppDataService } from '../service/appData.service';
import { ToastrService } from 'ngx-toastr';
import { EditUserComponent } from 'src/app/edit-user/edit-user.component';
import { AddUserComponent } from 'src/app/add-user/add-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource;
  displayedColumns = [];
  selected;
  columnNames: any;

  constructor(private dialog: MatDialog,
    private apiService: ApiService,
    private dataService: AppDataService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.columnNames = this.accountColumn;
    this.displayedColumns = this.accountColumn.map(x => x.id);
    this.dataSource = new MatTableDataSource(this.accountData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  accountColumn = [
    {
      id: "firstName",
      value: "FirstName"
    },
    {
      id: "userName",
      value: "Username"
    },
    {
      id: "projectName",
      value: "Project Name"
    },
    {
      id: "profile",
      value: "Profile"
    },
    {
      id: "active",
      value: "Active"
    },
    {
      id: "action",
      value: "Action"
    },
  ];
  accountData = [{ firstName: 'peter', userName: 'peter@enzigma.com', projectName: 'DNAfit', profile: 'Manger', active: 'true', Action: 'ads' },
  { firstName: 'peter', userName: 'peter@enzigma.com', projectName: 'DNAfit', profile: 'Manger', active: 'false', Action: 'ads' },
  { firstName: 'peter', userName: 'peter@enzigma.com', projectName: 'DNAfit', profile: 'Manger', active: 'true', Action: 'ads' },
  { firstName: 'peter', userName: 'peter@enzigma.com', projectName: 'DNAfit', profile: 'Manger', active: 'true', Action: 'ads' },
  { firstName: 'peter', userName: 'peter@enzigma.com', projectName: 'DNAfit', profile: 'Manger', active: 'true', Action: 'ads' }]

  addUser(){
    this.dialog.open(AddUserComponent, { panelClass: 'log-panel'});
  }

  onEditUser(strId: string){
    this.dialog.open(EditUserComponent, { panelClass: 'log-panel'});
  }

  onDelete(strId: string){

    //this.accountData.splice(strId)
  }
}