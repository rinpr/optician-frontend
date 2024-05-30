import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { IndexComponent } from './app/components/index/index.component';

bootstrapApplication(IndexComponent, appConfig)
  .catch((err) => console.error(err));
