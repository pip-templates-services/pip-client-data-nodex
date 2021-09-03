/** @module clients */
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';

import { EntityV1 } from './EntityV1';
import { IEntitiesClientV1 } from './IEntitiesClientV1';

export class EntitiesNullClientV1 implements IEntitiesClientV1 {
    public async getEntities(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<EntityV1>> {
        return new DataPage([], 0);
    }

    public async getEntityById(correlationId: string, entityId: string): Promise<EntityV1> {
        return null;
    }

    public async getEntityByName(correlationId: string, name: string): Promise<EntityV1> {
        return null;
    }

    public async createEntity(correlationId: string, entity: EntityV1): Promise<EntityV1> {
        return null;
    }

    public async updateEntity(correlationId: string, entity: EntityV1): Promise<EntityV1> {
        return null;
    }

    public deleteEntityById(correlationId: string, entityId: string): Promise<EntityV1> {
        return null;
    }

}