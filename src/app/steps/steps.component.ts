import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {
  
  @Input() currentStep: number;

  @Input() steps: string[] = [];

  constructor() { }

  ngOnInit() {
  }
}