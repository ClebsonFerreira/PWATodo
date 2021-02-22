import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cardapio-base',
  templateUrl: './cardapio-base.component.html',
  styleUrls: ['./cardapio-base.component.css']
})
export class CardapioBaseComponent implements OnInit {
  public nome:string = "";
  public urlLogo:string = "";
  displayedColumns: string[] = ['name', 'valor'];
  dataSource :CardapioBase[];
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const nome = this.route.snapshot.paramMap.get('nome');
    if(nome.toUpperCase() === "LUIZ"){
      this.dataSource = LUIZ;
      this.urlLogo = "https://i.pinimg.com/originals/a9/40/9d/a9409d5e0a1e36f3fac1056a870094e9.png";
    }else if(nome.toUpperCase() === "CLEBSON"){
      this.dataSource = CLEBSON;
      this.urlLogo = "https://lh3.googleusercontent.com/proxy/QYPqrFHQI9eZGETuLqa-eq-bXcOz2kez2HlbPng7T901ZZ1lIs4e02alDtGgrOS7p8d0z8Mh7vgFXcls9k1DFO08kCagIlHqQQkiLVk34Ngo2EqMRMgFJOz_Ffp8GGS3tw";
    }else{
      this.dataSource = [];
      this.urlLogo = "";
    }
  }

}

export interface CardapioBase {
  name: string;
  valor:number;
}

const LUIZ: CardapioBase[] = [
 {name:"Batata Frita",valor:15.00}
];

const CLEBSON: CardapioBase[] = [
  {name:"Batata Frita",valor:19.00},
  {name:"Macaxeira Frita",valor:19.00}
];

