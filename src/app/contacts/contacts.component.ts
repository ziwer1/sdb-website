import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  template: `
    <div id="contacts" class="card border-primary">
    <div class="card-body">
      <div class="row">
        <div class="col-md">
          <h2 id="contact" class="text-center section_heading">Contact Us</h2>
         <div class="row">
          <div class="col-md">
            <h3>Phone No:</h3>
          <h5>+256 702 558 078</h5>
        </div>
        <div class="col-md">
            <h3>Instant Messaging:</h3>
          <h5>Whatsapp: +256 702 558 078</h5>
          <h5>Viber: +256 702 558 078</h5>
        </div>
         </div>

         <div class="row">
          <div class="col-md">
            <h3>Social Media:</h3>
          <a href="https://web.facebook.com/sdbinvestmentsugandaltd"><h5 class="blue_text"> Facebook </h5></a>
        </div>
        <div class="col-md">
            <h3>Email:</h3>
          <h5>sbdinvestments@gmail.com</h5>
        </div>
         </div>

         <div class="row">
          <div class="col-md">
            <h3>Postal Address:</h3>
          <h5>P.O. BOX 34682</h5>
          <h5>Kampala, Uganda</h5>
          <br>
          <h3>Physical Address:</h3>
          <h5>Plot no. 590</h5>
          <h5>Wankulukuku Road</h5>
          <h5>Nalukolongo, Kampala</h5>
          <h5>Uganda</h5>
        </div>
        <div class="col-md">
            <img [src]="'../../assets/images/sdb_location.png'" class="img-fluid">
        </div>
         </div>
       </div>
     </div>

    </div>
  </div>
  `,
  styles: []
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
