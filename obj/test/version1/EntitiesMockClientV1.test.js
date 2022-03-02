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
const EntitiesMockClientV1_1 = require("../../src/version1/EntitiesMockClientV1");
const EntitiesClientV1Fixture_1 = require("./EntitiesClientV1Fixture");
suite("EntitiesMockClientV1", () => {
    let client;
    let fixture;
    setup(() => {
        client = new EntitiesMockClientV1_1.EntitiesMockClientV1();
        fixture = new EntitiesClientV1Fixture_1.EntitiesClientV1Fixture(client);
    });
    teardown(() => {
    });
    test("CRUD Operations", () => __awaiter(void 0, void 0, void 0, function* () {
        yield fixture.testCrudOperations();
    }));
});
//# sourceMappingURL=EntitiesMockClientV1.test.js.map