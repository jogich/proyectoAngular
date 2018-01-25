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
    else if (id == 'delete') {
      this.name = null;
      this.surname = null;
      this.date = null;
      this.description = null;
    }
  }
}
