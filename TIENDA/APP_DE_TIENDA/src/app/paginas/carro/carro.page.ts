import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadService } from 'src/app/shared/serves/loading/load.service';
import { StorageService } from 'src/app/shared/serves/storage/storage.service';

@Component({
  standalone: false,
  selector: 'app-carro',
  templateUrl: './carro.page.html',
  styleUrls: ['./carro.page.scss'],
})
export class CarroPage implements OnInit {

  cartItems: any[] = [];
  totalPrice: number = 0;

  constructor(private readonly cartS: StorageService, private router: Router, private readonly loadingS: LoadService) { }

  ngOnInit() {
    this.loadCart();
    this.cartS.getCart().subscribe(cart => {
      this.cartItems = cart;
      this.calcularTotal();
    })
  }

  loadCart() {
    this.loadingS.show('Cargando carrito...');

    this.cartS.getCart().subscribe(cart => {
      this.cartItems = cart;
      this.calcularTotal();
      this.loadingS.dismiss();
    });
  }

  removeCart(item: any) {
    this.cartS.removeCart(item);
    this.loadCart();
  }

  calcularTotal() {
    this.totalPrice = this.cartItems.reduce((sum, item) => + sum + item.price * (item.quantity), 0);
  }

  checkOut() {
    this.router.navigate(['/checkout']);
  }
}
