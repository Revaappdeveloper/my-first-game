import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-image-component',
  templateUrl: './image-component.component.html',
  styleUrls: ['./image-component.component.css']
})
export class ImageComponentComponent implements OnInit {
  bowAnimation: boolean = false;
  butterflyAnimation: boolean = false;
  cheeseAnimation: boolean = false;
  coinsAnimation: boolean = false;
  diceAnimation: boolean = false;
  keyAnimation: boolean = false;
  pencilAnimation: boolean = false;
  pearsAnimation: boolean = false;
  piggyBankAnimation: boolean = false;
  spoonAnimation: boolean = false;
score = 0;


  constructor( private communicationService: CommunicationService) { }

  ngOnInit() {
  }
  startBowAnimation(){
    this.bowAnimation = true;
    
    this.score += 10;
    this.communicationService.sendData({image:"bow", score: this.score});
    
  }
  startButterflyAnimation(){
    this.butterflyAnimation = true;
   
    this.score += 10;
    this.communicationService.sendData({image:"butterfly", score: this.score});
  }
  startCheeseAnimation(){
    this.cheeseAnimation = true;
    
    this.score += 10;
    this.communicationService.sendData({image:"cheese", score: this.score});
  }
  startCoinsAnimation(){
    this.coinsAnimation = true;
    
    this.score += 10;
    this.communicationService.sendData({image:"coins", score: this.score});
  }
  startDiceAnimation(){
    this.diceAnimation = true;
    this.score += 10;
    this.communicationService.sendData({image:"dice", score: this.score});

  }
  startKeyAnimation(){
    this.keyAnimation = true;
    this.score += 10;
    this.communicationService.sendData({image:"key", score: this.score});

  }
  startPearsAnimation(){
    this.pearsAnimation = true;
    this.score += 10;
    this.communicationService.sendData({image:"pears", score: this.score});

  }
  startPiggyBankAnimation(){
    this.piggyBankAnimation = true;
    this.score += 10;
    this.communicationService.sendData({image:"piggybank", score: this.score});

  }
  startPencilAnimation(){
    this.pencilAnimation = true;
    this.score += 10;
    this.communicationService.sendData({image:"pencil", score: this.score});

  }
  startSpoonAnimation(){
    this.spoonAnimation = true;
    this.score += 10;
    this.communicationService.sendData({image:"spoon", score: this.score});

  }

}
