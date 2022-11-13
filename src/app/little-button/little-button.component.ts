import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'little-button',
  templateUrl: './little-button.component.html',
  styleUrls: ['./little-button.component.css']
})
export class LittleButtonComponent implements OnInit {

  @Input() label = "";

  constructor() { }

  ngOnInit(): void {
  }

}
