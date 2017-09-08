import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then(() => {
  if (navigator.serviceWorker) {
    if (navigator.serviceWorker.controller) {
      console.log('[PWA Builder] active service worker found, no need to register')
    } else {

      //Register the ServiceWorker
      navigator.serviceWorker.register('pwabuilder-sw.js', {
        scope: './'
      }).then(function (reg) {
        console.log('Service worker has been registered for scope:' + reg.scope);
      });
    }
  }
});
