import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-sheet',
  templateUrl: './view-sheet.component.html',
  styleUrls: ['./view-sheet.component.scss']
})
export class ViewSheetComponent implements OnInit {
  constructor() { }

  communicationCards =    ['Director', 'Newscaster', 'Producer', 'Reporter', 'Writer'];
  financeCards =          ['Banker', 'Capitalst', 'Speculator', 'Spy'];
  forceCards =            ['Crime Boss', 'General', 'Guerrilla', 'Judge', 'Mercenary'];
  specialInterestCards =  ['Communist', 'Customs Officer', 'Foreign Consular',
                          'Intellectual', 'Lawyer', 'Peace Keeper', 'Politician', 'Priest', 'Protester'];

  financeFolder =           '../../assets/images/Finance/';
  forceFolder =             '../../assets/images/Force/';
  communicationFolder =     '../../assets/images/Communications/';
  specialInterestFolder =   '../../assets/images/Special Interest/';

  StorageCards = localStorage.getItem('Code');
  StorageCards2 = this.StorageCards.split(',');
  code = '512d2';


// tslint:disable-next-line: max-line-length
  cards =   [this.financeFolder + this.StorageCards2[0],
             this.forceFolder + this.StorageCards2[1],
             this.communicationFolder + this.StorageCards2[2],
             this.specialInterestFolder +  this.StorageCards2[3],
             this.specialInterestFolder + this.StorageCards2[4]
            ];

  ngOnInit() {
    console.table(this.StorageCards2);
    console.log(this.StorageCards);

  }


  nextCard(){
    // var tmp;
    // var tmp2 = this.cards[4]
    // console.table(this.cards);


    // for (let i = 4; i >= 0; i--) {
    //   if (i == 0){
    //     this.cards[i] = tmp2;
    //   } else{
    //     tmp = this.cards[i];
    //     this.cards[i] = this.cards[i-1];
    //   }
    //   // console.table(this.cards);
    // }
  }
}
