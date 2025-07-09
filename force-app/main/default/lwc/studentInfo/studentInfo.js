import { LightningElement,api } from 'lwc';

export default class StudentInfo extends LightningElement {
       @api studentInfo; 
       tileclickHandler(){
       // alert('clicked');
         const selectEvent = new CustomEvent('tileclick', { detail: this.studentInfo });
       this.dispatchEvent(selectEvent);
    }
       }
       // studentinfo={name:'Shravani',age:25,marks:100}}
