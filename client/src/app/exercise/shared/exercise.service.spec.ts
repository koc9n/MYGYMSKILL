import { TestBed, inject } from '@angular/core/testing';

import { ExerciseService } from './exercise.service';

describe('ExerciseServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExerciseService]
    });
  });

  it('should be created', inject([ExerciseService], (service: ExerciseService) => {
    expect(service).toBeTruthy();
  }));
});
