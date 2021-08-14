/** @module clients */
/** @hidden */
let services = require('../../../src/protos/entities_v1_grpc_pb');
/** @hidden */
let messages = require('../../../src/protos/entities_v1_pb');

import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { GrpcClient } from 'pip-services3-grpc-nodex';

import { IEntitiesClientV1 } from './IEntitiesClientV1';
import { EntityV1 } from './EntityV1';
import { EntitiesGrpcConverterV1 } from './EntitiesGrpcConverterV1';

export class EntitiesGrpcClientV1 extends GrpcClient implements IEntitiesClientV1 {
    
    public constructor() {
        super(services.EntitiesClient);
    }

    public async getEntities(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<EntityV1>> {
        let request = new messages.EntitiesPageRequest();
        EntitiesGrpcConverterV1.setMap(request.getFilterMap(), filter);
        request.setPaging(EntitiesGrpcConverterV1.fromPagingParams(paging));

        let timing = this.instrument(correlationId, 'v1.entities.get_entities');

        try {
            let response = await this.call<any>('get_entities', correlationId, request);

            if (response != null && response.error != null) {
                let err = EntitiesGrpcConverterV1.toError(response.error);
                throw err;
            }

            let result = response 
                ? EntitiesGrpcConverterV1.toEntitiesPage(response.getPage())
                : null;
            return result;
        } catch (err) {
            timing.endFailure(err);
        } finally {
            timing.endSuccess();
        }
    }
    
    public async getEntityById(correlationId: string, entityId: string): Promise<EntityV1> {
        let request = new messages.EntityIdRequest();
        request.setEntityId(entityId);

        let timing = this.instrument(correlationId, 'v1.entities.get_entity_by_id');

        try {
            let response = await this.call<any>('get_entity_by_id', correlationId, request); 

            if (response != null && response.error != null) {
                let err = EntitiesGrpcConverterV1.toError(response.error);
                throw err;
            }

            let result = response 
                ? EntitiesGrpcConverterV1.toEntity(response.getEntity())
                : null;
            return result;
        } catch (err) {
            timing.endFailure(err);
        } finally {
            timing.endSuccess();
        }
    }
    
    public async getEntityByName(correlationId: string, name: string): Promise<EntityV1> {
        let request = new messages.EntityNameRequest();
        request.setName(name);

        let timing = this.instrument(correlationId, 'v1.entities.get_entity_by_name');

        try {
            let response = await this.call<any>('get_entity_by_name', correlationId, request); 

            if (response != null && response.error != null) {
                let err = EntitiesGrpcConverterV1.toError(response.error);
                throw err;
            }

            let result = response 
                ? EntitiesGrpcConverterV1.toEntity(response.getEntity())
                : null;
            return result;
        } catch (err) {
            timing.endFailure(err);
        } finally {
            timing.endSuccess();
        }
    }
        
    public async createEntity(correlationId: string, entity: EntityV1): Promise<EntityV1> {
        let request = new messages.EntityRequest();
        let gprcEntity = EntitiesGrpcConverterV1.fromEntity(entity);
        request.setEntity(gprcEntity);

        let timing = this.instrument(correlationId, 'v1.entities.create_entity');

        try {
            let response = await this.call<any>('create_entity', correlationId, request); 

            if (response != null && response.error != null) {
                let err = EntitiesGrpcConverterV1.toError(response.error);
                throw err;
            }

            let result = response 
                ? EntitiesGrpcConverterV1.toEntity(response.getEntity())
                : null;
            return result;
        } catch (err) {
            timing.endFailure(err);
        } finally {
            timing.endSuccess();
        }
    }
    
    public async updateEntity(correlationId: string, entity: EntityV1): Promise<EntityV1> {
        let request = new messages.EntityRequest();
        let gprcEntity = EntitiesGrpcConverterV1.fromEntity(entity);
        request.setEntity(gprcEntity);

        let timing = this.instrument(correlationId, 'v1.entities.update_entity');

        try {
            let response = await this.call<any>('update_entity', correlationId, request); 

            if (response != null && response.error != null) {
                let err = EntitiesGrpcConverterV1.toError(response.error);
                throw err;
            }

            let result = response 
                ? EntitiesGrpcConverterV1.toEntity(response.getEntity())
                : null;
            return result;
        } catch (err) {
            timing.endFailure(err);
        } finally {
            timing.endSuccess();
        }
    }
    
    public async deleteEntityById(correlationId: string, entityId: string): Promise<EntityV1> {
        let request = new messages.EntityIdRequest();
        request.setEntityId(entityId);

        let timing = this.instrument(correlationId, 'v1.entities.delete_entity_by_id');

        try {
            let response = await this.call<any>('delete_entity_by_id', correlationId, request); 

            if (response != null && response.error != null) {
                let err = EntitiesGrpcConverterV1.toError(response.error);
                throw err;
            }

            let result = response 
                ? EntitiesGrpcConverterV1.toEntity(response.getEntity())
                : null;
            return result;
        } catch (err) {
            timing.endFailure(err);
        } finally {
            timing.endSuccess();
        }
    }
  
}