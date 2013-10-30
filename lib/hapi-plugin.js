/**
 * runrightfast-osm-ui-hapi-plugin: lib/hapi-plugin.js
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
var Hoek = require('hoek');
var i18n = require('i18next');

// declare plugin internals
var internals = {
	defaults : {
		i18nDir : 'i18n',
		templateDir : './views',
		version : '/runrightfast/osm/version'
	},
	version : Hoek.loadPackage().version
};

// plugin registration
module.exports.register = function(plugin, options, next) {

	var settings = Hoek.applyToDefaults(internals.defaults, options);

	setupVersionRoute(plugin, settings);
	setupViews(plugin, settings);

	next();

};

var setupVersionRoute = function(plugin, settings) {
	if (settings.version) {
		plugin.route({
			method : 'GET',
			path : settings.version,
			handler : function() {
				this.reply(internals.version);
			}
		});
	}
};

var setupViews = function(plugin, settings) {

	// configure i18n
	i18n.init({
		lng : 'en-US',
		fallbackLng : 'en-US',
		debug : false,
		ns : 'messages',
		resGetPath : settings.i18nDir + '/__lng__/__ns__.json'
	});

	// setup views options
	plugin.views({
		engines : {
			jade : 'jade'
		},
		path : settings.templateDir,
		compileOptions: {
			pretty: true
		}
	});

	// configure view routes
	var viewMetadata = JSON.parse(JSON.stringify(module.exports));
	viewMetadata.env = process.env.NODE_ENV || 'DEV';
	viewMetadata.t = i18n.t;
	plugin.route([ {
		path : '/',
		method : 'GET',
		handler : function(request) {
			return this.reply.view('index', viewMetadata);
		}
	}, {
		path : '/views/{view}',
		method : 'GET',
		handler : function(request) {
			return this.reply.view('client/' + request.params.view, viewMetadata);
		}
	}, {
		path : '/{path*}',
		method : 'GET',
		handler : {
			directory : {
				path : './public',
				listing : false,
				index : false
			}
		}
	} ]);

};