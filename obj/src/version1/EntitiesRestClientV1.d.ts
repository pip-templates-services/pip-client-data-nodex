/** @module clients */
import { ConfigParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { RestClient } from 'pip-services3-rpc-nodex';
import { EntityV1 } from './EntityV1';
import { IEntitiesClientV1 } from './IEntitiesClientV1';
export declare class EntitiesRestClientV1 extends RestClient implements IEntitiesClientV1 {
    constructor(config?: any);
    configure(config: ConfigParams): void;
    getEntities(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<EntityV1>>;
    getEntityById(correlationId: string, id: string): Promise<EntityV1>;
    getEntityByName(correlationId: string, name: string): Promise<EntityV1>;
    createEntity(correlationId: string, entity: EntityV1): Promise<EntityV1>;
    updateEntity(correlationId: string, entity: EntityV1): Promise<EntityV1>;
    deleteEntityById(correlationId: string, entityId: string): Promise<EntityV1>;
}
