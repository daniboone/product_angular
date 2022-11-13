import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RecentProductsComponent } from './recent-products/recent-products.component';
import { SpecialsComponent } from './specials/specials.component';
import { LocationsComponent } from './locations/locations.component';
import { CloudTitleComponent } from './cloud-title/cloud-title.component';
import { DesignComponent } from './design/design.component';
import { CartComponent } from './cart/cart.component';
import { GroupBoxComponent } from './group-box/group-box.component';
import { BigButtonComponent } from './big-button/big-button.component';
import { LittleButtonComponent } from './little-button/little-button.component';

import { HighPipe } from './high.pipe';
import { NonhighPipe } from './nonhigh.pipe';

import { RecentProductsService } from './recent-products.service';
import { CartService } from './cart.service';
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    RecentProductsComponent,
    SpecialsComponent,
    LocationsComponent,
    CloudTitleComponent,
    DesignComponent,
    CartComponent,
    GroupBoxComponent,
    BigButtonComponent,
    LittleButtonComponent,
    HighPipe,
    NonhighPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    ApiService,
    CartService,
    RecentProductsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
