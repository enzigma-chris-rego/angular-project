import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {



  constructor( public dialog:MatDialog) { }

  ngOnInit() {
  }
  hide(){
   
    this.dialog.closeAll();
  }

  
}
