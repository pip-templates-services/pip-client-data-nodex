/** @module clients */
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { DirectClient } from 'pip-services3-rpc-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';

import { EntityV1 } from './EntityV1';
import { IEntitiesClientV1 } from './IEntitiesClientV1';

export class EntitiesDirectClientV1 extends DirectClient<any> implements IEntitiesClientV1 {
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor('pip-service-data', 'controller', '*', '*', '1.0'));
    }

    public async getEntities(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<EntityV1>> {
        let timing = this.instrument(correlationId, 'entities.get_entities');
        try {
            return await this._controller.getEntities(correlationId, filter, paging);
        } catch (err) {
            timing.endFailure(err);
        } finally {
            timing.endSuccess();
        }
    }

    public async getEntityById(correlationId: string, entityId: string): Promise<EntityV1> {
        let timing = this.instrument(correlationId, 'entities.get_entity_by_id');
        try {
            return await this._controller.getEntityById(correlationId, entityId);
        } catch (err) {
            timing.endFailure(err);
        } finally {
            timing.endSuccess();
        }
    }

    public async getEntityByName(correlationId: string, name: string): Promise<EntityV1> {
        let timing = this.instrument(correlationId, 'entities.get_entity_by_name');
        try {
            return await this._controller.getEntityByName(correlationId, name)
        } catch (err) {
            timing.endFailure(err);
        } finally {
            timing.endSuccess();
        }
    }

    public async createEntity(correlationId: string, entity: EntityV1): Promise<EntityV1> {
        let timing = this.instrument(correlationId, 'entities.create_entity');
        try {
            return await this._controller.createEntity(correlationId, entity);
        } catch (err) {
            timing.endFailure(err);
        } finally {
            timing.endSuccess();
        }
    }

    public async updateEntity(correlationId: string, entity: EntityV1): Promise<EntityV1> {
        let timing = this.instrument(correlationId, 'entities.update_entity');
        try {
            return await this._controller.updateEntity(correlationId, entity);
        } catch (err) {
            timing.endFailure(err);
        } finally {
            timing.endSuccess();
        }
    }

    public async deleteEntityById(correlationId: string, entityId: string): Promise<EntityV1> {
        let timing = this.instrument(correlationId, 'entities.delete_entity_by_id');
        try {
            return await this._controller.deleteEntityById(correlationId, entityId);
        } catch (err) {
            timing.endFailure(err);
        } finally {
            timing.endSuccess();
        }
    }
}