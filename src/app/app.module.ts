import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';



import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CardapioBaseComponent } from './cardapio-base/cardapio-base.component';
import {MatTableModule} from '@angular/material/table';
import { AdminBaseComponent } from './admin-base/admin-base.component';

@NgModule({
  declarations: [
    AppComponent,
    CardapioBaseComponent,
    AdminBaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatTableModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
