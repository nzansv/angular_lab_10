import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-drive-forms',
  templateUrl: './template-drive-forms.component.html',
  styleUrls: ['./template-drive-forms.component.css']
})
export class TemplateDriveFormsComponent implements OnInit {

  title = 'Template driven forms';

  valForm = new FormGroup({
    form_1: new FormGroup({
      form_1: new FormControl(),
      form_2: new FormGroup({
        form_2_1: new FormControl(),
        form_2_2: new FormControl()
      }),
      form_3: new FormGroup({
        form_3_1: new FormControl()
      }),
      form_4: new FormGroup({
        form_4_1: new FormControl()
      }),
    })
  });
  constructor() { }

  onSubmit(): void{
    console.log(this.valForm.value);
  }
  ngOnInit(): void {
  }
}
