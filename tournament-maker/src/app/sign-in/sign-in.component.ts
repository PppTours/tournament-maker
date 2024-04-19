import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { SharedDataService } from '../services/sharedData.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  userForm = new FormGroup({
    pseudoInput: new FormControl(''),
    passwordInput: new FormControl('')
  });


  constructor(private router : Router, private userService : UserService, private sharedDataService : SharedDataService) { }

  onSubmit() {
    // Check if the user exist
    // If yes, set the connected user
    if(this.userForm.value.pseudoInput == '' || this.userForm.value.passwordInput == '') {
      // Display an error message
      return;
    }
    if(this.userForm.value.pseudoInput == undefined || this.userForm.value.passwordInput == undefined) {
      // Display an error message
      return;
    }

    this.userService.connectUser(this.userForm.value.pseudoInput, this.userForm.value.passwordInput).subscribe(
      user => {
        if (user !== undefined && user !== null) {
          this.sharedDataService.setConnectedUser(user);
          this.router.navigate(['/accueil']);
        }else{
          console.log('User not found');
        }
      },
      error => {
        if (error.status === 404) {
          console.log("User not found");
          // Handle user not found error
        } else {
          console.error("An error occurred:", error);
          // Handle other errors
        }
      }
      
  );
  }
}
