import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-new-transaction-modal',
  templateUrl: './new-transaction-modal.component.html',
  styleUrls: ['./new-transaction-modal.component.css']
})
export class NewTransactionModalComponent implements OnInit {
  
  @Input() modalRef:BsModalRef;
  @Input() runningBalance:number;
  @Output() getData = new EventEmitter(); 
  
  newTransactionForm: FormGroup;

  constructor(private fb: FormBuilder,private transactionService:TransactionService) {
    this.createForm();
  }

  ngOnInit() {
    console.log(this.form)
  }

  get form() { return this.newTransactionForm.controls; }

  createForm() {
    this.newTransactionForm = this.fb.group({
      transactionType: ["", Validators.required],
      amount: ["", Validators.required],
      description: ["", Validators.required],
      date:new Date()
    });
  }


  addTransaction(){
    let data = this.newTransactionForm.value;
    if(this.newTransactionForm.value.transactionType == "Debit"){
      data.debit = this.newTransactionForm.value.amount;  
      data.runningBalance = this.runningBalance - this.newTransactionForm.value.amount; 
    }else{
      data.credit = this.newTransactionForm.value.amount;   
      data.runningBalance = this.runningBalance + this.newTransactionForm.value.amount;  
    }

  	this.transactionService.addTransaction(this.newTransactionForm.value).subscribe((res) =>{
      this.getData.emit();
      this.modalRef.hide();
    }, (err) => {
      console.log('err',err)
    });
  }


}
