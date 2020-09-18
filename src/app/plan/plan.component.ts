import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, forkJoin } from 'rxjs';

import { map } from 'rxjs/operators';

import { PlanService } from './plan.service';
import { FeatureService } from './feature/feature.service';

import { Plan, Feature } from '../core/models';


@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.less']
})
export class PlanComponent implements OnInit {

  plans$ = new BehaviorSubject<Plan[]>(null);
  features$ = new BehaviorSubject<Feature[]>(null);


  constructor(private planService: PlanService, private featureService: FeatureService) { }

  ngOnInit(): void {
    forkJoin({
        plans: this.planService.getPlans(),
        features: this.featureService.getFeatures()
      }).pipe(
        map((combined) => {
          this.plans$.next(combined.plans);
          this.features$.next(combined.features);
        })
      ).subscribe((data) => {
        console.log(data);
      });

  
  
  }

}
