import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';
import * as firebase from 'firebase/app';
import { AngularFireAuth, FirebaseAuthStateObservable } from 'angularfire2/auth';
import { AuthInfo } from './auth-info';

@Injectable()
export class AuthService {

  public token;

  constructor(public afAuth: AngularFireAuth) { }

  login(email, password): Observable<any> {
    return this.fromFirebaseAuthPromise(this.afAuth.auth.signInWithEmailAndPassword(email, password));
  }

  logout(): Observable<any> {
    return this.fromFirebaseAuthPromise(this.afAuth.auth.signOut());
  }

  fromFirebaseAuthPromise(promise): Observable<any>{
    const subject = new Subject<any>();
    promise
      .then(res => {
        subject.next(res);
        subject.complete();
      }, err => {
        subject.error(err);
        subject.complete();
      });
      return subject.asObservable();
  } 

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        this.afAuth.authState.subscribe(res => {
          if(res) {
            this.token = res;
            resolve(true);
          } else {
            resolve(false);
          }
        });
      }
    );
    return promise;
  }
}
