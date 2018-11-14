"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = require("../src/app");
var request = require("supertest");
describe('Test the root path', function () {
    test('It should response the GET method', function () {
        return request(app).get('/').expect(200);
    });
});
