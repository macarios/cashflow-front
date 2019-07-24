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

  constructor(private eventsService: EventsService,
              private fb: FormBuilder,
              private route: ActivatedRoute) { }

  ngOnInit() {

    console.log(this.route);

    this.form = this.fb.group({
      id: [null],
      description: [null]
     });
  }

  onSubmit() {
    console.log(this.form);
    this.eventsService.create(this.form.value);

  }


}
