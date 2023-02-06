import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  constructor(private http: HttpClient) { }
  // posts : Ipost[] = []
  post$ !: Observable<any>
  ngOnInit(): void {
    this.post$ = this.http.get<Ipost[]>("https://jsonplaceholder.typicode.com/posts")
    // .subscribe((res : Ipost[]) => {
    //   this.posts = res
    // })
  }


  ngOnDestroy(): void {
  }
}


export interface Ipost {
  userId: number,
  id: number,
  title: string,
  body: string
}