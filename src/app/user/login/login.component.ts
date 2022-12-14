import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials = {
    email: '',
    password: ''
  }

  constructor(
    private auth: AngularFireAuth
  ) { }

  ngOnInit(): void {
  }
  
  inSubmission = false
  showAlert = false
  alertMsg = 'Please wait! Your account is logging in.'
  alertColor = 'blue'

  async login() {
    this.showAlert = true
    this.alertMsg = 'Please wait! Your account is logging in.'
    this.alertColor = 'blue'
    this.inSubmission = true

    try {
      await this.auth.signInWithEmailAndPassword(
        this.credentials.email, this.credentials.password
      )
    } catch(e) {
      console.error(e)
      
      this.alertMsg = 'Incorrect Username/Password!'
      this.alertColor = 'red'
      this.inSubmission = false
      return
    }
    
    this.alertMsg = 'Success! Your account has been login.'
    this.alertColor = 'green'
  }

}
