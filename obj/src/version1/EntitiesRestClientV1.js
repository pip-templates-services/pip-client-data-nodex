"use strict";
/** @module clients */
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
exports.EntitiesRestClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class EntitiesRestClientV1 extends pip_services3_rpc_nodex_1.RestClient {
    constructor(config) {
        super();
        this._baseRoute = "v1/entities";
        if (config != null)
            this.configure(pip_services3_commons_nodex_1.ConfigParams.fromValue(config));
    }
    configure(config) {
        super.configure(config);
    }
    getEntities(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, "v1/entities.get_entities");
            try {
                return yield this.call('get', '/entities', correlationId, {
                    filter: filter,
                    paging: paging
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
    getEntityById(correlationId, id) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, "v1/entities.get_entity_by_id");
            try {
                return yield this.call('get', '/entities/' + id, correlationId, null, null);
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
            let timing = this.instrument(correlationId, "v1/entities.get_entity_by_name");
            try {
                return yield this.call('get', '/entities/name/' + name, correlationId, null, null);
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
            let timing = this.instrument(correlationId, "v1/entities.create_entity");
            try {
                return yield this.call('post', '/entities', correlationId, null, entity);
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
            let timing = this.instrument(correlationId, "entities.update_entity");
            try {
                return yield this.call('put', '/entities', correlationId, null, entity);
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
            let timing = this.instrument(correlationId, "v1/entities.delete_entity_by_id");
            try {
                return yield this.call('delete', '/entities/' + entityId, correlationId, null, null);
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
exports.EntitiesRestClientV1 = EntitiesRestClientV1;
//# sourceMappingURL=EntitiesRestClientV1.js.map