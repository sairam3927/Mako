import { Injectable } from '@angular/core';
// import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  private data = [] ;

  // myMethod$: Observable<any>;
    // private myMethodSubject = new Subject<any>();

  constructor() {
    // this.myMethod$ = this.myMethodSubject.asObservable();
   }

   myMethod(value: any) {
    console.log(value);
    this.data = value;
    }
    getOption() {
      return this.data;
    }

}
