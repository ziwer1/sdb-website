import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-why-us',
  template: `
    <div class="row parent_row" style="background-color:  #007BFF">
    <div class="col-md">
      <h2 id="why-us" class="text-center section_heading">Why Us</h2>
      <div class="row">
        <div class="col-md">
          <div class="card">
            <div class="card-body text-center">
              <div class="fa_icon"><fa-icon [icon]="faCoffee"></fa-icon></div>
              <br/>
              <h2>Cargo Safety</h2>
            </div>
          </div>
        </div>
        <div class="col-md">
          <div class="card">
            <div class="card-body text-center">
              <div class="fa_icon"><fa-icon [icon]="faShippingFast"></fa-icon></div>
              <br/>
              <h2>Quick Deliveries</h2>
            </div>
          </div>
        </div>
        <div class="col-md">
          <div class="card">
            <div class="card-body text-center">
              <div class="fa_icon"><fa-icon [icon]="faMapMarkedAlt"></fa-icon></div>
              <br/>
              <h2>GPS Tracking</h2>
            </div>
          </div>
        </div>
        <div class="col-md">
          <div class="card">
            <div class="card-body text-center">
              <div class="fa_icon"><fa-icon [icon]="faLeaf"></fa-icon></div>
              <br/>
              <h2>Quality Produce</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
  styles: []
})
export class WhyUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
