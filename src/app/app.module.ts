import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatDatepickerModule,MatNativeDateModule,MatIconModule, MatSliderModule,MatInputModule} from '@angular/material';
import { ReactiveFormsModule,FormsModule  } from '@angular/forms';
import { FormComponent } from './Forms/form/form.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ThankyouComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatSliderModule,
    MatInputModule,
    MatNativeDateModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule 
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
