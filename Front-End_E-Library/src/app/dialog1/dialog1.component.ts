import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BookService } from '../book.service';
import { DialogComponent } from '../dialog/dialog.component';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-dialog1',
  templateUrl: './dialog1.component.html',
  styleUrls: ['./dialog1.component.css']
})
export class Dialog1Component {

  addressForm !: FormGroup;
  actionBtn : string = "Save";
  book: any;


constructor(private formBuilder : FormBuilder,
  private address : AddressService,
  @Inject(MAT_DIALOG_DATA) public editData : any,
  private dialogRef : MatDialogRef<DialogComponent>){




this.addressForm = this.formBuilder.group({
  doorNo:['',Validators.required],
  street:['',Validators.required],
  city : ['', Validators.required],
  state : ['', Validators.required],
  pincode : ['', Validators.required],
  bookDetails : ['', Validators.required]
  });


  if(this.editData){
    this.actionBtn = "Update";
    this.addressForm.controls['doorNo'].setValue(this.editData.doorNo);
    this.addressForm.controls['street'].setValue(this.editData.street);
    this.addressForm.controls['city'].setValue(this.editData.city);
    this.addressForm.controls['state'].setValue(this.editData.state);
    this.addressForm.controls['pincode'].setValue(this.editData.pincode);
    
   
  }
}
insertAddress(){
  if(!this.editData){
    if(this.addressForm.valid){
      this.address.postAddress(this.addressForm.value)
      .subscribe({
        next:(res) => {
          alert("Address added successfully")
          this.addressForm.reset();
          this.dialogRef.close('save');
        },
        error:()=>{
          alert("Error while adding the Address")
        }
      })
    }}else{
      this.insertAddress()
    }
  }
  updateAddress(){
    this.address.putAddress(this.addressForm.value, this.editData.address)
    .subscribe({
      next :(res)=>{
        alert("Address updated Successfully");
        this.addressForm.reset();
        this.dialogRef.close('update');
      },
      error:()=>
      {
        alert("error while updating the record!!");
      }
    })
  }

}
