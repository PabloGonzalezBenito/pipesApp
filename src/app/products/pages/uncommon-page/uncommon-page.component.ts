import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  //i18n Select

  public name: string = 'Fernando';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient() {
    if (this.name === 'Fernando') {
      this.name = 'Darnoc';
      this.gender = 'female';
    }
    else {
      this.name = 'Fernando';
      this.gender = 'male';
    }

  }

  //i18nPlural
  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Hernando', 'Eduardo', 'Melissa', 'Natalia'];

  public pluralMap = {
    '=0': 'el servicio disponible',
    '=1': 'un cliente esperando',
    'other': `# clientes esperando`,
  }
  deleteClient() {
    this.clients.shift();
  }

  //KeyValue Pipe
  public person = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa, Canada'
  }

  //Async Pipe
  //interval crea un observable que emite valores [0,1,2,3,4,...] cada x tiempo, en este caso cada 2s
  public myObservableTimer = interval(2000).pipe(
    tap((data) => console.log(data))
  )
}
