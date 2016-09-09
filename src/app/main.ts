import 'jquery';
import 'bootstrap-loader';
import 'font-awesome/css/font-awesome.css';
import 'zone.js/dist/zone';
import 'reflect-metadata';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);