/** @module clients */
import { FilterParams, ConfigParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { LambdaClient } from 'pip-services3-aws-nodex';

import { EntityV1 } from './EntityV1';
import { IEntitiesClientV1 } from './IEntitiesClientV1';

export class EntitiesLambdaClientV1 extends LambdaClient implements IEntitiesClientV1 {
    
    constructor(config?: any) {
        super();

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }

    public async getEntities(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<EntityV1>> {
        let timing = this.instrument(correlationId, 'v1.entities.get_entities');
        try {
            return await this.call(
                'v1.entities.get_entities',
                correlationId,
                { filter: filter, paging: paging },
            );
        } catch (err) {
            timing.endFailure(err);
        } finally {
            timing.endSuccess();
        }
    }

    public async getEntityById(correlationId: string, entityId: string): Promise<EntityV1> {
        let timing = this.instrument(correlationId, 'v1.entities.get_entity_by_id');
        try {
            return await this.call(
                'v1.entities.get_entity_by_id',
                correlationId,
                {
                    entity_id: entityId
                }
            );
        } catch (err) {
            timing.endFailure(err);
        } finally {
            timing.endSuccess();
        }
    }

    public async getEntityByName(correlationId: string, name: string): Promise<EntityV1> {
        let timing = this.instrument(correlationId, 'v1.entities.get_entity_by_name');
        try {
            return await this.call(
                'v1.entities.get_entity_by_name',
                correlationId,
                {
                    name: name
                }
            );
        } catch (err) {
            timing.endFailure(err);
        } finally {
            timing.endSuccess();
        }
    }

    public async createEntity(correlationId: string, entity: EntityV1): Promise<EntityV1> {
        let timing = this.instrument(correlationId, 'v1.entities.create_entity');
        try {
            return await this.call(
                'v1.entities.create_entity',
                correlationId,
                {
                    entity: entity
                }
            );
        } catch (err) {
            timing.endFailure(err);
        } finally {
            timing.endSuccess();
        }
    }

    public async updateEntity(correlationId: string, entity: EntityV1): Promise<EntityV1> {
        let timing = this.instrument(correlationId, 'v1.entities.update_entity');
        try {
            return await this.call(
                'v1.entities.update_entity',
                correlationId,
                {
                    entity: entity
                }
            );    
        } catch (err) {
            timing.endFailure(err);
        } finally {
            timing.endSuccess();
        }
    }

    public async deleteEntityById(correlationId: string, entityId: string): Promise<EntityV1> {
        let timing = this.instrument(correlationId, 'v1.entities.delete_entity_by_id');
        try {
            return await this.call(
                'v1.entities.delete_entity_by_id',
                correlationId,
                {
                    entity_id: entityId
                }
            );
        } catch (err) {
            timing.endFailure(err);
        } finally {
            timing.endSuccess();
        }
    }
}