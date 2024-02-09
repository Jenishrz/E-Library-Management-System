import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddressService } from '../address.service';
import { AddressComponent } from '../address/address.component';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { BookService } from '../book.service';
import { BookComponent } from '../book/book.component';
import { DialogComponent } from '../dialog/dialog.component';
import { Dialog1Component } from '../dialog1/dialog1.component';
import { HomeComponent } from '../home/home.component';
import { LoginService } from '../login.service';
import { LoginComponent } from '../login/login.component';
import { RegisterService } from '../register.service';
import { UserService } from '../user.service';
import { UserComponent } from '../user/user.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogComponent, AppComponent,
        RegisterComponent,
        LoginComponent,
        UserComponent,
        AddressComponent,
        BookComponent,
        Dialog1Component,
        HomeComponent],

      imports: [BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule, MatToolbarModule, MatIconModule,
        MatSelectModule, MatButtonModule, MatDialogModule,
        MatFormFieldModule, MatInputModule, MatDatepickerModule,
        MatNativeDateModule, MatRadioModule, ReactiveFormsModule, FormsModule,
        HttpClientModule, MatTableModule, MatPaginatorModule, MatSortModule, MatCardModule, HttpClientTestingModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        BookService, AddressService, UserService, LoginService, RegisterService
      ]
    });
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it(`should have as title 'Register Form Component'`, () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Register Component');
  });


  it('Insert Register Component Test', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const Event = fixture.componentInstance;
    expect(Event).toBeTruthy();
  });


  it('Insert Register Form GUI count', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#registerform");
    const inputElements = formElement.querySelectorAll("input");
    expect(inputElements.length).toEqual(7);
  });

  it('Testing Register Form valid', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const Register = fixture.componentInstance;
    Register.registerform.controls?.['userName'].setValue("Raja");
    Register.registerform.controls?.['emailId'].setValue("raja@gmail.com");
    Register.registerform.controls?.['mobileNumber'].setValue("1234567890");
    Register.registerform.controls?.['userType'].setValue("user");
    Register.registerform.controls?.['address'].setValue("Tenkasi");
    Register.registerform.controls?.['password'].setValue("1212");
    expect(Register.registerform.valid).toBeTruthy();
  });


  it('Insert Register Form Button GUI count', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#registerform");
    const inputElements = formElement.querySelectorAll("mat-option");
    expect(inputElements.length).toEqual(0);
  });


  it('Register form valid by invalid data', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const app = fixture.componentInstance;
    app.registerform.controls?.['userName'].setValue("");
    app.registerform.controls?.['emailId'].setValue("");
    app.registerform.controls?.['mobileNumber'].setValue("");
    app.registerform.controls?.['userType'].setValue("");
    app.registerform.controls?.['address'].setValue("");
    app.registerform.controls?.['password'].setValue("");
    expect(app.registerform.valid).toBeFalsy();
  })
});
