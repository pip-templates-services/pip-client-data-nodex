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
exports.EntitiesClientV1Fixture = void 0;
const assert = require('chai').assert;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_2 = require("pip-services3-commons-nodex");
const EntityTypeV1_1 = require("../../src/version1/EntityTypeV1");
const ENTITY1 = {
    id: '1',
    name: '00001',
    type: EntityTypeV1_1.EntityTypeV1.Type1,
    site_id: '1',
    content: 'ABC'
};
const ENTITY2 = {
    id: '2',
    name: '00002',
    type: EntityTypeV1_1.EntityTypeV1.Type2,
    site_id: '1',
    content: 'XYZ'
};
class EntitiesClientV1Fixture {
    constructor(client) {
        assert.isNotNull(client);
        this._client = client;
    }
    testCrudOperations() {
        return __awaiter(this, void 0, void 0, function* () {
            // Create the first entity
            let entity = yield this._client.createEntity(null, ENTITY1);
            assert.isObject(entity);
            assert.equal(ENTITY1.name, entity.name);
            assert.equal(ENTITY1.site_id, entity.site_id);
            assert.equal(ENTITY1.type, entity.type);
            assert.equal(ENTITY1.name, entity.name);
            assert.isNotNull(entity.content);
            // Create the second entity
            entity = yield this._client.createEntity(null, ENTITY2);
            assert.isObject(entity);
            assert.equal(ENTITY2.name, entity.name);
            assert.equal(ENTITY2.site_id, entity.site_id);
            assert.equal(ENTITY2.type, entity.type);
            assert.equal(ENTITY2.name, entity.name);
            assert.isNotNull(entity.content);
            // Get all entities
            let page = yield this._client.getEntities(null, new pip_services3_commons_nodex_1.FilterParams(), new pip_services3_commons_nodex_2.PagingParams());
            assert.isObject(page);
            assert.lengthOf(page.data, 2);
            let entity1 = page.data[0];
            // Update the entity
            entity1.name = 'ABC';
            entity = yield this._client.updateEntity(null, entity1);
            assert.isObject(entity);
            assert.equal(entity1.id, entity.id);
            assert.equal('ABC', entity.name);
            // Get entity by name
            entity = yield this._client.getEntityByName(null, entity1.name);
            assert.isObject(entity);
            assert.equal(entity1.id, entity.id);
            // Delete the entity
            entity = yield this._client.deleteEntityById(null, entity1.id);
            assert.isObject(entity);
            assert.equal(entity1.id, entity.id);
            // Try to get deleted entity
            entity = yield this._client.getEntityById(null, entity1.id);
            assert.isNull(entity || null);
        });
    }
}
exports.EntitiesClientV1Fixture = EntitiesClientV1Fixture;
//# sourceMappingURL=EntitiesClientV1Fixture.js.map