import { Component, Input, OnInit, AfterViewInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Http, Response } from '@angular/http';

let Prism = require('prismjs');
var path = require('path');

@Component({
  selector: 'ddk-example',
  templateUrl: 'example.component.html'
})
export class ExampleComponent implements OnInit, AfterViewInit, AfterViewChecked {

  private el: Element;
  private iframeSrc: SafeResourceUrl;
  private manifest: any;
  private rootPath: string = '/examples/'
  private path: string;
  private entry: string;
  private files: Array<any>;
  private markup: string;
  private currentFile: string;
  private markupInline: boolean;

  @Input() id: string;
  @Input() width: string = '100%';
  @Input() height: string = '100';
  @ViewChild('contentRef') contentRef;

  constructor(private sanitizer: DomSanitizer, private http: Http, private elementRef: ElementRef) {
    this.el = <Element>this.elementRef.nativeElement;
  }

  ngOnInit() {
    if(this.id !== undefined) {
      this.path = `${this.rootPath}${this.id}/`
      this.markup = '<html></html>';
      this.http.get(`${this.path}manifest.json`).subscribe(this.parseManifest.bind(this));
    }
  }

  ngAfterViewChecked() {
    let examples = document.body.querySelectorAll('.crds-inline-markup');
    for (let i = 0; i < examples.length; i++) {
      if (!examples[i].getAttribute('data-processed')) {
        this.buildExample(examples[i]);
      }
    }
  }

  ngAfterViewInit() {
    this.markupInline = this.contentRef.nativeElement.children.length > 0;
  }

  parseManifest(res: Response) {
    this.manifest = res.json();
    this.files = this.manifest.files;
    this.loadResource(this.manifest.entry);

    let url = `${this.path}${this.manifest.entry}`;
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getMarkup(url) {
    this.http.get(url).subscribe((data: Response) => {
      this.markup = data['_body'];
      let filetype;
      switch(path.extname(data.url)) {
        case '.css':
          filetype = 'css';
          break;
        case '.js':
          filetype = 'javascript'
          break;
        default:
          filetype = 'markup';
      }
      this.addSyntaxHighlighting(filetype);
    });
  }

  addSyntaxHighlighting(language) {
    let els = this.el.getElementsByTagName('pre')
    for(let i = 0; i < els.length; i++) {
      this.markup = Prism.highlight(this.markup, Prism.languages[language]);
    }
  }

  loadResource(path) {
    this.manifest['active'] = path;
    let url = `${this.path}${path}`;
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
    if(el.children.length > 0) {
      let html = el.innerHTML.replace(/^\n+|\n+$/g, '');
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
