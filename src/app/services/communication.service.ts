import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private dataSource: Subject<any> = new Subject();
  receiveData = this.dataSource.asObservable();
  sendData(data:any) {
    this.dataSource.next(data);
  }
  constructor() { }
}
