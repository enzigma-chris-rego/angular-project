import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {
  MatDialogModule,
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatInputModule, 
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule} from '@angular/material';
import { CookieService } from 'ngx-cookie-service';
import { ToastrModule } from 'ngx-toastr';
import { LoadingModule } from 'ngx-loading';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';

import { LogComponent } from './log/log.component';
import { TableComponent } from './table/table.component';
import { LayoutModule } from '@angular/cdk/layout';
import {  MatListModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
import { EditUserComponent } from './edit-user/edit-user.component';
import { TaskComponent } from './task/task.component';
import { ProjectComponent } from './project/project.component';
import { OrganizationComponent } from './organization/organization.component';
import { AddUserComponent } from './add-user/add-user.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { ApiService } from './service/api.service';
import { AppDataService } from './service/appData.service';
import { AppComponent } from './app.component';
import { UserComponent } from 'src/app/user/user.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent,
    ForgotPasswordComponent,
    PageNotFoundComponent,
    LogComponent,
    TableComponent,
    EditUserComponent,
    TaskComponent,
    ProjectComponent,
    OrganizationComponent,
    AddUserComponent,
    TimesheetComponent,
    PageNotFoundComponent,
    UserComponent
  ],
  imports: [
    MatDialogModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    BrowserModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    LayoutModule,
    MatSelectModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatInputModule,
    HttpModule,
    MatSelectModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    LoadingModule,
    FlexLayoutModule
    ],
    entryComponents:[
      OrganizationComponent,
      LogComponent,
      EditUserComponent,
      ProjectComponent,
      TaskComponent,
      AddUserComponent,
      EditUserComponent
    ],
  providers: [ApiService, CookieService, AppDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
