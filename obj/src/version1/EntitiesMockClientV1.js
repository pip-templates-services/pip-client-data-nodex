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
exports.EntitiesMockClientV1 = void 0;
/** @module clients */
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_2 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_3 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_4 = require("pip-services3-commons-nodex");
class EntitiesMockClientV1 {
    constructor(...items) {
        this._maxPageSize = 100;
        this._items = items;
    }
    composeFilter(filter) {
        filter = filter || new pip_services3_commons_nodex_1.FilterParams();
        let id = filter.getAsNullableString("id");
        let siteId = filter.getAsNullableString("site_id");
        let name = filter.getAsNullableString("name");
        let tempNames = filter.getAsNullableString("names");
        let names = tempNames != null ? tempNames.split(",") : null;
        return (item) => {
            if (id != null && item.id != id)
                return false;
            if (siteId != null && item.site_id != siteId)
                return false;
            if (name != null && item.name != name)
                return false;
            if (names != null && names.indexOf(item.name) < 0)
                return false;
            return true;
        };
    }
    getEntities(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let filterEntities = this.composeFilter(filter);
            let entities = this._items.filter(filterEntities);
            // Extract a page
            paging = paging != null ? paging : new pip_services3_commons_nodex_3.PagingParams();
            let skip = paging.getSkip(-1);
            let take = paging.getTake(this._maxPageSize);
            let total = null;
            if (paging.total)
                total = entities.length;
            if (skip > 0)
                entities = entities.slice(skip);
            entities = entities.slice(0, take);
            return new pip_services3_commons_nodex_4.DataPage(entities, total);
        });
    }
    getEntityById(correlationId, entityId) {
        return __awaiter(this, void 0, void 0, function* () {
            let entities = this._items.filter((x) => {
                return x.id == entityId;
            });
            let entity = entities.length > 0 ? entities[0] : null;
            return entity;
        });
    }
    getEntityByName(correlationId, name) {
        return __awaiter(this, void 0, void 0, function* () {
            let entities = this._items.filter((x) => {
                return x.name == name;
            });
            let entity = entities.length > 0 ? entities[0] : null;
            return entity;
        });
    }
    createEntity(correlationId, entity) {
        return __awaiter(this, void 0, void 0, function* () {
            if (entity == null) {
                return null;
            }
            entity = Object.assign({}, entity);
            entity.id = entity.id || pip_services3_commons_nodex_2.IdGenerator.nextLong();
            this._items.push(entity);
            return entity;
        });
    }
    updateEntity(correlationId, entity) {
        return __awaiter(this, void 0, void 0, function* () {
            let index = this._items.map((x) => {
                return x.id;
            }).indexOf(entity.id);
            if (index < 0) {
                return null;
            }
            entity = Object.assign({}, entity);
            this._items[index] = entity;
            return entity;
        });
    }
    deleteEntityById(correlationId, entityId) {
        return __awaiter(this, void 0, void 0, function* () {
            let index = this._items
                .map((x) => {
                return x.id;
            })
                .indexOf(entityId);
            let entity = this._items[index];
            if (index < 0) {
                return null;
            }
            this._items.splice(index, 1);
            return entity;
        });
    }
}
exports.EntitiesMockClientV1 = EntitiesMockClientV1;
//# sourceMappingURL=EntitiesMockClientV1.js.map