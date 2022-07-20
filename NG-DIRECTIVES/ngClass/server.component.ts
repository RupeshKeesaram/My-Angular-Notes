import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  userName=""
  display = false;


  constructor() {
  }

  ngOnInit(): void {
  }


  onReset()
  {
    this.display=true;
    var ele = document.getElementById("name") as HTMLInputElement;
    ele.value = "";
  }

  check():boolean{
    return this.userName==="";
  }

  getColor(){
    return this.display===true? "green" : "red";
  }

}
