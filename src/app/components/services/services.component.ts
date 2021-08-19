import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  public services = ['tokenizationErc20Bep20', 'nftsAndMarketplace', 'defiStaking', 'governanceDao', 'smartContractsAudit', 'customProjectAndTeamIntegration'];

  constructor() { }

  ngOnInit(): void {
  }

}
