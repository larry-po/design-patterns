import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FactoryMethodComponent } from './creational/factory-method/factory-method.component';
import { AbstractFactoryComponent } from './creational/abstract-factory/abstract-factory.component';
import { BuilderComponent } from './creational/builder/builder.component';
import { PrototypeComponent } from './creational/prototype/prototype.component';
import { SingletonComponent } from './creational/singleton/singleton.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FactoryMethodComponent,
    AbstractFactoryComponent,
    BuilderComponent,
    PrototypeComponent,
    SingletonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
