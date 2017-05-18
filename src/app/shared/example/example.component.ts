import { Component, Input, OnInit, AfterViewInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Http, Response } from '@angular/http';

import { ThemeToggleSwitchService } from '../../directives/theme-toggle-switch/theme-toggle-switch.service';

let Prism = require('prismjs');
let path = require('path');
let entities = new (require('html-entities').Html5Entities)();


import 'prismjs/components/prism-typescript';

@Component({
  selector: 'ddk-example',
  providers: [ThemeToggleSwitchService],
  templateUrl: 'example.component.html'
})
export class ExampleComponent implements OnInit, AfterViewInit, AfterViewChecked {

  private el: Element;
  private iframeDoc: any;
  private iframeSrc: SafeResourceUrl;
  private iframeId: string;
  private manifest: any;
  private rootPath = '/examples/';
  private path: string;
  private entry: string;
  private files: Array<any>;
  private markup: string;
  private currentFile: string;
  private markupInline: boolean;
  private preformattedMarkup: string;

  @Input() id: string;
  @Input() width = '100%';
  @Input() height = '100';
  @ViewChild('contentRef') contentRef;

  constructor(private sanitizer: DomSanitizer,
              private http: Http,
              private elementRef: ElementRef,
              private toggleState: ThemeToggleSwitchService) {
    this.el = <Element>this.elementRef.nativeElement;
    console.log(toggleState);
    toggleState.state.subscribe((value) => {
        console.log(`ExampleComponent: ${value}`);
      }
    );
  }

  ngOnInit() {
    if (this.id !== undefined) {
      this.path = `${this.rootPath}${this.id}/`;
      this.markup = '<html></html>';
      this.http.get(`${this.path}manifest.json`).subscribe(this.parseManifest.bind(this));
    }

    // this.toggleState.state.subscribe(
    //   (x) => {
    //     console.log('Next: ' + x.toString());
    //   },
    //   (err) => {
    //     console.log('Error: ' + err);
    //   },
    //   () => {
    //     console.log('Completed');
    //   }
    // );
  }

  ngAfterViewChecked() {
    let el = this.contentRef.nativeElement;
    if (!el.getAttribute('data-processed')) {
      this.buildExample(el);
    }
  }

  ngAfterViewInit() {
    this.markupInline = this.contentRef.nativeElement.children.length > 0;
    if (this.markupInline) {
      let pre = this.contentRef.nativeElement.querySelector('pre');
      if (pre !== null) {
        this.preformattedMarkup = pre.innerHTML;
        pre.remove();
      }
    }
  }

  parseManifest(res: Response) {
    this.manifest = res.json();
    this.files = this.manifest.files;
    this.loadResource(this.files[0]);

    this.iframeId = `iframe-${Math.random().toString(36).substring(3)}`;

    let url = `${this.path}${this.manifest.entry}`;
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getMarkup(url) {
    this.http.get(url).subscribe((data: Response) => {
      let filetype = this.getFileType(url);
      this.markup = data['_body'];
      this.addSyntaxHighlighting(filetype);

      let iframe = document.getElementById(this.iframeId);
      this.iframeDoc = (iframe as any).contentDocument || (iframe as any).contentWindow.document;
    });
  }

  getFileType(url) {
    let filetype;
    switch (path.extname(url)) {
      case '.css':
        filetype = 'css';
        break;
      case '.js':
        filetype = 'javascript';
        break;
      case '.ts':
        filetype = 'typescript';
        break;
      default:
        filetype = 'markup';
    }
    return filetype;
  }

  addSyntaxHighlighting(language) {
    let els = this.el.getElementsByTagName('pre');
    for (let i = 0; i < els.length; i++) {
      this.markup = Prism.highlight(this.markup, Prism.languages[language]);
      els[i].classList.add('language-');
    }
  }

  loadResource(action) {
    this.manifest['active'] = action;
    let url = `${this.path}${action}`;
    this.getMarkup(url);
  }

  onClick(file) {
    this.loadResource(file);
    return false;
  }

  buildExample(el) {
    if (el.getAttribute('data-processed')) {
      return;
    }
    el.setAttribute('data-processed', 'true');
    if (el.children.length > 0) {
      let html = entities.decode(this.preformattedMarkup || el.innerHTML).replace(/^\n+|\n+$/g, '');
      let node = document.createTextNode(html);
      let pre = document.createElement('pre');
          pre.classList.add('language-markup');
          pre.appendChild(node);
      let figure = document.createElement('figure');
          figure.classList.add('highlight');
          figure.appendChild(pre);
      this.insertAfter(figure, el);
      Prism.highlightElement(pre);
    }
  }

  private insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }
}
