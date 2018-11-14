"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = require("../src/app");
var request = require("supertest");
describe('GET /api', function () {
    it('should return 200 OK', function () {
        return request(app).get('/api')
            .expect(200);
    });
});
