import { Component } from '@angular/core';

import { Platform, MenuController, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './service/authentication.service';
import { Router } from '@angular/router';
import { CrudService } from './service/crud.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  user: User;
  take;
  uid: string;
  constructor(
    public menuCtrl: MenuController,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private crud: CrudService,
    private auth: AuthenticationService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  closeMenu() {
    this.menuCtrl.close();
  }

  ngOnInit(){
    if(this.auth.userDetails()){
      this.uid = this.auth.userDetails().uid;
    }
  }

  logout(){
    this.auth.logoutUser()
    .then(res => {
      console.log(res);
      this.router.navigateByUrl('/login');
      this.closeMenu();
    })
    .catch(error => {
      console.log(error);
    })
  }
}
