import { Component, OnInit } from '@angular/core';
import { faShieldAlt, faShippingFast, faMapMarkedAlt, faLeaf } from '@fortawesome/free-solid-svg-icons';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {

	  faCoffee = faShieldAlt;
	  faShippingFast = faShippingFast;
	  faMapMarkedAlt = faMapMarkedAlt;
	  faLeaf = faLeaf;

  constructor(config: NgbCarouselConfig) {

  	config.interval = 15000;
   }

  ngOnInit() {
  }

}
