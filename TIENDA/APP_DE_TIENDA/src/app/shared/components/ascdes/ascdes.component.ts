import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-ascdes',
  templateUrl: './ascdes.component.html',
  styleUrls: ['./ascdes.component.scss'],
})
export class AscdesComponent  implements OnInit {

  @Output() sortSelected = new EventEmitter<string>();

  selectedSort: string = ''

  constructor() { }

  ngOnInit() {}

  selectSort(order: string) {
    this.selectedSort = order;
    this.sortSelected.emit(order);
  }
}
