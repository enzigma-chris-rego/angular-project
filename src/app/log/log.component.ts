import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { ApiService } from '../service/api.service';

@Component({
selector: 'app-log',
templateUrl: './log.component.html',
styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  model: any = {};
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  date = new FormControl(new Date());

  
  constructor(public dialog:MatDialog, private apiService: ApiService) { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  hide(){
    this.dialog.closeAll();
  }

  createLog(){
    this.apiService.create('timesheet', )
  }
}