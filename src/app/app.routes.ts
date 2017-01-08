import { Routes, RouterModule } from '@angular/router';
import { FirstblockComponent} from './firstblock/firstblock.component';
import { LoginComponent } from './login/login.component';
import { SecondblockComponent} from './secondblock/secondblock.component';
import { HomeComponent} from './home/home.component';


export const  routes: Routes = [
   { path: 'home', component: HomeComponent,children:[ //Child Routing
       { path: 'firstblock', component: FirstblockComponent },
       { path: 'secondblock', component: SecondblockComponent }
   ] 
  },
   { path: 'login', component: LoginComponent },
   { path: '',   redirectTo: '/login', pathMatch: 'full' },
];