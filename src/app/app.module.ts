import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CollapseModule } from 'ng2-bootstrap';
import { BootstrapDropdownDirective } from './directives/bootstrap-dropdown/bootstrap-dropdown.directive';
import { BootstrapDropdownService } from './directives/bootstrap-dropdown/bootstrap-dropdown.service';
import { ThemeToggleSwitchComponent } from './directives/theme-toggle-switch/theme-toggle-switch.component';
import { ThemeToggleSwitchService } from './directives/theme-toggle-switch/theme-toggle-switch.service';
import { ContentBlockModule } from 'crds-ng2-content-block';
import { ScrollToModule } from 'ng2-scroll-to';

import { ExampleModule } from './shared/example/example.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DesignersModule } from './designers/designers.module';
import { DevelopersModule } from './developers/developers.module';
import { UiComponentsModule } from './ui-components/ui-components.module';

import { AssetsModule } from './assets/assets.module';
import { LogosComponent } from './assets/logos/logos.component';

import { SearchComponent } from './shared/search/search.component';
import { SearchService } from './shared/search/search.service';
import { LinkableHeaderService } from './services/linkable-header.service';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    BootstrapDropdownDirective,
    SearchComponent,
    ThemeToggleSwitchComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    CollapseModule,
    DesignersModule,
    DevelopersModule,
    UiComponentsModule,
    AssetsModule,
    AppRoutingModule,
    ExampleModule,
    ContentBlockModule.forRoot({ endpoint: process.env.CRDS_CMS_ENDPOINT, categories: Array('ddk') }),
    ScrollToModule.forRoot()
  ],
  exports: [
    RouterModule
  ],
  providers: [
    BootstrapDropdownService,
    LinkableHeaderService,
    SearchService,
    ThemeToggleSwitchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
