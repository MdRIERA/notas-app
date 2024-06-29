import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotasService } from '../servicios/notas.service';
import { Nota } from '../nota';

@Component({
  selector: 'app-crear-nota',
  templateUrl: './crear-nota.component.html',
  styleUrls: ['./crear-nota.component.css']
})
export class CrearNotaComponent {
  nuevaNota: Nota = { titulo: '', contenido: '' };
  mensajeConfirmacion: string = '';

  constructor(private notasService: NotasService, private router: Router) {}

  agregarNota(): void {
    if (this.nuevaNota.titulo && this.nuevaNota.contenido) {
      this.notasService.agregarNota(this.nuevaNota);
      this.mensajeConfirmacion = 'Nota creada correctamente';
      this.nuevaNota = { titulo: '', contenido: '' };  // Resetear el formulario
      setTimeout(() => {
        this.mensajeConfirmacion = '';
      }, 3000); // Ocultar el mensaje después de 3 segundos
    }
  }

  volverAlInicio(): void {
    this.router.navigate(['/']);
  }
}
