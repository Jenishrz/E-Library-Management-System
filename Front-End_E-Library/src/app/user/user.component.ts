import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../user.service';
import { DialogComponent } from '../dialog/dialog.component';
import { BookService } from '../book.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
insertBook() {
throw new Error('Method not implemented.');
}

  displayedColumns: string[] = ['bookId','bookTitle','authorName', 'edition','bookType', 'bookDetails', 'action'];
  dataSource!: MatTableDataSource<any>;


  @ViewChild(MatPaginatorModule) paginator!: MatPaginatorModule;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private dialog : MatDialog, private book : BookService){


  }
  ngOnInit():void{
    this.getAllBooks();
  }
  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%'
    }).afterClosed().subscribe(val=>
      {
        if(val=== 'Save'){
          this.getAllBooks();
        }
      })
  }
  getAllBooks(){
    this.book.getBook()
    .subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
      
      },
      error:(err)=>{
        alert("Error while fetching the Records!!")
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();


    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  download(){
    alert("Your Book Downloaded Successfuly!");
  }
  
}
