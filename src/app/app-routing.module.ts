import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Pages
import { HomeComponent } from './home/home.component';
import { ViewSheetComponent } from './view-sheet/view-sheet.component';
import { CreateSheetComponent } from './create-sheet/create-sheet.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'view', component: ViewSheetComponent },
  { path: 'create', component: CreateSheetComponent },


//Default Route
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
