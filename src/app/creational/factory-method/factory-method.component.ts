import { Component, OnInit } from '@angular/core';
import { BusTravelToEurope, ITransport, PlaneTravelToEurope, TravelToEurope } from './factory-method';

@Component({
  selector: 'dp-factory-method',
  templateUrl: './factory-method.component.html',
  styleUrls: ['./factory-method.component.less']
})
export class FactoryMethodComponent implements OnInit {
  readonly MAX_SMALL_BUDGET = 100;
  budgetInDollars: number = 0;
  tansportName = '';
  //: number, travelDaysCount: number 
  
  constructor() {
  }

  ngOnInit(): void {
    
  }

  identifyTransport() {
    let currentTravel :TravelToEurope; 
    if (this.budgetInDollars <= this.MAX_SMALL_BUDGET) {
      currentTravel = new BusTravelToEurope();
    }
    else {
      currentTravel = new PlaneTravelToEurope();
    }
    const currentTransport = currentTravel.buildRoute();
    this.tansportName = currentTransport.use();
  }
}
