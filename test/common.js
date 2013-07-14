"use strict";
global.sinon = require('sinon');
var chai = require('chai');
chai.Assertion.includeStack = true;
global.expect = chai.expect;
chai.use(require('sinon-chai'));
