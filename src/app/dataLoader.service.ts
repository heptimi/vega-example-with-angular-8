import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';  // we need to import this now
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataLoaderService {
  constructor(private http: Http) { }

  getDataObservable(url: string): Promise<any> {
    return this.http.get(url)
      .toPromise()
      .then(data => {
        console.log(data);
        // the console.log(...) line prevents your code from working
        // either remove it or add the line below (return ...)
        //console.log("I CAN SEE DATA HERE: ", data.json());
        return data;
      });
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
}
}
