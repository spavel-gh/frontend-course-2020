import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class VehicleService {
    constructor() { }

    str = 'hello world';

    getVehicles(): Observable<string> {
        return of(this.str).pipe(
            delay(1000),
        );
    }

}
