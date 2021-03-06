System.config({
  //use typescript for compilation
  transpiler: 'typescript',
  //typescript compiler options
  typescriptOptions: {
    emitDecoratorMetadata: true
  },
  meta: {
    "*.scss": { "loader": "sass" }
  },
  paths: {
    'npm:': 'https://unpkg.com/'
  },
  //map tells the System loader where to look for things
  map: {

    'app': '.',

    '@angular/core': 'npm:@angular/core@4.1.2/bundles/core.umd.js',
    '@angular/common': 'npm:@angular/common@4.1.2/bundles/common.umd.js',
    '@angular/compiler': 'npm:@angular/compiler@4.1.2/bundles/compiler.umd.js',
    '@angular/platform-browser': 'npm:@angular/platform-browser@4.1.2/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@4.1.2/bundles/platform-browser-dynamic.umd.js',
    '@angular/http': 'npm:@angular/http@4.1.2/bundles/http.umd.js',
    '@angular/router': 'npm:@angular/router@4.1.2/bundles/router.umd.js',
    '@angular/forms': 'npm:@angular/forms@4.1.2/bundles/forms.umd.js',

    '@angular/core/testing': 'npm:@angular/core@4.1.2/bundles/core-testing.umd.js',
    '@angular/common/testing': 'npm:@angular/common@4.1.2/bundles/common-testing.umd.js',
    '@angular/compiler/testing': 'npm:@angular/compiler@4.1.2/bundles/compiler-testing.umd.js',
    '@angular/platform-browser/testing': 'npm:@angular/platform-browser@4.1.2/bundles/platform-browser-testing.umd.js',
    '@angular/animations': 'npm:@angular/animations@4.1.2/bundles/animations.umd.js',
    '@angular/animations/browser': 'npm:@angular/animations@4.1.2/bundles/animations-browser.umd.js',
    '@angular/platform-browser/animations': 'npm:@angular/platform-browser@4.1.2/bundles/platform-browser-animations.umd.js',
    '@angular/platform-browser-dynamic/testing': 'npm:@angular/platform-browser-dynamic@4.1.2/bundles/platform-browser-dynamic-testing.umd.js',
    '@angular/http/testing': 'npm:@angular/http@4.1.2/bundles/http-testing.umd.js',
    '@angular/router/testing': 'npm:@angular/router@4.1.2/bundles/router-testing.umd.js',

    'rxjs': 'npm:rxjs@5.0.3',
    'typescript': 'npm:typescript@2.0.2/lib/typescript.js',
    'ngx-bootstrap': 'npm:ngx-bootstrap@1.7.1'
  },
  //packages defines our app package
  packages: {
    app: {
      main: './main.ts',
      defaultExtension: 'ts'
    },
    rxjs: {
      defaultExtension: 'js'
    }
  }
});
