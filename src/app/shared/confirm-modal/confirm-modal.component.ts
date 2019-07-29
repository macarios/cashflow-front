import {Component, OnInit} from '@angular/core';
import {ModalService} from '../modal.service';
import {Observable} from 'rxjs';
import {ModalParams} from './modalParams';

declare var $: any;

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

  modalParams$: Observable<ModalParams>;

  constructor(private modalService: ModalService) {  }

  ngOnInit() {
    this.modalParams$ = this.modalService.modalParams;
    $('#Modal').on('show.bs.modal', () => {
      console.log('aaaabriu');
      this.modalService.setConfirm(false);

    })
  }

  onConfirm() {
    this.modalService.onConfirm();
  }

  onClose() {
    this.modalService.onClose();
  }



}
