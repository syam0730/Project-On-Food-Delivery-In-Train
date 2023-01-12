import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { PNRserviceService } from '../pnrservice.service';

@Component({
  selector: 'app-traindelpage',
  templateUrl: './traindelpage.component.html',
  styleUrls: ['./traindelpage.component.css']
})
export class TraindelpageComponent implements OnInit {

  PNRform: any 
  
  constructor(private router: Router, private service: PNRserviceService) { 
    this.PNRform = new FormGroup({
        PNR : new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"), Validators.minLength(10), Validators.maxLength(10)])
      })

  }

  data: any = {};
  sandra: string = '';
  fetchID: any = '';
  PNR: any = '';
  Clickme() {
    // console.log(this.PNRform.value);
    // alert(`Thank you ${this.PNRform.value.PNR}`);
    this.sandra = JSON.stringify(this.PNRform.value);
    this.data.PNR = this.PNRform.value.PNR;
    this.singleData();
   
  }


  ngOnInit() {
    // this.PNR = this.data.PNR
    // console.log(this.PNR)
    // this.getData();
    
  }



  // getData() {
  //   this.service.getData().subscribe((response: any) => {
  //     console.log('response from API is ', response)
  //     this.fetchID = response;
  //   }, (error) => {
  //     console.log('error is', error);
  //   })
  // }

  singleData() {
    this.service.singleData(this.data).subscribe((response: any) => {
      console.log('response from API is ', response)
      this.PNR = response;
    }, (error) => {
      console.log('error is', error);
    })
  }
}
