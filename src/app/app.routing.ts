import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar los componentes
import { EmpleadoComponent } from './empleado/empledo.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
	
const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'empleado', component: EmpleadoComponent },
	{ path:'fruta', component: FrutaComponent },
	{ path:'home', component: HomeComponent },
	{ path:'contacto', component: ContactoComponent },
	{ path:'contacto/:page', component: ContactoComponent },
	{ path: '**', component: EmpleadoComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
