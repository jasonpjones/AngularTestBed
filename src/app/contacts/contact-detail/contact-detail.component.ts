import { Component, OnInit } from '@angular/core';

import { ContactService } from '../contact.service';
import { ContactDisplay } from '../../core/models/contact';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.less']
})
export class ContactDetailComponent implements OnInit {

  

  constructor(public contactService: ContactService) { }

  ngOnInit(): void {
  }

}
