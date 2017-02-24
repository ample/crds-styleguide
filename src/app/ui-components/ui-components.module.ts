import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TabsModule, DatepickerModule, ButtonsModule } from 'ng2-bootstrap';

import { AppModule } from '../app.module';
import { UiComponentsComponent } from './ui-components.component';
import { UiRoutingModule } from './ui-routing.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ComponentListComponent } from './component-list/component-list.component';
import { ContentBlockModule } from '../shared/content-block/content-block.module';

import { CardsComponent } from './cards/cards.component';
import { SidebarNavComponent } from './cards/sidebar-nav/sidebar-nav.component';
import { BasicComponent } from './cards/basic/basic.component';
import { VariationsComponent } from './cards/variations/variations.component';
import { NoImageComponent } from './cards/no-image/no-image.component';
import { VideoComponent } from './cards/video/video.component';

/* typography */
import { TypographyComponent } from './typography/typography.component';
import { TypefacesComponent } from './typography/typefaces/typefaces.component';
import { FontScalingComponent } from './typography/font-scaling/font-scaling.component';
import { TypesettingComponent } from './typography/typesetting/typesetting.component';
import { AddressComponent } from './typography/address/address.component';
import { TypographyJumbotronComponent } from './typography/jumbotron/jumbotron.component';
import { BlockquoteComponent } from './typography/blockquote/blockquote.component';
import { ListsComponent } from './typography/lists/lists.component';
import { WebFontsComponent } from './typography/web-fonts/web-fonts.component';

/* colors */
import { ColorsComponent } from './colors/colors.component';
import { SwatchesComponent } from './colors/swatches/swatches.component';
import { ColorOverridesComponent } from './colors/overrides/overrides.component';
import { ColorBackgroundsComponent } from './colors/backgrounds/backgrounds.component';

/* utility classes */
import { UtilitiesComponent } from './utilities/utilities.component';

/* alerts */
import { AlertsComponent } from './alerts/alerts.component';

/* loaders */
import { LoadersComponent } from './loaders/loaders.component';
import { LoaderIconsComponent } from './loaders/icons/icons.component';
import { SkeletonBlocksComponent } from './loaders/skeleton-blocks/skeleton-blocks.component';

/* buttons */
import { ButtonsComponent } from './buttons/buttons.component';
import { ButtonsJumbotronComponent } from './buttons/jumbotron/jumbotron.component';
import { ButtonStylesComponent } from './buttons/styles/styles.component';
import { ButtonSizesComponent } from './buttons/sizes/sizes.component';
import { ButtonGroupsComponent } from './buttons/groups/groups.component';

/* icons */
import { IconsComponent } from './icons/icons.component';
import { IconDirectoryComponent } from './icons/directory/directory.component';
import { IconInlineComponent } from './icons/inline-svg/inline-svg.component';
import { IconCssComponent } from './icons/css-svg/css-svg.component';
import { IconResizeComponent } from './icons/resize-svg/resize-svg.component';

/* tables */
import { TablesComponent } from './tables/tables.component';
import { TablesJumbotronComponent } from './tables/jumbotron/jumbotron.component';

/* forms */
import { FormsComponent } from './forms/forms.component';
import { FormsJumbotronComponent } from './forms/jumbotron/jumbotron.component';
import { FormControlsComponent } from './forms/form-controls/form-controls.component';
import { FormStatesComponent } from './forms/form-states/form-states.component';
import { FormDatepickerComponent } from './forms/datepicker/datepicker.component';
import { FormGroupsComponent } from './forms/form-groups/groups.component';

/* header */
import { HeaderComponent } from './header/header.component';

/* sign-in */
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UiRoutingModule,
    TabsModule,
    DatepickerModule.forRoot(),
    ButtonsModule.forRoot(),
    ContentBlockModule
  ],
  exports: [
    UiComponentsComponent
  ],
  declarations: [
    UiComponentsComponent,
    SearchBarComponent,
    ComponentListComponent,

    /* typography */
    TypographyComponent,
    TypefacesComponent,
    FontScalingComponent,
    TypographyJumbotronComponent,
    TypesettingComponent,
    AddressComponent,
    BlockquoteComponent,
    ListsComponent,
    WebFontsComponent,

    /* colors */
    ColorsComponent,
    SwatchesComponent,
    ColorOverridesComponent,
    ColorBackgroundsComponent,

    /* utility classes */
    UtilitiesComponent,

    /* alerts */
    AlertsComponent,

    /* loaders */
    LoadersComponent,
    LoaderIconsComponent,
    SkeletonBlocksComponent,

    /* buttons */
    ButtonsComponent,
    ButtonsJumbotronComponent,
    ButtonStylesComponent,
    ButtonSizesComponent,
    ButtonGroupsComponent,

    /* icons */
    IconsComponent,
    IconDirectoryComponent,
    IconInlineComponent,
    IconCssComponent,
    IconResizeComponent,

    /* tables */
    TablesComponent,
    TablesJumbotronComponent,

    /* forms */
    FormsComponent,
    FormsJumbotronComponent,
    FormControlsComponent,
    FormStatesComponent,
    FormDatepickerComponent,
    FormGroupsComponent,

    CardsComponent,
    SidebarNavComponent,
    BasicComponent,
    VariationsComponent,
    NoImageComponent,
    VideoComponent,

    /* header */
    HeaderComponent,

    /* sign in */
    SignInComponent
  ]
})
export class UiComponentsModule { }
