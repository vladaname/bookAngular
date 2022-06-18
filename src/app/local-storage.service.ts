import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService{
  private storageSub = new Subject<String>();
  private itemsSub = new Subject<Boolean>();

  constructor() {}

  watchStorage(): Observable<any> {
    return this.storageSub.asObservable();
  }

  watchItems(): Observable<any> {
    return this.itemsSub.asObservable();
  }

  itemsChanged(isChanged){
    this.itemsSub.next(isChanged);
  }

  roleChanged(role){
    this.storageSub.next(role);
  }

  logout(){
    this.storageSub.next(null);
  }
}
