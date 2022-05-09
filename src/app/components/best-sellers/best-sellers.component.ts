import { Component, OnInit } from '@angular/core';
import { CoffeBeanModel } from '../../models/CoffeBeanModel';

@Component({
  selector: 'app-best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.scss'],
})
export class BestSellersComponent implements OnInit {
  public coffeBeans: CoffeBeanModel[] = [
    {
      Name: 'Medium Roast Coffee',
      Price: 25,
      StarsAmount: 4,
      ImgSrc: "../../../assets/img/Beans/models/medium-roast.png"
    },
    {
      Name: 'Light Coffee Roasts',
      Price: 30,
      StarsAmount: 3,
      ImgSrc: "../../../assets/img/Beans/models/light-coffee.png"
    },
    {
      Name: 'Dark Coffee Roasts',
      Price: 35,
      StarsAmount: 5,
      ImgSrc: "../../../assets/img/Beans/models/dark-coffee.png"
    },
  ];

  constructor() {}

  ngOnInit(): void {

  }
}
