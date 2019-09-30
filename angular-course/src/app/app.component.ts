import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*
  post = {
    tittle: "Tittle",
    isFavorite: true
  }
  tweet = {
    body: 'Here is the body of a tweet...',
    isLiked: false,
    likesCount: 0
  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs){
    console.log("Favorite changed", eventArgs);
  }
  */
 //viewMode = 'somethingElse';
  courses;

  onAdd(){
    let newId = this.courses[this.courses.length-1].id + 1;
    let newName = 'course'.concat(String(newId))
    this.courses.push({ id: newId, name: newName});
 }

 onRemove(course) {
   let index = this.courses.indexOf(course);
   this.courses.splice(index, 1);
 }
 onChange (course) {
   course.name = 'UPDATED';
 }
 
 loadCourses () {
   this.courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
  ];
 }

 trackCourse(index, course) {
   return course ? course.id : undefined;
 }
 
 canSave = false;

 task = {
   tittle: 'Review applications',
   assignee: {
     name: 'John Smith'
   }
 }
}