import { Injectable } from '@angular/core';
import { WillOption } from './willoption';
import { WillData } from './will-data';
@Injectable({
  providedIn: 'root'
})
export class WillService {

  constructor() { }

  willData!: WillData;

  willOptionList: WillOption[] = [
    {
      id: 1,
      name: 'Simple',
      description: "Legal document that outlines how a person's assets and property should be distributed",
      templateLink: 'simple'
    },
    {
      id: 2,
      name: 'Conditional',
      description: "A conditional will is a type of Last Will and Testament that includes provisions specifying that certain actions or events must occur before the Will's instructions take effect.",
      templateLink: 'simple'
    },
    {
      id: 3,
      name: 'Trust',
      description: 'A trust will creates a trust for the testator (the person making the will). This trust can manage assets for beneficiaries',
      templateLink: 'trust'
    },
]

getWillOptions(): WillOption[] {
  return this.willOptionList;
}

getDocument(): string {

  var apiUrl = 'http://localhost:8080';

  if('Conditional' === this.willData.type){
    apiUrl += '/conditional';
  }else if('Trust' === this.willData.type){
    apiUrl += '/trust';
  }else{
    apiUrl += '/simple';
  }
  const requestOptions = {
    responseType: 'blob',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'POST'
    },
    body: JSON.stringify(this.willData),
  };

  fetch(apiUrl, requestOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.arrayBuffer();
 })
  .then(data => {
    const blob = new Blob([data], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  })
  .catch(error => {
    console.error('Error:', error);
  });
  return '';
}

setWillData(willData:WillData){
  this.willData = willData;
}

getWillData(){
    if(!this.willData){
      this.willData = ({    
        user: {
          firstName: '',
          lastName: '',
          middleName: '',
          addressData: {
            address: '',
            city: '',
            province: ''
          },
          complete:false
        },
        complete : false,
        beneficiaries: [],
        newBeneificiary: false,
        type:'',
        description:''
      });
    }
    return this.willData;
  }
}