import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';
import {addDoc, collection, collectionData, Firestore} 
                        from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private fs:Firestore) { }

  getTasks():Observable<Todo[]>{
    console.log(this.fs);
    const myCollection: any = collection(this.fs, 'Todo');
    return collectionData(myCollection);
  }

  addToDo(toDo:Todo){
    const myCollection = collection(this.fs, 'Todo')
    addDoc(myCollection, toDo);
  }
  
}
