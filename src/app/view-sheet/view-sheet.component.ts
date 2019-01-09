import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-sheet',
  templateUrl: './view-sheet.component.html',
  styleUrls: ['./view-sheet.component.scss']
})
export class ViewSheetComponent implements OnInit {

  communicationCards =    ["Director", "Newscaster", "Producer", "Reporter", "Writer"];
  financeCards =          ["Banker", "Capitalst", "Speculator", "Spy"];
  forceCards =            ["Crime Boss", "General", "Guerrilla", "Judge", "Mercenary"];
  specialInterestCards =  ["Communist", "Customers Office", "Foreign Consular", 
                          "Interllectual", "Lawyer", "Peace Keeper", "Politician", "Priest", "Protester"];

  financeFolder =           "../../assets/images/Finance/";
  forceFolder =             "../../assets/images/Force/";
  communicationFolder =     "../../assets/images/Communications/";
  specialInterestFolder =   "../../assets/images/Special Interest/";

  StorageCards = localStorage.getItem('Code');
  

  constructor() { }

  ngOnInit() {
  }
  
  code = "512d2";
  cards = [this.financeFolder + "Banker", this.forceFolder + "Mercenary", this.communicationFolder + "Director", this.specialInterestFolder +  "Protester", this.specialInterestFolder + "Customs Officer"];


  nextCard(){
    var tmp;
    var tmp2 = this.cards[4]
    console.table(this.cards);


    for (let i = 4; i >= 0; i--) {
      console.log("Log"+i);
      if (i == 0){
        this.cards[i] = tmp2;
      }
      else{
        tmp = this.cards[i];
        this.cards[i] = this.cards[i-1];
      }
      console.table(this.cards);
    }
  }
}