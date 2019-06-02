import { Component, OnDestroy, ViewChild, AfterViewInit, Injector, NgModuleRef,
         ViewContainerRef, NgModule, Compiler, Input } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
import { Subscription } from 'rxjs';
import { Article, Code } from '@app/shared/interfaces/interfaces';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

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
              private module: NgModuleRef<any>) {}

  ngAfterViewInit() {
    const tmpID = this.route.snapshot.params.id;
    if (tmpID) {
      this.routerOb = this.route.params.subscribe(() => {
        const tmpCmp = Component({
          template: this.article.message,
          styles: [`code { font-size: .7em; padding: 22px 15px 22px 15px;
                           border-bottom-right-radius: 5px; border-bottom-left-radius: 5px; }
                    .code-box { margin-top: -15px; margin-bottom: 20px; }
                    .copy { position: relative; background: #4c4e52; padding: 4px;
                            border-top-right-radius: 5px; border-top-left-radius: 5px }
                    .btn { position: relative; right: 7px; top: 1px;
                           font-size: 1.3em; }
                    .code-box span { position: relative; left: 14px; top: 25px; z-index: 100;
                            font-size: .8em; font-weight: bold; }
                    pre { margin: 0 } .code-img { max-width: 100%; display: block; margin: 10px auto; }
                    p, strong { font-size: .8em; }
                    ion-item { --padding-start: 0 !important; font-size: .9em }
                    ion-list { margin-bottom: 20px; }`]
        })(class TempComponent {
          public code: Code[];
        });
        const tmpModule = NgModule({
          declarations: [tmpCmp],
          imports: [
            SharedModule,
            RouterModule,
            IonicModule,
            CommonModule
          ]
        })(class {});
        this.compiler.compileModuleAndAllComponentsAsync(tmpModule)
          .then((factories) => {
            this.vc.clear();
            const f = factories.componentFactories[factories.componentFactories.length - 1];
            const cmpRef = f.create(this.injector, [], null, this.module);
            cmpRef.instance.name = 'dynamic';
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

