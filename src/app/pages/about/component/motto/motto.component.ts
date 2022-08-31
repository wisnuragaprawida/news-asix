import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motto',
  template: `<h1>Motto</h1>
              <p> Keep it Simple and Clean </p>`
})
export class MottoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
