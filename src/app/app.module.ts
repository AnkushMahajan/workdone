import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Profile } from '../pages/profile/profile';
import { Login } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Profile,
    Login
  ],
  imports: [
    FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Profile,
    Login
  ],
  providers: []
})
export class AppModule {}
