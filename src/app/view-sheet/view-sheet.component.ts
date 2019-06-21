import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-sheet',
  templateUrl: './view-sheet.component.html',
  styleUrls: ['./view-sheet.component.scss']
})
export class ViewSheetComponent implements OnInit  {
  constructor() {
  }

  index = 2

  financeFolder =           '../../assets/images/Finance/';
  forceFolder =             '../../assets/images/Force/';
  communicationFolder =     '../../assets/images/Communications/';
  specialInterestFolder =   '../../assets/images/Special Interest/';

  StorageCardsString = localStorage.getItem('Code');
  StorageCardsArray = this.StorageCardsString.split(',');
  code = '512d2';

// tslint:disable-next-line: max-line-length
  cards =   [this.financeFolder + this.StorageCardsArray[0],
             this.forceFolder + this.StorageCardsArray[1],
             this.communicationFolder + this.StorageCardsArray[2],
             this.specialInterestFolder +  this.StorageCardsArray[3],
             this.specialInterestFolder + this.StorageCardsArray[4]
            ];

  ngOnInit() {
  }

  updateScreenSize(){
  }

  trunckIndex(value: number){
    if (value == 4){
      value = 3
    }
    if (value == 0){
      value = 1
    }

    return [value - 1, value, value + 1]
  }

  styleKeeper(value: number){
    if (document.body.clientWidth < 1100 && document.body.clientWidth > 700){
      const trunckedIndex = this.trunckIndex(this.index)

      if (trunckedIndex.includes(value)) {
        return
      }
      else {
        const styles = {'display' : 'none'};
        return styles
      }
    }

    if (document.body.clientWidth < 700) {
      if (this.index == value) {
        return
      }
      else {
        const styles = {'display' : 'none'};
      return styles
      }
    }
  }

  changeCard(direction){
    if (direction == 'r'){
      if (document.body.clientWidth < 1100 && document.body.clientWidth > 700){
        if (this.index < 3){
          this.index += 1
        }
      }
      if (this.index < 4){
        this.index += 1
      }
    }
    else if (direction == 'l'){
      if (document.body.clientWidth < 1100 && document.body.clientWidth > 700){
        if (this.index > 1){
          this.index -= 1
        }
      }
      if (this.index > 0){
        this.index -= 1
      }
    }
  }
}
