import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
  	<nav class="navbar navbar-expand-lg navbar-dark sticky-top bg-primary">
	  <a class="navbar-brand" [routerLink]="['/home']" fragment="top">
	    <img src="../assets/images/logo3_white.png" width="132" height="37" alt="">
	  </a>
	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" (click)="isNavbarCollapsed = !isNavbarCollapsed">
	    <span class="navbar-toggler-icon"></span>
	  </button>

	  <div class="collapse navbar-collapse" id="navbarSupportedContent" [ngbCollapse]="isNavbarCollapsed">
	    <ul class="navbar-nav mr-auto">
	      <li class="nav-item">
	        <a class="nav-link" [routerLink]="['/home']" fragment="top">Home <span class="sr-only">(current)</span></a>
	      </li>
	    </ul>
	    <ul class="navbar-nav">
	      <li class="nav-item">
	        <a class="nav-link" [routerLink]="['/home']" fragment="services">Services</a>
	      </li>
	      <li class="nav-item">
	        <a class="nav-link" [routerLink]="['/home']" fragment="why-us">Why Us</a>
	      </li>
	      <li class="nav-item">
	        <a class="nav-link" [routerLink]="['/home']" fragment="clients">Our Clients</a>
	      </li>
	      <li class="nav-item">
	        <a class="nav-link" [routerLink]="['/home']" fragment="contact">Contact Us</a>
	      </li>
	    </ul>
	  </div>
	</nav>
  `,
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor() { }

  isNavbarCollapsed = true;

  ngOnInit() {
  }

}
