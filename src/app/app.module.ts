import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form.component';
import { HasErrorDirective } from './has-error.directive';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, SimpleFormComponent, HasErrorDirective],
  bootstrap: [AppComponent]
})
export class AppModule {}
