import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-t-form',
  templateUrl: './t-form.component.html',
  styleUrls: ['./t-form.component.scss']
})
export class TFormComponent implements OnInit {
  @ViewChild("userForm") userForm !: NgForm;
  secerectQuestionDefault: string = "favourateBook";
  ans: string = "Rich Dad Poor Dad"
  contactMode = [
    { id: 1, noc: "Email" },
    { id: 2, noc: "Phone" },
  ]
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.onUpdatevalues()
    }, 0);
  }
  onUserFormSubmit(form: NgForm) {
    // console.log(form);  /// we get obj from form >> make api call
    console.log(this.userForm.value);
    this.userForm.reset()

  }
  onUpdatevalues() {
    this.userForm.form.patchValue({
      userDetails: {
        username: "Ravikiran",
        email: "wertyu@gmail.com"
      },
      answer: "yayati",
      contactModeByrd: 1,
      isSubscribed: false,
      secrectQuestion:"favourateBook",
      modeOfContact : 2
    })
  }
}



