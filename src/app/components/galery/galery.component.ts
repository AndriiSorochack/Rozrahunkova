import { Component, OnInit } from '@angular/core';
import { GaleryImgModel } from 'src/app/models/GaleryImgModel';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss'],
})
export class GaleryComponent implements OnInit {
  private readonly IMG_SIZE: number = 5;
  public galeryImgs: GaleryImgModel[] = [];

  constructor() {
    this.setGalery();
  }

  ngOnInit(): void {}

  private setGalery() {
    debugger;
    for (let i: number = 0; i < this.IMG_SIZE; i++) {
      this.galeryImgs.push({
        Name: `Rectangle 7${i}.png`,
        ImgSrc: `../../../assets/img/galery/Rectangle 7${i}.png`,
      });
    }
  }
}
