import { HtmlParser } from "@angular/compiler";
import { Component } from "@angular/core";


@Component({
    selector: 'meu-segundo-component',
    standalone: true,
    imports:[],
    template: `<h2>Meu segundo Componente`,
    styleUrls: ['../app.component.css']
})

export class MeuSegundoComponent{}