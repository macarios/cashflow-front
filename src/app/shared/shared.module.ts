import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [ ConfirmModalComponent, PaginationComponent ],
  imports: [ CommonModule ],
  exports: [ConfirmModalComponent, PaginationComponent],
  entryComponents: [ ConfirmModalComponent ]
})
export class SharedModule { }
