import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-sheet',
  templateUrl: './create-sheet.component.html',
  styleUrls: ['./create-sheet.component.scss']
})
export class CreateSheetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  finance =               ['Banker', 'Spy' , 'Speculator', 'Capitalist'];
  force =                 ['Crime Boss', 'General', 'Guerrilla', 'Judge', 'Mercenary'];
  communications =        ['Director', 'Newscaster', 'Producer', 'Reporter'];
  specialInterest =       ['Communist', 'Customs Officer', 'Foreign Consular', 'Intellectual',
                          'Lawyer', 'Peace Keeper', 'Politician', 'Priest', 'Protester'];

  financeButtons =        [false, false, false, false]
  forceButtons =          [false, false, false, false, false]
  communicationsButtons = [false, false, false, false]
  specialInterestButtons = [false, false, false, false, false, false, false, false, false]

  completedArray = true

  //Array goes: Finance, Force, Communications, Special Interest, Special Interest
  currentArray = ['N', 'N', 'N', 'N', 'N'];

  declaringArray(item: string){
    if (this.finance.includes(item)) {
      this.currentArray[0] = item;
      this.financeButtons = [false, false, false, false];
      this.financeButtons[this.finance.indexOf(item)] = true;

      this.checkArray();
    }

    if (this.force.includes(item)) {
      this.currentArray[1] = item;
      this.forceButtons = [false, false, false, false, false];
      this.forceButtons[this.force.indexOf(item)] = true;

      this.checkArray();
    }

    if (this.communications.includes(item)) {
      this.currentArray[2] = item;
      this.communicationsButtons = [false, false, false, false, false];
      this.communicationsButtons[this.communications.indexOf(item)] = true;

      this.checkArray();
    }

    if (this.specialInterest.includes(item)) {
      this.specialInterestButtons = [false, false, false, false, false, false, false, false, false]
      this.specialInterestButtons[this.specialInterest.indexOf(item)] = true;
      this.specialInterestButtons[this.specialInterest.indexOf(this.currentArray[3])] = true;

      this.currentArray[4] = this.currentArray[3];
      this.currentArray[3] = item;

      this.checkArray();
    }
  }

  checkArray(){
    if (this.currentArray.indexOf('N') == -1 ){
      this.completedArray = false
    }
  }

  createSheet(){
    var tmp = ''
    this.currentArray.forEach(i => {
      tmp = tmp + i + ',';
    });
    localStorage.removeItem('Code');
    localStorage.setItem('Code', tmp);
  }
}
