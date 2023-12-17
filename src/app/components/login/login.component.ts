import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormControl, FormGroup,ReactiveFormsModule } from '@angular/forms'
import { window } from 'rxjs';
@Component({
  selector: 'app-login',
  standalone: true,
  imports:[ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    
    username:string="rahul123"
    password:string="12345678"

  constructor(private loginService:LoginService){}

  loginForm=new FormGroup({
    username:new FormControl(''),
    password:new FormControl('')
  })
  userLogin(){
    this.loginService.loginUser(this.loginForm.value).subscribe(res=>{
      localStorage.setItem('username',res.username)
      localStorage.setItem('token',res.accessToken)
      alert('Login Successful!!')
    },err=>{
      alert('Login Failed!!')
    })
  }



}
