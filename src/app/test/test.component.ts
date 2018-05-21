import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      Welcome {{ name }} -> this comes from the property defined in the class file
    </h2>
    <h2> {{ 2 + 2 }} -> this is running logic in html template </h2>
    <h2> {{ "Welcome " + name }} -> this does concatenation</h2>
    <h2> {{ name.length }} -> this comes through javascript properties </h2>
    <h2> {{ name.toUpperCase() }} -> this comes from the javascript toUpperCase method</h2>
    <h2> {{ getMessage() }} -> this comes form the funtions we defined in the class file</h2>
    <h2> {{ siteUrl }} -> getting url from the class file since we can't do it directly using interpolation</h2>
  `,
  styles: []
})
export class TestComponent implements OnInit {
  public name = "Daman";
  public siteUrl = window.location.href;
  constructor() { }

  ngOnInit() {
  }

  getMessage(){
    return "Hello " + this.name;
  }

}
