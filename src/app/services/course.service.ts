import { Injectable } from '@angular/core';
import { course } from '../course';

@Injectable()
export class CourseService {

  private courses: course[];
  
  constructor() { 
    this.courses = [
      {
        image: "angular.png",
        name: "Angular",
        price: 9000,
        description: "Angular 2+"
      },
      {
        image: "react.png",
        name: "React",
        price: 10000,
        description: "React Framework"
      },
      {
        image: "vue.png",
        name: "Vue.JS",
        price: 15000,
        description: "Vue.Js"
      },
      {
        image: "dotnet.jpg",
        name: ".Net",
        price: 20000,
        description: ".Net"
      },
    ]
  }

  getCourses(): course[] {
    return this.courses;
  }
}
