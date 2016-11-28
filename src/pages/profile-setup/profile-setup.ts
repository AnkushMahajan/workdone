/**
 * Created by amahajan on 14/10/2016.
 */
import { Component } from '@angular/core';
import {Validators, FormBuilder } from '@angular/forms';

//import user model to bind our user form data
import { User } from '../../models/user'

@Component({
  templateUrl: 'profile-setup.html'
})

export class ProfileSetup {

  constructor(private formBuilder: FormBuilder){}

  private ionViewWillLoad() {
    this.todo = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: [''],
      workDesc: [''],
      email: ['', Validators.required],
    });
  }
  private logForm(){
    let userCreated = new User(this.todo.value)
    console.log(userCreated);
  }
}

