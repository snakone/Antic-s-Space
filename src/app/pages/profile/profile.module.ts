import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfilePage } from './profile.page';
import { ComponentsModule } from '@app/shared/components/components.module';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
import { SharedModule } from '@shared/shared.module';
import { ProfileSegmentsComponent } from './components/profile-segments/profile-segments.component';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { ProfileHistoryComponent } from './components/profile-history/profile-history.component';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings.component';
import { NgxPaginationModule } from 'ngx-pagination';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    SharedModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ProfilePage,
    ProfileHeaderComponent,
    ProfileInfoComponent,
    ProfileHistoryComponent,
    ProfileSettingsComponent
  ]
})
export class ProfilePageModule {}
