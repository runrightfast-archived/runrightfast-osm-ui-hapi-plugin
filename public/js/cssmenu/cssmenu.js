/*
 * runrightfast-osm-ui-hapi-plugin: /public/parts/cssmenu.js
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
 define(['angular', 'text!cssmenu/cssmenu.html'], function (ng, template) {
  'use strict';

  var module = ng.module('part.cssmenu', []);

  module.directive('cssmenu', function() {
    return {
      restrict: 'E',
      template: template,
      link: function($scope, $element, $attrs) {
        $scope.onEvent = function(event) {
          $scope.$broadcast(event);
        };
      }
    }
  });

});