import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent implements OnInit  {
  x :string = "";
  ngOnInit() : void{this.http.get("https://dog.ceo/api/breeds/image/random").subscribe(
    res => {
      this.x = res["message"];
      console.log(this.x)
    },
    err => {
      console.log(err);
    }
  );}
  title = 'API-REST---EDDASSOULI-e-FALCIONE';
  constructor(private http : HttpClient){}
  aggiorna(){
    this.http.get("https://dog.ceo/api/breeds/image/random").subscribe(
      res => {
        this.x = res["message"];
        console.log(this.x)
      },
      err => {
        console.log(err);
      }
    );
  }
}

 

