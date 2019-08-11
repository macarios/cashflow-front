import {Event} from '../events/event';
export interface Page {
  content: Event;
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number; // pageNumber
  numberOfElements: number;
  first: boolean;
}
