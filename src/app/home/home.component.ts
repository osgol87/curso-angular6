import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	providers: [RopaService]
})
export class HomeComponent
{
	public titulo = 'Página principal';
	public listado_ropa: Array<string>;
	public prenda_a_guardar: string;

	constructor(
		private _ropaService: RopaService
	){}

	ngOnInit()
	{
		this.listado_ropa = this._ropaService.getRopa();
	}

	guardarRopa()
	{
		this._ropaService.addRopa(this.prenda_a_guardar);
		this.prenda_a_guardar = null;
	}

	eliminarRopa(indice)
	{
		this._ropaService.deleteRopa(indice);
	}
}