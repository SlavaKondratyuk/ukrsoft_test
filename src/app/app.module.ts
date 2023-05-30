import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfitCounterComponent } from './profit-counter/profit-counter.component';
import { ResultComponent } from './profit-counter/result/result.component';
import { CounterFormComponent } from './profit-counter/counter-form/counter-form.component';
import { StarRatingComponent } from './profit-counter/result/star-raiting/star-raiting.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    ProfitCounterComponent,
    ResultComponent,
    CounterFormComponent,
    StarRatingComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
