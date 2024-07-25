import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultComponent } from './youtube/components/search-result/search-result.component';
import { LoginPageComponent } from './auth/components/login-page/login-page.component';
import { DetailComponentComponent } from './youtube/components/detail-component/detail-component.component';

const routes: Routes = [
  { path: 'youtube', component: SearchResultComponent },
  { path: 'youtube/child', component: DetailComponentComponent },
  { path: '', redirectTo: '/youtube', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
