import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  allowNewServer:boolean=true;

  serverCreation:String="Server was not created !";

  serverName="Rupesh";

  constructor() {

    // The Serer button will get disabled after 2000 milliseconds

    setTimeout(()=>{
      this.allowNewServer=false;
    },20000)
   }

  ngOnInit(): void {
  }

  // method for onCreateServer
  onCreateServer():void{
    this.serverCreation="Server Got Created and name is "+this.serverName.toUpperCase()+"!";
  }
}
