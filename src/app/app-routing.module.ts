import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactoryMethodComponent } from './creational/factory-method/factory-method.component';
import { AbstractFactoryComponent } from './creational/abstract-factory/abstract-factory.component';

export const routes: Routes = [
  { path: 'factory-method', component: FactoryMethodComponent },
  { path: 'abstract-factory', component: AbstractFactoryComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
