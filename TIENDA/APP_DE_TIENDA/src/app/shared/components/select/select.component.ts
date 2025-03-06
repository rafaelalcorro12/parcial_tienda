import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ServeService } from '../../serves/serve.service';


@Component({
  standalone: false,
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SelectComponent  implements OnInit {
  categorieSelect: string[] = [];
  gordo: string = '';

  @Output() categorySelected = new EventEmitter<string>();

  constructor(private gordoS: ServeService) { }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.gordoS.getCategories().subscribe(
      (data) => {
        this.categorieSelect = data;
      });
  }

  selectCategory(category: string){
    this.gordo = category;
    this.categorySelected.emit(category);
  }

}
