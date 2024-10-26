import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  constructor(public api: ApiService,private routs: ActivatedRoute){}
  item:any;

  ngOnInit(){
    const id = this.routs.snapshot.paramMap.get('id');
    console.log(id);

    this.api.getDataById(id).subscribe((data) =>{
      this.item = data;
      console.log(this.item);
    })
  }

}
