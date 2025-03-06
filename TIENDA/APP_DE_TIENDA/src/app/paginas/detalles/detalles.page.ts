import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoadService } from 'src/app/shared/serves/loading/load.service';
import { ServeService } from 'src/app/shared/serves/serve.service';
import { StorageService } from 'src/app/shared/serves/storage/storage.service';

@Component({
  standalone: false,
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  detalles: any = { rating: {} };
  cartItemCount: number = 0;

  constructor(private readonly gordo: ServeService, private readonly actiRouter: ActivatedRoute, private readonly carroS: StorageService, 
    private readonly loadingS: LoadService
  ) { }

  async ngOnInit() {
    this.loadDetails();
    this.carroS.getCartItemCount().subscribe(count => {
      this.cartItemCount = count;
    });
  }

  loadDetails() {
    this.loadingS.show('Cargando detalles...');

    const id = this.actiRouter.snapshot.paramMap.get('id');
    if(id){
      this.gordo.getProductById(+id).subscribe((data: string[]) => {
        this.detalles = data;
        this.loadingS.dismiss();
        console.log(data);
      })
    }
  }

  addToCart(product: any) {
    this.carroS.addToCart(product);
  }
}
