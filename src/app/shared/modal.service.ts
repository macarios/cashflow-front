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

  openModal() {
    $('#Modal').modal('show');
  }

  private closeModal() {
    $('#Modal').modal('hide');
  }

  onConfirm() {
    this.setConfirm(true);
    this.closeModal();
  }

  get modalParams(): Observable<ModalParams> {
    return this.params$.asObservable();
  }

  setModalParams(modalParams: ModalParams) {
    this.params$.next(modalParams);
  }

  get confirm(): Observable<boolean> {
    return this.confirm$.asObservable();
  }

  setConfirm (value: boolean)  {
    this.confirm$.next(value);
  }

}
