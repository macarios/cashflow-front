import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Observable, range} from 'rxjs';
import {filter, map, toArray} from 'rxjs/operators';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input() currentPage: number;     // currently page
  @Input() totalPages: number;      // total pages
  @Input() range = 3;               // how many pages between arrows

  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  pages: Observable<number[]>;

  constructor() { }

  ngOnInit() {
    this.getPages();
  }

  ngOnChanges() {
    this.getPages();
  }

  // Use the defined range to set how many pages will be shown in the component
  getPages() {
    this.pages = range(-this.range, (this.range * 2) + 1)
      .pipe(
        map(currentPage => this.currentPage + currentPage),
        filter(page => this.isValidPageNumber(page, this.totalPages)),
        toArray()
      );
  }

  isValidPageNumber(page: number, totalPages: number): boolean {
    return page > 0 && page <= totalPages;
  }

  // Avoid the default (click) event, check if page is valid and sent page number as an event
  selectPage(page: number, event) {
    event.preventDefault();
    if (this.isValidPageNumber(page, this.totalPages)) {
      this.pageChange.emit(page - 1);
    }
  }

}
