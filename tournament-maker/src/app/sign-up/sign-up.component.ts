import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { SharedDataService } from '../services/sharedData.service';
import { User } from '../models/User';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  userForm = new FormGroup({
    pseudoInput: new FormControl(''),
    passwordInput: new FormControl(''),
    firstNameInput: new FormControl(''),
    lastNameInput: new FormControl(''),
    idDiscordInput: new FormControl('')
  });

  constructor(private router : Router, private userService : UserService, private sharedDataService : SharedDataService) { }

  onSubmit() {
    // Verifications
    if (this.userForm.value.pseudoInput == '' || this.userForm.value.pseudoInput == null) {
      alert('Please enter a pseudo');
      return;
    }
    if (this.userForm.value.passwordInput == ''  || this.userForm.value.passwordInput == null) {
      alert('Please enter a password');
      return;
    }
    if (this.userForm.value.firstNameInput == ''  || this.userForm.value.firstNameInput == null) {
      alert('Please enter a first name');
      return;
    }
    if (this.userForm.value.lastNameInput == ''  || this.userForm.value.lastNameInput == null) {
      alert('Please enter a last name');
      return;
    }
    if (this.userForm.value.idDiscordInput == ''  || this.userForm.value.idDiscordInput == null) {
      alert('Please enter a Discord ID');
      return;
    }


    // Creation of user using service
    let user = new User(-1, this.userForm.value.pseudoInput, this.userForm.value.lastNameInput, this.userForm.value.firstNameInput, this.userForm.value.idDiscordInput, this.userForm.value.passwordInput, 'PLAYER');
    this.userService.createUser(user).subscribe(user => {
      console.log('User created', user);
      // Connect the user
      this.sharedDataService.setConnectedUser(user);
      // Redirect to accueil
      this.router.navigate(['/accueil']);
      },
      error => {
        if (error.status === 400) {
          console.log("This pseudo is already used");
          // Handle user not found error
        } else {
          console.error("An error occurred:", error);
          // Handle other errors
        }
      }
    );





  }
}
