import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-services',
  templateUrl: './home-services.component.html',
  styleUrls: ['./home-services.component.scss']
})
export class HomeServicesComponent implements OnInit {
  public services = ['tokenizationErc20Bep20', 'nftsAndMarketplace', 'defiStaking', 'governanceDao', 'smartContractsAudit', 'customProjectAndTeamIntegration'];

  constructor() { }

  ngOnInit(): void {
  }

}
