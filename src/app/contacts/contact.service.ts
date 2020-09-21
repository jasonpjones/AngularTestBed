import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';

import { Contact, ContactDisplay } from '../core/models';
import { CONTACTS } from '../core/models/mocks/mock-contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactService {


  selectedContact$ = new Subject<ContactDisplay>();

  constructor() { }




  public getContacts(): Observable<Contact[]> {
    return of(CONTACTS);
  }

}
