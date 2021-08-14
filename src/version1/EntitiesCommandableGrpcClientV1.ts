/** @module clients */

import { ConfigParams } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableGrpcClient } from 'pip-services3-grpc-nodex';

import { EntityV1 } from './EntityV1';
import { IEntitiesClientV1 } from './IEntitiesClientV1';

export class EntitiesCommandableGrpcClientV1 extends CommandableGrpcClient implements IEntitiesClientV1 {
    public constructor(config?: any) {
        super('v1.entities');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }

    public getEntities(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<EntityV1>> {
        return this.callCommand(
            'get_entities',
            correlationId,
            { filter: filter, paging: paging }
        );
    }

    public getEntityById(correlationId: string, entityId: string): Promise<EntityV1> {
        return this.callCommand(
            'get_entity_by_id',
            correlationId,
            {
                entity_id: entityId
            }
        );
    }

    public getEntityByName(correlationId: string, name: string): Promise<EntityV1> {
        return this.callCommand(
            'get_entity_by_name',
            correlationId,
            {
                name: name
            }
        );
    }

    public createEntity(correlationId: string, entity: EntityV1): Promise<EntityV1> {
        return this.callCommand(
            'create_entity',
            correlationId,
            {
                entity: entity
            }
        );
    }

    public updateEntity(correlationId: string, entity: EntityV1): Promise<EntityV1> {
        return this.callCommand(
            'update_entity',
            correlationId,
            {
                entity: entity
            }
        );    
    }

    public deleteEntityById(correlationId: string, entityId: string): Promise<EntityV1> {
        return this.callCommand(
            'delete_entity_by_id',
            correlationId,
            {
                entity_id: entityId
            }
        );
    }
}