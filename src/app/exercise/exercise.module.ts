import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../material/material.module';
import {ExerciseComponent} from './exercise/exercise.component';
import {ExerciseListComponent} from './exercise-list/exercise-list.component';
import {ExerciseService} from './shared/exercise.service';

@NgModule({
  declarations: [
    ExerciseComponent,
    ExerciseListComponent
  ],
  providers: [ExerciseService],
  imports: [CommonModule, MaterialModule],
  exports: [
    ExerciseComponent,
    ExerciseListComponent
  ]
})
export class ExerciseModule {
}
