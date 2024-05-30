import { Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';

export const routes: Routes = [
    // { path: '', redirectTo: 'app-index', pathMatch: 'full' }, //default route
    // { path: 'app-index', component: IndexComponent },
    { path: '', component: IndexComponent}
];
