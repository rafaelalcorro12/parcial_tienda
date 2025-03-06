import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ServeService } from '../../serves/serve.service';


@Component({
  standalone: false,
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
})
export class ProductoComponents  implements OnInit, OnChanges {

  products: any[] = [];
  @Input() categories: string = '';
  @Input() sortOrdenar: string = '';

    constructor(private gordo: ServeService) { }
  
    ngOnInit() {
      this.loadProducts();
    }

    ngOnChanges(changes: SimpleChanges) {
      if (changes['categories']) {
        if (this.categories) {
          this.loadProductsByCategory();
        } else {
          this.loadProducts();
        }
      }
      if (changes['sortOrdenar']) {
        this.sortProducto();
      }
    }
    
    loadProducts(){

      this.gordo.getProducts().subscribe((data: string[]) => {
        this.products = data;
        console.log('Api array', this.products);
        this.sortProducto();
      })
    }

    loadProductsByCategory() {
      if (!this.categories) return;


      this.gordo.getProductsByCategory(this.categories).subscribe((data) => {
        this.products = data;
        this.sortProducto();
      },
    (error) => console.error('Error al cargar los productos por categoria', error)
  );
    }

    sortProducto() {
      if (!this.products || !this.products.length) return;
    

      switch (this.sortOrdenar) {
       case 'ascender':
          this.products.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case 'descender':
          this.products.sort((a, b) => b.title.localeCompare(a.title));
          break;
      }
    }
   
}