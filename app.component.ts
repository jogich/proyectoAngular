import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Formulario';
  subtitle = 'Rellene el siguiente formulario:';
  name:string;
  surname:string;
  date:string;
  description:string;
  age:number;
  error:number;

  people = ['Paco', 'Carlos' , 'Juan', 'Ana'];

  datacv(event) {
    var id = event.target.id;
  
    if (id == 'name') {
      this.name = event.target.value;
    }
    else if (id == 'surname') {
      this.surname = event.target.value;
    }
    else if (id == 'date') {
      this.date = event.target.value;
    }
    else if (id == 'description') {
      this.description = event.target.value;
    }
    else if (id == 'age') {
      if (event.target.value < 18){
        this.error = 1;
        this.age = event.target.value;
      } else {
        this.error = 0;
      }
    }
    else if (id == 'delete') {
      this.name = null;
      this.surname = null;
      this.date = null;
      this.description = null;
      this.age = null;
    }
  }
}
