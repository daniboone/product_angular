import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from "./cart/cart.component";
import { DesignComponent } from "./design/design.component";
import { HomeComponent } from "./home/home.component";
import { LocationsComponent } from "./locations/locations.component";
import { LoginComponent } from "./login/login.component";
import { RecentProductsComponent } from "./recent-products/recent-products.component";
import { SpecialsComponent } from "./specials/specials.component";


export const routes: Routes = [
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'recents',
      component: RecentProductsComponent
    },
    {
      path: 'specials',
      component: SpecialsComponent
    },
    {
      path: 'locations',
      component: LocationsComponent
    },
    {
      path: 'design',
      component: DesignComponent
    },
    {
      path: 'cart',
      component: CartComponent
    },
    {
      path: '**',
      redirectTo: 'home',
      pathMatch: 'full'
    },
  ];

  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}  