import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent implements OnInit {
  public logos = [
    'ethereum-1.svg',
    'solidity.svg',
    'polygon-matic.svg',
    'bsc.svg',
    'hardhat.svg',
    'ganache-cli-icon.svg',
    'nodejs-icon.svg',
    'aws-2.svg',
    'angular-icon.svg',
    'react.svg',
    'ios.svg',
    'android.svg'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
