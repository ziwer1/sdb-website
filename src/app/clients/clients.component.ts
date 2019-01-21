import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  template: `
    <div class="row parent_row">
      <div class="col-md">
        <h2 id="clients" class="text-center section_heading">Our Clients</h2>
      <div class="row">
        <div class="col-md">
          <div class="row client-cards">
            <div class="col-md">
              <img [src]="'../../assets/images/wfp_small.jpg'" alt="Random slide" class="img-fluid rounded">
            </div>
            <div class="col-md">
              <div class="card">
                <div class="card-body">
                  <div class="logo_card" style="font-family:impact; color: red">Kabuye Sugar Works Rwanda Ltd</div>
                </div>
              </div>
            </div>
            <div class="col-md">
              <img [src]="'../../assets/images/pearl.png'" alt="Random slide" class="img-fluid">
            </div>
            <div class="col-md">
              <div class="card">
                <div class="card-body">
                  <div class="logo_card" style="font-family:Arial; color: blue">Kamuru Trading Co. Rwanda Ltd</div>
                </div>
              </div>
            </div>
          </div>
          <br/>
          <div class="row">
            <div class="col-md">
              <div class="card">
                <div class="card-body">
                  <div class="logo_card" style="font-family:bookman; color: gray">Dayreel General Trading Co SS Ltd</div>
                </div>
              </div>
            </div>
            <div class="col-md">
              <img [src]="'../../assets/images/aponye.png'" alt="Random slide" class="img-fluid">
            </div>
            <div class="col-md">
              <div class="card">
                <div class="card-body">
                  <div class="logo_card" style="font-family:garamond; color: brown">Lukak Stores SS Ltd</div>
                </div>
              </div>
            </div>
            <div class="col-md">
              <div class="card">
                <div class="card-body">
                  <div class="logo_card" style="font-family:georgia; color: black">Premier Commodities U Ltd</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
  styles: []
})
export class ClientsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
