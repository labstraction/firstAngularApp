import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, OnDestroy {


  constructor() {
    console.log("constructor")
  }


  ngOnInit(): void {
    console.log("on Init");
  }


  ngOnDestroy(): void {
    console.log("on Destroy");
  }

}
