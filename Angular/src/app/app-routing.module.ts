import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePCarouselComponent } from './home-p-carousel/home-p-carousel.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HousedelpageComponent } from './housedelpage/housedelpage.component';
import { LocationdelpageComponent } from './locationdelpage/locationdelpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { TrainPCarouselComponent } from './train-p-carousel/train-p-carousel.component';
import { TraindelpageComponent } from './traindelpage/traindelpage.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'housedelpage', component: HousedelpageComponent },
  // { path: 'traindelpage', component: TraindelpageComponent},
  { path: 'locationdelpage', component: LocationdelpageComponent },
  { path: 'loginpage', component: LoginpageComponent },
  { path: 'traindelpage', component: TraindelpageComponent, children: [{ path: 'restaurants', component: RestaurantsComponent }] },
  { path: 'home-p-carousel', component: HomePCarouselComponent },
  { path: 'train-p-carousel', component: TrainPCarouselComponent }
  // { path: 'restaurants', component: RestaurantsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
