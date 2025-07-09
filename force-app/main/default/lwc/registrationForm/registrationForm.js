import { LightningElement, track } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import REG_OBJ from '@salesforce/schema/Registration__c';
import FIRST from '@salesforce/schema/Registration__c.First_Name__c';
import LAST from '@salesforce/schema/Registration__c.Last_Name__c';
import EMAIL from '@salesforce/schema/Registration__c.Email__c';
import PW from '@salesforce/schema/Registration__c.Password__c';
import { NavigationMixin } from 'lightning/navigation';

export default class RegistrationForm extends NavigationMixin(LightningElement) {
  @track firstName;
  @track lastName;
  @track email;
  @track password;
  @track confirmPassword;
  @track error;

  handleFirstNameChange(e) { this.firstName = e.target.value; }
  handleLastNameChange(e) { this.lastName = e.target.value; }
  handleEmailChange(e) { this.email = e.target.value; }
  handlePasswordChange(e) { this.password = e.target.value; }
  handleConfirmPasswordChange(e) { this.confirmPassword = e.target.value; }

  handleRegister() {
    if (this.password !== this.confirmPassword) {
      this.error = 'Passwords do not match';
      return;
    }

    const fields = {
      [FIRST.fieldApiName]: this.firstName,
      [LAST.fieldApiName]:  this.lastName,
      [EMAIL.fieldApiName]: this.email,
      [PW.fieldApiName]:    this.password
    };

    createRecord({ apiName: REG_OBJ.objectApiName, fields })
      .then(record => {
        console.log('✅ Registration saved:', record.id);
        this.navigateToLogin();
      })
      .catch(err => {
        console.error(err);
        this.error = err.body?.message || 'Error during registration';
      });
  }

  // Navigate to the Login App Page in Lightning
  navigateToLogin() {
    this[NavigationMixin.Navigate]({
      type: 'standard__navItemPage',
      attributes: {
        apiName: 'LoginPage' // ← Replace with your App Page's DeveloperName
      } 
    });
  }
}
