import { Component, OnInit } from '@angular/core';
import { HelperService } from './service/helper.service';
import { resume } from './service/Resume';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Resumes:any;
  Projects:any;
  Education:any;
  constructor(private helperservice:HelperService) { }

  ngOnInit(): void {
    this.getResumes();
    this.getProjects();
    this.getEducation();
  }

  private getResumes()
  {
    this.helperservice.getallResumes().subscribe(data=>
      {
      this.Resumes=data;
      localStorage.setItem("resumeid",this.Resumes.resume_id);
      }
      );
      console.log(this.Resumes);
  }

  private getProjects()
  {
    const resume_id=localStorage.getItem("resumeid");
    this.helperservice.getAllProjects(resume_id).subscribe(data=>
      {
      this.Projects=data;
      }
      );
      console.log(this.Resumes);
  }

  private getEducation()
  {
    this.helperservice.getAllEducation(this.Resumes).subscribe(data=>
      {
      this.Education=data;
      }
      );
      console.log(this.Resumes);
  }
  /*private updateinfo()
  {
    this.helperservice.
  }*/

}
