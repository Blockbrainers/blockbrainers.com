import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  public projects = ['komet', 'custos', 'toddlerinu'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
