import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProjetOpertionnelleSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [ProjetOpertionnelleSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class ProjetOpertionnelleHomeModule {}
