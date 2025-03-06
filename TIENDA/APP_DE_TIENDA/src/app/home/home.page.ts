import { Component, OnInit } from '@angular/core';
import { StorageService } from '../shared/serves/storage/storage.service';

@Component({ 
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  categorieSelect: string = '';
   sortOrdenar: string = ''
   logo: boolean = true;
   cartItemCount: number = 0;

  constructor(private carroS: StorageService) {}

  ngOnInit() {
    setTimeout(() => {
      this.logo = false;
    }, 3000);
    this.carroS.getCartItemCount().subscribe(count => {
      this.cartItemCount = count;
    });
  }

}
