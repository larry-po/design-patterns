import { Component, OnInit } from '@angular/core';
import { routes } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  links = routes;
  activeLink = '';
  title = 'design-patterns';

  ngOnInit(): void {
    console.log(this.links);
  }
}
