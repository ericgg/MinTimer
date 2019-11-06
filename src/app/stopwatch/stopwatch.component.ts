import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss'],
})
export class StopwatchComponent implements OnInit {
  currentlyRunning: boolean = false;
  time: number = 0;

  constructor() {}

  startStopwatch(){
  	if (!this.time) this.time = performance.now();
    if (!this.currentlyRunning) {
      this.currentlyRunning = true;
      requestAnimationFrame(this.step.bind(this));
    }
  }

  step(timestamp) {
    if (!this.currentlyRunning) return;
    this.time = timestamp;
    requestAnimationFrame(this.step.bind(this));
  }
   

  ngOnInit() {

  }
}


