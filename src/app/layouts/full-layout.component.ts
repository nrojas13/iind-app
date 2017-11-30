import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/security/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  styleUrls: ['./full-layout.component.css'],
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {

  public authState = null;

  constructor(public authService: AuthService, public router: Router){
    this.authService.afAuth.authState.subscribe(res => {
      if(res && res.uid) {
        this.authState = res;
      } 
    });
  }

  public disabled = false;
  public status: {isopen: boolean} = {isopen: false};

  public toggled(open: boolean): void {
    
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  public logout() {
    this.authService.logout()
        .subscribe(
          () => this.router.navigate(['/login']),
          alert
        );
  }

  ngOnInit(): void {}
}
