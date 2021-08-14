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
exports.EntitiesDirectClientV1 = void 0;
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
class EntitiesDirectClientV1 extends pip_services3_rpc_nodex_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_nodex_1.Descriptor('pip-service-data', 'controller', '*', '*', '1.0'));
    }
    getEntities(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'entities.get_entities');
            try {
                return yield this._controller.getEntities(correlationId, filter, paging);
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
            let timing = this.instrument(correlationId, 'entities.get_entity_by_id');
            try {
                return yield this._controller.getEntityById(correlationId, entityId);
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
            let timing = this.instrument(correlationId, 'entities.get_entity_by_name');
            try {
                return yield this._controller.getEntityByName(correlationId, name);
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
            let timing = this.instrument(correlationId, 'entities.create_entity');
            try {
                return yield this._controller.createEntity(correlationId, entity);
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
            let timing = this.instrument(correlationId, 'entities.update_entity');
            try {
                return yield this._controller.updateEntity(correlationId, entity);
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
            let timing = this.instrument(correlationId, 'entities.delete_entity_by_id');
            try {
                return yield this._controller.deleteEntityById(correlationId, entityId);
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
exports.EntitiesDirectClientV1 = EntitiesDirectClientV1;
//# sourceMappingURL=EntitiesDirectClientV1.js.map