import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  userName=""
  display = false;

  servers=["hello","Ram","Raghu"];

  constructor() {
  }

  ngOnInit(): void {
  }


  onReset()
  {
    this.display=true;
    this.servers.push(this.userName);
    var ele = document.getElementById("name") as HTMLInputElement;
    ele.value = "";
  }

  check():boolean{
    return this.userName==="";
  }
}
