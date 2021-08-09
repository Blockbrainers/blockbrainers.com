import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public processSteps = ['idea', 'analysis', 'planning', 'MVP', 'fullImplementation', 'maintenance'];

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
  }

  public onScroll(target: string): void {
    this.navigationService.scrollTo(target);
  }

}
