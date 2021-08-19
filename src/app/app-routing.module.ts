import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CareersComponent } from './components/careers/careers.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { WorkComponent } from './components/work/work.component';
import { ServicesComponent } from './components/services/services.component';
import { ServiceComponent } from './components/service/service.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    data: { title: 'Blockbrainers | Blockchain Consulting Company' }
  },
  {
    path: 'services',
    component: ServicesComponent,
    data: { title: 'Blockbrainers | Services' }
  },
  {
    path: 'services/:serviceName',
    component: ServiceComponent,
  },
  {
    path: 'work',
    component: WorkComponent,
    data: { title: 'Development | Work' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'Development | About' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'Blockbrainers | Contact' }
  },
  {
    path: 'careers',
    component: CareersComponent,
    data: { title: 'Careers | Blockbrainers' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    relativeLinkResolution: 'legacy',
    scrollPositionRestoration: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
