import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storage: Storage

  constructor() {
    this.storage = window.localStorage;
  }

  set(keyParam: string, valueParam: any) {
    this.storage.setItem(keyParam, JSON.stringify(valueParam))
  }

  get(keyParam: string): Promise<any> {
    return new Promise((resolve) => {
      const item = this.storage.getItem(keyParam);
      resolve(item !== null ? JSON.parse(item) : null);
    });
  }

  remove(keyParam: string) {
    this.storage.removeItem(keyParam);
  }

  async clear() {
    this.storage.clear();
  }
}
