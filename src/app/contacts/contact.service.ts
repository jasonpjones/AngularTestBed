import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Contact } from '../core/models';
import { CONTACTS } from '../core/models/mocks/mock-contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }


  public getContacts(): Observable<Contact[]> {
    return of(CONTACTS);
  }

}
