import {MediaMatcher} from '@angular/cdk/layout';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {MaterialModule} from './material/material.module';
import {ExerciseModule} from './exercise/exercise.module';
import {ExerciseListComponent} from './exercise/exercise-list/exercise-list.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {LoginComponent} from './login/login.component';
import {AUTH_PROVIDERS} from './auth.service';
import {LoggedInGuard} from './logged-in.guard';

const routes: Routes = [
  // basic routes
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact-us', component: ContactComponent},

  // authentication demo
  {path: 'login', component: LoginComponent},
  {
    path: 'exercises',
    component: ExerciseListComponent,
    // canActivate: [LoggedInGuard]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes), // <-- routes
    MaterialModule,
    ExerciseModule,
  ],
  providers: [
    // uncomment this for "hash-bang" routing
    // { provide: LocationStrategy, useClass: HashLocationStrategy }
    {provide: APP_BASE_HREF, useValue: '/'},
    AUTH_PROVIDERS,
    LoggedInGuard,
    MediaMatcher,
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
