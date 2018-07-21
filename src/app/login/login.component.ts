import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Error } from '../../objects/error';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AppDataService } from '../service/appData.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  model: any = {};
  isUserLoggedIn: boolean;
  strFirstname: string;

  constructor(private apiService: ApiService,
    private cookiService: CookieService,
    private router: Router,
    private dataService: AppDataService,
    private toastr: ToastrService) { }

  ngOnInit() {
    var session = this.cookiService.get('session') ? JSON.parse(this.cookiService.get('session')) : 0;
    if (session || session.isUserLoggedIn || Date.parse(session.expires) > Date.now()) {
      this.dataService.session = session;
      this.router.navigateByUrl(this.dataService.session.profile.toLowerCase());
    }
  }

  onUserLogin() {
    this.dataService.loading = true;
    if (this.dataService.localDebug) {
      let expires = new Date();
      expires.setHours(expires.getHours() + 2)
      this.dataService.session['userName'] = this.dataService.dummyUserLogin[this.model.username].userName;
      this.dataService.session['sid'] = this.dataService.dummyUserLogin[this.model.username].sid;
      this.dataService.session['isUserLoggedIn'] = true;
      this.dataService.session['profile'] = this.dataService.dummyUserLogin[this.model.username].profile;
      this.dataService.session['expires'] = expires;
      this.cookiService.set('session', JSON.stringify(this.dataService.session), expires);
      this.dataService.loading = false;
      this.router.navigateByUrl('timesheet');
    }
    else {
      this.apiService.post('login', this.model)
        .subscribe(
          (response: Error) => {
            if (response.success) {
              let expires = new Date();
              expires.setHours(expires.getHours() + 2)
              this.dataService.session['userName'] = response.record.user[0].firstname;
              this.dataService.session['sid'] = response.record.id;
              this.dataService.session['isUserLoggedIn'] = true;
              this.dataService.session['profile'] = response.record.user[0].profile;
              this.dataService.session['expires'] = expires;
              this.cookiService.set('session', JSON.stringify(this.dataService.session), expires);
              this.dataService.loading = false;
              this.router.navigateByUrl('timesheet');
            }
            else {
              this.dataService.loading = false;
              this.toastr.error(response.message, 'Error');
            }
          },
          (error) => {
            this.dataService.loading = false;
            this.toastr.error(error.message, 'Error');
          }
        );
    }
  }
}
