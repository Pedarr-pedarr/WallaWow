import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

import {Item} from "../../models/item";
import {baseUrl} from "../../app.constants";


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
