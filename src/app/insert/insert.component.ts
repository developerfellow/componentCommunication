import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent {
  serverName:string = '';
  serverStatus:string = '';
  @Output() insert:EventEmitter<any> = new EventEmitter();

  onInsertHandler(){
    //console.log(this.serverName);
    //console.log(this.serverStatus);
    this.insert.emit({name:this.serverName,status:this.serverStatus})
  }

}
