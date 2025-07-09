import { LightningElement,track } from 'lwc';

export default class DataBinding extends LightningElement {

     @track greetingMsg =' world';
    changeHandler(evt){
        console.log('changeHandler was called');
        console.log(evt.target.value);
        this.greetingMsg = evt.target.value;
    }
    
}