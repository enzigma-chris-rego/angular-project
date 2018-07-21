import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {
formControl = new FormControl();
 // options: string[] = ['Org1', 'Org2', 'Org3'];
 // filteredOptions: Observable<string[]>;
  constructor( public dialog:MatDialog) { }
  //for autocomplete
  // ngOnInit() {
  //  this.filteredOptions = this.formControl.valueChanges
  //     .pipe(
  //      startWith(''),
  //        map(value => this._filter(value))
  //     );
  // }
  ngOnInit() {
    }
  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.options.filter(option => option.toLowerCase().includes(filterValue));
  // }
  //pop-up method
  hide(){
    
    this.dialog.closeAll();
  }
auto;
 
}
