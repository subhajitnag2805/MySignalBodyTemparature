import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../app.httpService';
import * as io from "socket.io-client";

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
  providers: [HttpService]
})
export class OneComponent implements OnInit {

  phoneNumber: any;
  name: any;
  email: any;
  socket: any = null;

  public start_Temp: boolean = true;
  public stop_Temp: boolean = true;
  public reset_Graph: boolean = true;

  tempData: any;
  stopReadingMess: any;

  public lineChartData: Array<any> = [{
    data: [], label: 'Series B'
  }];
  public lineChartLabels: Array<any> = [];
  public lineChartOptions: any = {
    responsive: true
  };

  public lineChartColors: Array<any> = [
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];

  public lineChartLegend: boolean = true;
  public lineChartType: String = 'line';

  constructor(private httpService: HttpService) {
    this.socket = io('http://localhost:7000');
  }

  ngOnInit() {
  }

  sendOtp() {
    let _base = this;
    let data = {
      phoneNumber: this.phoneNumber,
      role: 'individual'
    }
    _base.httpService.login(data).then(function (result: any) {
      console.log(result);
      _base.name = result.profile.name;
      _base.email = result.profile.email;
      _base.start_Temp = false;
    }, function (error) {
      console.log(error);
    });
  }

  start_Temp_Func() {
    let _base = this;
    _base.socket.emit('start', { status: 'START' });
    _base.socket.on('arduino', function (data) {
      _base.tempData = data.value;
      console.log(_base.tempData);
      _base.push(data);
    });
    this.stop_Temp = false;
  }

  stop_Temp_Func() {
    let _base = this;
    _base.socket.emit('stop', { status: 'STOP' });
    _base.socket.on('arduino_Stop', function (data) {
      _base.stopReadingMess = data.value_Stop;
      console.log(_base.stopReadingMess);
    });
    this.reset_Graph = false;
  }

  // reset_Graph_Func() {
  //   console.log("Ok");
  //   this.lineChartData = [];        
  //   this.reset();
  // }

  /** Insert data into graph and show*/
  push(data) {
    let _lineChartData: Array<any> = new Array(this.lineChartData.length);
    _lineChartData[0] = { data: new Array(this.lineChartData[0].data.length + 1), label: this.lineChartData[0].label };
    _lineChartData[0].data = this.lineChartData[0].data;
    _lineChartData[0].data.push(data.value);
    this.lineChartLabels.push(new Date().getTime());
    this.lineChartData = _lineChartData;
  }
  /**Reset graph */
  // reset() {
  //   let _lineChartData: Array<any> = new Array(this.lineChartData.length);
  //   _lineChartData[0] = { data: new Array(0), label: this.lineChartData[0].label };
  //   _lineChartData[0].data = this.lineChartData[0].data;
  //   this.lineChartData = _lineChartData;
  // }



}
