import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { MeanContactlistAngular2AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(MeanContactlistAngular2AppComponent);
