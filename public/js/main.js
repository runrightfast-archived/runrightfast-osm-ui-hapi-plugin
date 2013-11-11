/**
 * runrightfast-osm-ui-hapi-plugin: /public/js/main.js
 * RequireJS entry point for the RunRightFast OSM UI
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
require.config({
  
  // alias libraries paths
  paths: {
    'angular': '../vendor/angular/angular',
    'domReady': '../vendor/requirejs-domready/domReady',
    'text': '../vendor/requirejs-text/text',
    'ui-bootstrap': '../vendor/angular-bootstrap/ui-bootstrap'
  },
  
  // angular does not support AMD out of the box, put it in a shim
  shim: {
    'angular': {
      exports: 'angular'
    },
    'ui-bootstrap': {
      exports: 'ui-bootstrap'
    }
  }
  
});

define([ 'require', 'angular', 'app' ], function (require, ng) {
  'use strict';

  require(['domReady!'], function (document) {
    ng.bootstrap(document, [ 'app' ]);
  });

});
