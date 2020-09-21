import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsComponent } from './contacts/contacts.component';
import { PlanComponent } from './plan/plan.component';

const routes: Routes = [
  { path: 'contacts', component: ContactsComponent },
  { path: 'plans', component: PlanComponent },
  { path: '', redirectTo: '/contacts', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
