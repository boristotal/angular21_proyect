import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Dbconection {

private apiUrl: string = 'https://restcountries.com/v3.1/all?fields=name,capital,currencies,population,flag'; // URL de la API de países
//private apiUrl: string = 'https://api.countrylayer.com/v2/'; // URL de la API de países

//private apiUrl2: string = 'http://monitor02.redirectme.net:3030/tgcomm/dbcommapi0002.php/?nombre=Laura&edad=54&camposRequest=id,usuario&tablaRequest=usuario&id=7'; // URL de la API de la base de datos
 //se ocupa como señal, no como obserbable 
constructor(private http: HttpClient  ) {

  const params = new HttpParams();
  params.set('orderBy', '"$key"')
  params.set('limitToFirst', "1");

    //this.db = new Dbconection();
    // declarar opciones de conexión a la base de datos aquí
  }

  obtenerPaises(): Observable<any[]>{
    console.log('Obteniendo países desde la API...obtenerPaises');
    return this.http.get<any[]>(this.apiUrl);
  }

   getDatabaseData(apiURLLocal: any, body: any): Observable<any[]> {
    console.log('Obteniendo datos de la base de datos...getDatabaseData');  
    return this.http.get<any[]>(apiURLLocal, { params: body });
  } 

  postDatabaseData(apiURLLocal: any, body: any): Observable<any[]> {
    console.log('Enviando datos a la base de datos...postDatabaseData');  
    return this.http.post<any[]>(apiURLLocal, body);
  }

  putDatabaseData(apiURLLocal: any, body: any): Observable<any[]> {
    console.log('Actualizando datos en la base de datos...putDatabaseData');  
    return this.http.put<any[]>(apiURLLocal, body);
  } 

  deleteDatabaseData(apiURLLocal: any, body: any): Observable<any[]> {
    console.log('Eliminando datos en la base de datos...deleteDatabaseData');  
    return this.http.delete<any[]>(apiURLLocal, { params: body });
  } 
}
