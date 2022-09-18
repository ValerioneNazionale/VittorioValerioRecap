import { Component, OnInit } from '@angular/core';
import {Persona} from "../../shared/models/persona";

const arrayPersone:Persona[]=[
  {id:1,nome:'Vittoria',cognome:'Cuzzolina',sesso:'M'},
  {id:2,nome:'Vittorio',cognome:'Cuzzolino',sesso:'M'},
  {id:3,nome:'Marco',cognome:'Cazz',sesso:'M'},

]






@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.component.html',
  styleUrls: ['./tabella.component.css']
})


export class TabellaComponent implements OnInit {
  idApp:number=3;
  listaPersone=arrayPersone;
  persona:Persona={};

  constructor() { }

  ngOnInit(): void {
  }



  aggiungi(){
    this.idApp++
    this.persona.id=this.idApp
    this.listaPersone.push(this.persona)
    this.persona={};

  }
    elimina(id:number|undefined){

    const personaTrovata= this.listaPersone.find(p=>p.id===id);

    if(personaTrovata){
    console.log(this.listaPersone)
      const indice= this.listaPersone.indexOf(personaTrovata)
      this.listaPersone.splice(indice,1)
      console.log(this.listaPersone)
    }




      }

      modifica(id:number|undefined){

        const personaTrovata= this.listaPersone.find(p=>p.id===id);
        if(personaTrovata){
          console.log(this.listaPersone)
          const indice= this.listaPersone.indexOf(personaTrovata)
          if (personaTrovata.sesso=='M'){
          personaTrovata.sesso='F'
          }else{
            personaTrovata.sesso='M'
          }

          this.listaPersone[indice]=personaTrovata


        }




      }

    }








