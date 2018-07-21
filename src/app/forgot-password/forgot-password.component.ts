import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppDataService } from '../service/appData.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  model: any = {};
  constructor(private router: Router, private dataService: AppDataService) { }

  ngOnInit() {
  }

  onCancel(inputFormField){
    inputFormField.reset();
    this.router.navigateByUrl('login');
  }

}
