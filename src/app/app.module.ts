import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DataService } from './data.service';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule,MatCardModule,MatMenuModule,MatToolbarModule,MatIconModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
