import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Feature } from '../../core/models';
import { FEATURES } from '../../core/models/mocks/mock-features';

@Injectable({
  providedIn: 'root'
})

export class FeatureService {

  constructor() { }

  getFeatures(): Observable<Feature[]> {
    return of(FEATURES);
  }
}
