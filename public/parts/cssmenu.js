/*
 * runrightfast-osm-ui-hapi-plugin: public/js/directives.js
 * AngularJS directives for the RunRightFast OSM UI
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

  var module = angular.module('part.cssmenu', []);

  module.directive('cssmenu', function() {
    return {
      restrict: 'E',
      templateUrl: 'parts/cssmenu/cssmenu.html',
      scope: {
        items: '='
      },
      link: function(scope, elem, attr) {
      	console.log("Recognized the cssmenu directive usage");
      }
    }
  });

}());