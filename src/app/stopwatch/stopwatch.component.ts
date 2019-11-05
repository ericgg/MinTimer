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
  	this.currentlyRunning = true;
  	this.time = performance.now();
  }
   

  ngOnInit() {

  }

}
