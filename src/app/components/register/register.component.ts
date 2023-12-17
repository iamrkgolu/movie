import { Component } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { User } from '../../models/user';
import { FormControl, FormGroup,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm=new FormGroup({
    username:new FormControl(''),
    roles:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    securityQuestion:new FormControl(''),
    securityAnswer:new FormControl('')
  })
  constructor(private registerService: RegisterService) {

  }

  registerUser() {
    const data: User = {
      username:this.registerForm.value.username,
      roles: [`${this.registerForm.value.roles}`],
      email:this.registerForm.value.email,
      password:this.registerForm.value.password,
      securityQuestion:this.registerForm.value.securityQuestion,
      securityAnswer:this.registerForm.value.securityAnswer


    }
    this.registerService.registerUser(data).subscribe(res => {
     alert('Registration Successful')
    },err=>{
      alert('Registration Failed!!')
    })
  }

}
