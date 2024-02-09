import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComponent } from './dialog.component';
import { HttpClientModule } from '@angular/common/http';
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
import { Dialog1Component } from '../dialog1/dialog1.component';
import { HomeComponent } from '../home/home.component';
import { LoginService } from '../login.service';
import { LoginComponent } from '../login/login.component';
import { RegisterService } from '../register.service';
import { RegisterComponent } from '../register/register.component';
import { UserComponent } from '../user/user.component';
import { BookComponent } from '../book/book.component';
import { BookService } from '../book.service';
import { UserService } from '../user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogComponent,AppComponent,
        RegisterComponent,
        LoginComponent,
        UserComponent,
        AddressComponent,
        BookComponent,
        Dialog1Component,
      HomeComponent],
     
      imports:[BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule, MatToolbarModule, MatIconModule,
        MatSelectModule,MatButtonModule, MatDialogModule,
        MatFormFieldModule, MatInputModule, MatDatepickerModule,
        MatNativeDateModule, MatRadioModule, ReactiveFormsModule, FormsModule,
        HttpClientModule, MatTableModule, MatPaginatorModule, MatSortModule, MatCardModule, HttpClientTestingModule],
      providers:[
        { provide: MAT_DIALOG_DATA, useValue: {} },
          { provide: MatDialogRef, useValue: {} },
          BookService,AddressService,UserService,LoginService,RegisterService
      ]
    });
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });




  it(`should have as title 'DialogComponent'`, () => {
    const fixture = TestBed.createComponent(DialogComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('DialogComponent');
  });




  it('Insert Book Component Test', () => {
    const fixture = TestBed.createComponent(DialogComponent);
    const Book = fixture.componentInstance;
    expect(Book).toBeTruthy();
  });




  it('Insert Book Form GUI count', () => {
    const fixture = TestBed.createComponent(DialogComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#bookForm");
    const inputElements = formElement.querySelectorAll("input");
    expect(inputElements.length).toEqual(5);
  });


  it('Testing Insert Book Form valid', () => {
    const fixture = TestBed.createComponent(DialogComponent);
    const Book = fixture.componentInstance;
    Book.bookForm.controls?.['bookId'].setValue("204");
    Book.bookForm.controls?.['bookTitle'].setValue("Maths Intro");
    Book.bookForm.controls?.['authorName'].setValue("Mani");
    Book.bookForm.controls?.['edition'].setValue("1999");
    Book.bookForm.controls?.['bookType'].setValue("Maths");
    Book.bookForm.controls?.['bookDetails'].setValue("Mathematics");
   
    expect(Book.bookForm.valid).toBeTruthy();
  });




  it('Testing Update Book Form valid', () => {
    const fixture = TestBed.createComponent(DialogComponent);
    const Book = fixture.componentInstance;
    Book.bookForm.controls?.['bookId'].setValue("204");
    Book.bookForm.controls?.['bookTitle'].setValue("Maths Intro");
    Book.bookForm.controls?.['authorName'].setValue("Mani");
    Book.bookForm.controls?.['edition'].setValue("1999");
    Book.bookForm.controls?.['bookType'].setValue("Maths");
    Book.bookForm.controls?.['bookDetails'].setValue("Mathematics");
   
    expect(Book.bookForm.valid).toBeTruthy();
  });


  it('Insert Book Form Button GUI count', () => {
    const fixture = TestBed.createComponent(DialogComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#bookForm");
    const inputElements = formElement.querySelectorAll("mat-option");
    expect(inputElements.length).toEqual(0);
  });

  
});
