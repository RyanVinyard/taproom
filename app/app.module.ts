import { NgModule }      from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent }  from './app.component';
import { KegsListComponent } from './kegs-list.component';
import { FormsModule } from '@angular/forms';
import { EditKegComponent } from './edit-keg.component';
import { NewKegComponent } from './new-keg.component';
import { LowKegsComponent } from './low-keg.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    KegsListComponent,
    EditKegComponent,
    NewKegComponent,
    LowKegsComponent,
  ],
  bootstrap:     [ AppComponent ],
})

export class AppModule {};
