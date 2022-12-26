import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { CbPipe } from './cb.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
registerLocaleData(localeFr);

@NgModule({
  declarations: [AppComponent, CbPipe, FilterPipe],
  imports: [BrowserModule, FormsModule],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
