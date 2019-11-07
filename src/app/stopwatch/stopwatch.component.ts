import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss'],
})
export class StopwatchComponent implements OnInit {
    currentlyRunning: boolean;
    time: number = 0;
    times;
    display;

  constructor() {  
    this.currentlyRunning = false;
    this.resetStopwatch();
  }



  startStopwatch(){
  	if (!this.time) {
      this.time = performance.now();
      console.log("Qual o time" + this.time)
    }
    if (!this.currentlyRunning) {
      this.currentlyRunning = true;
      requestAnimationFrame(this.step.bind(this));
    }
  }

  resetStopwatch(){
    this.times = 0;

  }

  stopStopwatch(){
    this.currentlyRunning = false;
    this.times = null;
  }

  restartStopwatch(){
    this.resetStopwatch();
  }

  step(timestamp) {

    if (!this.currentlyRunning) return;
    this.calculate(timestamp);
    this.time = timestamp;
    //console.log("timestamp:" + this.time);
    requestAnimationFrame(this.step.bind(this));
  }

  calculate(timestamp){

    var diff = timestamp - this.time;
    this.times += diff / 10;
     console.log("timestamp: " + timestamp + " this.times: " + this.times);
  }

  ngOnInit() {

  }
  
  
}


