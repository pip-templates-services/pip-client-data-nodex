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
const EntitiesCommandableLambdaClientV1_1 = require("../../src/version1/EntitiesCommandableLambdaClientV1");
const EntitiesClientV1Fixture_1 = require("./EntitiesClientV1Fixture");
suite('EntitiesCommandableLambdaClientV1', () => {
    let client;
    let fixture;
    let AWS_LAMDBA_ARN = process.env["AWS_LAMDBA_ARN"] || "";
    let AWS_ACCESS_ID = process.env["AWS_ACCESS_ID"] || "";
    let AWS_ACCESS_KEY = process.env["AWS_ACCESS_KEY"] || "";
    if (!AWS_LAMDBA_ARN || !AWS_ACCESS_ID || !AWS_ACCESS_KEY)
        return;
    setup(() => __awaiter(void 0, void 0, void 0, function* () {
        client = new EntitiesCommandableLambdaClientV1_1.EntitiesCommandableLambdaClientV1();
        let lambdaConfig = pip_services3_commons_nodex_1.ConfigParams.fromTuples("connection.protocol", "aws", "connection.arn", AWS_LAMDBA_ARN, "credential.access_id", AWS_ACCESS_ID, "credential.access_key", AWS_ACCESS_KEY, "options.connection_timeout", 30000);
        client.configure(lambdaConfig);
        fixture = new EntitiesClientV1Fixture_1.EntitiesClientV1Fixture(client);
        yield client.open(null);
    }));
    teardown(() => __awaiter(void 0, void 0, void 0, function* () {
        yield client.close(null);
    }));
    test('CRUD Operations', () => __awaiter(void 0, void 0, void 0, function* () {
        yield fixture.testCrudOperations();
    }));
});
//# sourceMappingURL=EntitiesCommandableLambdaClientV1.test.js.map