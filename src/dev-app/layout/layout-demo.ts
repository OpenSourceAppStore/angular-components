/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BreakpointObserverOverviewExample} from '@angular/components-examples/cdk/layout';

@Component({
  selector: 'layout-demo',
  templateUrl: 'layout-demo.html',
  styleUrl: 'layout-demo.css',
  standalone: true,
  imports: [CommonModule, BreakpointObserverOverviewExample],
})
export class LayoutDemo {}
