import { Component, ViewChild } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { BookService } from '../book.service';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

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
        if(val=== 'save'){
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
  editBook(row : any){
    this.dialog.open(DialogComponent,{
      width : '30%',
      data:row
    }).afterClosed().subscribe(val=>
      {
        if(val=== 'update'){
          this.getAllBooks();
        }
      })
  }


  deleteBook(data:any){
    this.book.deleteBook(data)
    .subscribe({
      next:(res)=>{
        alert("Book Details Deleted Successfully");
        this.getAllBooks();
      },
      error:()=>{
        alert('Unable to Delete Book Details');
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
}
