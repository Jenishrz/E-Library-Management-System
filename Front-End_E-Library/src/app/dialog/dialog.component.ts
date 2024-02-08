import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { BookService } from '../book.service';




@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  bookForm !: FormGroup;
  actionBtn : string = "Save";
  book: any;


constructor(private formBuilder : FormBuilder,
  private bbok : BookService,
  @Inject(MAT_DIALOG_DATA) public editData : any,
  private dialogRef : MatDialogRef<DialogComponent>){




this.bookForm = this.formBuilder.group({
  bookId:['',Validators.required],
  bookTitle:['',Validators.required],
  authorName : ['', Validators.required],
  edition : ['', Validators.required],
  bookType : ['', Validators.required],
  bookDetails : ['', Validators.required]
  });


  if(this.editData){
    this.actionBtn = "Update";
    this.bookForm.controls['bookId'].setValue(this.editData.bookId);
    this.bookForm.controls['bookTitle'].setValue(this.editData.bookTitle);
    this.bookForm.controls['authorName'].setValue(this.editData.authorName);
    this.bookForm.controls['edition'].setValue(this.editData.edition);
    this.bookForm.controls['bookType'].setValue(this.editData.bookType);
    this.bookForm.controls['bookDetails'].setValue(this.editData.bookDetails);
   
  }
}
insertBook(){
  if(!this.editData){
    if(this.bookForm.valid){
      this.bbok.postBook(this.bookForm.value)
      .subscribe({
        next:(res) => {
          alert("Book Download successfully")
          this.bookForm.reset();
          this.dialogRef.close('save');
        },
        error:()=>{
          alert("Book Download Successfully!!!")
        }
      })
    }}else{
      this.insertBook()
    }
  }
  updateBook(){
    this.bbok.putBook(this.bookForm.value, this.editData.book)
    .subscribe({
      next :(res)=>{
        alert("Book updated Successfully");
        this.bookForm.reset();
        this.dialogRef.close('update');
      },
      error:()=>
      {
        alert("error while updating the record!!");
      }
    })
  }
}
