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
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const pip_service_data_nodex_1 = require("pip-service-data-nodex");
const pip_service_data_nodex_2 = require("pip-service-data-nodex");
const pip_service_data_nodex_3 = require("pip-service-data-nodex");
const EntitiesClientV1Fixture_1 = require("./EntitiesClientV1Fixture");
const EntitiesRestClientV1_1 = require("../../src/version1/EntitiesRestClientV1");
let httpConfig = pip_services3_commons_nodex_2.ConfigParams.fromTuples("connection.protocol", "http", "connection.host", "localhost", "connection.port", 3000);
suite('EntitiesRestClientV1', () => {
    let service;
    let client;
    let fixture;
    suiteSetup(() => __awaiter(void 0, void 0, void 0, function* () {
        let logger = new pip_services3_components_nodex_1.ConsoleLogger();
        let persistence = new pip_service_data_nodex_1.EntitiesMemoryPersistence();
        let controller = new pip_service_data_nodex_3.EntitiesController();
        service = new pip_service_data_nodex_2.EntitiesRestServiceV1();
        service.configure(httpConfig);
        let references = pip_services3_commons_nodex_3.References.fromTuples(new pip_services3_commons_nodex_1.Descriptor('pip-services-commons', 'logger', 'console', 'default', '1.0'), logger, new pip_services3_commons_nodex_1.Descriptor('pip-service-data', 'persistence', 'memory', 'default', '1.0'), persistence, new pip_services3_commons_nodex_1.Descriptor('pip-service-data', 'controller', 'default', 'default', '1.0'), controller, new pip_services3_commons_nodex_1.Descriptor('pip-service-data', 'service', 'rest', 'default', '1.0'), service);
        controller.setReferences(references);
        service.setReferences(references);
        client = new EntitiesRestClientV1_1.EntitiesRestClientV1();
        client.setReferences(references);
        client.configure(httpConfig);
        fixture = new EntitiesClientV1Fixture_1.EntitiesClientV1Fixture(client);
        try {
            yield service.open(null);
            yield client.open(null);
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    }));
    suiteTeardown(() => __awaiter(void 0, void 0, void 0, function* () {
        yield client.close(null);
        yield service.close(null);
    }));
    test("CRUD Operations", () => __awaiter(void 0, void 0, void 0, function* () {
        fixture.testCrudOperations();
    }));
});
//# sourceMappingURL=EntitiesRestClientV1.test.js.map