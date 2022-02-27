import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://localhost:10999/api";



  constructor(private http:HttpClient) { }

  getHasList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Hastane');
  }

  addHastane(val:any){
    return this.http.post(this.APIUrl+'/Hastane',val);
  }

  updateHastane(val:any){
    return this.http.put(this.APIUrl+'/Hastane',val);
  }

  deleteHastane(val:any){
    return this.http.delete(this.APIUrl+'/Hastane/'+val); 
  } 

  //doktor kismi----------------

  
  getDokList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Doktor');
  }

  addDoktor(val:any){
    return this.http.post(this.APIUrl+'/Doktor',val);
  }

  updateDoktor(val:any){
    return this.http.put(this.APIUrl+'/Doktor',val);
  }

  deleteDoktor(val:any){
    return this.http.delete(this.APIUrl+'/Doktor/'+val);
  } 



}
