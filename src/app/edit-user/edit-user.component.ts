import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private dialog: MatDialog,) { }

  ngOnInit() {
  }
auto;
  hide(){    
    this.dialog.closeAll();
  }

}
