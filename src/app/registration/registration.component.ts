import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private registerservice:RegistrationService) { }

  ngOnInit(): void {
  }

  title = "Registration from ts file"

  first_name = "";

  registerForm = new FormGroup({
    first_name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    last_name: new FormControl(''),
    user_name: new FormControl(''),
    password: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
  })

  onsubmit(){
    alert("Registration submitted");
    console.log(this.registerForm.value);
    this.registerservice.addUser(this.registerForm.value).subscribe((res) =>{
      console.log(res);
      this.onreset();
    })
  }

  onreset(){
    this.registerForm.setValue({
      first_name: "",
    last_name: "",
    user_name: "",
    password: "",
    phone: "",
    email: "",
    })
  }

}
