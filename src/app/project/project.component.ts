import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  
 constructor( public dialog:MatDialog) { }

  ngOnInit() {
  }
  hide(){
    
    this.dialog.closeAll();
  }




}
