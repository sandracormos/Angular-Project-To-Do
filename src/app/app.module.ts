import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoComponent } from './component/todo/todo.component';

import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { AppRoutingModule } from './app-routing.module';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore } from '@angular/fire/firestore'; // import getFirestore instead of FirestoreModule
import { config } from './config';
import { TodosService } from './Services/todos.service';

import { MatButtonModule } from '@angular/material/button'
import { MatListModule } from '@angular/material/list'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FirestoreModule} from '@angular/fire/firestore'


@NgModule({
  declarations: [AppComponent, TodoComponent],
  imports: [
    provideFirebaseApp(() => initializeApp(config.firebase)),
    BrowserModule,   
    FormsModule,
    CommonModule,
    MatDividerModule,
    AppRoutingModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule,
    FirestoreModule,
  ],
  providers: [TodosService, { provide: 'FirestoreInstance', useFactory: getFirestore }], // add this provider
  bootstrap: [AppComponent],
})
export class AppModule {}
