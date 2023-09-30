import { TestBed } from '@angular/core/testing';

import { EmpyoeeService } from './empyoee.service';

describe('EmpyoeeService', () => {
  let service: EmpyoeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpyoeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
