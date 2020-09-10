import { Component, OnInit } from '@angular/core';
import { Contact } from '../../core/models';
import { ContactDisplay } from '../../core/models';
import { Observable, Subject, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

import { ContactService} from '../contact.service';
import { ContactDetailComponent } from '../contact-detail/contact-detail.component';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.less']
})
export class ContactListComponent implements OnInit {

   contacts$: Observable<Contact[]>;



  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    
    this.contacts$ = this.contactService.getContacts();



  }

  /*
  getContactForDisplay(): Observable<ContactDisplay[] {

  }
  */

}
