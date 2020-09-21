import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, forkJoin } from 'rxjs';

import { map } from 'rxjs/operators';

import { PlanService } from './plan.service';
import { FeatureService } from './feature/feature.service';

import { Plan, Feature } from '../core/models';

export enum FeatureSupportLevel {
  Yes,
  No,
  Custom
}

export interface FeatureSupport {
  featureId: string;
  support: FeatureSupportLevel;
}

export interface PlanFeature {
  planId: string;
  planName: string;
  featureSupport: FeatureSupport[];
}


@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.less']
})
export class PlanComponent implements OnInit {

  plans$ = new BehaviorSubject<Plan[]>(null);
  features$ = new BehaviorSubject<Feature[]>(null);
  planFeatures$ = new BehaviorSubject<PlanFeature[]>(null);

  constructor(private planService: PlanService, private featureService: FeatureService) { }

  ngOnInit(): void {
    forkJoin({
        plans: this.planService.getPlans(),
        features: this.featureService.getFeatures()
      }).pipe(
        map((combined) => {
          this.plans$.next(combined.plans);
          this.features$.next(combined.features);

          const planFeatures: PlanFeature[] = combined.plans.map((plan) => {
            const planFeature: PlanFeature = {
              planId: plan.id,
              planName: plan.name,
              featureSupport: this.getFeatureSupport(plan, combined.features)
            };
            return planFeature;
          });

          this.planFeatures$.next(planFeatures);
        })
      ).subscribe((data) => {
        console.log(data);
      });
  }

  private getFeatureSupport(plan: Plan, features: Feature[]): FeatureSupport[] {

    const featureSupportList: FeatureSupport[] = features.map((feature) => {

      let supportLevel: FeatureSupportLevel = FeatureSupportLevel.No;

      if (plan.standardFeatures.includes(feature.id)) {
        supportLevel = FeatureSupportLevel.Yes;
      } else if (plan.customFeatures.includes(feature.id)) {
        supportLevel = FeatureSupportLevel.Custom;
      }

      const featureSupport: FeatureSupport = {
        featureId: feature.id,
        support: supportLevel,
      };
      return featureSupport;
    });

    return featureSupportList;
  }
}
