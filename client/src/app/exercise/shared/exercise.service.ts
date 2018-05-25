import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { EXERCISES } from './mock-exercise';
import { Exercise } from './exercise';

@Injectable()
export class ExerciseService {

  constructor() { }

  getExercises(): Observable<Exercise[]> {
    return of(EXERCISES);
  }

}
