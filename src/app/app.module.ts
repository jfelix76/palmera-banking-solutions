import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ImpactPage } from '../pages/impact/impact';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FinancialPage } from '../pages/financial/financial';
import { TechnologyPage } from '../pages/technology/technology';
import { NonBankPage } from '../pages/non-bank/non-bank';
import { TestimonialsPage } from '../pages/testimonials/testimonials';
import { TestimonialProvider } from '../providers/testimonial/testimonial';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ImpactPage,
    FinancialPage,
    TechnologyPage,
    NonBankPage,
    TestimonialsPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ImpactPage,
    FinancialPage,
    TechnologyPage,
    NonBankPage,
    TestimonialsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TestimonialProvider
  ]
})
export class AppModule {}
