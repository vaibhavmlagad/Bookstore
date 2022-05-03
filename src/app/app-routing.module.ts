import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DisplayComponent } from './display/display.component';
import { RemoveComponent } from './remove/remove.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path : 'display', component : DisplayComponent},
  {path : 'add', component : AddComponent},
  {path : 'remove', component : RemoveComponent},
  {path : 'search', component : SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
