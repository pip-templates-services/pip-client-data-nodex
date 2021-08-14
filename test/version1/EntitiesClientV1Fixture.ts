const assert = require('chai').assert;

import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';

import { EntityV1 } from '../../src/version1/EntityV1';
import { EntityTypeV1 } from '../../src/version1/EntityTypeV1';
import { IEntitiesClientV1 } from '../../src/version1/IEntitiesClientV1';

const ENTITY1: EntityV1 = {
    id: '1',
    name: '00001',
    type: EntityTypeV1.Type1,
    site_id: '1',
    content: 'ABC'
};
const ENTITY2: EntityV1 = {
    id: '2',
    name: '00002',
    type: EntityTypeV1.Type2,
    site_id: '1',
    content: 'XYZ'
};

export class EntitiesClientV1Fixture {
    private _client: IEntitiesClientV1;

    public constructor(client: IEntitiesClientV1) {
        assert.isNotNull(client);
        this._client = client;
    }

    public async testCrudOperations() {
        // Create the first entity
        let entity = await this._client.createEntity(null, ENTITY1);
        assert.isObject(entity);
        assert.equal(ENTITY1.name, entity.name);
        assert.equal(ENTITY1.site_id, entity.site_id);
        assert.equal(ENTITY1.type, entity.type);
        assert.equal(ENTITY1.name, entity.name);
        assert.isNotNull(entity.content);

        // Create the second entity
        entity = await this._client.createEntity(null, ENTITY2);
        assert.isObject(entity);
        assert.equal(ENTITY2.name, entity.name);
        assert.equal(ENTITY2.site_id, entity.site_id);
        assert.equal(ENTITY2.type, entity.type);
        assert.equal(ENTITY2.name, entity.name);
        assert.isNotNull(entity.content);

        // Get all entities
        let page = await this._client.getEntities(
            null,
            new FilterParams(),
            new PagingParams()
        );
        assert.isObject(page);
        assert.lengthOf(page.data, 2);

        let entity1 = page.data[0];

        // Update the entity
        entity1.name = 'ABC';

        entity = await this._client.updateEntity(null, entity1);
        assert.isObject(entity);
        assert.equal(entity1.id, entity.id);
        assert.equal('ABC', entity.name);

        // Get entity by name
        entity = await this._client.getEntityByName(null, entity1.name);
        assert.isObject(entity);
        assert.equal(entity1.id, entity.id);

        // Delete the entity
        entity = await this._client.deleteEntityById(null,entity1.id);
        assert.isObject(entity);
        assert.equal(entity1.id, entity.id);

        // Try to get deleted entity
        entity = await this._client.getEntityById(null, entity1.id);
        assert.isNull(entity || null);
    }
}

