/*
 * runrightfast-osm-ui-hapi-plugin: events.js
 * AngularJS event catalog for the RunRightFast OSM UI
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
(function() {
  'use strict';

  var events = angular.module('app.events', []);

  events.factory('Events', function() {
  	return {

  		MENU_FILE_NEW: 'MENU:FILE:NEW',
  		MENU_FILE_SAVE: 'MENU:FILE:SAVE',
  		MENU_FILE_SAVE_ALL: 'MENU:FILE:SAVE_ALL',
  		MENU_FILE_QUIT: 'MENU:FILE:SAVE_QUIT',

  		MENU_EDIT_CUT: 'MENU:EDIT:CUT',
  		MENU_EDIT_COPY: 'MENU:EDIT:COPY',
  		MENU_EDIT_PASTE: 'MENU:EDIT:PASTE',

  		MENU_VIEW: 'MENU:VIEW',

  		MENU_ABOUT: 'MENU:ABOUT'

  	};
  });

}());