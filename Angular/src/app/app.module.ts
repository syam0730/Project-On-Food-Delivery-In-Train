import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { HousedelpageComponent } from './housedelpage/housedelpage.component';
import { TraindelpageComponent } from './traindelpage/traindelpage.component';
import { LocationdelpageComponent } from './locationdelpage/locationdelpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { HttpClientModule } from '@angular/common/http';
import { PNRserviceService } from './pnrservice.service';
import { HomePCarouselComponent } from './home-p-carousel/home-p-carousel.component';
import { TrainPCarouselComponent } from './train-p-carousel/train-p-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HousedelpageComponent,
    TraindelpageComponent,
    LocationdelpageComponent,
    LoginpageComponent,
    RestaurantsComponent,
    HomePCarouselComponent,
    TrainPCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PNRserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
