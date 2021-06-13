import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './Forms/form/form.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

const routes: Routes = [
 {path:'',component:FormComponent},
 {path:'submit',component:ThankyouComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

