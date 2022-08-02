import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HelperService } from '../home/service/helper.service';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  id=localStorage.getItem("id");
  Resumeduplicate:any;
  constructor(public dialogRef: MatDialogRef<DialogBoxComponent>,
     private helpservice:HelperService,private snack:MatSnackBar,private router: Router)
     { }

  ngOnInit(): void {
  }


  public Resume=
  {
    phonenumber:'',
    address:'',
    emailid:'',
  }

  tel= new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  addres= new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getError()
  {
    return 'Invalid Input';
  }

  onNoClick(): void {
    this.router.navigate(['/']);
    this.dialogRef.close();
  }

   onsubmit()
  {
    this.helpservice.updatedata(this.Resume).subscribe(data=>
      {
        this.Resumeduplicate=data;
      });
      
      Swal.fire('Success','Data is updated Successfully','success');
      
    this.dialogRef.close();
  }

}
