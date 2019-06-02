// tslint:disable:no-console

import { h, render } from 'preact';
import App from './App';

// register a service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js', {scope: '/'})
  .then((registration: ServiceWorkerRegistration) => {
    console.log('service worker registered!');
    console.log('sw scope:', registration.scope);
  })
  .catch((err: any) => {
    console.error('service worker registeration failed:', err);
  });
 }

render(
  <App/>,
  document.getElementById('app')
);
