import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
 rid:any;
  constructor(private http:HttpClient) { }
  getallResumes()
  {
    console.log("hey buddy");
    return this.http.get('http://localhost:8080/getresume');
    
  }
  
  updatedata(updatedata:any)
  {
    console.log("inside update");
    console.log(updatedata);
    console.log(this.rid);
    let reid=this.rid;
    return this.http.put<any>(`http://localhost:8080/updateemail/${this.rid}`,updatedata);
  }

  setid(id: any)
  {
    this.rid=id;
  }
  
}
