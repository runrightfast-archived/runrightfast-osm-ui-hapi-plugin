/*
 * runrightfast-osm-ui-hapi-plugin: controllers.js
 * AngularJS controllers for the RunRightFast OSM UI
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

  var controllers = angular.module('app.controllers', [ 'ui.bootstrap' ]);

  controllers.controller('PageCtrl', function($scope, $modal, Events) {

  	$scope.items = {
      left: [
        { name: 'File', items: [
          { name: 'New', event: Events.MENU_FILE_NEW },
          { name: 'Save', event: Events.MENU_FILE_SAVE },
          { name: 'Save All', event: Events.MENU_FILE_SAVE_ALL },
          { type: 'SEPARATOR' },
          { name: 'Quit', event: Events.MENU_FILE_QUIT }
        ]},
        { name: 'Edit', items: [
          { name: 'Cut', event: Events.MENU_EDIT_CUT },
          { name: 'Copy', event: Events.MENU_EDIT_COPY },
          { name: 'Paste', event: Events.MENU_EDIT_PASTE }
        ]},
        { name: 'View', event: Events.MENU_VIEW }
      ],
      right: [
        { name: 'About', event: Events.MENU_ABOUT }
      ]
  	};

    $scope.$on(Events.MENU_ABOUT, function(event) {
      var modalInstance = $modal.open({
        templateUrl: 'views/about.jade',
        controller: function ($scope, $modalInstance) {
          $scope.ok = function () {
            $modalInstance.close($scope.selected.item);
          };
        }
      });      
    });

    $scope.$on(Events.MENU_FILE_NEW, function(event) {
      console.log(event);
    });

    $scope.$on(Events.MENU_VIEW, function(event) {
      console.log(event);
    });
  
  });

}());