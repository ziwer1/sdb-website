import { Component, OnInit } from '@angular/core';
import { faShieldAlt, faShippingFast, faMapMarkedAlt, faLeaf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {

	  faCoffee = faShieldAlt;
	  faShippingFast = faShippingFast;
	  faMapMarkedAlt = faMapMarkedAlt;
	  faLeaf = faLeaf;

  constructor() { }

  ngOnInit() {
  }

}
