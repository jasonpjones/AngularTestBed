import { Component, OnInit } from '@angular/core';
import { Contact } from '../../core/models';
import { ContactDisplay } from '../../core/models';
import { Observable, Subject, pipe, ReplaySubject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { ContactService} from '../contact.service';
import { ContactDetailComponent } from '../contact-detail/contact-detail.component';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.less']
})
export class ContactListComponent implements OnInit {

   contacts$ = new BehaviorSubject<ContactDisplay[]>(null);



  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.getContactForDisplay();
  }

  getContactForDisplay(): void {
    this.contactService.getContacts()
    .subscribe((contacts) => { 
      const dispContacts: ContactDisplay[] =  contacts.map(c => {
        const result: ContactDisplay = {
          id: c.id,
          firstName: c.firstName,
          lastName: c.lastName,
          displayName: `${c.firstName} ${c.lastName}`,
          birthDate: c.birthDate
        };
        return result;
      });
      this.contacts$.next(dispContacts);
    });
  }

  onSelect(contact: ContactDisplay): void {
    this.contactService.selectedContact$.next(contact);
  }


}
