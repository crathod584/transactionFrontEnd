import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionComponent } from './';


const routes: Routes = [
 {
  	path:'',
  	redirectTo:'office-transaction',
  	pathMatch:'full'
  },
  {
    path: 'office-transaction',
    component: TransactionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
