import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private carro = new BehaviorSubject<any[]>(this.loadCarroSto());
  private carroItem = new BehaviorSubject<number>(0);

  constructor() { }

  private loadCarroSto(): any[] {
    const carro = localStorage.getItem('carro');
    return carro ? JSON.parse(carro) : [];
  }

  getCart(): Observable<any[]> {
    return this.carro.asObservable();
  }

  getCartItemCount(): Observable<number> {
    return this.carroItem.asObservable();
  }

  addToCart(product: any) {
    let currentCart = this.loadCarroSto();

    if (!Array.isArray(currentCart)) {
      currentCart = [];
    }

    const existProduct = currentCart.find((p: any) => p.id === product.id);

    if (existProduct) {
      existProduct.quantity++;
    } else {
      product.quantity = 1;
      currentCart.push(product);
    }
    
    localStorage.setItem('carro', JSON.stringify(currentCart));
    this.carro.next(currentCart);
    this.updateCartItemCount();
    
  }
  
  removeCart(product: any) {
    let currentCart = this.loadCarroSto();

    if (!Array.isArray(currentCart)) {
      currentCart = [];
    }
    
    currentCart = currentCart.filter((p: any) => p.id !== product.id);
    this.carro.next(currentCart);
    localStorage.setItem('carro', JSON.stringify(currentCart));
    this.carroItem.next(currentCart.length)
  }

  private updateCartItemCount() {
    const currentCart = this.loadCarroSto();
    this.carroItem.next(currentCart.length);
  }

  updateCart(product: any) {
    let currentCart = this.loadCarroSto();

    if (!Array.isArray(currentCart)) {
      currentCart = [];
    }

    const index = currentCart.findIndex((p: any) => p.id === product.id);

    if (index !== -1) {
      currentCart[index] = product;
    }

    localStorage.setItem('carro', JSON.stringify(currentCart));
    this.carro.next(currentCart);
    this.updateCartItemCount();
  }

  clearCart() {
    this.carro.next([]);
    localStorage.removeItem('carro');
    this.carroItem.next(0);
  }
}
