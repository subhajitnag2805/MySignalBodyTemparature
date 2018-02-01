import { Component, OnInit } from '@angular/core';
import * as io from "socket.io-client";

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css']
})
export class FourComponent implements OnInit {

  // title = 'app';
  // socket:any = null;
  // status:any = 'off';
  // value:any;
  
  // public lineChartData:Array<any>=[{
	// data:[], label:'Series B'
  // }];
  // public lineChartLabels:Array<any>=[];
  // public lineChartOptions:any={
	// responsive:true
  // };
  
  // public lineChartColors: Array<any> = [
  //   { // dark grey
  //     backgroundColor: 'rgba(77,83,96,0.2)',
  //     borderColor: 'rgba(77,83,96,1)',
  //     pointBackgroundColor: 'rgba(77,83,96,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(77,83,96,1)'
  //   }
  // ];
  
  // public lineChartLegend:boolean=true;
  // public lineChartType:String='line';

  constructor() {
      // this.socket = io('http://localhost:7000');
  }

  ngOnInit() {
  }
  
  // lightOn(){
  //    this.socket.emit('lightOnOff', {status:'ON'});
  //    this.status = 'on';
  // }
  
  // lightOff(){
  //    this.socket.emit('lightOnOff', {status:'OFF'});
  //    this.status = 'off';
  // }
  
  // toggleLight(){
  //      if(this.status == 'off'){
  //            this.lightOn();
  //      }else{
  //            this.lightOff();
  //      }
  // }
  
  // /**send status from frontend */
  // generateNumber(){
  //    let _base = this;
  //    _base.socket.emit('generate', {status:'OK'});
  //    _base.socket.on('arduino',function(data){
  //         _base.value=data.value;
  //         _base.push(data);
  //    });
  // }
  
  // /** Insert data into graph and show*/
	// push(data)
	// {
		
	// 	let _lineChartData:Array<any> = new Array(this.lineChartData.length);
		
	// 	 _lineChartData[0] = { data: new Array(this.lineChartData[0].data.length + 1), label: this.lineChartData[0].label };
	// 	_lineChartData[0].data = this.lineChartData[0].data;
	// 	_lineChartData[0].data.push(data.value);
	// 	this.lineChartLabels.push(new Date().getTime());
	// 	this.lineChartData = _lineChartData;
	// 	}

}
