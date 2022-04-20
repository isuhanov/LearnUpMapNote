import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mn-tags-filter',
  templateUrl: './tags-filter.component.html',
  styleUrls: ['./tags-filter.component.scss']
})
export class TagsFilterComponent implements OnInit {

  @Input()
  elements:string[];

  @Input()
  selected:string[];

  @Output()
  selectedChanges = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
        
  }

}
