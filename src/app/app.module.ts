import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    PricingComponent,
    ContactComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
