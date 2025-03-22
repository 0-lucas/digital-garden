"use strict";
// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.equals = equals;
const scalar_js_1 = require("./reflect/scalar.js");
const reflect_js_1 = require("./reflect/reflect.js");
/**
 * Compare two messages of the same type.
 *
 * Note that this function disregards extensions and unknown fields, and that
 * NaN is not equal NaN, following the IEEE standard.
 */
function equals(schema, a, b) {
    if (a.$typeName != schema.typeName || b.$typeName != schema.typeName) {
        return false;
    }
    if (a === b) {
        return true;
    }
    return reflectEquals((0, reflect_js_1.reflect)(schema, a), (0, reflect_js_1.reflect)(schema, b));
}
function reflectEquals(a, b) {
    for (const f of a.fields) {
        if (!fieldEquals(f, a, b)) {
            return false;
        }
    }
    return true;
}
function fieldEquals(f, a, b) {
    if (!a.isSet(f) && !b.isSet(f)) {
        return true;
    }
    if (!a.isSet(f) || !b.isSet(f)) {
        return false;
    }
    switch (f.fieldKind) {
        case "scalar":
            return (0, scalar_js_1.scalarEquals)(f.scalar, a.get(f), b.get(f));
        case "enum":
            return a.get(f) === b.get(f);
        case "message":
            return reflectEquals(a.get(f), b.get(f));
        case "map": {
            const ma = a.get(f);
            const mb = b.get(f);
            const keysA = [];
            for (const k of ma.keys()) {
                if (!mb.has(k)) {
                    return false;
                }
                keysA.push(k);
            }
            for (const k of mb.keys()) {
                if (!ma.has(k)) {
                    return false;
                }
            }
            for (const key of keysA) {
                const va = ma.get(key);
                const vb = mb.get(key);
                if (va === vb) {
                    continue;
                }
                switch (f.mapKind) {
                    case "enum":
                        return false;
                    case "message":
                        if (!reflectEquals(va, vb)) {
                            return false;
                        }
                        break;
                    case "scalar":
                        if (!(0, scalar_js_1.scalarEquals)(f.scalar, va, vb)) {
                            return false;
                        }
                        break;
                }
            }
            break;
        }
        case "list": {
            const la = a.get(f);
            const lb = b.get(f);
            if (la.size != lb.size) {
                return false;
            }
            for (let i = 0; i < la.size; i++) {
                const va = la.get(i);
                const vb = lb.get(i);
                if (va === vb) {
                    continue;
                }
                switch (f.listKind) {
                    case "enum":
                        return false;
                    case "message":
                        if (!reflectEquals(va, vb)) {
                            return false;
                        }
                        break;
                    case "scalar":
                        if (!(0, scalar_js_1.scalarEquals)(f.scalar, va, vb)) {
                            return false;
                        }
                        break;
                }
            }
            break;
        }
    }
    return true;
}
