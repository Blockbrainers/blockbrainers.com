import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  public services = ['dapp', 'smartContractDev', 'smartContractAudit', 'digitalAssets', 'cryptoWallet', 'integration', 'training'];

  constructor() { }

  ngOnInit(): void {
  }

}