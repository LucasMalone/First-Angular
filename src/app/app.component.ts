import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MeuPrimeiroComponent } from './primeiro-projeto/primeiro-projeto.component';
import { MeuSegundoComponent } from './primeiro-projeto/segundo-projeto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MeuPrimeiroComponent, MeuSegundoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'primeiro-projeto';
}
