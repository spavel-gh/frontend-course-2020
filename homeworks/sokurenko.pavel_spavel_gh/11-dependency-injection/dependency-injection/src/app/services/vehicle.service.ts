import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

import { VehicleModel } from '../models/vehicle.model';
import { MOCK_VEHICLES } from '../mocks/vechicles.mock';

@Injectable({providedIn: 'root'})
export class VehicleService {
  constructor() { }

  // str = 'hello world';

  getVehicles(): Observable<VehicleModel[]> {
    return of(MOCK_VEHICLES).pipe(
      delay(1000),
    );
  }

}
