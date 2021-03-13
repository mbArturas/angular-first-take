import {Component, OnInit} from '@angular/core';
import {IProduct} from '../../models/IProduct';
import {ProductService} from '../../services/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products',
  styles: [
    // 'td { border: 1px solid black; }',
    // 'tbody { font-family: Verdana, Geneva, sans-serif; }'
  ],
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  filteredProducts: IProduct[];
  products: IProduct[];
  ratingClickedMessage: string;
  starClicked: number;
  errorReturned: boolean;
  errorMsg: string;

  constructor(private ps: ProductService, private router: Router) {
    console.log('Products constructor');

    // ... we are using the Safe Navigation Operator / Elvis operator to prevent null derefencing → x?.y
    this.errorMsg = this.router.getCurrentNavigation().extras.state?.error;
  }

  filter(val: any): void {
    this.filteredProducts = val ? this.performFilter(val) : this.products;
  }

  private performFilter(val: any): IProduct[] {
    return this.products.filter((p: IProduct) =>
      p.artist.toLocaleLowerCase().indexOf(val) !== -1);
  }

  ngOnInit(): void {
    console.log('Products ngOnInit');
    // this.products = this.ps.getProducts();
    this.ps.getProducts().subscribe(
      res => {
        // console.log(res);
        this.products = res;
        this.filteredProducts = this.products;
      },
      err => {
        this.errorReturned = true;
        this.errorMsg = err.message;
      }
    );
  }

  onRatingClicked($event: string): void {
    this.ratingClickedMessage = $event;
  }

  onStartClicked($event: number): void {
    this.starClicked = $event;
  }

  onDeleteClicked(id: number): void {
    this.ps.deleteProductById(id).subscribe(
      res => {
        console.log(res);
        this.filteredProducts = this.filteredProducts
          .filter((product: IProduct) => product.id !== id);
      },
      err => {
        this.errorReturned = true;
        this.errorMsg = err.message;
      }
    );
  }
}


