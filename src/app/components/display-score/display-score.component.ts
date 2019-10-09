import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from 'src/app/services/global-data.service';


@Component({
  selector: 'app-display-score',
  templateUrl: './display-score.component.html',
  styleUrls: ['./display-score.component.css']
})
export class DisplayScoreComponent implements OnInit {
  finalScore = null;
  constructor(private globalDataService: GlobalDataService) { }

  ngOnInit() {
    console.log("HI!");
    console.log(this.globalDataService.data.score);
    this.finalScore = this.globalDataService.data.score;

  }

}
