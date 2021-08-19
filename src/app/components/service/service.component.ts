import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit, OnDestroy {
  public serviceKey: string;
  private subscription = new Subscription();
  private title: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private translate: TranslateService,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {
    const subscription = this.activatedRoute.params.subscribe(params => {
      const serviceName = params['serviceName'];
      if (serviceName) {
        this.initMeta(serviceName)
      }
    });
    this.subscription.add(subscription);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private serviceNameToKey(serviceName: string): string {
    const serviceKey = serviceName.split('-').map((w, index) => {
      return index === 0 ? w : w[0].toUpperCase() + w.substr(1).toLowerCase();
    }).join('').replace('-', '');
    return serviceKey;
  }

  private initMeta(serviceName: string): void {
    this.serviceKey = this.serviceNameToKey(serviceName);
    const subscription = this.translate.get('services.' + this.serviceKey).subscribe(service => {
      for (let metaName in service?.meta) {
        if (metaName === 'title') {
          this.titleService.setTitle(service.meta.title);
        } 
        this.metaTagService.updateTag({ name: metaName, content: service.meta[metaName] });
      }
    })
    this.subscription.add(subscription);
  }

}
