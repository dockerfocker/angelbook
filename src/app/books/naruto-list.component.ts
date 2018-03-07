import {Component, OnInit} from "@angular/core";
import { IStudents } from "./students";
import { NarutoServices } from "./naruto.services";
import {Http,Response,Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
    templateUrl:'../app.component.html',
    styleUrls:['./makeit.component.css']
})

export class StudentsList implements OnInit{
    listTitle:string ="School of Naruto";
    students: IStudents[];
    id:number;
    name:string;
    genre:string;
    author:string;
    price:number;
    errorMessage:string;
    student=new IStudents();
    narutoObj:object={};
    isAdded: boolean = false;
    bookAdded:string="Book has been added to our database";
    
    constructor(
        private http:Http,
        private _studentsservice: NarutoServices){
    }

   
/*add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this._studentsservice.addHero({ name } as IStudents)
      .subscribe(hero => {
        this.students.push(hero);
      });
  }
  addprice(price: number): void {
    if (!price) { return; }
    this._studentsservice.addHero({ price } as IStudents)
      .subscribe(hero => {
        this.students.push(hero);
      });
  }
  addauth(author: string): void {
    author = author.trim();
    if (!author) { return; }
    this._studentsservice.addHero({ author } as IStudents)
      .subscribe(hero => {
        this.students.push(hero);
      });
  }
  addgenre(genre: string): void {
    genre = genre.trim();
    if (!genre) { return; }
    this._studentsservice.addHero({ genre } as IStudents)
      .subscribe(hero => {
        this.students.push(hero);
      });
  }
*/
    sendData=function(naru){
        this.narutoObj={
            "name":naru.name,
            "genre":naru.genre,
            "price":naru.price,
            "author":naru.author
        }
        this.http.post("https://localhost:8080/api/books",this.narutoObj).subscribe((res:Response)=>{
            this.isAdded=true;
    })
}
    /*delete(stud:IStudents):void{
        this.students = this.students.filter(h => h !== stud);
        this._studentsservice.deleteHero(stud).subscribe();
    }*/

    deleteProduct = function(id) {
        if(confirm("Are you sure?")) {
          const url = `${"https://localhost:8080/api/books"}/${id}`;
          return this.http.delete(url, {headers: this.headers}).toPromise()
            .then(() => {
            this.fetchData();
            })
        }
      }
    ngOnInit():void{
        this.fetchData();
    }
    fetchData(): void{
        this._studentsservice.getstudents()
        .subscribe(students=>this.students=students,
            error=>this.errorMessage=<any>error);
    }
     
}