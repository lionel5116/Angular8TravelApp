import { TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {Login} from './shared/Login.model';

import { MyApiService } from './my-api.service';

describe('MyApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]

  }));

  it('should be created', () => {
    const service: MyApiService = TestBed.get(MyApiService);
    expect(service).toBeTruthy();
  });

  it('Login Object should be returned', () => {
    const service: MyApiService = TestBed.get(MyApiService);
    let LIObject = {
      environment:'Production',
      email:'lioneljones5116@gmail.com',
      password:'liongod5116'}
    expect(service.getLoginCredentialsStronglyTyped("Production","lioneljones5116@gmail.com","liongod5116")).toEqual(LIObject);

  });

});
