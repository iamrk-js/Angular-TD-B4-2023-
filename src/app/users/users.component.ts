import { Component, OnInit } from '@angular/core';
import { interval, Observable, filter, tap, Subscription, map, fromEvent, from, of } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public obj$ !: Observable<number>;
  mySubscription!: Subscription;
  value!: number;
  click$ !: Observable<any>
  users = [
    { name: 'jhon', age: 23, id: 1, gender: 'male', isActive : true },
    { name: 'July', age: 21, id: 2, gender: 'female', isActive : true },
    { name: 'James', age: 13, id: 3, gender: 'male', isActive : true },
  ];
  users$: Observable<Iuser[]> = of(this.users) /// we make a api call >> In angular api methods returns observable
  usersname$ = this.users$.pipe(
    map((users) => users.map((user) => user.name))
  )
  usersInfo: Iuser[] = [];
  userNames: string[] = []
  isActiveusers : Iuser[] = []
  constructor() { }


  ngOnInit(): void {
    this.obj$ = interval(1000);
    this.users$.pipe(
      tap((users) => {
        console.log(users);
      }),
      map((users) => users.map((user) => user.name))
    ).subscribe(res => {
        this.userNames = res
    } )

    this.users$.pipe(
      filter((users) => users.every((user) => user.isActive))
    ).subscribe((res) => {
      console.log("Active Users",res)  
      if(res){
        this.isActiveusers = res;
      }
    })
  }


  ngOnDestroy(): void {
    this.mySubscription.unsubscribe();
  }

}


export interface Iuser {
  name: string;
  age: number;
  id: number;
  gender: string;
  isActive? : boolean
}