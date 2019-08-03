import {Component, OnInit} from '@angular/core';
import {EventsService} from '../events.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-events-form',
  templateUrl: './events-form.component.html',
  styleUrls: ['./events-form.component.css']
})
export class EventsFormComponent implements OnInit {

  form: FormGroup;
  outcome = true;

  constructor(private eventsService: EventsService,
              private fb: FormBuilder,
              // private route: ActivatedRoute,
              ) { }

  ngOnInit() {

    this.newForm();

    // Keep listening event$ to populate form when edit button is clicked
    this.eventsService.event$.subscribe(data => {
      this.outcome = data.kind === 'out'; // change button on form html
      this.form.patchValue({
        id: data.id,
        date: data.date.substr(0, 10), // use only the first 10 characters
        kind: data.kind,
        description: data.description,
        reference: data.reference,
        value: data.value,
        notes: data.notes,
      });
    });

  }

  newForm() {
    this.form = this.fb.group({
      id: [null],
      date: [null],
      kind: [null],
      description: [null],
      reference: [null],
      value: [null],
      notes: [null]
    });

    this.isOut();
  }

  onSubmit() {
    // console.log(this.form.value.id);
    this.eventsService.createOrUpdate(this.form.value);
    this.newForm();
  }

  isIn() {
    this.outcome = false;
    this.form.get('kind').setValue('in');
  }

  isOut() {
    this.outcome = true;
    this.form.get('kind').setValue('out');
  }

}
