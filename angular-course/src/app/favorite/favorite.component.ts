import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'favorite',
	templateUrl: `./favorite.component.html`,
	styleUrls: ['./favorite.component.css'],
	encapsulation: ViewEncapsulation.ShadowDom
})
export class FavoriteComponent {
	@Output('change') click = new EventEmitter();

	@Input('isFavorite') isSelected: boolean;

	onClick(){
		this.isSelected = !this.isSelected;
		this.click.emit({newValue: this.isSelected});
	}
}
export interface FavoriteChangedEventArgs {
	newValue: boolean;
}
