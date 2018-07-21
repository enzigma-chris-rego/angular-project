import { Component, Input, Output, ViewChild, SimpleChanges, OnInit, OnChanges, EventEmitter } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() data: any;
  @Input() dataColumn: any;
  @Input() searchKeyword: any;
  @Output() onEdit: EventEmitter<any> = new EventEmitter<any>();
  @Output() onDelete: EventEmitter<any> = new EventEmitter<any>();
  displayedColumns;
  columnNames;
  dataSource;

  ngOnInit() {
    this.columnNames = this.dataColumn;
    this.displayedColumns = this.dataColumn.map(x => x.id);
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnChanges(changes: SimpleChanges){
    for (let propName in changes) { 
      if(propName == 'data'){
        this.dataSource = new MatTableDataSource(changes[propName].currentValue);
      }
      if(propName == 'dataColumn'){
        this.columnNames = changes[propName].currentValue;
        this.displayedColumns = changes[propName].currentValue.map(x => x.id);
      } 
      if(propName == 'searchKeyword' && changes[propName].currentValue != undefined)
      {
        let filterValue = changes[propName].currentValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
      }     
    }
  }

  delete(strId: string){
    this.onDelete.emit(strId);
  }

  edit(strId: string){
    this.onEdit.emit(strId);
  }
  
}






