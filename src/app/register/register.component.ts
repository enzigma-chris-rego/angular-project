import { Component, ViewEncapsulation } from '@angular/core';
import { isDevMode } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Error } from '../../objects/error';
import { Router } from '@angular/router';
import { AppDataService } from '../service/appData.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register', 
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent {
  model: any = {};
  isInvalidPass: boolean;
  constructor(private apiService: ApiService, 
    private router: Router, 
    private dataService: AppDataService,
    private toastr: ToastrService) {
    this.isInvalidPass = false;
  }

  onCancel(inputFormField)
  {
    inputFormField.reset();
    this.router.navigateByUrl('login');
  }

  onRegister(){
    this.dataService.loading = true;
    if(this.model.password != this.model.confirmpassword)
      this.isInvalidPass = true;
    else{
      this.apiService.post('register', this.model)
      .subscribe(
        (response: Error) => {  
          if(response.success){
            this.router.navigateByUrl('login');
            this.dataService.loading = false;
            this.toastr.success(response.message);
          }
          else{
            this.dataService.loading = false;
            this.toastr.error(response.message);
          }          
        },
        (error) => {  
            this.dataService.loading = false;
            this.toastr.error(error.error.message);
        }
      );
    }
  }   
}
