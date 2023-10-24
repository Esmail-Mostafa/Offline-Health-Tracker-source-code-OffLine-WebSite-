import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreLandingComponent } from './pre-landing/pre-landing.component';
import { TotalCaloriesComponent } from './total-calories/total-calories.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule  } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MassIndexComponent } from './mass-index/mass-index.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FutureComponent } from './future/future.component';
import { BodyFatComponent } from './body-fat/body-fat.component';
import { WaterNeedsComponent } from './water-needs/water-needs.component';

@NgModule({
  declarations: [
    AppComponent,
    PreLandingComponent,
    TotalCaloriesComponent,
    MassIndexComponent,
    HeaderComponent,
    NavbarComponent,
    FutureComponent,
    BodyFatComponent,
    
    WaterNeedsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AppRoutingModule,
    ReactiveFormsModule,
    DialogModule,
    ButtonModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
