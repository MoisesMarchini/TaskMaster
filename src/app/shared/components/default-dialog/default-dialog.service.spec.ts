/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DefaultDialogService } from './default-dialog.service';

describe('Service: DefaultDialog', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DefaultDialogService]
    });
  });

  it('should ...', inject([DefaultDialogService], (service: DefaultDialogService) => {
    expect(service).toBeTruthy();
  }));
});
