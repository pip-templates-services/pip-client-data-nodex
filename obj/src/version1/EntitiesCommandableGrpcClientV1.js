"use strict";
/** @module clients */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntitiesCommandableGrpcClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_grpc_nodex_1 = require("pip-services3-grpc-nodex");
class EntitiesCommandableGrpcClientV1 extends pip_services3_grpc_nodex_1.CommandableGrpcClient {
    constructor(config) {
        super('v1.entities');
        if (config != null)
            this.configure(pip_services3_commons_nodex_1.ConfigParams.fromValue(config));
    }
    getEntities(correlationId, filter, paging) {
        return this.callCommand('get_entities', correlationId, { filter: filter, paging: paging });
    }
    getEntityById(correlationId, entityId) {
        return this.callCommand('get_entity_by_id', correlationId, {
            entity_id: entityId
        });
    }
    getEntityByName(correlationId, name) {
        return this.callCommand('get_entity_by_name', correlationId, {
            name: name
        });
    }
    createEntity(correlationId, entity) {
        return this.callCommand('create_entity', correlationId, {
            entity: entity
        });
    }
    updateEntity(correlationId, entity) {
        return this.callCommand('update_entity', correlationId, {
            entity: entity
        });
    }
    deleteEntityById(correlationId, entityId) {
        return this.callCommand('delete_entity_by_id', correlationId, {
            entity_id: entityId
        });
    }
}
exports.EntitiesCommandableGrpcClientV1 = EntitiesCommandableGrpcClientV1;
//# sourceMappingURL=EntitiesCommandableGrpcClientV1.js.map