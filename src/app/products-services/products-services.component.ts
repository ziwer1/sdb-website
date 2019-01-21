import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-services',
  template: `
    <div class="row">
      <div class="col-md">
        <h2 id="services" class="text-center section_heading">Products & Services</h2>
      <div class="row justify-content-around">
        <div class="col-md-4">
          <div class="card">
            <img class="card-img-top" src="../../assets/images/trucks_3.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Truck Hire</h5>
              <p class="card-text">Choose from a fleet of over 30 trucks to transport your goods to destinations in East Africa.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <img class="card-img-top" src="../../assets/images/produce.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Agricultural Produce</h5>
              <p class="card-text">We keep a stock of Maize and Beans available for purchase.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
  styles: []
})
export class ProductsServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
