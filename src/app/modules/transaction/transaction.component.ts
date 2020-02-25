import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  
  modalRef: BsModalRef;
  transactionData:any;
  
  constructor(private modalService: BsModalService, private transactionService:TransactionService) { }

  ngOnInit() {
    this.getData();
  }
  
  openModal(modal: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      modal,
      Object.assign({}, { class: 'modal-dialog modal-lg' })
     );
  }

  getData(){

    this.transactionService.getTransaction().subscribe((res) =>{
      this.transactionData = res;
    }, (err) => {
      console.log('err',err)
    });
  }
}
