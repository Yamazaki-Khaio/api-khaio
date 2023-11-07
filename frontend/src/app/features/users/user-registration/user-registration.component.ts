import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/core/services/data.service';
import { Users } from '../users';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.sass']
})

export class UserRegistrationComponent implements OnInit {

  public registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService
  ) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {

  }


  public registerUser(): void {
    if (this.registrationForm.valid) {
      const user: Users = this.registrationForm.value;
      try {
        user.createdAt = new Date();
        user.updatedAt = new Date();
      }
      catch (error) {
        console.log(error);
      }
      this.dataService.create('users', user)
      if (user) {
        console.log(user);
        alert('Usuário cadastrado com sucesso!');
      }
    }
  }

}
