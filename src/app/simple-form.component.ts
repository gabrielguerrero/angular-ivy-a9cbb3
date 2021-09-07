import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first, map } from 'rxjs/operators';
import { TitleService } from './title.service';

@Component({
  selector: 'simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleFormComponent implements OnInit{
  titles$ = this.titleService
    .getTitles()
    .pipe(
      map(titles =>
        titles
          .filter(t => t.name !== '!')
          .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
      )
    );

  form: FormGroup;

  constructor(private fb: FormBuilder, private titleService: TitleService) {}

  ngOnInit(){
    let defaultTitle: string = undefined; 
    this.titleService.getTitles()
          .pipe(
            map( titles => titles.find(t => t.isDefault)?.name),
            first())
        .subscribe((t) => defaultTitle = t);

    this.form = this.fb.group({
      title: [defaultTitle],
      firstName: [],
      lastName: ['', Validators.required],
      acceptTerms: []
    });
  }

  submit() {
    console.log(this.form.value);
  }
}
