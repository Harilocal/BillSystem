import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { ProducserviceService } from './producservice.service';

describe('ProducserviceService', () => {
  let service: ProducserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
       
        HttpClientTestingModule
      ],
      declarations: [ ProducserviceService ]
    });
    service = TestBed.inject(ProducserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
