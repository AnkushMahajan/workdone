import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProfileSetup } from '../pages/profile-setup/profile-setup'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfileSetup
  ],
  imports: [
    FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfileSetup
  ],
  providers: []
})
export class AppModule {}
