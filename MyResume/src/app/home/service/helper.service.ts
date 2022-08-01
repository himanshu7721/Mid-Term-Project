import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private httpclient:HttpClient) { }
  getallResumes()
  {
    console.log("hey buddy");
    return this.httpclient.get('http://localhost:8080/getresume');
    
  }
  getAllEducation(Resumes:any)
  {
    console.log("inside eudcation");
    return this.httpclient.post('http://localhost:8080/getEducation',JSON.stringify(Resumes));
  }
  getAllProjects(Resumes:any)
  {
    console.log("inside projects");
    return this.httpclient.post('http://localhost:8080/getProjects',JSON.stringify(Resumes));
  }
  /*updatedata()
  {
    console.log("inside update");
    return this.httpclient.put('http://localhost:8080/');
  }
  */
}
