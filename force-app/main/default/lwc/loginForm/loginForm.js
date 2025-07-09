import { LightningElement, track } from 'lwc';
import communityLogin from '@salesforce/apex/CommunityLoginController.login';

export default class CustomLogin extends LightningElement {
  @track username = '';
  @track password = '';
  @track error = '';

  handleUsernameChange(evt) {
    this.username = evt.target.value;
  }

  handlePasswordChange(evt) {
    this.password = evt.target.value;
  }

  handleLogin() {
    communityLogin({ username: this.username, password: this.password })
      .then((url) => {
        if (url) {
          window.location.href = url;
        } else {
          this.error = 'Login failed';
        }
      })
      .catch((e) => {
        this.error = 'Invalid credentials';
        console.error(e);
      });
  }
}
