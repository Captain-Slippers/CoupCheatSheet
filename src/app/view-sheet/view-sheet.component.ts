import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-sheet',
  templateUrl: './view-sheet.component.html',
  styleUrls: ['./view-sheet.component.scss']
})
export class ViewSheetComponent implements OnInit  {
  constructor() {
  }

  index = 0

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
    // console.table(this.StorageCards2);
    // console.log(this.StorageCards);
  }

  changeCard(direction){
    if (direction == 'f'){
      if (this.index < 4){
        this.index += 1
      }
    }
    else if (direction == 'b'){
      if (this.index > 0){
        this.index -= 1
      }
    }
  }
}
