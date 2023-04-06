import { Component, OnInit } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
import * as cardList from '../../assets/card-list.json';
   
@Component({
  selector: 'app-view-sheet',
  templateUrl: './view-sheet.component.html',
  styleUrls: ['./view-sheet.component.scss']
})

export class ViewSheetComponent implements OnInit  {
  constructor() {
  }
  products: any = (cardList as any).default;

  StorageCardsString = localStorage.getItem('Code');
  StorageCardsArray = this.StorageCardsString.split(',');
  cards = [];
  openState = {};
  code = '512d2';

  ngOnInit() {
    this.StorageCardsArray.forEach(card => {
      this.cards.push(cardList.list.find(cardInfo => cardInfo.title === card));
      this.openState[card] = false;
    })
  }

  changeDetailed(cardName) {
    this.openState[cardName] = !this.openState[cardName];
    Object.keys(this.openState).map(_key => {
      if (_key !== cardName) {
        this.openState[_key] = false;
      }
    })
  }

  updateScreenSize(){
  }
}
