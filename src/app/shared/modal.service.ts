import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {ModalParams} from './confirm-modal/modalParams';


export enum AlertTypes {
  DANGER = 'danger',
  SUCCESS = 'success',
  WARNING = 'warning'
}

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private params$ = new Subject<ModalParams>();
  private confirm$ = new Subject<boolean>();

  constructor() { }

  // Open Modal window and set confirm$ value as false
  openModal() {
    $('#Modal').modal('show');
    this.setConfirm(false);
  }

  private closeModal() {
    $('#Modal').modal('hide');
  }

  onConfirm() {
    this.setConfirm(true);
    this.closeModal();
  }

  // Send params$ to create modal
  get modalParams(): Observable<ModalParams> {
    return this.params$;
  }

  // Receive params$ to create modal
  setModalParams(modalParams: ModalParams) {
    this.params$.next(modalParams);
  }

  get confirm(): Observable<boolean> {
    return this.confirm$;
  }

  setConfirm (value: boolean)  {
    this.confirm$.next(value);
  }

}
