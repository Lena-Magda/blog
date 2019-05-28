import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchFormValue } from './post-search.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-search',
  templateUrl: './post-search.component.html',
  styleUrls: ['./post-search.component.css']
})
export class PostSearchComponent implements OnInit {
  @Output() public search: EventEmitter<SearchFormValue> = new EventEmitter();

  public searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  public ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      query: "",
      // można dodać sortowanie po dacie dodania posta
      // sort: "",
      // order: ""
    });

    // pobiera posty na poziomie PostListComponent (onSearch)
    this.onSubmit();
  }

  public onSubmit(): void {
    this.search.emit(this.searchForm.getRawValue());
  }
}
