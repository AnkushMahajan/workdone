import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProfileSetUp } from '../pages/profile-set-up/profile-set-up'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfileSetUp
  ],
  imports: [
    FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfileSetUp
  ],
  providers: []
})
export class AppModule {}
