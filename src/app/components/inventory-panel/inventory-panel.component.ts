import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-inventory-panel',
  templateUrl: './inventory-panel.component.html',
  styleUrls: ['./inventory-panel.component.css']
})
export class InventoryPanelComponent implements OnInit {
  textBrightBow: boolean = true;
  textBrightButterfly: boolean = true;
  textBrightCheese: boolean = true;
  textBrightCoins: boolean = true;
  textBrightDice: boolean = true;
  textBrightKey: boolean = true;
  textBrightPears: boolean = true;
  textBrightPencil: boolean = true;
  textBrightPiggyBank: boolean = true;
  textBrightSpoon: boolean = true;
  score = 0;
  constructor(private communicationService: CommunicationService) { }

  ngOnInit() {
    console.log("ngoninit in inventory panel");
    this.communicationService.receiveData.subscribe((res)=>{
      this.score = res.score;
      console.log(res);
      if(res.image==="bow"){
        this.textBrightBow=false;
      }
      else if(res.image==="butterfly"){
        this.textBrightButterfly=false;
      }
      else if(res.image==="cheese"){
        this.textBrightCheese=false;
      }
      else if(res.image==="coins"){
        this.textBrightCoins=false;
      }
      else if(res.image==="dice"){
        this.textBrightDice=false;
      }
      else if(res.image==="key"){
        this.textBrightKey=false;
      }
      else if(res.image==="pears"){
        this.textBrightPears=false;
      }
      else if(res.image==="pencil"){
        this.textBrightPencil=false;
      }
      else if(res.image==="piggybank"){
        this.textBrightPiggyBank=false;
      }
      else if(res.image==="spoon"){
        this.textBrightSpoon=false;
      }
      else{
        alert("Find the object");
      }

    })
  }
  
}
