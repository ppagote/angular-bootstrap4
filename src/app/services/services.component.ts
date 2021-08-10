import { Component, OnInit } from '@angular/core';
import { faLeaf, faCertificate, faWrench, faPowerOff, faHeart, faLock } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  leafIcon = faLeaf;
  certificateIcon = faCertificate;
  wrenchIcon = faWrench;
  powerOffIcon = faPowerOff;
  heartIcon = faHeart;
  lockIcon = faLock;

  constructor() { }

  ngOnInit(): void {
  }

}
