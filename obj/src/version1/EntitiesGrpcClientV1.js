"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntitiesGrpcClientV1 = void 0;
/** @module clients */
/** @hidden */
let services = require('../../../src/protos/entities_v1_grpc_pb');
/** @hidden */
let messages = require('../../../src/protos/entities_v1_pb');
const pip_services3_grpc_nodex_1 = require("pip-services3-grpc-nodex");
const EntitiesGrpcConverterV1_1 = require("./EntitiesGrpcConverterV1");
class EntitiesGrpcClientV1 extends pip_services3_grpc_nodex_1.GrpcClient {
    constructor() {
        super(services.EntitiesClient);
    }
    getEntities(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.EntitiesPageRequest();
            EntitiesGrpcConverterV1_1.EntitiesGrpcConverterV1.setMap(request.getFilterMap(), filter);
            request.setPaging(EntitiesGrpcConverterV1_1.EntitiesGrpcConverterV1.fromPagingParams(paging));
            let timing = this.instrument(correlationId, 'v1.entities.get_entities');
            try {
                let response = yield this.call('get_entities', correlationId, request);
                if (response != null && response.error != null) {
                    let err = EntitiesGrpcConverterV1_1.EntitiesGrpcConverterV1.toError(response.error);
                    throw err;
                }
                let result = response
                    ? EntitiesGrpcConverterV1_1.EntitiesGrpcConverterV1.toEntitiesPage(response.getPage())
                    : null;
                return result;
            }
            catch (err) {
                timing.endFailure(err);
            }
            finally {
                timing.endSuccess();
            }
        });
    }
    getEntityById(correlationId, entityId) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.EntityIdRequest();
            request.setEntityId(entityId);
            let timing = this.instrument(correlationId, 'v1.entities.get_entity_by_id');
            try {
                let response = yield this.call('get_entity_by_id', correlationId, request);
                if (response != null && response.error != null) {
                    let err = EntitiesGrpcConverterV1_1.EntitiesGrpcConverterV1.toError(response.error);
                    throw err;
                }
                let result = response
                    ? EntitiesGrpcConverterV1_1.EntitiesGrpcConverterV1.toEntity(response.getEntity())
                    : null;
                return result;
            }
            catch (err) {
                timing.endFailure(err);
            }
            finally {
                timing.endSuccess();
            }
        });
    }
    getEntityByName(correlationId, name) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.EntityNameRequest();
            request.setName(name);
            let timing = this.instrument(correlationId, 'v1.entities.get_entity_by_name');
            try {
                let response = yield this.call('get_entity_by_name', correlationId, request);
                if (response != null && response.error != null) {
                    let err = EntitiesGrpcConverterV1_1.EntitiesGrpcConverterV1.toError(response.error);
                    throw err;
                }
                let result = response
                    ? EntitiesGrpcConverterV1_1.EntitiesGrpcConverterV1.toEntity(response.getEntity())
                    : null;
                return result;
            }
            catch (err) {
                timing.endFailure(err);
            }
            finally {
                timing.endSuccess();
            }
        });
    }
    createEntity(correlationId, entity) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.EntityRequest();
            let gprcEntity = EntitiesGrpcConverterV1_1.EntitiesGrpcConverterV1.fromEntity(entity);
            request.setEntity(gprcEntity);
            let timing = this.instrument(correlationId, 'v1.entities.create_entity');
            try {
                let response = yield this.call('create_entity', correlationId, request);
                if (response != null && response.error != null) {
                    let err = EntitiesGrpcConverterV1_1.EntitiesGrpcConverterV1.toError(response.error);
                    throw err;
                }
                let result = response
                    ? EntitiesGrpcConverterV1_1.EntitiesGrpcConverterV1.toEntity(response.getEntity())
                    : null;
                return result;
            }
            catch (err) {
                timing.endFailure(err);
            }
            finally {
                timing.endSuccess();
            }
        });
    }
    updateEntity(correlationId, entity) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.EntityRequest();
            let gprcEntity = EntitiesGrpcConverterV1_1.EntitiesGrpcConverterV1.fromEntity(entity);
            request.setEntity(gprcEntity);
            let timing = this.instrument(correlationId, 'v1.entities.update_entity');
            try {
                let response = yield this.call('update_entity', correlationId, request);
                if (response != null && response.error != null) {
                    let err = EntitiesGrpcConverterV1_1.EntitiesGrpcConverterV1.toError(response.error);
                    throw err;
                }
                let result = response
                    ? EntitiesGrpcConverterV1_1.EntitiesGrpcConverterV1.toEntity(response.getEntity())
                    : null;
                return result;
            }
            catch (err) {
                timing.endFailure(err);
            }
            finally {
                timing.endSuccess();
            }
        });
    }
    deleteEntityById(correlationId, entityId) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.EntityIdRequest();
            request.setEntityId(entityId);
            let timing = this.instrument(correlationId, 'v1.entities.delete_entity_by_id');
            try {
                let response = yield this.call('delete_entity_by_id', correlationId, request);
                if (response != null && response.error != null) {
                    let err = EntitiesGrpcConverterV1_1.EntitiesGrpcConverterV1.toError(response.error);
                    throw err;
                }
                let result = response
                    ? EntitiesGrpcConverterV1_1.EntitiesGrpcConverterV1.toEntity(response.getEntity())
                    : null;
                return result;
            }
            catch (err) {
                timing.endFailure(err);
            }
            finally {
                timing.endSuccess();
            }
        });
    }
}
exports.EntitiesGrpcClientV1 = EntitiesGrpcClientV1;
//# sourceMappingURL=EntitiesGrpcClientV1.js.map