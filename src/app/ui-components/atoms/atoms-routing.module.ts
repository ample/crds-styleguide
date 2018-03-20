import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AtomsComponent } from './atoms.component';

/* Feedback */
import { FeedbackComponent } from './feedback/feedback.component';
import { AlertsComponent } from './feedback/alerts/alerts.component';
import { ToastNotificationsComponent } from './feedback/toast-notifications/toast-notifications.component';

/* loaders */
import { LoadersComponent } from './loaders/loaders.component';

/* buttons */
import { ButtonsComponent } from './buttons/buttons.component';
import { ButtonStylesComponent } from './buttons/styles/styles.component';
import { ButtonStatesComponent } from './buttons/states/states.component';
import { ButtonGroupsComponent } from './buttons/groups/groups.component';
import { ButtonInputsComponent } from './buttons/button-inputs/button-inputs.component';
import { ButtonDropdownsComponent } from './buttons/dropdowns/dropdowns.component';
import { ButtonPlacementComponent } from './buttons/placement/placement.component';

/* icons */
import { IconsComponent } from './icons/icons.component';
import { IconDirectoryComponent } from './icons/directory/directory.component';
import { IconInlineComponent } from './icons/inline-svg/inline-svg.component';
import { IconCssComponent } from './icons/css-svg/css-svg.component';
import { IconResizeComponent } from './icons/resize-svg/resize-svg.component';
import { IconColorsComponent } from './icons/colors/colors.component';

/* tables */
import { TablesComponent } from './tables/tables.component';

/* tooltips */
import { TooltipsComponent } from './tooltips/tooltips.component';

/* forms */
import { FormsComponent } from './forms/forms.component';
import { FormInputsComponent } from './forms/inputs/inputs.component';
import { FormRadiosComponent } from './forms/radios/radios.component';
import { FormCheckboxesComponent } from './forms/checkboxes/checkboxes.component';
import { FormTogglesComponent } from './forms/toggles/toggles.component';
import { FormNestedFormsComponent } from './forms/nested-forms/nested-forms.component';
import { FormNumberStepperComponent } from './forms/number-stepper/number-stepper.component';
import { FormStatesComponent } from './forms/form-states/form-states.component';
import { FormDatepickerComponent } from './forms/datepicker/datepicker.component';
import { FormTimepickerComponent } from './forms/timepicker/timepicker.component';
import { SearchFieldComponent } from './forms/search/search.component';
import { FormGroupsComponent } from './forms/form-groups/groups.component';

/* labels */
import { LabelsComponent } from './labels/labels.component';

/* media images */
import { MediaImgComponent } from './media-img/media-img.component';

/* progress bar */
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

const learnMoreRoutes: Routes = [
  {
    path: 'ui-components/atoms',
    component: AtomsComponent,
    children: [
      {
        path: '',
        redirectTo: 'buttons',
        pathMatch: 'full'
      },
      {
        path: 'buttons',
        component: ButtonsComponent,
        children: [
          {
            path: '',
            redirectTo: 'styles',
            pathMatch: 'full'
          },
          {
            path: 'styles',
            component: ButtonStylesComponent
          },
          {
            path: 'states',
            component: ButtonStatesComponent
          },
          {
            path: 'groups',
            component: ButtonGroupsComponent
          },
          {
            path: 'dropdowns',
            component: ButtonDropdownsComponent
          },
          {
            path: 'button-inputs',
            component: ButtonInputsComponent
          },
          {
            path: 'placement',
            component: ButtonPlacementComponent
          }
        ]
      },
      {
        path: 'icons',
        component: IconsComponent,
        children: [
          {
            path: '',
            redirectTo: 'directory',
            pathMatch: 'full'
          },
          {
            path: 'directory',
            component: IconDirectoryComponent
          },
          {
            path: 'inline-svg',
            component: IconInlineComponent
          },
          {
            path: 'css-svg',
            component: IconCssComponent
          },
          {
            path: 'resize-svg',
            component: IconResizeComponent
          },
          {
            path: 'colors',
            component: IconColorsComponent
          }
        ]
      },
      {
        path: 'feedback',
        component: FeedbackComponent,
        children: [
          {
            path: '',
            redirectTo: 'alerts',
            pathMatch: 'full'
          },
          {
            path: 'alerts',
            component: AlertsComponent
          },
          {
            path: 'toast-notifications',
            component: ToastNotificationsComponent
          }
        ]
      },
      {
        path: 'labels',
        component: LabelsComponent
      },

      {
        path: 'loaders',
        component: LoadersComponent
      },
      {
        path: 'forms',
        component: FormsComponent,
        children: [
          {
            path: '',
            redirectTo: 'inputs',
            pathMatch: 'full'
          },
          {
            path: 'inputs',
            component: FormInputsComponent
          },
          {
            path: 'radios',
            component: FormRadiosComponent
          },
          {
            path: 'checkboxes',
            component: FormCheckboxesComponent
          },
          {
            path: 'toggles',
            component: FormTogglesComponent
          },
          {
            path: 'number-stepper',
            component: FormNumberStepperComponent
          },
          {
            path: 'nested-forms',
            component: FormNestedFormsComponent
          },
          {
            path: 'states',
            component: FormStatesComponent
          },
          {
            path: 'datepicker',
            component: FormDatepickerComponent
          },
          {
            path: 'timepicker',
            component: FormTimepickerComponent
          },
          {
            path: 'search',
            component: SearchFieldComponent
          },
          {
            path: 'groups',
            component: FormGroupsComponent
          }
        ]
      },
      {
        path: 'tables',
        component: TablesComponent
      },
      {
        path: 'tooltips',
        component: TooltipsComponent
      },
      {
        path: 'media-images',
        component: MediaImgComponent
      },
      {
        path: 'progress-bar',
        component: ProgressBarComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(learnMoreRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AtomsRoutingModule {}
