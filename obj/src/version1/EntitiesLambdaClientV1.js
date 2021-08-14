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
exports.EntitiesLambdaClientV1 = void 0;
/** @module clients */
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_aws_nodex_1 = require("pip-services3-aws-nodex");
class EntitiesLambdaClientV1 extends pip_services3_aws_nodex_1.LambdaClient {
    constructor(config) {
        super();
        if (config != null)
            this.configure(pip_services3_commons_nodex_1.ConfigParams.fromValue(config));
    }
    getEntities(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'v1.entities.get_entities');
            try {
                return yield this.call('v1.entities.get_entities', correlationId, { filter: filter, paging: paging });
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
            let timing = this.instrument(correlationId, 'v1.entities.get_entity_by_id');
            try {
                return yield this.call('v1.entities.get_entity_by_id', correlationId, {
                    entity_id: entityId
                });
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
            let timing = this.instrument(correlationId, 'v1.entities.get_entity_by_name');
            try {
                return yield this.call('v1.entities.get_entity_by_name', correlationId, {
                    name: name
                });
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
            let timing = this.instrument(correlationId, 'v1.entities.create_entity');
            try {
                return yield this.call('v1.entities.create_entity', correlationId, {
                    entity: entity
                });
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
            let timing = this.instrument(correlationId, 'v1.entities.update_entity');
            try {
                return yield this.call('v1.entities.update_entity', correlationId, {
                    entity: entity
                });
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
            let timing = this.instrument(correlationId, 'v1.entities.delete_entity_by_id');
            try {
                return yield this.call('v1.entities.delete_entity_by_id', correlationId, {
                    entity_id: entityId
                });
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
exports.EntitiesLambdaClientV1 = EntitiesLambdaClientV1;
//# sourceMappingURL=EntitiesLambdaClientV1.js.map