import { Component, OnInit } from "@angular/core";
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})

export class ServersComponent implements OnInit{
    serverId: number = 10; 
    serverStatus: string = 'offline'; 
    serverCreationStatus: string = 'no server'; 
    serverName: string = 'Test Server';
    allowNewServer: boolean = false;
    serverCreated: boolean = false;

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }

    ngOnInit(): void {
        
    }

    onCreateServer() {
        this.allowNewServer = true;
        this.serverCreated = true; 
        this.serverCreationStatus = 'server created! ' + this.serverName;
    }

    onUpdateServerName(event: Event) {
        console.log(event);
        this.serverName = (<HTMLInputElement> event.target).value;
    }
}

