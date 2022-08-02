import { Component, OnInit } from '@angular/core';
import { HelperService } from './service/helper.service';
import { resume } from './service/Resume';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Resumes:any;
  constructor(private helperservice:HelperService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getResumes();
  }

  private getResumes()
  {
    this.helperservice.getallResumes().subscribe(data=>
      {
      this.Resumes=data;
      let id=this.Resumes[0].resume_id;
      this.helperservice.setid(id);
      }
      );
      console.log(this.Resumes);
      
  }

  
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '500px',
      //data: {name: this.name, animal: this.animal},
    });

    /*dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });*/
  }
  
  /*private updateinfo()
  {
    this.helperservice.
  }*/

}
