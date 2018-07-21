import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }
  hide(){
    
    this.dialog.closeAll();
  }

}
