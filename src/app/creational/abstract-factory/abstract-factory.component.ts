import { Component, OnInit } from '@angular/core';
import { TransportFactory, EcoTransportFactory, UsualTransportFactory, Bus, Plane } from './abstract-factory';

export interface TransportFactoryMap {
  id: string;
  name: string;
}

@Component({
  selector: 'dp-abstract-factory',
  templateUrl: './abstract-factory.component.html',
  styleUrls: ['./abstract-factory.component.less']
})
export class AbstractFactoryComponent implements OnInit {
  readonly factoriesMap: TransportFactoryMap[] = [
    <TransportFactoryMap>{
      id: 'usual',
      name: 'Usual transport'
    },
    <TransportFactoryMap>{
      id: 'eco',
      name: 'Eco transport'
    }
  ]; 
  selectedFactoryMapId = '';

  SELECTED_FACTORY = <TransportFactory>{};
  busForYourTrip = '';
  planeForYourTrip = '';  

  static createFactory(id: string): TransportFactory {
    switch(id) {
      case 'eco':
        return new EcoTransportFactory();
      default:
        return new UsualTransportFactory();
    }
  } 

  constructor() {
  }

  ngOnInit(): void {
    
  }

  applySelection() {
    if (!this.selectedFactoryMapId) {
      return;
    }

    this.SELECTED_FACTORY = AbstractFactoryComponent.createFactory(this.selectedFactoryMapId);
    this.busForYourTrip = this.SELECTED_FACTORY.createBus().drive();
    this.planeForYourTrip = this.SELECTED_FACTORY.createPlane().fly();
  }
}
