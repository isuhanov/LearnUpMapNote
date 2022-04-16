import { Component, OnInit } from "@angular/core"
import { FormControl, FormGroup, Validators } from "@angular/forms"

@Component({
  selector: "mn-place-edit",
  templateUrl: "./place-edit.component.html",
  styleUrls: [ "./place-edit.component.scss" ]
})
export class PlaceEditComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    name: new FormControl(),
    rating: new FormControl(1, Validators.min(1)),
    description: new FormControl('# Заголовок 1 \n\n## Заголовок 2'),
    tags: new FormControl([ "Паб", "Бар", "Гастропаб", "Ресторан" ]),
    photos: new FormControl()
  })

  constructor() {
    console.log(this.form.get('rating'))
    console.log(this.form.get('description'))
  }

  ngOnInit(): void {
  }

}
