/*
 * runrightfast-osm-ui-hapi-plugin: test/pluginSpec.js
 * Plugin tests
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

// load modules
var Hapi = require('hapi');
var expect = require('chai').expect;
require('pkginfo')(module, 'version');

describe('runrightfast-osm-ui-hapi-plugin', function() {

	var server = null;

	before(function(done) {
		server = new Hapi.Server();
		server.pack.require('../', {}, function(err) {
			expect(err).to.not.exist;
			done();
		});
	});

	it('can be added as a plugin to hapi', function(done) {
		var server = new Hapi.Server();
		server.pack.allow({
			ext : true
		}).require('../', {}, function(err) {
			expect(err).to.not.exist;
			done();
		});
	});

	it('response to a GET of /runrightfast/osm/version', function(done) {
		server.inject({
			method : 'GET',
			url : '/runrightfast/osm/version'
		}, function(res) {
			expect(res.statusCode).to.equal(200);
			expect(res.payload).to.equal(module.exports.version);
			done();
		});
	});

});