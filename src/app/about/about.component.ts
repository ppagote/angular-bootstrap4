import { Component, OnInit } from '@angular/core';
import { faSignal, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  signalIcon = faSignal;
  globeAmericasIcon = faGlobeAmericas;

  constructor() { }

  ngOnInit(): void {
  }

}
