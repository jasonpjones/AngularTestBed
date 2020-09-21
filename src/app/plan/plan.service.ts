import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Plan } from '../core/models';
import { PLANS } from '../core/models/mocks/mock-plans';


@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor() { }

  getPlans(): Observable<Plan[]> {
    return of (PLANS);
  }

}
