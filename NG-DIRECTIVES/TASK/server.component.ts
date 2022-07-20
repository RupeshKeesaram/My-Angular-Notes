import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  display=false;

  clicks=[1,2,3];

  integer:number = 4;
  constructor() {
  }

  ngOnInit(): void {
  }


  toggle(){
    this.clicks.push(this.integer);
    this.integer++;
    console.log(this.clicks);
    if(this.display===false){
      this.display=true;
    }
    else{
      this.display=false;
    }
  }
}
