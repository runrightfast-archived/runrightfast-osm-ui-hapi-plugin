 /**
 * runrightfast-osm-ui-hapi-plugin: test-server.js
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

 'use strict';

// module dependencies
var Hapi = require('hapi');
var pkginfo = require('pkginfo')(module, 'name', 'version');

// configure server
var composer = new Hapi.Composer({
	pack : {},
	servers : [ {
		port : process.env.PORT || 3000
	} ],
	plugins : {
		'../../..' : {}
	}	
});

// start the servers
composer.compose(function (err) {
    if (err) {
        console.log('Failed composing');
    } else {
	    var appname = module.exports.name;
		var version = module.exports.version;
		composer.start(function() {
			console.log('Starting %s v%s', appname, version);
		});
    }
});

