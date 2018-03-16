import { Component, OnInit, Input } from '@angular/core';
import {MatCardModule, MatCheckboxModule} from '@angular/material';

import {Exercise} from '../shared/exercise';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {
  @Input() exercise: Exercise;
  constructor() {
  }

  ngOnInit() {
  }

}
