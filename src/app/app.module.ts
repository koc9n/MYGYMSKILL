import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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
  bootstrap: [AppComponent]
})
export class AppModule { }
