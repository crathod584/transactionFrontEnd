import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  
  modalRef: BsModalRef;
  transactionData:any;
  
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }
  
  openModal(modal: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      modal,
      Object.assign({}, { class: 'modal-dialog modal-lg' })
     );
  }

  getData(event){
    this.transactionData = event;
  }
}
