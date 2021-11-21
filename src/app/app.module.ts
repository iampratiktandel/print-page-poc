import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PrintPageComponent } from './print-page/print-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TopbarComponent } from './topbar/topbar.component';
import { NgxPrintModule } from 'ngx-print';

@NgModule({
  imports: [BrowserModule, FormsModule, NgxPrintModule],
  declarations: [
    AppComponent,
    PrintPageComponent,
    MainPageComponent,
    TopbarComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
