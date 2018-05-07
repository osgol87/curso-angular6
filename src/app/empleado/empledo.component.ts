import { Component } from '@angular/core';
import { Empleado } from './empleado';


@Component(
{
	selector: 'empleado-tag',
	templateUrl: './empleado.component.html'
})
export class EmpleadoComponent
{
	
	public titulo = 'Componente Empleados:';

	public trabajadores: Array<Empleado>;

	constructor()
	{
		this.trabajadores = [
			new Empleado('Manolo Martinez', 35, 'Administrador', true),
			new Empleado('Ana Lopez', 25, 'Cocinera', true),
			new Empleado('Victor Robles', 66, 'Programador', false),
		];
	}

	ngOnInit()
	{
		console.log(this.trabajadores);
	}
}