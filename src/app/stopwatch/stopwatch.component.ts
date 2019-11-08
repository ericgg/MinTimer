import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss'],
})
export class StopwatchComponent implements OnInit {
    currentlyRunning: boolean;
    time: number = 0;
    times;//: Array<number> = [0, 0, 0, 0];
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
    this.times = [0, 0, 0, 0];

  }

  stopStopwatch(){
    this.currentlyRunning = false;
    this.time = null;
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
    this.times[3] += diff / 10;

    if (this.times[3] >= 100){
      this.times[2] += 1;
      this.times[3] -= 100;
    }
    if (this.times[2] >= 60){
      this.times[1] += 1;
      this.times[2] -= 60;
    }
    if (this.times[1] >= 60){
      this.times[0] += 1;
      this.times[1] -= 60;
    }
  }

  ngOnInit() {

  }
  
  
}


