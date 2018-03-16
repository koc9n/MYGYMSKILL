import {Component, OnInit} from '@angular/core';
import {Exercise} from '../shared/exercise';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent implements OnInit {
  exercises: Exercise[] = [
      
    ];

  constructor() {
  }

  ngOnInit() {
  }

}
