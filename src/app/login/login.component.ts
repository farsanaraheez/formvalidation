import { Component } from '@angular/core';
import { User } from '../user';
// import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    topics = ['Angular','js','React'];
    userModel = new User('farsana','abcdef','angular')
    

    onSubmit(){
        console.log(this.userModel)
    }
    // constructor(private _enrollmentservice:EnrollmentService){}
    // onSubmit(){
    //   this._enrollmentservice.enroll(this.userModel);
    //     subscribe(
    //           data => console.log('success!',data),
              
    //   )
    // } 

  }


// function subscribe(arg0: (data: any) => void) {
//   throw new Error('Function not implemented.');
// }



