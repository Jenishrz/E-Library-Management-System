import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BookService } from '../book.service';
import { DialogComponent } from '../dialog/dialog.component';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {

  displayedColumns: string[] = ['doorNo','street','city', 'state','pincode',  'action'];
  dataSource!: MatTableDataSource<any>;


  @ViewChild(MatPaginatorModule) paginator!: MatPaginatorModule;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private dialog : MatDialog, private book : AddressService){


  }
  ngOnInit():void{
    this.getAllAddresss();
  }
  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%'
    }).afterClosed().subscribe(val=>
      {
        if(val=== 'save'){
          this.getAllAddresss();
        }
      })
  }
  getAllAddresss(){
    this.book.getAddress()
    .subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
      
      },
      error:(err)=>{
        alert("Error while fetching the Records!!")
      }
    })
  }
  editAddress(row : any){
    this.dialog.open(DialogComponent,{
      width : '30%',
      data:row
    }).afterClosed().subscribe(val=>
      {
        if(val=== 'update'){
          this.getAllAddresss();
        }
      })
  }


  deleteAddress(data:any){
    this.book.deleteAddress(data)
    .subscribe({
      next:(res)=>{
        alert("Book Details Deleted Successfully");
        this.getAllAddresss();
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
