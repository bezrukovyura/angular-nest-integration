import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', canActivateChild: [AuthGuard], children: [
      { path: 'notification', loadChildren: () => import('./notification/notification.module').then(m => m.NotificationModule) },
      { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
    ]
  },
  { path: '', redirectTo: 'notification', pathMatch: 'prefix'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
