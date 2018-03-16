import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { ExerciseComponent } from './exercise/exercise/exercise.component';
import { ExerciseListComponent } from './exercise/exercise-list/exercise-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ExerciseComponent,
    ExerciseListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
