import { Component, OnInit } from '@angular/core';
import {EventsService} from "../events.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-events-form',
  templateUrl: './events-form.component.html',
  styleUrls: ['./events-form.component.css']
})
export class EventsFormComponent implements OnInit {

  form: FormGroup;
  outcome: boolean = true;

  constructor(private eventsService: EventsService,
              private fb: FormBuilder,
              private route: ActivatedRoute) { }

  ngOnInit() {

    console.log(this.eventsService.list());


    this.form = this.fb.group({
      id: [null],
      date: [null],
      kind: [null],
      description: [null],
      reference: [null],
      value: [null],
      notes: [null]

     });

    this.onOut();
  }

  onSubmit() {
    console.log(this.form.value);
    this.eventsService.create(this.form.value);

  }

  onIn() {
    this.outcome = false;
    this.form.get('kind').setValue('in');
  }

  onOut() {
    this.outcome = true;
    this.form.get('kind').setValue('out');
  }


}
