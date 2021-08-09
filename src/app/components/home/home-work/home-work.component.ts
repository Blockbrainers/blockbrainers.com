import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-work',
  templateUrl: './home-work.component.html',
  styleUrls: ['./home-work.component.scss']
})
export class HomeWorkComponent implements OnInit {
  public projects = ['komet', 'custos', 'toddlerinu'];
  constructor() { }

  ngOnInit(): void {
  }

}
