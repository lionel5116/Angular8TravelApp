import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ValueTransformer } from '@angular/compiler/src/util';
import {MyApiService} from '../my-api.service';


//for ngrx
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { ILogin } from '../ILogin.model';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  angForm: FormGroup;

  login : {environment,
           email,
           password} = {environment: "--select--", email: "", password: ""};

  constructor(private router: Router,
            private mySvcApi: MyApiService,
            private store: Store<AppState>,
            private fb: FormBuilder,
            ) {  this.createForm();}

  createForm() {
      this.angForm = this.fb.group({
          environment: ['', Validators.required ],
          email: ['', Validators.required ],
          password: ['', Validators.required ]
      });
    }

  addLogin(environment, email,password) {
      this.store.dispatch({
        type: 'ADD_LOGIN',
        payload: <ILogin> {
               environment: environment,
               email: email,
               password:password
              }
            });
        console.log(this.angForm.value)
        this.goToTravelFormRedux();
    }

  ngOnInit() {
  }

  goToTravelFormRedux()
  {
    this.router.navigate(['/TravelDetails']);
  }

  testSomething(something) {
    alert("You selected value: " + something);
  }

  goToTravelForm()
  {
     if(this.login.environment != "" &&
        this.login.email != "" &&
        this.login.password != "" &&
        this.login.environment != "--select--")
        {
          this.mySvcApi.setLoginCredentials(this.login.environment,
                                            this.login.email,
                                            this.login.password);
          this.router.navigate(['/TravelDetails'])
        }
        else
        {
          alert("Please select/enter all applicable values..");
        }
  }




}
