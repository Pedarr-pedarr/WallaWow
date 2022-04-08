import { Injectable } from '@angular/core';
import {Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, } from 'rxjs';
import {ClientService} from "../services/client.service";
import {Item} from "../../models/item";

@Injectable({
  providedIn: 'root'
})
export class ItemsResolver implements Resolve<Item[]> {
  constructor(private client: ClientService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Item[]> {
    return this.client.get();
  }
}
