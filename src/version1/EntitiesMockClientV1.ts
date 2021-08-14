/** @module clients */
import { FilterParams } from "pip-services3-commons-nodex";
import { IdGenerator } from "pip-services3-commons-nodex";
import { PagingParams } from "pip-services3-commons-nodex";
import { DataPage } from "pip-services3-commons-nodex";

import { EntityV1 } from "./EntityV1";
import { IEntitiesClientV1 } from "./IEntitiesClientV1";

export class EntitiesMockClientV1 implements IEntitiesClientV1 {
    private _maxPageSize: number = 100;
    private _items: EntityV1[];

    public constructor(...items: EntityV1[]) {
        this._items = items;
    }

    private composeFilter(filter: FilterParams): any {
        filter = filter || new FilterParams();

        let id = filter.getAsNullableString("id");
        let siteId = filter.getAsNullableString("site_id");
        let name = filter.getAsNullableString("name");

        let tempNames = filter.getAsNullableString("names");
        let names = tempNames != null ? tempNames.split(",") : null;

        return (item) => {
            if (id != null && item.id != id) return false;
            if (siteId != null && item.site_id != siteId) return false;
            if (name != null && item.name != name) return false;
            if (names != null && names.indexOf(item.name) < 0) return false;
            return true;
        };
    }

    public async getEntities(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<EntityV1>> {
        let filterEntities = this.composeFilter(filter);
        let entities = this._items.filter(filterEntities);

        // Extract a page
        paging = paging != null ? paging : new PagingParams();
        let skip = paging.getSkip(-1);
        let take = paging.getTake(this._maxPageSize);
        let total = null;

        if (paging.total) total = entities.length;
        if (skip > 0) entities = entities.slice(skip);

        entities = entities.slice(0, take);
        return new DataPage<EntityV1>(entities, total);
    }

    public async getEntityById(correlationId: string, entityId: string): Promise<EntityV1> {
        let entities = this._items.filter((x) => {
            return x.id == entityId;
        });

        let entity = entities.length > 0 ? entities[0] : null;
        return entity;
    }

    public async getEntityByName(correlationId: string, name: string): Promise<EntityV1> {
        let entities = this._items.filter((x) => {
            return x.name == name;
        });

        let entity = entities.length > 0 ? entities[0] : null;
        return entity;
    }

    public async createEntity(correlationId: string, entity: EntityV1): Promise<EntityV1> {
        if (entity == null) {
            return null;
        }

        entity = Object.assign({}, entity);
        entity.id = entity.id || IdGenerator.nextLong();

        this._items.push(entity);
        return entity;
    }

    public async updateEntity(correlationId: string, entity: EntityV1): Promise<EntityV1> {
        let index = this._items.map((x) => {
            return x.id;
        }).indexOf(entity.id);

        if (index < 0) {
            return null;
        }

        entity = Object.assign({}, entity);
        this._items[index] = entity;

        return entity;
    }

    public async deleteEntityById(correlationId: string, entityId: string): Promise<EntityV1> {
        let index = this._items
            .map((x) => {
                return x.id;
            })
            .indexOf(entityId);

        let entity = this._items[index];

        if (index < 0) {
            return null;
        }

        this._items.splice(index, 1);
        return entity;
    }
}
