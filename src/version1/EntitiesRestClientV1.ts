/** @module clients */

import { ConfigParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { RestClient } from 'pip-services3-rpc-nodex';

import { EntityV1 } from './EntityV1';
import { IEntitiesClientV1 } from './IEntitiesClientV1';

export class EntitiesRestClientV1 extends RestClient implements IEntitiesClientV1 {

    constructor(config?: any) {
        super();
        this._baseRoute = "v1/entities";

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }

    public configure(config: ConfigParams): void {
        super.configure(config);
    }

    public async getEntities(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<EntityV1>> {
        let timing = this.instrument(correlationId, "v1/entities.get_entities");
        try {
            return await this.call(
                'get', 
                '/entities',
                correlationId,
                {
                    filter: filter,
                    paging: paging
                }
            );
        } catch (err) {
            timing.endFailure(err);
        } finally {
            timing.endSuccess();
        }
    }

    public async getEntityById(correlationId: string, id: string): Promise<EntityV1> {
        let timing = this.instrument(correlationId, "v1/entities.get_entity_by_id");
        try {
            return await this.call(
                'get', 
                '/entities/' + id,
                correlationId,
                null,
                null
            );
        } catch (err) {
            timing.endFailure(err);
        } finally {
            timing.endSuccess();
        }
    }

    public async getEntityByName(correlationId: string, name: string): Promise<EntityV1> {
        let timing = this.instrument(correlationId, "v1/entities.get_entity_by_name");
        try {
            return await this.call(
                'get', 
                '/entities/name/' + name,
                correlationId,
                null,
                null
            );
        } catch (err) {
            timing.endFailure(err);
        } finally {
            timing.endSuccess();
        }
    }

    public async createEntity(correlationId: string, entity: EntityV1): Promise<EntityV1> {
        let timing = this.instrument(correlationId, "v1/entities.create_entity");
        try {
            return await this.call(
                'post', 
                '/entities',
                correlationId,
                null,
                entity
            );
        } catch (err) {
            timing.endFailure(err);
        } finally {
            timing.endSuccess();
        }
    }

    public async updateEntity(correlationId: string, entity: EntityV1): Promise<EntityV1> {
        let timing = this.instrument(correlationId, "entities.update_entity");
        try {
            return await this.call(
                'put', 
                '/entities',
                correlationId,
                null,
                entity
            );
        } catch (err) {
            timing.endFailure(err);
        } finally {
            timing.endSuccess();
        }
    }

    public async deleteEntityById(correlationId: string, entityId: string): Promise<EntityV1> {
        let timing = this.instrument(correlationId, "v1/entities.delete_entity_by_id");
        try {
            return await this.call(
                'delete', 
                '/entities/' + entityId,
                correlationId,
                null,
                null
            );
        } catch (err) {
            timing.endFailure(err);
        } finally {
            timing.endSuccess();
        }
    }
    
}