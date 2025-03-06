import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StorageService } from '../../serves/storage/storage.service';

@Component({
  standalone: false,
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent  implements OnInit {

  @Input() items: any;

  @Output() quitar = new EventEmitter<any>();

  constructor(private storageSe: StorageService) { }

  ngOnInit() {}

  quitarItem() {
    this.quitar.emit(this.items);
  }

  increment() {
    this.items.quantity++;
    this.storageSe.updateCart(this.items);
  }

  desIncre() {
    if (this.items.quantity > 1) {
      this.items.quantity--;
      this.storageSe.updateCart(this.items);
    } else {
      this.quitarItem();
    }
  }
}
