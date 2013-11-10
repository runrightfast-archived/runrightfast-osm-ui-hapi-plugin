/**
 * runrightfast-osm-ui-hapi-plugin: /public/js/app.js
 * AngularJS main script for the RunRightFast OSM UI
 *
 * Copyright [2013] [runrightfast.co]
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
define([
  'angular',
  './controllers/controllers',
  './core/directives',
  './core/events',
  './core/filters',
  './services/services',
  '../parts/cssmenu/cssmenu',
  '../parts/csstabs/csstabs',
  '../parts/csstree/csstree'
], function (ng) {
  'use strict';

  ng.module('app', [ 
	  'app.controllers',
	  'app.directives',
	  'app.events',
	  'app.filters',
	  'app.services',
	  'part.cssmenu',
	  'part.csstabs',
	  'part.csstree',
	  'ui.bootstrap'
  ]);

});