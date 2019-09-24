import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'favorite',
	templateUrl: `./favorite.component.html`,
	styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit{
	constructor () { }

	@Input('isFavorite') isSelected: boolean;

	onClick(){
		this.isSelected = !this.isSelected;
	}

	ngOnInit() {

	}
}
