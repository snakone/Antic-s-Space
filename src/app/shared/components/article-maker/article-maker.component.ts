import { Component, OnDestroy, ViewChild, AfterViewInit, Injector, NgModuleRef,
         ViewContainerRef, NgModule, Compiler, Input } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
import { Subscription } from 'rxjs';
import { Article } from '@app/shared/interfaces/interfaces';
import { IonicModule } from '@ionic/angular';

declare var ClipboardJS: any;

@Component({
  selector: 'app-article-maker',
  template: `<div><ng-container #vc></ng-container></div>`
})

export class ArticleMakerComponent implements AfterViewInit, OnDestroy {

  public content = '';
  @Input() article: Article;
  @ViewChild('vc', { read: ViewContainerRef }) vc: ViewContainerRef;
  routerOb: Subscription = null;
  clipboard = new ClipboardJS('.btn');

  constructor(private route: ActivatedRoute,
              private compiler: Compiler,
              private injector: Injector,
              private module: NgModuleRef<any>,
              private router: Router) {}

  ngAfterViewInit() {
    const tmpID = this.route.snapshot.params.id;
    if (tmpID) {
      this.routerOb = this.route.params.subscribe(param => {
        const id = this.router.url.substring(1) || '';
        const tmpCmp = Component({
          template: this.article.message,
          styles: [`code { font-size: .7em; padding: 15px 20px 20px 20px;
                           border-radius: 5px; }
                    .code-box { background: #1e1e1e; border-radius: 5px; }
                    .btn { --background: transparent; --box-shadow: none;
                           position: relative; left: 232px; top: 7px; font-size: 1.4em; }
                    .lang { position: relative; left: 12px;
                            color: #e05c0f; font-size: .8em; font-weight: bold; }
                    pre { margin: 0 }`]
        })(class TempComponent {
          public code: string[];
        });
        const tmpModule = NgModule({
          declarations: [tmpCmp],
          imports: [
            SharedModule,
            RouterModule,
            IonicModule
          ]
        })(class {});
        this.compiler.compileModuleAndAllComponentsAsync(tmpModule)
          .then((factories) => {
            this.vc.clear();
            const f = factories.componentFactories[factories.componentFactories.length - 1];
            const cmpRef = f.create(this.injector, [], null, this.module);
            cmpRef.instance.name = 'dynamic';
            console.log(this.article);
            cmpRef.instance.code = this.article.code;
            cmpRef.instance.clipboard = this.clipboard;
            this.vc.insert(cmpRef.hostView);
          });
        });
    }
  }

  ngOnDestroy() {
    if (this.routerOb) {
      this.routerOb.unsubscribe();
    }

    if (this.clipboard) {
      this.clipboard.destroy();
    }
  }

}

