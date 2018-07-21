import { Component, Input, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { ApiService } from './service/api.service';
import { Router } from '@angular/router';
import { AppDataService } from './service/appData.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private apiService: ApiService, private router: Router, public dataService: AppDataService) { 
  }
}
