import {Component, OnInit} from '@angular/core';
import {Exercise} from '../exercise';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent implements OnInit {
  exercises: Exercise[] = [
      {
        id: 1,
        name: 'DB press',
        description: '',
        photolinks: []
      },
      {
        id: 2,
        name: 'BB press',
        description: '',
        photolinks: []
      },
      {
        id: 3,
        name: 'BB biceps curl',
        description: '',
        photolinks: []
      }
    ];

  constructor() {
  }

  ngOnInit() {
  }

}
