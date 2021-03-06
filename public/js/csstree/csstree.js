/*
 * runrightfast-osm-ui-hapi-plugin: /public/parts/csstree.js
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
define(['angular', 'text!csstree/csstree.html'], function (ng, template) {
  'use strict';

  var module = ng.module('part.csstree', []);

  module.directive('csstree', function() {
    return {
      restrict: 'E',
      template: template,
      scope: {
      },
      link: function(scope, elem, attr) {
      	console.log("Recognized the csstree directive usage");
      }
    }
  });

});