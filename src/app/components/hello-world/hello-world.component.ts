import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {

  myname = "Damar"

  constructor() {}

  ngOnInit(): void {}

  methodFirst() {
    var a=2;
    var b=4;
    var c=a+b;
  }

  methodSecond() {
    var a=2;
    var b=4;
    var c=a+b;
  }

  methodThird() {
    var a=2;
    var b=4;
    var c=a+b;
  }

  methodFourth() {
    var a=2;
    var b=4;
    var c=a+b;
  }

}
