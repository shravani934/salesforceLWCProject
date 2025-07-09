import { LightningElement,  } from 'lwc';

export default class ConditinerRendering extends LightningElement {
    displayDiv = false;
    handleClick() {
        this.displayDiv = true; // toggle the value
    }
   status = 'Morning'; 
   changeHandler(evt){
      this.status = evt.target.value;
   }
   get isMorning(){
      return this. status == 'Morning';
   }
   isAfternoon(){
      return this. status == 'Afternoon';
   }
}