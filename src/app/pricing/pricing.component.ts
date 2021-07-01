import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  items: any = [];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        "header": "Panel Header", "body": "Panel Body", "footer": "Panel Footer"
      },
      {
        "header": "Panel Header", "body": "Panel Body", "footer": "Panel Footer"
      },
      {
        "header": "Panel Header", "body": "Panel Body", "footer": "Panel Footer"
      }]
  }



}
