import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// import { setTimeout, clearTimeout } from 'timers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  @ViewChild('timer', { static: true }) timerElm: ElementRef;
  timeLimit: string = '02:00';
  currentTime: string = '';
  t: any = '';
  constructor(private router: Router) { }

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
    this.t = setTimeout(() => {
      this.timer();
    }, 1000);
    console.log("time");
    console.log(this.t);
    if (s == 0 && m == 0) {
      this.stopTimer();
    }

  }


  checkSecond(sec) {
    if (sec < 10 && sec >= 0) { sec = "0" + sec }; // add zero in front of numbers < 10
    if (sec < 0) { sec = "59" };
    return sec;

  }
  stopTimer() {
    clearTimeout(this.t);
    console.log('gameover');
    this.router.navigateByUrl('/gameover');
  }

}

