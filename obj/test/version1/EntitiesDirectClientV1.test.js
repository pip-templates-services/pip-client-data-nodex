"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_2 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_3 = require("pip-services3-commons-nodex");
const pip_service_data_nodex_1 = require("pip-service-data-nodex");
const pip_service_data_nodex_2 = require("pip-service-data-nodex");
const EntitiesDirectClientV1_1 = require("../../src/version1/EntitiesDirectClientV1");
const EntitiesClientV1Fixture_1 = require("./EntitiesClientV1Fixture");
suite('EntitiesDirectClientV1', () => {
    let persistence;
    let controller;
    let client;
    let fixture;
    setup(() => __awaiter(void 0, void 0, void 0, function* () {
        persistence = new pip_service_data_nodex_1.EntitiesMemoryPersistence();
        persistence.configure(new pip_services3_commons_nodex_1.ConfigParams());
        controller = new pip_service_data_nodex_2.EntitiesController();
        controller.configure(new pip_services3_commons_nodex_1.ConfigParams());
        client = new EntitiesDirectClientV1_1.EntitiesDirectClientV1();
        let references = pip_services3_commons_nodex_3.References.fromTuples(new pip_services3_commons_nodex_2.Descriptor('pip-service-data', 'persistence', 'memory', 'default', '1.0'), persistence, new pip_services3_commons_nodex_2.Descriptor('pip-service-data', 'controller', 'default', 'default', '1.0'), controller, new pip_services3_commons_nodex_2.Descriptor('pip-service-data', 'client', 'direct', 'default', '1.0'), client);
        controller.setReferences(references);
        client.setReferences(references);
        fixture = new EntitiesClientV1Fixture_1.EntitiesClientV1Fixture(client);
        yield persistence.open(null);
    }));
    teardown(() => __awaiter(void 0, void 0, void 0, function* () {
        yield persistence.close(null);
    }));
    test('CRUD Operations', () => __awaiter(void 0, void 0, void 0, function* () {
        yield fixture.testCrudOperations();
    }));
});
//# sourceMappingURL=EntitiesDirectClientV1.test.js.map