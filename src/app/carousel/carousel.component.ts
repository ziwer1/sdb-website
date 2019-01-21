import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  template: `
    <div id="top" class="full_height">
    <ngb-carousel [showNavigationArrows]="false" [showNavigationIndicators]="true">
      <ng-template ngbSlide>
        <img [src]="'../../assets/images/trucks_6_banner.png'" alt="Random slide" class="full_width_height">
      </ng-template>
      <ng-template ngbSlide>
        <img [src]="'../../assets/images/seeds_2_banner.png'" alt="Random slide" class="full_width_height">
      </ng-template>
    </ngb-carousel>
    </div>
  `,
  styles: []
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
