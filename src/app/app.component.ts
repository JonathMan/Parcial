import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Parcial2808';


  nombre: string= ''
  simbolo: string='' 
  numero_atomico: any='' 
  peso_atomico: any =''

  elementos: any = [

    {nombre:'Litio',simbolo:'Li',numero_atomico:'3',peso_atomico:'6.941',metal: 1,activo: true},
    {nombre:'Sodio',simbolo:'Na',numero_atomico:'11',peso_atomico:'22.98',metal: 2,activo: true},
    {nombre:'Potasio',simbolo:'K',numero_atomico:'19',peso_atomico:'39.09',metal: 1,activo: true},
    {nombre:'Cesio',simbolo:'Cs',numero_atomico:'55',peso_atomico:'132.90',metal: 1,activo: true},
    {nombre:'Francio',simbolo:'Fr',numero_atomico:'87',peso_atomico:'223',metal: 2,activo: true},
    {nombre:'Helio',simbolo:'He',numero_atomico:'2',peso_atomico:'4.00',metal: 1,activo: false},
    {nombre:'Neon',simbolo:'Ne',numero_atomico:'10',peso_atomico:'20.17',metal: 2,activo: false},
    {nombre:'Radon',simbolo:'Rn',numero_atomico:'86',peso_atomico:'2201',metal: 1,activo: false},
    {nombre:'Xenon',simbolo:'Xe',numero_atomico:'54',peso_atomico:'131.29',metal: 2,activo: false}

  ];

  headElements=['nombre elemento','simbolo','numero atomico','peso atomico']
}
