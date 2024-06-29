import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotasService } from '../servicios/notas.service';
import { Nota } from '../nota';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ver-notas',
  templateUrl: './ver-notas.component.html',
  styleUrls: ['./ver-notas.component.css']
})
export class VerNotasComponent implements OnInit {
  notas$: Observable<Nota[]>;
  todasLasNotas: Nota[] = [];
  searchText: string = '';

  constructor(private notasService: NotasService, private router: Router) {
    this.notas$ = this.notasService.getNotas();
  }

  ngOnInit(): void {
    this.notas$.subscribe(notas => {
      this.todasLasNotas = notas;
    });
  }

  notasFiltradas(): Nota[] {
    if (!this.searchText) {
      return this.todasLasNotas;
    }
    return this.todasLasNotas.filter(nota => 
      nota.titulo.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  borrarNota(id: string | undefined): void {
    if (id) {
      this.notasService.borrarNota(id);
    } else {
      console.error('ID de la nota es undefined');
    }
  }

  volverAlInicio(): void {
    this.router.navigate(['/']);
  }
}
