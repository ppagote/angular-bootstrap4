import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faChevronUp, faMapMarked, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  chevronUpIcon = faChevronUp;
  mapMarkedIcon = faMapMarked;
  phoneIcon = faPhone;
  envelopeIcon = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    form.reset();
  }

}
