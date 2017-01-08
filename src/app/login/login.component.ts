import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {  }

  ngOnInit() {
  }
  submitForm(formvalue, $event){
          if(formvalue.username === "admin" && formvalue.password === "admin123"){
             this.router.navigate(['home']);
             $event.target.reset();
          }else{
            $event.target.reset();
            alert("Error! Enter Correct Credentials");
          }
            
  }
}
