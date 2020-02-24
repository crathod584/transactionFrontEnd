import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionComponent } from './transaction.component';
import { NewTransactionModalComponent } from '../new-transaction-modal';

import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [TransactionComponent, NewTransactionModalComponent],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot()
  ]
})
export class TransactionModule { }
