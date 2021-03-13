import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../services/product.service';
import {IProduct} from '../../models/IProduct';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  // styles: [ '.ng-invalid:not(#myform).ng-touched { border: 1px solid red; }' ]
  styles: [ ' .field-error { border: 1px solid red; }']
})


export class ProductComponent implements OnInit {
  title = `Product`;
  product: IProduct;
  postError: boolean;
  postErrorMsg: string;
  @ViewChild('f') private myForm: NgForm;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.title += `: ${id}`;
    // this.product = this.productService.getProductById(id);
    this.productService.getProductById(id).subscribe(
      res => this.product = res,
      err => this.onHttpError(err)
    );
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

  mch($event: MouseEvent): void {
    console.log(this.myForm);
  }

  onSubmit(f: NgForm): void {
    this.productService.getProductViaObservable(this.product)
      .subscribe(
        result => console.log(result),
        result => this.onHttpError(result)
      );
  }

  private onHttpError(error: any): void {
    console.log(`Error: `, error);
    this.postError = true;
    this.postErrorMsg = error.message;
  }
}
