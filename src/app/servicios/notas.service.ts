import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Nota } from '../nota';
import { Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotasService {
  private dbPath = '/notas';
  private contadorPath = '/contador';

  constructor(private db: AngularFireDatabase) { }

  getNotas(): Observable<Nota[]> {
    return this.db.list<Nota>(this.dbPath).snapshotChanges().pipe(
      map(changes =>
        changes.map(c => {
          const data = c.payload.val() as Nota;
          const id = c.payload.key as string;
          return { ...data, id };
        })
      )
    );
  }

  agregarNota(nuevaNota: Nota): void {
    this.db.object<number>(this.contadorPath).valueChanges().pipe(
      take(1),
      switchMap(contador => {
        const nuevoId = contador !== null ? contador + 1 : 1;
        nuevaNota.id = nuevoId.toString();
        return this.db.list(this.dbPath).set(nuevoId.toString(), nuevaNota).then(() => {
          return this.db.object(this.contadorPath).set(nuevoId);
        });
      })
    ).subscribe(
      () => console.log('Nota creada correctamente'),
      error => console.error('Error al crear la nota:', error)
    );
  }

  borrarNota(id: string): void {
    this.db.list(this.dbPath).remove(id)
      .then(() => console.log('Nota eliminada correctamente'))
      .catch(error => console.error('Error al eliminar la nota:', error));
  }
}
