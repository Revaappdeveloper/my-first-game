import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  @ViewChild('timer', { static: true }) timerElm: ElementRef;
  timeLimit: string = '03:00';
  currentTime: string = '';
  constructor() { }

  ngOnInit() {
    // this.timerElm.nativeElement.innerHTML = "03" + ":" + "00";
    this.currentTime = this.timeLimit;
    this.timer();
  }
  timer() {

    // var presentTime = this.timerElm.nativeElement.innerHTML;
    var presentTime = this.currentTime; 
    var timeArray: any = presentTime.split(/[:]+/);
    var m: any = timeArray[0];
    var s = this.checkSecond((timeArray[1] - 1));
    if (s == 59) { m = m - 1 }
    //if(m<0){alert('timer completed')}
    // this.timerElm.nativeElement.innerHTML = m + ":" + s;
    this.currentTime = m + ":" + s;
    setTimeout(() => {
      this.timer();
    }, 1000);
    console.log("time");
  }

  checkSecond(sec) {
    if (sec < 10 && sec >= 0) { sec = "0" + sec }; // add zero in front of numbers < 10
    if (sec < 0) { sec = "59" };
    return sec;
  }
}

