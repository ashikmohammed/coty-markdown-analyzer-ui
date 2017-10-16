import { TestBed, inject } from '@angular/core/testing';

import { MdaDatauploadService } from './mda-dataupload.service';

describe('MdaDatauploadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MdaDatauploadService]
    });
  });

  it('should be created', inject([MdaDatauploadService], (service: MdaDatauploadService) => {
    expect(service).toBeTruthy();
  }));
});
