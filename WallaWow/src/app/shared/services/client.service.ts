import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Item} from "../../models/item";
import {HttpClient} from "@angular/common/http";
import {baseUrl} from "../../app.constants";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  get(): Observable<Item[]> {
    return this.http.get<{ items: Item[] }>(baseUrl).pipe(
      map((res: { items: Item[] }) => res.items
        .map((value: Item, index: number) => {
          return {
            // @ts-ignore
            id: index,
            ...value}
        }))
    )}
}
