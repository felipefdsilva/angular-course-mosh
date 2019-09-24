import { Component } from '@angular/core';

@Component({
	selector: 'course',
	template: `
		<input [(ngModel)]="email" (keyup.enter)="onKeyUp()">
	`
})
export class CourseComponent {
	email = "felipe@mail.com"

	onKeyUp(){
		console.log(this.email)
	}
}