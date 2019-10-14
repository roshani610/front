import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap, catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

 
  private baseUrl=environment.baseUrl
  constructor(private http: HttpClient) { }

  getAllNoteData(){
    this.http.get(this.baseUrl).pipe(
      tap((resp: any) => {
        if (resp.status === 'success') {
            console.log('success', resp.message, '');
        } else if (resp.status === 'failed') {
          console.log('error', resp.message, '');
        }
    }),
    map((resp: any) => {
        return resp;
    }),
    catchError(err => {
      return throwError(err);
    })
    )
  }
  createNote(data){
    console.log(data);
    console.log(this.baseUrl)
     return  this.http.post(this.baseUrl,data).pipe(
        tap((resp:any)=>{
          console.log("from service:",resp);
        //   if (resp.status === 'success') {
        //     console.log('success', resp.message, '');
        // } else if (resp.status === 'failed') {
        //   console.log('error', resp.message, '');
        // }
        }),
        catchError(err => {
          console.log("err",err);
          return throwError(err);
        })
      )
  }
  getNoteData(noteId){
    this.http.get(this.baseUrl+"/"+noteId).pipe(
      tap((resp: any) => {
        if (resp.status === 'success') {
            console.log('success', resp.message, '');
        } else if (resp.status === 'failed') {
          console.log('error', resp.message, '');
        }
    }),
    map((resp: any) => {
        return resp;
    }),
    catchError(err => {
      return throwError(err);
    })
    )
  }
  deleteNote(noteId){
    this.http.delete(this.baseUrl+"/"+noteId).pipe(
      tap((resp: any) => {
        if (resp.status === 'success') {
            console.log('success', resp.message, '');
        } else if (resp.status === 'failed') {
          console.log('error', resp.message, '');
        }
    }),
    map((resp: any) => {
        return resp;
    }),
    catchError(err => {
      return throwError(err);
    })
    )
  }
  updateNoteData(data){
    this.http.put(this.baseUrl,data).pipe(
      tap((resp:any)=>{
        if (resp.status === 'success') {
          console.log('success', resp.message, '');
      } else if (resp.status === 'failed') {
        console.log('error', resp.message, '');
      }
      }),
      catchError(err => {
        return throwError(err);
      })
    )
  }
}
