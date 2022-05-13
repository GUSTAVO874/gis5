(() => {
    var t = {
        9705: (t, e, i) =>  {
            "use strict";
            var n = i(1540);
            function r(t) {
                var e = [Infinity, Infinity, -Infinity, -Infinity];
                return (
                    n.coordEach(t, function (t) {
                        e[0] > t[0] && (e[0] = t[0]), e[1] > t[1] && (e[1] = t[1]), e[2] < t[0] && (e[2] = t[0]), e[3] < t[1] && (e[3] = t[1]);
                    }),
                    e
                );
            }
            (r["default"] = r), (e.Z = r);
        },
        4102: (t, e) => {
            "use strict";
            function i(t, e, i) {
                void 0 === i && (i = {});
                var n = { type: "Feature" };
                return (0 === i.id || i.id) && (n.id = i.id), i.bbox && (n.bbox = i.bbox), (n.properties = e || {}), (n.geometry = t), n;
            }
            function n(t, e, n) {
                if ((void 0 === n && (n = {}), !t)) throw new Error("coordinates is required");
                if (!Array.isArray(t)) throw new Error("coordinates must be an Array");
                if (t.length < 2) throw new Error("coordinates must be at least 2 numbers long");
                if (!d(t[0]) || !d(t[1])) throw new Error("coordinates must contain numbers");
                return i({ type: "Point", coordinates: t }, e, n);
            }
            function r(t, e, n) {
                void 0 === n && (n = {});
                for (var r = 0, a = t; r < a.length; r++) {
                    var o = a[r];
                    if (o.length < 4) throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");
                    for (var s = 0; s < o[o.length - 1].length; s++) if (o[o.length - 1][s] !== o[0][s]) throw new Error("First and last Position are not equivalent.");
                }
                return i({ type: "Polygon", coordinates: t }, e, n);
            }
            function a(t, e, n) {
                if ((void 0 === n && (n = {}), t.length < 2)) throw new Error("coordinates must be an array of two or more positions");
                return i({ type: "LineString", coordinates: t }, e, n);
            }
            function o(t, e) {
                void 0 === e && (e = {});
                var i = { type: "FeatureCollection" };
                return e.id && (i.id = e.id), e.bbox && (i.bbox = e.bbox), (i.features = t), i;
            }
            function s(t, e, n) {
                return void 0 === n && (n = {}), i({ type: "MultiLineString", coordinates: t }, e, n);
            }
            function l(t, e, n) {
                return void 0 === n && (n = {}), i({ type: "MultiPoint", coordinates: t }, e, n);
            }
            function h(t, e, n) {
                return void 0 === n && (n = {}), i({ type: "MultiPolygon", coordinates: t }, e, n);
            }
            function u(t, i) {
                void 0 === i && (i = "kilometers");
                var n = e.factors[i];
                if (!n) throw new Error(i + " units is invalid");
                return t * n;
            }
            function c(t, i) {
                void 0 === i && (i = "kilometers");
                var n = e.factors[i];
                if (!n) throw new Error(i + " units is invalid");
                return t / n;
            }
            function p(t) {
                return (180 * (t % (2 * Math.PI))) / Math.PI;
            }
            function d(t) {
                return !isNaN(t) && null !== t && !Array.isArray(t);
            }
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.earthRadius = 6371008.8),
                (e.factors = {
                    centimeters: 100 * e.earthRadius,
                    centimetres: 100 * e.earthRadius,
                    degrees: e.earthRadius / 111325,
                    feet: 3.28084 * e.earthRadius,
                    inches: 39.37 * e.earthRadius,
                    kilometers: e.earthRadius / 1e3,
                    kilometres: e.earthRadius / 1e3,
                    meters: e.earthRadius,
                    metres: e.earthRadius,
                    miles: e.earthRadius / 1609.344,
                    millimeters: 1e3 * e.earthRadius,
                    millimetres: 1e3 * e.earthRadius,
                    nauticalmiles: e.earthRadius / 1852,
                    radians: 1,
                    yards: 1.0936 * e.earthRadius,
                }),
                (e.unitsFactors = {
                    centimeters: 100,
                    centimetres: 100,
                    degrees: 1 / 111325,
                    feet: 3.28084,
                    inches: 39.37,
                    kilometers: 0.001,
                    kilometres: 0.001,
                    meters: 1,
                    metres: 1,
                    miles: 1 / 1609.344,
                    millimeters: 1e3,
                    millimetres: 1e3,
                    nauticalmiles: 1 / 1852,
                    radians: 1 / e.earthRadius,
                    yards: 1.0936133,
                }),
                (e.areaFactors = {
                    acres: 247105e-9,
                    centimeters: 1e4,
                    centimetres: 1e4,
                    feet: 10.763910417,
                    hectares: 1e-4,
                    inches: 1550.003100006,
                    kilometers: 1e-6,
                    kilometres: 1e-6,
                    meters: 1,
                    metres: 1,
                    miles: 386e-9,
                    millimeters: 1e6,
                    millimetres: 1e6,
                    yards: 1.195990046,
                }),
                (e.feature = i),
                (e.geometry = function (t, e, i) {
                    switch ((void 0 === i && (i = {}), t)) {
                        case "Point":
                            return n(e).geometry;
                        case "LineString":
                            return a(e).geometry;
                        case "Polygon":
                            return r(e).geometry;
                        case "MultiPoint":
                            return l(e).geometry;
                        case "MultiLineString":
                            return s(e).geometry;
                        case "MultiPolygon":
                            return h(e).geometry;
                        default:
                            throw new Error(t + " is invalid");
                    }
                }),
                (e.point = n),
                (e.points = function (t, e, i) {
                    return (
                        void 0 === i && (i = {}),
                        o(
                            t.map(function (t) {
                                return n(t, e);
                            }),
                            i
                        )
                    );
                }),
                (e.polygon = r),
                (e.polygons = function (t, e, i) {
                    return (
                        void 0 === i && (i = {}),
                        o(
                            t.map(function (t) {
                                return r(t, e);
                            }),
                            i
                        )
                    );
                }),
                (e.lineString = a),
                (e.lineStrings = function (t, e, i) {
                    return (
                        void 0 === i && (i = {}),
                        o(
                            t.map(function (t) {
                                return a(t, e);
                            }),
                            i
                        )
                    );
                }),
                (e.featureCollection = o),
                (e.multiLineString = s),
                (e.multiPoint = l),
                (e.multiPolygon = h),
                (e.geometryCollection = function (t, e, n) {
                    return void 0 === n && (n = {}), i({ type: "GeometryCollection", geometries: t }, e, n);
                }),
                (e.round = function (t, e) {
                    if ((void 0 === e && (e = 0), e && !(e >= 0))) throw new Error("precision must be a positive number");
                    var i = Math.pow(10, e || 0);
                    return Math.round(t * i) / i;
                }),
                (e.radiansToLength = u),
                (e.lengthToRadians = c),
                (e.lengthToDegrees = function (t, e) {
                    return p(c(t, e));
                }),
                (e.bearingToAzimuth = function (t) {
                    var e = t % 360;
                    return e < 0 && (e += 360), e;
                }),
                (e.radiansToDegrees = p),
                (e.degreesToRadians = function (t) {
                    return ((t % 360) * Math.PI) / 180;
                }),
                (e.convertLength = function (t, e, i) {
                    if ((void 0 === e && (e = "kilometers"), void 0 === i && (i = "kilometers"), !(t >= 0))) throw new Error("length must be a positive number");
                    return u(c(t, e), i);
                }),
                (e.convertArea = function (t, i, n) {
                    if ((void 0 === i && (i = "meters"), void 0 === n && (n = "kilometers"), !(t >= 0))) throw new Error("area must be a positive number");
                    var r = e.areaFactors[i];
                    if (!r) throw new Error("invalid original units");
                    var a = e.areaFactors[n];
                    if (!a) throw new Error("invalid final units");
                    return (t / r) * a;
                }),
                (e.isNumber = d),
                (e.isObject = function (t) {
                    return !!t && t.constructor === Object;
                }),
                (e.validateBBox = function (t) {
                    if (!t) throw new Error("bbox is required");
                    if (!Array.isArray(t)) throw new Error("bbox must be an Array");
                    if (4 !== t.length && 6 !== t.length) throw new Error("bbox must be an Array of 4 or 6 numbers");
                    t.forEach(function (t) {
                        if (!d(t)) throw new Error("bbox must only contain numbers");
                    });
                }),
                (e.validateId = function (t) {
                    if (!t) throw new Error("id is required");
                    if (-1 === ["string", "number"].indexOf(typeof t)) throw new Error("id must be a number or a string");
                });
        },
        1540: (t, e, i) => {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var n = i(4102);
            function r(t, e, i) {
                if (null !== t)
                    for (var n, a, o, s, l, h, u, c, p = 0, d = 0, f = t.type, g = "FeatureCollection" === f, _ = "Feature" === f, y = g ? t.features.length : 1, m = 0; m < y; m++) {
                        l = (c = !!(u = g ? t.features[m].geometry : _ ? t.geometry : t) && "GeometryCollection" === u.type) ? u.geometries.length : 1;
                        for (var v = 0; v < l; v++) {
                            var L = 0,
                                b = 0;
                            if (null !== (s = c ? u.geometries[v] : u)) {
                                h = s.coordinates;
                                var k = s.type;
                                switch (((p = !i || ("Polygon" !== k && "MultiPolygon" !== k) ? 0 : 1), k)) {
                                    case null:
                                        break;
                                    case "Point":
                                        if (!1 === e(h, d, m, L, b)) return !1;
                                        d++, L++;
                                        break;
                                    case "LineString":
                                    case "MultiPoint":
                                        for (n = 0; n < h.length; n++) {
                                            if (!1 === e(h[n], d, m, L, b)) return !1;
                                            d++, "MultiPoint" === k && L++;
                                        }
                                        "LineString" === k && L++;
                                        break;
                                    case "Polygon":
                                    case "MultiLineString":
                                        for (n = 0; n < h.length; n++) {
                                            for (a = 0; a < h[n].length - p; a++) {
                                                if (!1 === e(h[n][a], d, m, L, b)) return !1;
                                                d++;
                                            }
                                            "MultiLineString" === k && L++, "Polygon" === k && b++;
                                        }
                                        "Polygon" === k && L++;
                                        break;
                                    case "MultiPolygon":
                                        for (n = 0; n < h.length; n++) {
                                            for (b = 0, a = 0; a < h[n].length; a++) {
                                                for (o = 0; o < h[n][a].length - p; o++) {
                                                    if (!1 === e(h[n][a][o], d, m, L, b)) return !1;
                                                    d++;
                                                }
                                                b++;
                                            }
                                            L++;
                                        }
                                        break;
                                    case "GeometryCollection":
                                        for (n = 0; n < s.geometries.length; n++) if (!1 === r(s.geometries[n], e, i)) return !1;
                                        break;
                                    default:
                                        throw new Error("Unknown Geometry Type");
                                }
                            }
                        }
                    }
            }
            function a(t, e) {
                var i;
                switch (t.type) {
                    case "FeatureCollection":
                        for (i = 0; i < t.features.length && !1 !== e(t.features[i].properties, i); i++);
                        break;
                    case "Feature":
                        e(t.properties, 0);
                }
            }
            function o(t, e) {
                if ("Feature" === t.type) e(t, 0);
                else if ("FeatureCollection" === t.type) for (var i = 0; i < t.features.length && !1 !== e(t.features[i], i); i++);
            }
            function s(t, e) {
                var i,
                    n,
                    r,
                    a,
                    o,
                    s,
                    l,
                    h,
                    u,
                    c,
                    p = 0,
                    d = "FeatureCollection" === t.type,
                    f = "Feature" === t.type,
                    g = d ? t.features.length : 1;
                for (i = 0; i < g; i++) {
                    for (
                        s = d ? t.features[i].geometry : f ? t.geometry : t,
                        h = d ? t.features[i].properties : f ? t.properties : {},
                        u = d ? t.features[i].bbox : f ? t.bbox : undefined,
                        c = d ? t.features[i].id : f ? t.id : undefined,
                        o = (l = !!s && "GeometryCollection" === s.type) ? s.geometries.length : 1,
                        r = 0;
                        r < o;
                        r++
                    )
                        if (null !== (a = l ? s.geometries[r] : s))
                            switch (a.type) {
                                case "Point":
                                case "LineString":
                                case "MultiPoint":
                                case "Polygon":
                                case "MultiLineString":
                                case "MultiPolygon":
                                    if (!1 === e(a, p, h, u, c)) return !1;
                                    break;
                                case "GeometryCollection":
                                    for (n = 0; n < a.geometries.length; n++) if (!1 === e(a.geometries[n], p, h, u, c)) return !1;
                                    break;
                                default:
                                    throw new Error("Unknown Geometry Type");
                            }
                        else if (!1 === e(null, p, h, u, c)) return !1;
                    p++;
                }
            }
            function l(t, e) {
                s(t, function (t, i, r, a, o) {
                    var s,
                        l = null === t ? null : t.type;
                    switch (l) {
                        case null:
                        case "Point":
                        case "LineString":
                        case "Polygon": 
                            return !1 !== e(n.feature(t, r, { bbox: a, id: o }), i, 0) && void 0;
                    }
                    switch (l) {
                        case "MultiPoint":
                            s = "Point";
                            break;
                        case "MultiLineString":
                            s = "LineString";
                            break;
                        case "MultiPolygon":
                            s = "Polygon";
                    }
                    for (var h = 0; h < t.coordinates.length; h++) {
                        var u = { type: s, coordinates: t.coordinates[h] };
                        if (!1 === e(n.feature(u, r), i, h)) return !1;
                    }
                });
            }
            function h(t, e) {
                l(t, function (t, i, a) {
                    var o = 0;
                    if (t.geometry) {
                        var s = t.geometry.type;
                        if ("Point" !== s && "MultiPoint" !== s) {
                            var l,
                                h = 0,
                                u = 0,
                                c = 0;
                            return (
                                !1 !==
                                r(t, function (r, s, p, d, f) {
                                    if (l === undefined || i > h || d > u || f > c) return (l = r), (h = i), (u = d), (c = f), void (o = 0);
                                    var g = n.lineString([l, r], t.properties);
                                    if (!1 === e(g, i, a, f, o)) return !1;
                                    o++, (l = r);
                                }) && void 0
                            );
                        }
                    }
                });
            }
            function u(t, e) {
                if (!t) throw new Error("geojson is required");
                l(t, function (t, i, r) {
                    if (null !== t.geometry) {
                        var a = t.geometry.type,
                            o = t.geometry.coordinates;
                        switch (a) {
                            case "LineString":
                                if (!1 === e(t, i, r, 0, 0)) return !1;
                                break;
                            case "Polygon":
                                for (var s = 0; s < o.length; s++) if (!1 === e(n.lineString(o[s], t.properties), i, r, s)) return !1;
                        }
                    }
                });
            }
            (e.coordAll = function (t) {
                var e = [];
                return (
                    r(t, function (t) {
                        e.push(t);
                    }),
                    e
                );
            }),
                (e.coordEach = r),
                (e.coordReduce = function (t, e, i, n) {
                    var a = i;
                    return (
                        r(
                            t,
                            function (t, n, r, o, s) {
                                a = 0 === n && i === undefined ? t : e(a, t, n, r, o, s);
                            },
                            n
                        ),
                        a
                    );
                }),
                (e.featureEach = o),
                (e.featureReduce = function (t, e, i) {
                    var n = i;
                    return (
                        o(t, function (t, r) {
                            n = 0 === r && i === undefined ? t : e(n, t, r);
                        }),
                        n
                    );
                }),
                (e.findPoint = function (t, e) {
                    if (((e = e || {}), !n.isObject(e))) throw new Error("options is invalid");
                    var i,
                        r = e.featureIndex || 0,
                        a = e.multiFeatureIndex || 0,
                        o = e.geometryIndex || 0,
                        s = e.coordIndex || 0,
                        l = e.properties;
                    switch (t.type) {
                        case "FeatureCollection":
                            r < 0 && (r = t.features.length + r), (l = l || t.features[r].properties), (i = t.features[r].geometry);
                            break;
                        case "Feature":
                            (l = l || t.properties), (i = t.geometry);
                            break;
                        case "Point":
                        case "MultiPoint":
                            return null;
                        case "LineString":
                        case "Polygon":
                        case "MultiLineString":
                        case "MultiPolygon":
                            i = t;
                            break;
                        default:
                            throw new Error("geojson is invalid");
                    }
                    if (null === i) return null;
                    var h = i.coordinates;
                    switch (i.type) {
                        case "Point":
                            return n.point(h, l, e);
                        case "MultiPoint":
                            return a < 0 && (a = h.length + a), n.point(h[a], l, e);
                        case "LineString":
                            return s < 0 && (s = h.length + s), n.point(h[s], l, e);
                        case "Polygon":
                            return o < 0 && (o = h.length + o), s < 0 && (s = h[o].length + s), n.point(h[o][s], l, e);
                        case "MultiLineString":
                            return a < 0 && (a = h.length + a), s < 0 && (s = h[a].length + s), n.point(h[a][s], l, e);
                        case "MultiPolygon":
                            return a < 0 && (a = h.length + a), o < 0 && (o = h[a].length + o), s < 0 && (s = h[a][o].length - s), n.point(h[a][o][s], l, e);
                    }
                    throw new Error("geojson is invalid");
                }),
                (e.findSegment = function (t, e) {
                    if (((e = e || {}), !n.isObject(e))) throw new Error("options is invalid");
                    var i,
                        r = e.featureIndex || 0,
                        a = e.multiFeatureIndex || 0,
                        o = e.geometryIndex || 0,
                        s = e.segmentIndex || 0,
                        l = e.properties;
                    switch (t.type) {
                        case "FeatureCollection":
                            r < 0 && (r = t.features.length + r), (l = l || t.features[r].properties), (i = t.features[r].geometry);
                            break;
                        case "Feature":
                            (l = l || t.properties), (i = t.geometry);
                            break;
                        case "Point":
                        case "MultiPoint":
                            return null;
                        case "LineString":
                        case "Polygon":
                        case "MultiLineString":
                        case "MultiPolygon":
                            i = t;
                            break;
                        default:
                            throw new Error("geojson is invalid");
                    }
                    if (null === i) return null;
                    var h = i.coordinates;
                    switch (i.type) {
                        case "Point":
                        case "MultiPoint":
                            return null;
                        case "LineString":
                            return s < 0 && (s = h.length + s - 1), n.lineString([h[s], h[s + 1]], l, e);
                        case "Polygon":
                            return o < 0 && (o = h.length + o), s < 0 && (s = h[o].length + s - 1), n.lineString([h[o][s], h[o][s + 1]], l, e);
                        case "MultiLineString":
                            return a < 0 && (a = h.length + a), s < 0 && (s = h[a].length + s - 1), n.lineString([h[a][s], h[a][s + 1]], l, e);
                        case "MultiPolygon":
                            return a < 0 && (a = h.length + a), o < 0 && (o = h[a].length + o), s < 0 && (s = h[a][o].length - s - 1), n.lineString([h[a][o][s], h[a][o][s + 1]], l, e);
                    }
                    throw new Error("geojson is invalid");
                }),
                (e.flattenEach = l),
                (e.flattenReduce = function (t, e, i) {
                    var n = i;
                    return (
                        l(t, function (t, r, a) {
                            n = 0 === r && 0 === a && i === undefined ? t : e(n, t, r, a);
                        }),
                        n
                    );
                }),
                (e.geomEach = s),
                (e.geomReduce = function (t, e, i) {
                    var n = i;
                    return (
                        s(t, function (t, r, a, o, s) {
                            n = 0 === r && i === undefined ? t : e(n, t, r, a, o, s);
                        }),
                        n
                    );
                }),
                (e.lineEach = u),
                (e.lineReduce = function (t, e, i) {
                    var n = i;
                    return (
                        u(t, function (t, r, a, o) {
                            n = 0 === r && i === undefined ? t : e(n, t, r, a, o);
                        }),
                        n
                    );
                }),
                (e.propEach = a),
                (e.propReduce = function (t, e, i) {
                    var n = i;
                    return (
                        a(t, function (t, r) {
                            n = 0 === r && i === undefined ? t : e(n, t, r);
                        }),
                        n
                    );
                }),
                (e.segmentEach = h),
                (e.segmentReduce = function (t, e, i) {
                    var n = i,
                        r = !1;
                    return (
                        h(t, function (t, a, o, s, l) {
                            (n = !1 === r && i === undefined ? t : e(n, t, a, o, s, l)), (r = !0);
                        }),
                        n
                    );
                });
        },
        1052: (t, e, i) => {
            "use strict";
            i(7107);
            var n = i(2492),
                r = i.n(n); 
            const a = JSON.parse(
                '{"tooltips":{"placeMarker":"Click to place marker","firstVertex":"Click to place first vertex","continueLine":"Click to continue drawing","finishLine":"Click any existing marker to finish","finishPoly":"Click en primer marcador para finalizar","finishRect":"Click to finish","startCircle":"Click to place circle center","finishCircle":"Click to finish circle","placeCircleMarker":"Click to place circle marker"},"actions":{"finish":"Finish","cancel":"Cancel","removeLastVertex":"Remove Last Vertex"},"buttonTitles":{"drawMarkerButton":"Draw Marker","drawPolyButton":"Dibuja un polygono","drawLineButton":"Draw Polyline","drawCircleButton":"Draw Circle","drawRectButton":"Draw Rectangle","editButton":"Edit Layers","dragButton":"Drag Layers","cutButton":"Cut Layers","deleteButton":"Remove Layers","drawCircleMarkerButton":"Draw Circle Marker","snappingButton":"Snap dragged marker to other layers and vertices","pinningButton":"Pin shared vertices together","rotateButton":"Rotate Layers"}}'
            ),
                o = JSON.parse(
                    '{"tooltips":{"placeMarker":"Platziere den Marker mit Klick","firstVertex":"Platziere den ersten Marker mit Klick","continueLine":"Klicke, um weiter zu zeichnen","finishLine":"Beende mit Klick auf existierenden Marker","finishPoly":"Beende mit Klick auf ersten Marker","finishRect":"Beende mit Klick","startCircle":"Platziere das Kreiszentrum mit Klick","finishCircle":"Beende den Kreis mit Klick","placeCircleMarker":"Platziere den Kreismarker mit Klick"},"actions":{"finish":"Beenden","cancel":"Abbrechen","removeLastVertex":"Letzten Vertex löschen"},"buttonTitles":{"drawMarkerButton":"Marker zeichnen","drawPolyButton":"Polygon zeichnen","drawLineButton":"Polyline zeichnen","drawCircleButton":"Kreis zeichnen","drawRectButton":"Rechteck zeichnen","editButton":"Layer editieren","dragButton":"Layer bewegen","cutButton":"Layer schneiden","deleteButton":"Layer löschen","drawCircleMarkerButton":"Kreismarker zeichnen","snappingButton":"Bewegter Layer an andere Layer oder Vertexe einhacken","pinningButton":"Vertexe an der gleichen Position verknüpfen","rotateButton":"Layer drehen"}}'
                ),
                s = JSON.parse(
                    '{"tooltips":{"placeMarker":"Clicca per posizionare un Marker","firstVertex":"Clicca per posizionare il primo vertice","continueLine":"Clicca per continuare a disegnare","finishLine":"Clicca qualsiasi marker esistente per terminare","finishPoly":"Clicca il primo marker per terminare","finishRect":"Clicca per terminare","startCircle":"Clicca per posizionare il punto centrale del cerchio","finishCircle":"Clicca per terminare il cerchio","placeCircleMarker":"Clicca per posizionare un Marker del cherchio"},"actions":{"finish":"Termina","cancel":"Annulla","removeLastVertex":"Rimuovi l\'ultimo vertice"},"buttonTitles":{"drawMarkerButton":"Disegna Marker","drawPolyButton":"Disegna Poligoni","drawLineButton":"Disegna Polilinea","drawCircleButton":"Disegna Cerchio","drawRectButton":"Disegna Rettangolo","editButton":"Modifica Livelli","dragButton":"Sposta Livelli","cutButton":"Ritaglia Livelli","deleteButton":"Elimina Livelli","drawCircleMarkerButton":"Disegna Marker del Cerchio","snappingButton":"Snap ha trascinato il pennarello su altri strati e vertici","pinningButton":"Pin condiviso vertici insieme"}}'
                ),
                l = JSON.parse(
                    '{"tooltips":{"placeMarker":"Klik untuk menempatkan marker","firstVertex":"Klik untuk menempatkan vertex pertama","continueLine":"Klik untuk meneruskan digitasi","finishLine":"Klik pada sembarang marker yang ada untuk mengakhiri","finishPoly":"Klik marker pertama untuk mengakhiri","finishRect":"Klik untuk mengakhiri","startCircle":"Klik untuk menempatkan titik pusat lingkaran","finishCircle":"Klik untuk mengakhiri lingkaran","placeCircleMarker":"Klik untuk menempatkan penanda lingkarann"},"actions":{"finish":"Selesai","cancel":"Batal","removeLastVertex":"Hilangkan Vertex Terakhir"},"buttonTitles":{"drawMarkerButton":"Digitasi Marker","drawPolyButton":"Digitasi Polygon","drawLineButton":"Digitasi Polyline","drawCircleButton":"Digitasi Lingkaran","drawRectButton":"Digitasi Segi Empat","editButton":"Edit Layer","dragButton":"Geser Layer","cutButton":"Potong Layer","deleteButton":"Hilangkan Layer","drawCircleMarkerButton":"Digitasi Penanda Lingkaran","snappingButton":"Jepretkan penanda yang ditarik ke lapisan dan simpul lain","pinningButton":"Sematkan simpul bersama bersama"}}'
                ),
                h = JSON.parse(
                    '{"tooltips":{"placeMarker":"Adaugă un punct","firstVertex":"Apasă aici pentru a adăuga primul Vertex","continueLine":"Apasă aici pentru a continua desenul","finishLine":"Apasă pe orice obiect pentru a finisa desenul","finishPoly":"Apasă pe primul obiect pentru a finisa","finishRect":"Apasă pentru a finisa","startCircle":"Apasă pentru a desena un cerc","finishCircle":"Apasă pentru a finisa un cerc","placeCircleMarker":"Adaugă un punct"},"actions":{"finish":"Termină","cancel":"Anulează","removeLastVertex":"Șterge ultimul Vertex"},"buttonTitles":{"drawMarkerButton":"Adaugă o bulină","drawPolyButton":"Desenează un poligon","drawLineButton":"Desenează o linie","drawCircleButton":"Desenează un cerc","drawRectButton":"Desenează un dreptunghi","editButton":"Editează straturile","dragButton":"Mută straturile","cutButton":"Taie straturile","deleteButton":"Șterge straturile","drawCircleMarkerButton":"Desenează marcatorul cercului","snappingButton":"Fixați marcatorul glisat pe alte straturi și vârfuri","pinningButton":"Fixați vârfurile partajate împreună"}}'
                ),
                u = JSON.parse(
                    '{"tooltips":{"placeMarker":"Нажмите, чтобы нанести маркер","firstVertex":"Нажмите, чтобы нанести первый объект","continueLine":"Нажмите, чтобы продолжить рисование","finishLine":"Нажмите любой существующий маркер для завершения","finishPoly":"Выберите первую точку, чтобы закончить","finishRect":"Нажмите, чтобы закончить","startCircle":"Нажмите, чтобы добавить центр круга","finishCircle":"Нажмите, чтобы задать радиус","placeCircleMarker":"Нажмите, чтобы нанести круговой маркер"},"actions":{"finish":"Завершить","cancel":"Отменить","removeLastVertex":"Отменить последнее действие"},"buttonTitles":{"drawMarkerButton":"Добавить маркер","drawPolyButton":"Рисовать полигон","drawLineButton":"Рисовать кривую","drawCircleButton":"Рисовать круг","drawRectButton":"Рисовать прямоугольник","editButton":"Редактировать слой","dragButton":"Перенести слой","cutButton":"Вырезать слой","deleteButton":"Удалить слой","drawCircleMarkerButton":"Добавить круговой маркер","snappingButton":"Привязать перетаскиваемый маркер к другим слоям и вершинам","pinningButton":"Связать общие точки вместе"}}'
                ),
                c = JSON.parse( 
                    '{"tooltips":{"placeMarker":"Presiona para colocar un marcador","firstVertex":"Presiona para colocar el primer vértice","continueLine":"Presiona para continuar dibujando","finishLine":"Presiona cualquier marcador existente para finalizar","finishPoly":"Presiona el primer marcador para finalizar","finishRect":"Presiona para finalizar","startCircle":"Presiona para colocar el centro del circulo","finishCircle":"Presiona para finalizar el circulo","placeCircleMarker":"Presiona para colocar un marcador de circulo"},"actions":{"finish":"Finalizar","cancel":"Cancelar","removeLastVertex":"Remover ultimo vértice"},"buttonTitles":{"drawMarkerButton":"Dibujar Marcador","drawPolyButton":"Dibujar Polígono","drawLineButton":"Dibujar Línea","drawCircleButton":"Dibujar Circulo","drawRectButton":"Dibujar Rectángulo","editButton":"Editar Capas","dragButton":"Arrastrar Capas","cutButton":"Cortar Capas","deleteButton":"Remover Capas","drawCircleMarkerButton":"Dibujar Marcador de Circulo","snappingButton":"El marcador de Snap arrastrado a otras capas y vértices","pinningButton":"Fijar juntos los vértices compartidos"}}'
                ),
                p = JSON.parse(
                    '{"tooltips":{"placeMarker":"Klik om een marker te plaatsen","firstVertex":"Klik om het eerste punt te plaatsen","continueLine":"Klik om te blijven tekenen","finishLine":"Klik op een bestaand punt om te beëindigen","finishPoly":"Klik op het eerst punt om te beëindigen","finishRect":"Klik om te beëindigen","startCircle":"Klik om het middelpunt te plaatsen","finishCircle":"Klik om de cirkel te beëindigen","placeCircleMarker":"Klik om een marker te plaatsen"},"actions":{"finish":"Bewaar","cancel":"Annuleer","removeLastVertex":"Verwijder laatste punt"},"buttonTitles":{"drawMarkerButton":"Plaats Marker","drawPolyButton":"Teken een vlak","drawLineButton":"Teken een lijn","drawCircleButton":"Teken een cirkel","drawRectButton":"Teken een vierkant","editButton":"Bewerk","dragButton":"Verplaats","cutButton":"Knip","deleteButton":"Verwijder","drawCircleMarkerButton":"Plaats Marker","snappingButton":"Snap gesleepte marker naar andere lagen en hoekpunten","pinningButton":"Speld gedeelde hoekpunten samen"}}'
                ),
                d = JSON.parse(
                    '{"tooltips":{"placeMarker":"Cliquez pour placer un marqueur","firstVertex":"Cliquez pour placer le premier sommet","continueLine":"Cliquez pour continuer à dessiner","finishLine":"Cliquez sur n\'importe quel marqueur pour terminer","finishPoly":"Cliquez sur le premier marqueur pour terminer","finishRect":"Cliquez pour terminer","startCircle":"Cliquez pour placer le centre du cercle","finishCircle":"Cliquez pour finir le cercle","placeCircleMarker":"Cliquez pour placer le marqueur circulaire"},"actions":{"finish":"Terminer","cancel":"Annuler","removeLastVertex":"Retirer le dernier sommet"},"buttonTitles":{"drawMarkerButton":"Placer des marqueurs","drawPolyButton":"Dessiner des polygones","drawLineButton":"Dessiner des polylignes","drawCircleButton":"Dessiner un cercle","drawRectButton":"Dessiner un rectangle","editButton":"Éditer des calques","dragButton":"Déplacer des calques","cutButton":"Couper des calques","deleteButton":"Supprimer des calques","drawCircleMarkerButton":"Dessiner un marqueur circulaire","snappingButton":"Glisser le marqueur vers d\'autres couches et sommets","pinningButton":"Épingler ensemble les sommets partagés","rotateButton":"Tourner des calques"}}'
                ),
                f = JSON.parse(
                    '{"tooltips":{"placeMarker":"单击放置标记","firstVertex":"单击放置首个顶点","continueLine":"单击继续绘制","finishLine":"单击任何存在的标记以完成","finishPoly":"单击第一个标记以完成","finishRect":"单击完成","startCircle":"单击放置圆心","finishCircle":"单击完成圆形","placeCircleMarker":"点击放置圆形标记"},"actions":{"finish":"完成","cancel":"取消","removeLastVertex":"移除最后的顶点"},"buttonTitles":{"drawMarkerButton":"绘制标记","drawPolyButton":"绘制多边形","drawLineButton":"绘制线段","drawCircleButton":"绘制圆形","drawRectButton":"绘制长方形","editButton":"编辑图层","dragButton":"拖拽图层","cutButton":"剪切图层","deleteButton":"删除图层","drawCircleMarkerButton":"画圆圈标记","snappingButton":"将拖动的标记捕捉到其他图层和顶点","pinningButton":"将共享顶点固定在一起"}}'
                ),
                g = JSON.parse(
                    '{"tooltips":{"placeMarker":"單擊放置標記","firstVertex":"單擊放置第一個頂點","continueLine":"單擊繼續繪製","finishLine":"單擊任何存在的標記以完成","finishPoly":"單擊第一個標記以完成","finishRect":"單擊完成","startCircle":"單擊放置圓心","finishCircle":"單擊完成圓形","placeCircleMarker":"點擊放置圓形標記"},"actions":{"finish":"完成","cancel":"取消","removeLastVertex":"移除最後一個頂點"},"buttonTitles":{"drawMarkerButton":"放置標記","drawPolyButton":"繪製多邊形","drawLineButton":"繪製線段","drawCircleButton":"繪製圓形","drawRectButton":"繪製方形","editButton":"編輯圖形","dragButton":"移動圖形","cutButton":"裁切圖形","deleteButton":"刪除圖形","drawCircleMarkerButton":"畫圓圈標記","snappingButton":"將拖動的標記對齊到其他圖層和頂點","pinningButton":"將共享頂點固定在一起"}}'
                ),
                _ = {
                    en: a,
                    de: o,
                    it: s,
                    id: l,
                    ro: h,
                    ru: u,
                    es: c,
                    nl: p,
                    fr: d,
                    pt_br: JSON.parse(
                        '{"tooltips":{"placeMarker":"Clique para posicionar o marcador","firstVertex":"Clique para posicionar o primeiro vértice","continueLine":"Clique para continuar desenhando","finishLine":"Clique em qualquer marcador existente para finalizar","finishPoly":"Clique no primeiro ponto para fechar o polígono","finishRect":"Clique para finalizar","startCircle":"Clique para posicionar o centro do círculo","finishCircle":"Clique para fechar o círculo","placeCircleMarker":"Clique para posicionar o marcador circular"},"actions":{"finish":"Finalizar","cancel":"Cancelar","removeLastVertex":"Remover último vértice"},"buttonTitles":{"drawMarkerButton":"Desenhar um marcador","drawPolyButton":"Desenhar um polígono","drawLineButton":"Desenhar uma polilinha","drawCircleButton":"Desenhar um círculo","drawRectButton":"Desenhar um retângulo","editButton":"Editar camada(s)","dragButton":"Mover camada(s)","cutButton":"Recortar camada(s)","deleteButton":"Remover camada(s)","drawCircleMarkerButton":"Marcador de círculos de desenho","snappingButton":"Marcador arrastado para outras camadas e vértices","pinningButton":"Vértices compartilhados de pinos juntos"}}'
                    ),
                    zh: f,
                    zh_tw: g,
                    pl: JSON.parse(
                        '{"tooltips":{"placeMarker":"Kliknij, aby ustawić znacznik","firstVertex":"Kliknij, aby ustawić pierwszy punkt","continueLine":"Kliknij, aby kontynuować rysowanie","finishLine":"Kliknij dowolny punkt, aby zakończyć","finishPoly":"Kliknij pierwszy punkt, aby zakończyć","finishRect":"Kliknij, aby zakończyć","startCircle":"Kliknij, aby ustawić środek koła","finishCircle":"Kliknij, aby zakończyć rysowanie koła","placeCircleMarker":"Kliknij, aby ustawić okrągły znacznik"},"actions":{"finish":"Zakończ","cancel":"Anuluj","removeLastVertex":"Usuń ostatni punkt"},"buttonTitles":{"drawMarkerButton":"Narysuj znacznik","drawPolyButton":"Narysuj wielokąt","drawLineButton":"Narysuj ścieżkę","drawCircleButton":"Narysuj koło","drawRectButton":"Narysuj prostokąt","editButton":"Edytuj","dragButton":"Przesuń","cutButton":"Wytnij","deleteButton":"Usuń","drawCircleMarkerButton":"Narysuj okrągły znacznik","snappingButton":"Snap przeciągnięty marker na inne warstwy i wierzchołki","pinningButton":"Sworzeń wspólne wierzchołki razem"}}'
                    ),
                    sv: JSON.parse(
                        '{"tooltips":{"placeMarker":"Klicka för att placera markör","firstVertex":"Klicka för att placera första hörnet","continueLine":"Klicka för att fortsätta rita","finishLine":"Klicka på en existerande punkt för att slutföra","finishPoly":"Klicka på den första punkten för att slutföra","finishRect":"Klicka för att slutföra","startCircle":"Klicka för att placera cirkelns centrum","finishCircle":"Klicka för att slutföra cirkeln","placeCircleMarker":"Klicka för att placera cirkelmarkör"},"actions":{"finish":"Slutför","cancel":"Avbryt","removeLastVertex":"Ta bort sista hörnet"},"buttonTitles":{"drawMarkerButton":"Rita Markör","drawPolyButton":"Rita Polygoner","drawLineButton":"Rita Linje","drawCircleButton":"Rita Cirkel","drawRectButton":"Rita Rektangel","editButton":"Redigera Lager","dragButton":"Dra Lager","cutButton":"Klipp i Lager","deleteButton":"Ta bort Lager","drawCircleMarkerButton":"Rita Cirkelmarkör","snappingButton":"Snäpp dra markören till andra lager och hörn","pinningButton":"Fäst delade hörn tillsammans"}}'
                    ),
                    el: JSON.parse(
                        '{"tooltips":{"placeMarker":"Κάντε κλικ για να τοποθετήσετε Δείκτη","firstVertex":"Κάντε κλικ για να τοποθετήσετε το πρώτο σημείο","continueLine":"Κάντε κλικ για να συνεχίσετε να σχεδιάζετε","finishLine":"Κάντε κλικ σε οποιονδήποτε υπάρχον σημείο για να ολοκληρωθεί","finishPoly":"Κάντε κλικ στο πρώτο σημείο για να τελειώσετε","finishRect":"Κάντε κλικ για να τελειώσετε","startCircle":"Κάντε κλικ για να τοποθετήσετε κέντρο Κύκλου","finishCircle":"Κάντε κλικ για να ολοκληρώσετε τον Κύκλο","placeCircleMarker":"Κάντε κλικ για να τοποθετήσετε Κυκλικό Δείκτη"},"actions":{"finish":"Τέλος","cancel":"Ακύρωση","removeLastVertex":"Κατάργηση τελευταίου σημείου"},"buttonTitles":{"drawMarkerButton":"Σχεδίαση Δείκτη","drawPolyButton":"Σχεδίαση Πολυγώνου","drawLineButton":"Σχεδίαση Γραμμής","drawCircleButton":"Σχεδίαση Κύκλου","drawRectButton":"Σχεδίαση Ορθογωνίου","editButton":"Επεξεργασία Επιπέδων","dragButton":"Μεταφορά Επιπέδων","cutButton":"Αποκοπή Επιπέδων","deleteButton":"Κατάργηση Επιπέδων","drawCircleMarkerButton":"Σχεδίαση Κυκλικού Δείκτη","snappingButton":"Προσκόλληση του Δείκτη μεταφοράς σε άλλα Επίπεδα και Κορυφές","pinningButton":"Περικοπή κοινών κορυφών μαζί"}}'
                    ),
                    hu: JSON.parse(
                        '{"tooltips":{"placeMarker":"Kattintson a jelölő elhelyezéséhez","firstVertex":"Kattintson az első pont elhelyezéséhez","continueLine":"Kattintson a következő pont elhelyezéséhez","finishLine":"A befejezéshez kattintson egy meglévő pontra","finishPoly":"A befejezéshez kattintson az első pontra","finishRect":"Kattintson a befejezéshez","startCircle":"Kattintson a kör középpontjának elhelyezéséhez","finishCircle":"Kattintson a kör befejezéséhez","placeCircleMarker":"Kattintson a körjelölő elhelyezéséhez"},"actions":{"finish":"Befejezés","cancel":"Mégse","removeLastVertex":"Utolsó pont eltávolítása"},"buttonTitles":{"drawMarkerButton":"Jelölő rajzolása","drawPolyButton":"Poligon rajzolása","drawLineButton":"Vonal rajzolása","drawCircleButton":"Kör rajzolása","drawRectButton":"Négyzet rajzolása","editButton":"Elemek szerkesztése","dragButton":"Elemek mozgatása","cutButton":"Elemek vágása","deleteButton":"Elemek törlése","drawCircleMarkerButton":"Kör jelölő rajzolása","snappingButton":"Kapcsolja a jelöltőt másik elemhez vagy ponthoz","pinningButton":"Közös pontok összekötése"}}'
                    ),
                    da: JSON.parse(
                        '{"tooltips":{"placeMarker":"Tryk for at placere en markør","firstVertex":"Tryk for at placere det første punkt","continueLine":"Tryk for at fortsætte linjen","finishLine":"Tryk på et eksisterende punkt for at afslutte","finishPoly":"Tryk på det første punkt for at afslutte","finishRect":"Tryk for at afslutte","startCircle":"Tryk for at placere cirklens center","finishCircle":"Tryk for at afslutte cirklen","placeCircleMarker":"Tryk for at placere en cirkelmarkør"},"actions":{"finish":"Afslut","cancel":"Afbryd","removeLastVertex":"Fjern sidste punkt"},"buttonTitles":{"drawMarkerButton":"Placer markør","drawPolyButton":"Tegn polygon","drawLineButton":"Tegn linje","drawCircleButton":"Tegn cirkel","drawRectButton":"Tegn firkant","editButton":"Rediger","dragButton":"Træk","cutButton":"Klip","deleteButton":"Fjern","drawCircleMarkerButton":"Tegn cirkelmarkør","snappingButton":"Fastgør trukket markør til andre elementer","pinningButton":"Sammenlæg delte elementer"}}'
                    ),
                    no: JSON.parse(
                        '{"tooltips":{"placeMarker":"Klikk for å plassere punkt","firstVertex":"Klikk for å plassere første punkt","continueLine":"Klikk for å tegne videre","finishLine":"Klikk på et eksisterende punkt for å fullføre","finishPoly":"Klikk første punkt for å fullføre","finishRect":"Klikk for å fullføre","startCircle":"Klikk for å sette sirkel midtpunkt","finishCircle":"Klikk for å fullføre sirkel","placeCircleMarker":"Klikk for å plassere sirkel"},"actions":{"finish":"Fullfør","cancel":"Kanseller","removeLastVertex":"Fjern forrige punkt"},"buttonTitles":{"drawMarkerButton":"Tegn Punkt","drawPolyButton":"Tegn Flate","drawLineButton":"Tegn Linje","drawCircleButton":"Tegn Sirkel","drawRectButton":"Tegn rektangel","editButton":"Rediger Objekter","dragButton":"Dra Objekter","cutButton":"Kutt Objekter","deleteButton":"Fjern Objekter","drawCircleMarkerButton":"Tegn sirkel-punkt","snappingButton":"Fest dratt punkt til andre objekter og punkt","pinningButton":"Pin delte punkt sammen"}}'
                    ),
                    fa: JSON.parse(
                        '{"tooltips":{"placeMarker":"کلیک برای جانمایی نشان","firstVertex":"کلیک برای رسم اولین رأس","continueLine":"کلیک برای ادامه رسم","finishLine":"کلیک روی هر نشان موجود برای پایان","finishPoly":"کلیک روی اولین نشان برای پایان","finishRect":"کلیک برای پایان","startCircle":"کلیک برای رسم مرکز دایره","finishCircle":"کلیک برای پایان رسم دایره","placeCircleMarker":"کلیک برای رسم نشان دایره"},"actions":{"finish":"پایان","cancel":"لفو","removeLastVertex":"حذف آخرین رأس"},"buttonTitles":{"drawMarkerButton":"درج نشان","drawPolyButton":"رسم چندضلعی","drawLineButton":"رسم خط","drawCircleButton":"رسم دایره","drawRectButton":"رسم چهارضلعی","editButton":"ویرایش لایه‌ها","dragButton":"جابجایی لایه‌ها","cutButton":"برش لایه‌ها","deleteButton":"حذف لایه‌ها","drawCircleMarkerButton":"رسم نشان دایره","snappingButton":"نشانگر را به لایه‌ها و رئوس دیگر بکشید","pinningButton":"رئوس مشترک را با هم پین کنید","rotateButton":"چرخش لایه"}}'
                    ),
                    ua: JSON.parse(
                        '{"tooltips":{"placeMarker":"Натисніть, щоб нанести маркер","firstVertex":"Натисніть, щоб нанести першу вершину","continueLine":"Натисніть, щоб продовжити малювати","finishLine":"Натисніть будь-який існуючий маркер для завершення","finishPoly":"Виберіть перший маркер, щоб завершити","finishRect":"Натисніть, щоб завершити","startCircle":"Натисніть, щоб додати центр кола","finishCircle":"Натисніть, щоб завершити коло","placeCircleMarker":"Натисніть, щоб нанести круговий маркер"},"actions":{"finish":"Завершити","cancel":"Відмінити","removeLastVertex":"Видалити попередню вершину"},"buttonTitles":{"drawMarkerButton":"Малювати маркер","drawPolyButton":"Малювати полігон","drawLineButton":"Малювати криву","drawCircleButton":"Малювати коло","drawRectButton":"Малювати прямокутник","editButton":"Редагувати шари","dragButton":"Перенести шари","cutButton":"Вирізати шари","deleteButton":"Видалити шари","drawCircleMarkerButton":"Малювати круговий маркер","snappingButton":"Прив’язати перетягнутий маркер до інших шарів та вершин","pinningButton":"Зв\'язати спільні вершини разом"}}'
                    ),
                    tr: JSON.parse(
                        '{"tooltips":{"placeMarker":"İşaretçi yerleştirmek için tıklayın","firstVertex":"İlk tepe noktasını yerleştirmek için tıklayın","continueLine":"Çizime devam etmek için tıklayın","finishLine":"Bitirmek için mevcut herhangi bir işaretçiyi tıklayın","finishPoly":"Bitirmek için ilk işaretçiyi tıklayın","finishRect":"Bitirmek için tıklayın","startCircle":"Daire merkezine yerleştirmek için tıklayın","finishCircle":"Daireyi bitirmek için tıklayın","placeCircleMarker":"Daire işaretçisi yerleştirmek için tıklayın"},"actions":{"finish":"Bitir","cancel":"İptal","removeLastVertex":"Son köşeyi kaldır"},"buttonTitles":{"drawMarkerButton":"Çizim İşaretçisi","drawPolyButton":"Çokgenler çiz","drawLineButton":"Çoklu çizgi çiz","drawCircleButton":"Çember çiz","drawRectButton":"Dikdörtgen çiz","editButton":"Katmanları düzenle","dragButton":"Katmanları sürükle","cutButton":"Katmanları kes","deleteButton":"Katmanları kaldır","drawCircleMarkerButton":"Daire işaretçisi çiz","snappingButton":"Sürüklenen işaretçiyi diğer katmanlara ve köşelere yapıştır","pinningButton":"Paylaşılan köşeleri birbirine sabitle"}}'
                    ),
                    cz: JSON.parse(
                        '{"tooltips":{"placeMarker":"Kliknutím vytvoříte značku","firstVertex":"Kliknutím vytvoříte první objekt","continueLine":"Kliknutím pokračujte v kreslení","finishLine":"Kliknutí na libovolnou existující značku pro dokončení","finishPoly":"Vyberte první bod pro dokončení","finishRect":"Klikněte pro dokončení","startCircle":"Kliknutím přidejte střed kruhu","finishCircle":"Нажмите, чтобы задать радиус","placeCircleMarker":"Kliknutím nastavte poloměr"},"actions":{"finish":"Dokončit","cancel":"Zrušit","removeLastVertex":"Zrušit poslední akci"},"buttonTitles":{"drawMarkerButton":"Přidat značku","drawPolyButton":"Nakreslit polygon","drawLineButton":"Nakreslit křivku","drawCircleButton":"Nakreslit kruh","drawRectButton":"Nakreslit obdélník","editButton":"Upravit vrstvu","dragButton":"Přeneste vrstvu","cutButton":"Vyjmout vrstvu","deleteButton":"Smazat vrstvu","drawCircleMarkerButton":"Přidat kruhovou značku","snappingButton":"Navázat tažnou značku k dalším vrstvám a vrcholům","pinningButton":"Spojit společné body dohromady"}}'
                    ),
                };
            function y(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e &&
                        (n = n.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        i.push.apply(i, n);
                }
                return i;
            }
            function m(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? y(Object(i), !0).forEach(function (e) {
                            v(t, e, i[e]);
                        })
                        : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                            : y(Object(i)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                            });
                }
                return t;
            }
            function v(t, e, i) {
                return e in t ? Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = i), t;
            }
            const b = {
                _globalEditModeEnabled: !1,
                enableGlobalEditMode: function (t) {
                    (this._globalEditModeEnabled = !0),
                        this.Toolbar.toggleButton("editMode", this.globalEditModeEnabled()),
                        L.PM.Utils.findLayers(this.map).forEach(function (e) {
                            e.pm.enable(t);
                        }),
                        this.throttledReInitEdit || (this.throttledReInitEdit = L.Util.throttle(this.handleLayerAdditionInGlobalEditMode, 100, this)),
                        (this._addedLayers = {}),
                        this.map.on("layeradd", this._layerAdded, this),
                        this.map.on("layeradd", this.throttledReInitEdit, this),
                        this._fireGlobalEditModeToggled(!0);
                },
                disableGlobalEditMode: function () {
                    (this._globalEditModeEnabled = !1),
                        L.PM.Utils.findLayers(this.map).forEach(function (t) {
                            t.pm.disable();
                        }),
                        this.map.off("layeradd", this.throttledReInitEdit, this),
                        this.Toolbar.toggleButton("editMode", this.globalEditModeEnabled()),
                        this._fireGlobalEditModeToggled(!1);
                },
                globalEditEnabled: function () {
                    return this.globalEditModeEnabled();
                },
                globalEditModeEnabled: function () {
                    return this._globalEditModeEnabled;
                },
                toggleGlobalEditMode: function () {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.globalOptions;
                    this.globalEditModeEnabled() ? this.disableGlobalEditMode() : this.enableGlobalEditMode(t);
                },
                handleLayerAdditionInGlobalEditMode: function () {
                    var t = this._addedLayers;
                    for (var e in ((this._addedLayers = {}), t)) {
                        var i = t[e];
                        this._isRelevantForEdit(i) && this.globalEditModeEnabled() && i.pm.enable(m({}, this.globalOptions));
                    }
                },
                _layerAdded: function (t) {
                    var e = t.layer;
                    this._addedLayers[L.stamp(e)] = e;
                },
                _isRelevantForEdit: function (t) {
                    return t.pm && !(t instanceof L.LayerGroup) && ((!L.PM.optIn && !t.options.pmIgnore) || (L.PM.optIn && !1 === t.options.pmIgnore)) && !t._pmTempLayer && t.pm.options.allowEditing;
                },
            };
            const k = {
                _globalDragModeEnabled: !1,
                enableGlobalDragMode: function () {
                    var t = L.PM.Utils.findLayers(this.map);
                    (this._globalDragModeEnabled = !0),
                        (this._addedLayersDrag = {}),
                        t.forEach(function (t) {
                            t.pm.enableLayerDrag();
                        }),
                        this.throttledReInitDrag || (this.throttledReInitDrag = L.Util.throttle(this.reinitGlobalDragMode, 100, this)),
                        this.map.on("layeradd", this.throttledReInitDrag, this),
                        this.map.on("layeradd", this._layerAddedDrag, this),
                        this.Toolbar.toggleButton("dragMode", this.globalDragModeEnabled()),
                        this._fireGlobalDragModeToggled(!0);
                },
                disableGlobalDragMode: function () {
                    var t = L.PM.Utils.findLayers(this.map);
                    (this._globalDragModeEnabled = !1),
                        t.forEach(function (t) {
                            t.pm.disableLayerDrag();
                        }),
                        this.map.off("layeradd", this.throttledReInitDrag, this),
                        this.Toolbar.toggleButton("dragMode", this.globalDragModeEnabled()),
                        this._fireGlobalDragModeToggled(!1);
                },
                globalDragModeEnabled: function () {
                    return !!this._globalDragModeEnabled;
                },
                toggleGlobalDragMode: function () {
                    this.globalDragModeEnabled() ? this.disableGlobalDragMode() : this.enableGlobalDragMode();
                },
                reinitGlobalDragMode: function () {
                    var t = this._addedLayersDrag;
                    for (var e in ((this._addedLayersDrag = {}), t)) {
                        var i = t[e];
                        this._isRelevantForDrag(i) && this.globalDragModeEnabled() && i.pm.enableLayerDrag();
                    }
                },
                _layerAddedDrag: function (t) {
                    var e = t.layer;
                    this._addedLayersDrag[L.stamp(e)] = e;
                },
                _isRelevantForDrag: function (t) {
                    return t.pm && !(t instanceof L.LayerGroup) && ((!L.PM.optIn && !t.options.pmIgnore) || (L.PM.optIn && !1 === t.options.pmIgnore)) && !t._pmTempLayer && t.pm.options.draggable;
                },
            };
            const M = {
                _globalRemovalModeEnabled: !1,
                enableGlobalRemovalMode: function () {
                    var t = this;
                    (this._globalRemovalModeEnabled = !0),
                        this.map.eachLayer(function (e) {
                            t._isRelevantForRemoval(e) && (e.pm.disable(), e.on("click", t.removeLayer, t));
                        }),
                        this.throttledReInitRemoval || (this.throttledReInitRemoval = L.Util.throttle(this.reinitGlobalRemovalMode, 100, this)),
                        this.map.on("layeradd", this.throttledReInitRemoval, this),
                        this.Toolbar.toggleButton("removalMode", this.globalRemovalModeEnabled()),
                        this._fireGlobalRemovalModeToggled(!0);
                },
                disableGlobalRemovalMode: function () {
                    var t = this;
                    (this._globalRemovalModeEnabled = !1),
                        this.map.eachLayer(function (e) {
                            e.off("click", t.removeLayer, t);
                        }),
                        this.map.off("layeradd", this.throttledReInitRemoval, this),
                        this.Toolbar.toggleButton("removalMode", this.globalRemovalModeEnabled()),
                        this._fireGlobalRemovalModeToggled(!1);
                },
                globalRemovalEnabled: function () {
                    return this.globalRemovalModeEnabled();
                },
                globalRemovalModeEnabled: function () {
                    return !!this._globalRemovalModeEnabled;
                },
                toggleGlobalRemovalMode: function () {
                    this.globalRemovalModeEnabled() ? this.disableGlobalRemovalMode() : this.enableGlobalRemovalMode();
                },
                reinitGlobalRemovalMode: function (t) {
                    var e = t.layer;
                    this._isRelevantForRemoval(e) && this.globalRemovalModeEnabled() && (this.disableGlobalRemovalMode(), this.enableGlobalRemovalMode());
                },
                removeLayer: function (t) {
                    var e = t.target;
                    this._isRelevantForRemoval(e) &&
                        !e.pm.dragging() &&
                        (e.removeFrom(this.map.pm._getContainingLayer()),
                            e.remove(),
                            e instanceof L.LayerGroup ? (this._fireRemoveLayerGroup(e), this._fireRemoveLayerGroup(this.map, e)) : (e.pm._fireRemove(e), e.pm._fireRemove(this.map, e)));
                },
                _isRelevantForRemoval: function (t) {
                    return t.pm && !(t instanceof L.LayerGroup) && ((!L.PM.optIn && !t.options.pmIgnore) || (L.PM.optIn && !1 === t.options.pmIgnore)) && !t._pmTempLayer && t.pm.options.allowRemoval;
                },
            };
            const x = {
                _globalRotateModeEnabled: !1,
                enableGlobalRotateMode: function () {
                    var t = this;
                    (this._globalRotateModeEnabled = !0),
                        L.PM.Utils.findLayers(this.map)
                            .filter(function (t) {
                                return t instanceof L.Polyline;
                            })
                            .forEach(function (e) {
                                t._isRelevantForRotate(e) && e.pm.enableRotate();
                            }),
                        this.throttledReInitRotate || (this.throttledReInitRotate = L.Util.throttle(this._reinitGlobalRotateMode, 100, this)),
                        this.map.on("layeradd", this.throttledReInitRotate, this),
                        this.Toolbar.toggleButton("rotateMode", this.globalRotateModeEnabled()),
                        this._fireGlobalRotateModeToggled();
                },
                disableGlobalRotateMode: function () {
                    (this._globalRotateModeEnabled = !1),
                        L.PM.Utils.findLayers(this.map)
                            .filter(function (t) {
                                return t instanceof L.Polyline;
                            })
                            .forEach(function (t) {
                                t.pm.disableRotate();
                            }),
                        this.map.off("layeradd", this.throttledReInitRotate, this),
                        this.Toolbar.toggleButton("rotateMode", this.globalRotateModeEnabled()),
                        this._fireGlobalRotateModeToggled();
                },
                globalRotateModeEnabled: function () {
                    return !!this._globalRotateModeEnabled;
                },
                toggleGlobalRotateMode: function () {
                    this.globalRotateModeEnabled() ? this.disableGlobalRotateMode() : this.enableGlobalRotateMode();
                },
                _reinitGlobalRotateMode: function (t) {
                    var e = t.layer;
                    this._isRelevantForRotate(e) && this.globalRotateModeEnabled() && (this.disableGlobalRotateMode(), this.enableGlobalRotateMode());
                },
                _isRelevantForRotate: function (t) {
                    return t.pm && !(t instanceof L.LayerGroup) && ((!L.PM.optIn && !t.options.pmIgnore) || (L.PM.optIn && !1 === t.options.pmIgnore)) && !t._pmTempLayer && t.pm.options.allowRotation;
                },
            };
            function w(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e &&
                        (n = n.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        i.push.apply(i, n);
                }
                return i;
            }
            function C(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? w(Object(i), !0).forEach(function (e) {
                            P(t, e, i[e]);
                        })
                        : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                            : w(Object(i)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                            });
                }
                return t;
            }
            function P(t, e, i) {
                return e in t ? Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = i), t;
            }
            var E = {
                _fireDrawStart: function () {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Draw",
                        e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    this.__fire(this._map, "pm:drawstart", { shape: this._shape, workingLayer: this._layer }, t, e);
                },
                _fireDrawEnd: function () {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Draw",
                        e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    this.__fire(this._map, "pm:drawend", { shape: this._shape }, t, e);
                },
                _fireCreate: function (t) {
                    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Draw",
                        i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                    this.__fire(this._map, "pm:create", { shape: this._shape, marker: t, layer: t }, e, i);
                },
                _fireCenterPlaced: function () {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Draw",
                        e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                        i = "Draw" === t ? this._layer : undefined,
                        n = "Draw" !== t ? this._layer : undefined;
                    this.__fire(this._layer, "pm:centerplaced", { shape: this._shape, workingLayer: i, layer: n, latlng: this._layer.getLatLng() }, t, e);
                },
                _fireCut: function (t, e, i) {
                    var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "Draw",
                        r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
                    this.__fire(t, "pm:cut", { shape: this._shape, layer: e, originalLayer: i }, n, r);
                },
                _fireEdit: function () {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._layer,
                        e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Edit",
                        i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                    this.__fire(t, "pm:edit", { layer: this._layer, shape: this.getShape() }, e, i);
                },
                _fireEnable: function () {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Edit",
                        e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    this.__fire(this._layer, "pm:enable", { layer: this._layer, shape: this.getShape() }, t, e);
                },
                _fireDisable: function () {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Edit",
                        e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    this.__fire(this._layer, "pm:disable", { layer: this._layer, shape: this.getShape() }, t, e);
                },
                _fireUpdate: function () {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Edit",
                        e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    this.__fire(this._layer, "pm:update", { layer: this._layer, shape: this.getShape() }, t, e);
                },
                _fireMarkerDragStart: function (t) {
                    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined,
                        i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Edit",
                        n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
                    this.__fire(this._layer, "pm:markerdragstart", { layer: this._layer, markerEvent: t, shape: this.getShape(), indexPath: e }, i, n);
                },
                _fireMarkerDrag: function (t) {
                    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined,
                        i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Edit",
                        n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
                    this.__fire(this._layer, "pm:markerdrag", { layer: this._layer, markerEvent: t, shape: this.getShape(), indexPath: e }, i, n);
                },
                _fireMarkerDragEnd: function (t) {
                    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined,
                        i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined,
                        n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "Edit",
                        r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
                    this.__fire(this._layer, "pm:markerdragend", { layer: this._layer, markerEvent: t, shape: this.getShape(), indexPath: e, intersectionReset: i }, n, r);
                },
                _fireDragStart: function () {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Edit",
                        e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    this.__fire(this._layer, "pm:dragstart", { layer: this._layer, shape: this.getShape() }, t, e);
                },
                _fireDrag: function (t) {
                    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Edit",
                        i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                    this.__fire(this._layer, "pm:drag", C(C({}, t), {}, { shape: this.getShape() }), e, i);
                },
                _fireDragEnd: function () {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Edit",
                        e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    this.__fire(this._layer, "pm:dragend", { layer: this._layer, shape: this.getShape() }, t, e);
                },
                _fireDragEnable: function () {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Edit",
                        e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    this.__fire(this._layer, "pm:dragenable", { layer: this._layer, shape: this.getShape() }, t, e);
                },
                _fireDragDisable: function () {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Edit",
                        e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    this.__fire(this._layer, "pm:dragdisable", { layer: this._layer, shape: this.getShape() }, t, e);
                },
                _fireRemove: function (t) {
                    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : t,
                        i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Edit",
                        n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
                    this.__fire(t, "pm:remove", { layer: e, shape: this.getShape() }, i, n);
                },
                _fireVertexAdded: function (t, e, i) {
                    var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "Edit",
                        r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
                    this.__fire(this._layer, "pm:vertexadded", { layer: this._layer, workingLayer: this._layer, marker: t, indexPath: e, latlng: i, shape: this.getShape() }, n, r);
                },
                _fireVertexRemoved: function (t, e) {
                    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Edit",
                        n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
                    this.__fire(this._layer, "pm:vertexremoved", { layer: this._layer, marker: t, indexPath: e, shape: this.getShape() }, i, n);
                },
                _fireVertexClick: function (t, e) {
                    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Edit",
                        n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
                    this.__fire(this._layer, "pm:vertexclick", { layer: this._layer, markerEvent: t, indexPath: e, shape: this.getShape() }, i, n);
                },
                _fireIntersect: function (t) {
                    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Edit",
                        i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                    this.__fire(this._layer, "pm:intersect", { layer: this._layer, intersection: t, shape: this.getShape() }, e, i);
                },
                _fireLayerReset: function (t, e) {
                    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Edit",
                        n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
                    this.__fire(this._layer, "pm:layerreset", { layer: this._layer, markerEvent: t, indexPath: e, shape: this.getShape() }, i, n);
                },
                _fireChange: function (t) {
                    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Edit",
                        i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                    this.__fire(this._layer, "pm:change", { layer: this._layer, latlngs: t, shape: this.getShape() }, e, i);
                },
                _fireSnapDrag: function (t, e) {
                    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Snapping",
                        n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
                    this.__fire(t, "pm:snapdrag", e, i, n);
                },
                _fireSnap: function (t, e) {
                    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Snapping",
                        n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
                    this.__fire(t, "pm:snap", e, i, n);
                },
                _fireUnsnap: function (t, e) {
                    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Snapping",
                        n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
                    this.__fire(t, "pm:unsnap", e, i, n);
                },
                _fireRotationEnable: function (t, e) {
                    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Rotation",
                        n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
                    this.__fire(t, "pm:rotateenable", { layer: this._layer, helpLayer: this._rotatePoly, shape: this.getShape() }, i, n);
                },
                _fireRotationDisable: function (t) {
                    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Rotation",
                        i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                    this.__fire(t, "pm:rotatedisable", { layer: this._layer, shape: this.getShape() }, e, i);
                },
                _fireRotationStart: function (t, e) {
                    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Rotation",
                        n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
                    this.__fire(t, "pm:rotatestart", { layer: this._rotationLayer, helpLayer: this._layer, startAngle: this._startAngle, originLatLngs: e }, i, n);
                },
                _fireRotation: function (t, e, i) {
                    var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this._rotationLayer,
                        r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "Rotation",
                        a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
                    this.__fire(t, "pm:rotate", { layer: n, helpLayer: this._layer, startAngle: this._startAngle, angle: n.pm.getAngle(), angleDiff: e, oldLatLngs: i, newLatLngs: n.getLatLngs() }, r, a);
                },
                _fireRotationEnd: function (t, e, i) {
                    var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "Rotation",
                        r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
                    this.__fire(t, "pm:rotateend", { layer: this._rotationLayer, helpLayer: this._layer, startAngle: e, angle: this._rotationLayer.pm.getAngle(), originLatLngs: i, newLatLngs: this._rotationLayer.getLatLngs() }, n, r);
                },
                _fireActionClick: function (t, e, i) {
                    var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "Toolbar",
                        r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
                    this.__fire(this._map, "pm:actionclick", { text: t.text, action: t, btnName: e, button: i }, n, r);
                },
                _fireButtonClick: function (t, e) {
                    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Toolbar",
                        n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
                    this.__fire(this._map, "pm:buttonclick", { btnName: t, button: e }, i, n);
                },
                _fireLangChange: function (t, e, i, n) {
                    var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "Global",
                        a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
                    this.__fire(this.map, "pm:langchange", { oldLang: t, activeLang: e, fallback: i, translations: n }, r, a);
                },
                _fireGlobalDragModeToggled: function (t) {
                    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Global",
                        i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                    this.__fire(this.map, "pm:globaldragmodetoggled", { enabled: t, map: this.map }, e, i);
                },
                _fireGlobalEditModeToggled: function (t) {
                    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Global",
                        i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                    this.__fire(this.map, "pm:globaleditmodetoggled", { enabled: t, map: this.map }, e, i);
                },
                _fireGlobalRemovalModeToggled: function (t) {
                    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Global",
                        i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                    this.__fire(this.map, "pm:globalremovalmodetoggled", { enabled: t, map: this.map }, e, i);
                },
                _fireGlobalCutModeToggled: function () {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Global",
                        e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    this.__fire(this._map, "pm:globalcutmodetoggled", { enabled: !!this._enabled, map: this._map }, t, e);
                },
                _fireGlobalDrawModeToggled: function () {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Global",
                        e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    this.__fire(this._map, "pm:globaldrawmodetoggled", { enabled: this._enabled, shape: this._shape, map: this._map }, t, e);
                },
                _fireGlobalRotateModeToggled: function () {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Global",
                        e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    this.__fire(this.map, "pm:globalrotatemodetoggled", { enabled: this.globalRotateModeEnabled(), map: this.map }, t, e);
                },
                _fireRemoveLayerGroup: function (t) {
                    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : t,
                        i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Edit",
                        n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
                    this.__fire(t, "pm:remove", { layer: e, shape: undefined }, i, n);
                },
                _fireKeyeventEvent: function (t, e, i) {
                    var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "Global",
                        r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
                    this.__fire(this.map, "pm:keyevent", { event: t, eventType: e, focusOn: i }, n, r);
                },
                __fire: function (t, e, i, n) {
                    var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
                    (i = r()(i, a, { source: n })), L.PM.Utils._fireEvent(t, e, i);
                },
            };
            const S = E;
            const O = {
                _lastEvents: { keydown: undefined, keyup: undefined, current: undefined },
                _initKeyListener: function (t) {
                    (this.map = t), L.DomEvent.on(document, "keydown keyup", this._onKeyListener, this), L.DomEvent.on(document, "blur", this._onKeyListener, this);
                },
                _onKeyListener: function (t) {
                    var e = "document";
                    this.map.getContainer().contains(t.target) && (e = "map");
                    var i = { event: t, eventType: t.type, focusOn: e };
                    (this._lastEvents[t.type] = i), (this._lastEvents.current = i), this.map.pm._fireKeyeventEvent(t, t.type, e);
                },
                getLastKeyEvent: function () {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "current";
                    return this._lastEvents[t];
                },
                isShiftKeyPressed: function () {
                    var t;
                    return null === (t = this._lastEvents.current) || void 0 === t ? void 0 : t.event.shiftKey;
                },
                isAltKeyPressed: function () {
                    var t;
                    return null === (t = this._lastEvents.current) || void 0 === t ? void 0 : t.event.altKey;
                },
                isCtrlKeyPressed: function () {
                    var t;
                    return null === (t = this._lastEvents.current) || void 0 === t ? void 0 : t.event.ctrlKey;
                },
                isMetaKeyPressed: function () {
                    var t;
                    return null === (t = this._lastEvents.current) || void 0 === t ? void 0 : t.event.metaKey;
                },
                getPressedKey: function () {
                    var t;
                    return null === (t = this._lastEvents.current) || void 0 === t ? void 0 : t.event.key;
                },
            };
            var D = i(7361),
                R = i.n(D),
                B = i(8721),
                T = i.n(B);
            function I(t) {
                var e = L.PM.activeLang;
                return T()(_, e) || (e = "en"), R()(_[e], t);
            }
            function j(t) {
                return !(function e(t) {
                    return t
                        .filter(function (t) {
                            return ![null, "", undefined].includes(t);
                        })
                        .reduce(function (t, i) {
                            return t.concat(Array.isArray(i) ? e(i) : i);
                        }, []);
                })(t).length;
            }
            function G(t) {
                return t.reduce(function (t, e) {
                    return 0 !== e.length && t.push(Array.isArray(e) ? G(e) : e), t;
                }, []);
            }
            function A(t, e, i) {
                for (
                    var n,
                    r,
                    a,
                    o = 6378137,
                    s = 6356752.3142,
                    l = 1 / 298.257223563,
                    h = t.lng,
                    u = t.lat,
                    c = i,
                    p = Math.PI,
                    d = (e * p) / 180,
                    f = Math.sin(d),
                    g = Math.cos(d),
                    _ = (1 - l) * Math.tan((u * p) / 180),
                    y = 1 / Math.sqrt(1 + _ * _),
                    m = _ * y,
                    v = Math.atan2(_, g),
                    b = y * f,
                    k = 1 - b * b,
                    M = (k * (o * o - s * s)) / (s * s),
                    x = 1 + (M / 16384) * (4096 + M * (M * (320 - 175 * M) - 768)),
                    w = (M / 1024) * (256 + M * (M * (74 - 47 * M) - 128)),
                    C = c / (s * x),
                    P = 2 * Math.PI;
                    Math.abs(C - P) > 1e-12;

                ) {
                    (n = Math.cos(2 * v + C)), (P = C), (C = c / (s * x) + w * (r = Math.sin(C)) * (n + (w / 4) * ((a = Math.cos(C)) * (2 * n * n - 1) - (w / 6) * n * (4 * r * r - 3) * (4 * n * n - 3))));
                }
                var E = m * r - y * a * g,
                    S = Math.atan2(m * a + y * r * g, (1 - l) * Math.sqrt(b * b + E * E)),
                    O = (l / 16) * k * (4 + l * (4 - 3 * k)),
                    D = h + (180 * (Math.atan2(r * f, y * a - m * r * g) - (1 - O) * l * b * (C + O * r * (n + O * a * (2 * n * n - 1))))) / p,
                    R = (180 * S) / p;
                return L.latLng(D, R);
            }
            function N(t, e, i, n) {
                for (var r, a, o = !(arguments.length > 4 && arguments[4] !== undefined) || arguments[4], s = [], l = 0; l < i; l += 1) {
                    if (o) (r = A(t, (360 * l) / i + n, e)), (a = L.latLng(r.lng, r.lat));
                    else {
                        var h = t.lat + Math.cos((2 * l * Math.PI) / i) * e,
                            u = t.lng + Math.sin((2 * l * Math.PI) / i) * e;
                        a = L.latLng(h, u);
                    }
                    s.push(a);
                }
                return s;
            }
            function z(t, e, i, n) {
                var r = (function (t, e, i) {
                    var n = t.latLngToContainerPoint(e),
                        r = t.latLngToContainerPoint(i),
                        a = (180 * Math.atan2(r.y - n.y, r.x - n.x)) / Math.PI + 90;
                    return a + (a < 0 ? 360 : 0);
                })(t, e, i);
                return (function (t, e, i) {
                    e = (e + 360) % 360;
                    var n = Math.PI / 180,
                        r = 180 / Math.PI,
                        a = 6378137,
                        o = t.lng * n,
                        s = t.lat * n,
                        l = e * n,
                        h = Math.sin(s),
                        u = Math.cos(s),
                        c = Math.cos(i / a),
                        p = Math.sin(i / a),
                        d = Math.asin(h * c + u * p * Math.cos(l)),
                        f = o + Math.atan2(Math.sin(l) * p * u, c - h * Math.sin(d));
                    return (f = (f *= r) > 180 ? f - 360 : f < -180 ? f + 360 : f), L.latLng([d * r, f]);
                })(e, r, n);
            }
            function U(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : t.getLatLngs();
                return t instanceof L.Polygon ? L.polygon(e).getLatLngs() : L.polyline(e).getLatLngs();
            }
            function V(t, e) {
                var i, n;
                if (null !== (i = e.options.crs) && void 0 !== i && null !== (n = i.projection) && void 0 !== n && n.MAX_LATITUDE) {
                    var r,
                        a,
                        o = null === (r = e.options.crs) || void 0 === r || null === (a = r.projection) || void 0 === a ? void 0 : a.MAX_LATITUDE;
                    t.lat = Math.max(Math.min(o, t.lat), -o);
                }
                return t;
            }
            function F(t) {
                return t.options.renderer || t._map._getPaneRenderer(t.options.pane) || t._map.options.renderer || t._map._renderer;
            }
            const K = L.Class.extend({
                includes: [b, k, M, x, S],
                initialize: function (t) {
                    (this.map = t),
                        (this.Draw = new L.PM.Draw(t)),
                        (this.Toolbar = new L.PM.Toolbar(t)),
                        (this.Keyboard = O),
                        (this.globalOptions = {
                            snappable: !0,
                            layerGroup: undefined,
                            snappingOrder: ["Marker", "CircleMarker", "Circle", "Line", "Polygon", "Rectangle"],
                            panes: { vertexPane: "markerPane", layerPane: "overlayPane", markerPane: "markerPane" },
                            draggable: !0,
                        }),
                        this.Keyboard._initKeyListener(t);
                },
                setLang: function () {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "en",
                        e = arguments.length > 1 ? arguments[1] : undefined,
                        i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "en",
                        n = L.PM.activeLang;
                    e && (_[t] = r()(_[i], e)), (L.PM.activeLang = t), this.map.pm.Toolbar.reinit(), this._fireLangChange(n, t, i, _[t]);
                },
                addControls: function (t) {
                    this.Toolbar.addControls(t);
                },
                removeControls: function () {
                    this.Toolbar.removeControls();
                },
                toggleControls: function () {
                    this.Toolbar.toggleControls();
                },
                controlsVisible: function () {
                    return this.Toolbar.isVisible;
                },
                enableDraw: function () {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Polygon",
                        e = arguments.length > 1 ? arguments[1] : undefined;
                    "Poly" === t && (t = "Polygon"), this.Draw.enable(t, e);
                },
                disableDraw: function () {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Polygon";
                    "Poly" === t && (t = "Polygon"), this.Draw.disable(t);
                },
                setPathOptions: function (t) {
                    var e = this,
                        i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                        n = i.ignoreShapes || [],
                        r = i.merge || !1;
                    this.map.pm.Draw.shapes.forEach(function (i) {
                        -1 === n.indexOf(i) && e.map.pm.Draw[i].setPathOptions(t, r);
                    });
                },
                getGlobalOptions: function () {
                    return this.globalOptions;
                },
                setGlobalOptions: function (t) {
                    var e = this,
                        i = r()(this.globalOptions, t),
                        n = !1;
                    this.map.pm.Draw.CircleMarker.enabled() && this.map.pm.Draw.CircleMarker.options.editable !== i.editable && (this.map.pm.Draw.CircleMarker.disable(), (n = !0)),
                        this.map.pm.Draw.shapes.forEach(function (t) {
                            e.map.pm.Draw[t].setOptions(i);
                        }),
                        n && this.map.pm.Draw.CircleMarker.enable(),
                        L.PM.Utils.findLayers(this.map).forEach(function (t) {
                            t.pm.setOptions(i);
                        }),
                        this.applyGlobalOptions(),
                        (this.globalOptions = i);
                },
                applyGlobalOptions: function () {
                    L.PM.Utils.findLayers(this.map).forEach(function (t) {
                        t.pm.enabled() && t.pm.applyOptions();
                    });
                },
                globalDrawModeEnabled: function () {
                    return !!this.Draw.getActiveShape();
                },
                globalCutModeEnabled: function () {
                    return !!this.Draw.Cut.enabled();
                },
                enableGlobalCutMode: function (t) {
                    return this.Draw.Cut.enable(t);
                },
                toggleGlobalCutMode: function (t) {
                    return this.Draw.Cut.toggle(t);
                },
                disableGlobalCutMode: function () {
                    return this.Draw.Cut.disable();
                },
                getGeomanLayers: function () {
                    var t = arguments.length > 0 && arguments[0] !== undefined && arguments[0],
                        e = L.PM.Utils.findLayers(this.map);
                    if (!t) return e;
                    var i = L.featureGroup();
                    return (
                        (i._pmTempLayer = !0),
                        e.forEach(function (t) {
                            i.addLayer(t);
                        }),
                        i
                    );
                },
                getGeomanDrawLayers: function () {
                    var t = arguments.length > 0 && arguments[0] !== undefined && arguments[0],
                        e = L.PM.Utils.findLayers(this.map).filter(function (t) {
                            return !0 === t._drawnByGeoman;
                        });
                    if (!t) return e;
                    var i = L.featureGroup();
                    return (
                        (i._pmTempLayer = !0),
                        e.forEach(function (t) {
                            i.addLayer(t);
                        }),
                        i
                    );
                },
                _getContainingLayer: function () {
                    return this.globalOptions.layerGroup && this.globalOptions.layerGroup instanceof L.LayerGroup ? this.globalOptions.layerGroup : this.map;
                },
                _isCRSSimple: function () {
                    return this.map.options.crs === L.CRS.Simple;
                },
                _touchEventCounter: 0,
                _addTouchEvents: function (t) {
                    0 === this._touchEventCounter && (L.DomEvent.on(t, "touchmove", this._canvasTouchMove, this), L.DomEvent.on(t, "touchstart touchend touchcancel", this._canvasTouchClick, this)), (this._touchEventCounter += 1);
                },
                _removeTouchEvents: function (t) {
                    1 === this._touchEventCounter && (L.DomEvent.off(t, "touchmove", this._canvasTouchMove, this), L.DomEvent.off(t, "touchstart touchend touchcancel", this._canvasTouchClick, this)),
                        (this._touchEventCounter = this._touchEventCounter <= 1 ? 0 : this._touchEventCounter - 1);
                },
                _canvasTouchMove: function (t) {
                    F(this.map)._onMouseMove(this._createMouseEvent("mousemove", t));
                },
                _canvasTouchClick: function (t) {
                    var e = "";
                    "touchstart" === t.type || "pointerdown" === t.type
                        ? (e = "mousedown")
                        : "touchend" === t.type || "pointerup" === t.type
                            ? (e = "mouseup")
                            : ("touchcancel" !== t.type && "pointercancel" !== t.type) || (e = "mouseup"),
                        e && F(this.map)._onClick(this._createMouseEvent(e, t));
                },
                _createMouseEvent: function (t, e) {
                    var i,
                        n = e.touches[0] || e.changedTouches[0];
                    try {
                        i = new MouseEvent(t, {
                            bubbles: e.bubbles,
                            cancelable: e.cancelable,
                            view: e.view,
                            detail: n.detail,
                            screenX: n.screenX,
                            screenY: n.screenY,
                            clientX: n.clientX,
                            clientY: n.clientY,
                            ctrlKey: e.ctrlKey,
                            altKey: e.altKey,
                            shiftKey: e.shiftKey,
                            metaKey: e.metaKey,
                            button: e.button,
                            relatedTarget: e.relatedTarget,
                        });
                    } catch (r) {
                        (i = document.createEvent("MouseEvents")).initMouseEvent(
                            t,
                            e.bubbles,
                            e.cancelable,
                            e.view,
                            n.detail,
                            n.screenX,
                            n.screenY,
                            n.clientX,
                            n.clientY,
                            e.ctrlKey,
                            e.altKey,
                            e.shiftKey,
                            e.metaKey,
                            e.button,
                            e.relatedTarget
                        );
                    }
                    return i;
                },
            });
            function H(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e &&
                        (n = n.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        i.push.apply(i, n);
                }
                return i;
            }
            function q(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? H(Object(i), !0).forEach(function (e) {
                            J(t, e, i[e]);
                        })
                        : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                            : H(Object(i)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                            });
                }
                return t;
            }
            function J(t, e, i) {
                return e in t ? Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = i), t;
            }
            const Y = L.Control.extend({
                includes: [S],
                options: { position: "topleft" },
                initialize: function (t) {
                    this._button = q(q({}, this.options), t);
                },
                onAdd: function (t) {
                    return (
                        (this._map = t),
                        this._map.pm.Toolbar.options.oneBlock
                            ? (this._container = this._map.pm.Toolbar._createContainer(this.options.position))
                            : "edit" === this._button.tool
                                ? (this._container = this._map.pm.Toolbar.editContainer)
                                : "options" === this._button.tool
                                    ? (this._container = this._map.pm.Toolbar.optionsContainer)
                                    : "custom" === this._button.tool
                                        ? (this._container = this._map.pm.Toolbar.customContainer)
                                        : (this._container = this._map.pm.Toolbar.drawContainer),
                        (this.buttonsDomNode = this._makeButton(this._button)),
                        this._container.appendChild(this.buttonsDomNode),
                        this._container
                    );
                },
                onRemove: function () {
                    return this.buttonsDomNode.remove(), this._container;
                },
                getText: function () {
                    return this._button.text;
                },
                getIconUrl: function () {
                    return this._button.iconUrl;
                },
                destroy: function () {
                    (this._button = {}), this._update();
                },
                toggle: function (t) {
                    return (this._button.toggleStatus = "boolean" == typeof t ? t : !this._button.toggleStatus), this._applyStyleClasses(), this._button.toggleStatus;
                },
                toggled: function () {
                    return this._button.toggleStatus;
                },
                onCreate: function () {
                    this.toggle(!1);
                },
                disable: function () {
                    this.toggle(!1), (this._button.disabled = !0), this._updateDisabled();
                },
                enable: function () {
                    (this._button.disabled = !1), this._updateDisabled();
                },
                _triggerClick: function (t) {
                    t && t.preventDefault(), this._button.disabled || (this._button.onClick(t, { button: this, event: t }), this._clicked(t), this._button.afterClick(t, { button: this, event: t }));
                },
                _makeButton: function (t) {
                    var e = this,
                        i = this.options.position.indexOf("right") > -1 ? "pos-right" : "",
                        n = L.DomUtil.create("div", "button-container  ".concat(i), this._container),
                        r = L.DomUtil.create("a", "leaflet-buttons-control-button", n);
                    r.setAttribute("role", "button"), r.setAttribute("tabindex", "0"), (r.href = "#");
                    var a = L.DomUtil.create("div", "leaflet-pm-actions-container ".concat(i), n),
                        o = t.actions,
                        s = {
                            cancel: {
                                text: I("actions.cancel"),
                                onClick: function () {
                                    this._triggerClick();
                                },
                            },
                            finishMode: {
                                text: I("actions.finish"),
                                onClick: function () {
                                    this._triggerClick();
                                },
                            },
                            removeLastVertex: {
                                text: I("actions.removeLastVertex"),
                                onClick: function () {
                                    this._map.pm.Draw[t.jsClass]._removeLastVertex();
                                },
                            },
                            finish: {
                                text: I("actions.finish"),
                                onClick: function (e) {
                                    this._map.pm.Draw[t.jsClass]._finishShape(e);
                                },
                            },
                        };
                    o.forEach(function (n) {
                        var r,
                            o = "string" == typeof n ? n : n.name;
                        if (s[o]) r = s[o];
                        else {
                            if (!n.text) return;
                            r = n;
                        }
                        var l = L.DomUtil.create("a", "leaflet-pm-action ".concat(i, " action-").concat(o), a);
                        if (
                            (l.setAttribute("role", "button"),
                                l.setAttribute("tabindex", "0"),
                                (l.href = "#"),
                                (l.innerHTML = r.text),
                                L.DomEvent.disableClickPropagation(l),
                                L.DomEvent.on(l, "click", L.DomEvent.stop),
                                !t.disabled && r.onClick)
                        ) {
                            L.DomEvent.addListener(
                                l,
                                "click",
                                function (i) {
                                    i.preventDefault();
                                    var n = "",
                                        a = e._map.pm.Toolbar.buttons;
                                    for (var o in a)
                                        if (a[o]._button === t) {
                                            n = o;
                                            break;
                                        }
                                    e._fireActionClick(r, n, t);
                                },
                                e
                            ),
                                L.DomEvent.addListener(l, "click", r.onClick, e);
                        }
                    }),
                        t.toggleStatus && L.DomUtil.addClass(n, "active");
                    var l = L.DomUtil.create("div", "control-icon", r);
                    return (
                        t.title && l.setAttribute("title", t.title),
                        t.iconUrl && l.setAttribute("src", t.iconUrl),
                        t.className && L.DomUtil.addClass(l, t.className),
                        L.DomEvent.disableClickPropagation(r),
                        L.DomEvent.on(r, "click", L.DomEvent.stop),
                        t.disabled || (L.DomEvent.addListener(r, "click", this._onBtnClick, this), L.DomEvent.addListener(r, "click", this._triggerClick, this)),
                        t.disabled && (L.DomUtil.addClass(r, "pm-disabled"), r.setAttribute("aria-disabled", "true")),
                        n
                    );
                },
                _applyStyleClasses: function () {
                    this._container &&
                        (this._button.toggleStatus && !1 !== this._button.cssToggle
                            ? (L.DomUtil.addClass(this.buttonsDomNode, "active"), L.DomUtil.addClass(this._container, "activeChild"))
                            : (L.DomUtil.removeClass(this.buttonsDomNode, "active"), L.DomUtil.removeClass(this._container, "activeChild")));
                },
                _onBtnClick: function () {
                    this._button.disableOtherButtons && this._map.pm.Toolbar.triggerClickOnToggledButtons(this);
                    var t = "",
                        e = this._map.pm.Toolbar.buttons;
                    for (var i in e)
                        if (e[i]._button === this._button) {
                            t = i;
                            break;
                        }
                    this._fireButtonClick(t, this._button);
                },
                _clicked: function () {
                    this._button.doToggle && this.toggle();
                },
                _updateDisabled: function () {
                    var t = "pm-disabled",
                        e = this.buttonsDomNode.children[0];
                    this._button.disabled
                        ? (L.DomUtil.addClass(e, t), e.setAttribute("aria-disabled", "true"), L.DomEvent.off(e, "click", this._triggerClick, this), L.DomEvent.off(e, "click", this._onBtnClick, this))
                        : (L.DomUtil.removeClass(e, t), e.setAttribute("aria-disabled", "false"));
                },
            });
            function X(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e &&
                        (n = n.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        i.push.apply(i, n);
                }
                return i;
            }
            function Z(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? X(Object(i), !0).forEach(function (e) {
                            $(t, e, i[e]);
                        })
                        : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                            : X(Object(i)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                            });
                }
                return t;
            }
            function $(t, e, i) {
                return e in t ? Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = i), t;
            }
            function W(t) {
                return (
                    (W =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                return typeof t;
                            }
                            : function (t) {
                                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                            }),
                    W(t)
                );
            }
            L.Control.PMButton = Y;
            const Q = L.Class.extend({
                options: {
                    drawMarker: !0,
                    drawRectangle: !0,
                    drawPolyline: !0,
                    drawPolygon: !0,
                    drawCircle: !0,
                    drawCircleMarker: !0,
                    editMode: !0,
                    dragMode: !0,
                    cutPolygon: !0,
                    removalMode: !0,
                    rotateMode: !0,
                    snappingOption: !0,
                    drawControls: !0,
                    editControls: !0,
                    optionsControls: !0,
                    customControls: !0,
                    oneBlock: !1,
                    position: "topleft",
                    positions: { draw: "", edit: "", options: "", custom: "" },
                },
                customButtons: [],
                initialize: function (t) {
                    this.init(t);
                },
                reinit: function () {
                    var t = this.isVisible;
                    this.removeControls(), this._defineButtons(), t && this.addControls();
                },
                init: function (t) {
                    (this.map = t),
                        (this.buttons = {}),
                        (this.isVisible = !1),
                        (this.drawContainer = L.DomUtil.create("div", "leaflet-pm-toolbar leaflet-pm-draw leaflet-bar leaflet-control")),
                        (this.editContainer = L.DomUtil.create("div", "leaflet-pm-toolbar leaflet-pm-edit leaflet-bar leaflet-control")),
                        (this.optionsContainer = L.DomUtil.create("div", "leaflet-pm-toolbar leaflet-pm-options leaflet-bar leaflet-control")),
                        (this.customContainer = L.DomUtil.create("div", "leaflet-pm-toolbar leaflet-pm-custom leaflet-bar leaflet-control")),
                        this._defineButtons();
                },
                _createContainer: function (t) {
                    var e = "".concat(t, "Container");
                    return this[e] || (this[e] = L.DomUtil.create("div", "leaflet-pm-toolbar leaflet-pm-".concat(t, " leaflet-bar leaflet-control"))), this[e];
                },
                getButtons: function () {
                    return this.buttons;
                },
                addControls: function () {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.options;
                    "undefined" != typeof t.editPolygon && (t.editMode = t.editPolygon),
                        "undefined" != typeof t.deleteLayer && (t.removalMode = t.deleteLayer),
                        L.Util.setOptions(this, t),
                        this.applyIconStyle(),
                        (this.isVisible = !0),
                        this._showHideButtons();
                },
                applyIconStyle: function () {
                    var t = this.getButtons(),
                        e = {
                            geomanIcons: {
                                drawMarker: "control-icon leaflet-pm-icon-marker",
                                drawPolyline: "control-icon leaflet-pm-icon-polyline",
                                drawRectangle: "control-icon leaflet-pm-icon-rectangle",
                                drawPolygon: "control-icon leaflet-pm-icon-polygon",
                                drawCircle: "control-icon leaflet-pm-icon-circle",
                                drawCircleMarker: "control-icon leaflet-pm-icon-circle-marker",
                                editMode: "control-icon leaflet-pm-icon-edit",
                                dragMode: "control-icon leaflet-pm-icon-drag",
                                cutPolygon: "control-icon leaflet-pm-icon-cut",
                                removalMode: "control-icon leaflet-pm-icon-delete",
                            },
                        };
                    for (var i in t) {
                        var n = t[i];
                        L.Util.setOptions(n, { className: e.geomanIcons[i] });
                    }
                },
                removeControls: function () {
                    var t = this.getButtons();
                    for (var e in t) t[e].remove();
                    this.isVisible = !1;
                },
                toggleControls: function () {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.options;
                    this.isVisible ? this.removeControls() : this.addControls(t);
                },
                _addButton: function (t, e) {
                    return (this.buttons[t] = e), (this.options[t] = this.options[t] || !1), this.buttons[t];
                },
                triggerClickOnToggledButtons: function (t) {
                    var e = ["snappingOption"];
                    for (var i in this.buttons) !e.includes(i) && this.buttons[i] !== t && this.buttons[i].toggled() && this.buttons[i]._triggerClick();
                },
                toggleButton: function (t, e) {
                    var i = !(arguments.length > 2 && arguments[2] !== undefined) || arguments[2];
                    return "editPolygon" === t && (t = "editMode"), "deleteLayer" === t && (t = "removalMode"), i && this.triggerClickOnToggledButtons(this.buttons[t]), !!this.buttons[t] && this.buttons[t].toggle(e);
                },
                _defineButtons: function () {
                    var t = this,
                        e = {
                            className: "control-icon leaflet-pm-icon-marker",
                            title: I("buttonTitles.drawMarkerButton"),
                            jsClass: "Marker",
                            onClick: function () { },
                            afterClick: function (e, i) {
                                t.map.pm.Draw[i.button._button.jsClass].toggle();
                            },
                            doToggle: !0,
                            toggleStatus: !1,
                            disableOtherButtons: !0,
                            position: this.options.position,
                            actions: ["cancel"],
                        },
                        i = {
                            title: I("buttonTitles.drawPolyButton"),
                            className: "control-icon leaflet-pm-icon-polygon",
                            jsClass: "Polygon",
                            onClick: function () { },
                            afterClick: function (e, i) {
                                t.map.pm.Draw[i.button._button.jsClass].toggle();
                            },
                            doToggle: !0,
                            toggleStatus: !1,
                            disableOtherButtons: !0,
                            position: this.options.position,
                            actions: ["finish", "removeLastVertex", "cancel"],
                        },
                        n = {
                            className: "control-icon leaflet-pm-icon-polyline",
                            title: I("buttonTitles.drawLineButton"),
                            jsClass: "Line",
                            onClick: function () { },
                            afterClick: function (e, i) {
                                t.map.pm.Draw[i.button._button.jsClass].toggle();
                            },
                            doToggle: !0,
                            toggleStatus: !1,
                            disableOtherButtons: !0,
                            position: this.options.position,
                            actions: ["finish", "removeLastVertex", "cancel"],
                        },
                        r = {
                            title: I("buttonTitles.drawCircleButton"),
                            className: "control-icon leaflet-pm-icon-circle",
                            jsClass: "Circle",
                            onClick: function () { },
                            afterClick: function (e, i) {
                                t.map.pm.Draw[i.button._button.jsClass].toggle();
                            },
                            doToggle: !0,
                            toggleStatus: !1,
                            disableOtherButtons: !0,
                            position: this.options.position,
                            actions: ["cancel"],
                        },
                        a = {
                            title: I("buttonTitles.drawCircleMarkerButton"),
                            className: "control-icon leaflet-pm-icon-circle-marker",
                            jsClass: "CircleMarker",
                            onClick: function () { },
                            afterClick: function (e, i) {
                                t.map.pm.Draw[i.button._button.jsClass].toggle();
                            },
                            doToggle: !0,
                            toggleStatus: !1,
                            disableOtherButtons: !0,
                            position: this.options.position,
                            actions: ["cancel"],
                        },
                        o = {
                            title: I("buttonTitles.drawRectButton"),
                            className: "control-icon leaflet-pm-icon-rectangle",
                            jsClass: "Rectangle",
                            onClick: function () { },
                            afterClick: function (e, i) {
                                t.map.pm.Draw[i.button._button.jsClass].toggle();
                            },
                            doToggle: !0,
                            toggleStatus: !1,
                            disableOtherButtons: !0,
                            position: this.options.position,
                            actions: ["cancel"],
                        },
                        s = {
                            title: I("buttonTitles.editButton"),
                            className: "control-icon leaflet-pm-icon-edit",
                            onClick: function () { },
                            afterClick: function () {
                                t.map.pm.toggleGlobalEditMode();
                            },
                            doToggle: !0,
                            toggleStatus: !1,
                            disableOtherButtons: !0,
                            position: this.options.position,
                            tool: "edit",
                            actions: ["finishMode"],
                        },
                        l = {
                            title: I("buttonTitles.dragButton"),
                            className: "control-icon leaflet-pm-icon-drag",
                            onClick: function () { },
                            afterClick: function () {
                                t.map.pm.toggleGlobalDragMode();
                            },
                            doToggle: !0,
                            toggleStatus: !1,
                            disableOtherButtons: !0,
                            position: this.options.position,
                            tool: "edit",
                            actions: ["finishMode"],
                        },
                        h = {
                            title: I("buttonTitles.cutButton"),
                            className: "control-icon leaflet-pm-icon-cut",
                            jsClass: "Cut",
                            onClick: function () { },
                            afterClick: function (e, i) {
                                t.map.pm.Draw[i.button._button.jsClass].toggle({ snappable: !0, cursorMarker: !0, allowSelfIntersection: !1 });
                            },
                            doToggle: !0,
                            toggleStatus: !1,
                            disableOtherButtons: !0,
                            position: this.options.position,
                            tool: "edit",
                            actions: ["finish", "removeLastVertex", "cancel"],
                        },
                        u = {
                            title: I("buttonTitles.deleteButton"),
                            className: "control-icon leaflet-pm-icon-delete",
                            onClick: function () { },
                            afterClick: function () {
                                t.map.pm.toggleGlobalRemovalMode();
                            },
                            doToggle: !0,
                            toggleStatus: !1,
                            disableOtherButtons: !0,
                            position: this.options.position,
                            tool: "edit",
                            actions: ["finishMode"],
                        },
                        c = {
                            title: I("buttonTitles.rotateButton"),
                            className: "control-icon leaflet-pm-icon-rotate",
                            onClick: function () { },
                            afterClick: function () {
                                t.map.pm.toggleGlobalRotateMode();
                            },
                            doToggle: !0,
                            toggleStatus: !1,
                            disableOtherButtons: !0,
                            position: this.options.position,
                            tool: "edit",
                            actions: ["finishMode"],
                        };
                    this._addButton("drawMarker", new L.Control.PMButton(e)),
                        this._addButton("drawPolyline", new L.Control.PMButton(n)),
                        this._addButton("drawRectangle", new L.Control.PMButton(o)),
                        this._addButton("drawPolygon", new L.Control.PMButton(i)),
                        this._addButton("drawCircle", new L.Control.PMButton(r)),
                        this._addButton("drawCircleMarker", new L.Control.PMButton(a)),
                        this._addButton("editMode", new L.Control.PMButton(s)),
                        this._addButton("dragMode", new L.Control.PMButton(l)),
                        this._addButton("cutPolygon", new L.Control.PMButton(h)),
                        this._addButton("removalMode", new L.Control.PMButton(u)),
                        this._addButton("rotateMode", new L.Control.PMButton(c));
                },
                _showHideButtons: function () {
                    if (this.isVisible) {
                        this.removeControls(), (this.isVisible = !0);
                        var t = this.getButtons(),
                            e = [];
                        for (var i in (!1 === this.options.drawControls &&
                            (e = e.concat(
                                Object.keys(t).filter(function (e) {
                                    return !t[e]._button.tool;
                                })
                            )),
                            !1 === this.options.editControls &&
                            (e = e.concat(
                                Object.keys(t).filter(function (e) {
                                    return "edit" === t[e]._button.tool;
                                })
                            )),
                            !1 === this.options.optionsControls &&
                            (e = e.concat(
                                Object.keys(t).filter(function (e) {
                                    return "options" === t[e]._button.tool;
                                })
                            )),
                            !1 === this.options.customControls &&
                            (e = e.concat(
                                Object.keys(t).filter(function (e) {
                                    return "custom" === t[e]._button.tool;
                                })
                            )),
                            t))
                            if (this.options[i] && -1 === e.indexOf(i)) {
                                var n = t[i]._button.tool;
                                n || (n = "draw"), t[i].setPosition(this._getBtnPosition(n)), t[i].addTo(this.map);
                            }
                    }
                },
                _getBtnPosition: function (t) {
                    return this.options.positions && this.options.positions[t] ? this.options.positions[t] : this.options.position;
                },
                setBlockPosition: function (t, e) {
                    (this.options.positions[t] = e), this._showHideButtons(), this.changeControlOrder();
                },
                getBlockPositions: function () {
                    return this.options.positions;
                },
                copyDrawControl: function (t, e) {
                    if (!e) throw new TypeError("Button has no name");
                    "object" !== W(e) && (e = { name: e });
                    var i = this._btnNameMapping(t);
                    if (!e.name) throw new TypeError("Button has no name");
                    if (this.buttons[e.name]) throw new TypeError("Button with this name already exists");
                    var n = this.map.pm.Draw.createNewDrawInstance(e.name, i);
                    return (e = Z(Z({}, this.buttons[i]._button), e)), { drawInstance: n, control: this.createCustomControl(e) };
                },
                createCustomControl: function (t) {
                    if (!t.name) throw new TypeError("Button has no name");
                    if (this.buttons[t.name]) throw new TypeError("Button with this name already exists");
                    t.onClick || (t.onClick = function () { }),
                        t.afterClick || (t.afterClick = function () { }),
                        !1 !== t.toggle && (t.toggle = !0),
                        t.block && (t.block = t.block.toLowerCase()),
                        (t.block && "draw" !== t.block) || (t.block = ""),
                        t.className ? -1 === t.className.indexOf("control-icon") && (t.className = "control-icon ".concat(t.className)) : (t.className = "control-icon");
                    var e = {
                        tool: t.block,
                        className: t.className,
                        title: t.title || "",
                        jsClass: t.name,
                        onClick: t.onClick,
                        afterClick: t.afterClick,
                        doToggle: t.toggle,
                        toggleStatus: !1,
                        disableOtherButtons: !0,
                        cssToggle: t.toggle,
                        position: this.options.position,
                        actions: t.actions || [],
                        disabled: !!t.disabled,
                    };
                    !1 !== this.options[t.name] && (this.options[t.name] = !0);
                    var i = this._addButton(t.name, new L.Control.PMButton(e));
                    return this.changeControlOrder(), i;
                },
                changeControlOrder: function () {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [],
                        e = this._shapeMapping(),
                        i = [];
                    t.forEach(function (t) {
                        e[t] ? i.push(e[t]) : i.push(t);
                    });
                    var n = this.getButtons(),
                        r = {};
                    i.forEach(function (t) {
                        n[t] && (r[t] = n[t]);
                    });
                    var a = Object.keys(n).filter(function (t) {
                        return !n[t]._button.tool;
                    });
                    a.forEach(function (t) {
                        -1 === i.indexOf(t) && (r[t] = n[t]);
                    });
                    var o = Object.keys(n).filter(function (t) {
                        return "edit" === n[t]._button.tool;
                    });
                    o.forEach(function (t) {
                        -1 === i.indexOf(t) && (r[t] = n[t]);
                    });
                    var s = Object.keys(n).filter(function (t) {
                        return "options" === n[t]._button.tool;
                    });
                    s.forEach(function (t) {
                        -1 === i.indexOf(t) && (r[t] = n[t]);
                    });
                    var l = Object.keys(n).filter(function (t) {
                        return "custom" === n[t]._button.tool;
                    });
                    l.forEach(function (t) {
                        -1 === i.indexOf(t) && (r[t] = n[t]);
                    }),
                        Object.keys(n).forEach(function (t) {
                            -1 === i.indexOf(t) && (r[t] = n[t]);
                        }),
                        (this.map.pm.Toolbar.buttons = r),
                        this._showHideButtons();
                },
                getControlOrder: function () {
                    var t = this.getButtons(),
                        e = [];
                    for (var i in t) e.push(i);
                    return e;
                },
                changeActionsOfControl: function (t, e) {
                    var i = this._btnNameMapping(t);
                    if (!i) throw new TypeError("No name passed");
                    if (!e) throw new TypeError("No actions passed");
                    if (!this.buttons[i]) throw new TypeError("Button with this name not exists");
                    (this.buttons[i]._button.actions = e), this.changeControlOrder();
                },
                setButtonDisabled: function (t, e) {
                    var i = this._btnNameMapping(t);
                    e ? this.buttons[i].disable() : this.buttons[i].enable();
                },
                _shapeMapping: function () {
                    return {
                        Marker: "drawMarker",
                        Circle: "drawCircle",
                        Polygon: "drawPolygon",
                        Rectangle: "drawRectangle",
                        Polyline: "drawPolyline",
                        Line: "drawPolyline",
                        CircleMarker: "drawCircleMarker",
                        Edit: "editMode",
                        Drag: "dragMode",
                        Cut: "cutPolygon",
                        Removal: "removalMode",
                        Rotate: "rotateMode",
                    };
                },
                _btnNameMapping: function (t) {
                    var e = this._shapeMapping();
                    return e[t] ? e[t] : t;
                },
            });
            function tt(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e &&
                        (n = n.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        i.push.apply(i, n);
                }
                return i;
            }
            function et(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? tt(Object(i), !0).forEach(function (e) {
                            it(t, e, i[e]);
                        })
                        : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                            : tt(Object(i)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                            });
                }
                return t;
            }
            function it(t, e, i) {
                return e in t ? Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = i), t;
            }
            var nt = {
                _initSnappableMarkers: function () {
                    (this.options.snapDistance = this.options.snapDistance || 30),
                        (this.options.snapSegment = this.options.snapSegment === undefined || this.options.snapSegment),
                        this._assignEvents(this._markers),
                        this._layer.off("pm:dragstart", this._unsnap, this),
                        this._layer.on("pm:dragstart", this._unsnap, this);
                },
                _disableSnapping: function () {
                    this._layer.off("pm:dragstart", this._unsnap, this);
                },
                _assignEvents: function (t) {
                    var e = this;
                    t.forEach(function (t) {
                        Array.isArray(t) ? e._assignEvents(t) : (t.off("drag", e._handleSnapping, e), t.on("drag", e._handleSnapping, e), t.off("dragend", e._cleanupSnapping, e), t.on("dragend", e._cleanupSnapping, e));
                    });
                },
                _cleanupSnapping: function () {
                    delete this._snapList,
                        this.throttledList && (this._map.off("layeradd", this.throttledList, this), (this.throttledList = undefined)),
                        this._map.off("pm:remove", this._handleSnapLayerRemoval, this),
                        this.debugIndicatorLines &&
                        this.debugIndicatorLines.forEach(function (t) {
                            t.remove();
                        });
                },
                _handleThrottleSnapping: function () {
                    this.throttledList && this._createSnapList();
                },
                _handleSnapping: function (t) {
                    var e = this,
                        i = t.target;
                    if (((i._snapped = !1), this.throttledList || (this.throttledList = L.Util.throttle(this._handleThrottleSnapping, 100, this)), this._map.pm.Keyboard.isAltKeyPressed())) return !1;
                    if ((this._snapList === undefined && (this._createSnapList(), this._map.off("layeradd", this.throttledList, this), this._map.on("layeradd", this.throttledList, this)), this._snapList.length <= 0)) return !1;
                    var n = this._calcClosestLayer(i.getLatLng(), this._snapList);
                    if (0 === Object.keys(n).length) return !1;
                    var r,
                        a = n.layer instanceof L.Marker || n.layer instanceof L.CircleMarker || !this.options.snapSegment;
                    r = a ? n.latlng : this._checkPrioritiySnapping(n);
                    var o = this.options.snapDistance,
                        s = { marker: i, shape: this._shape, snapLatLng: r, segment: n.segment, layer: this._layer, workingLayer: this._layer, layerInteractedWith: n.layer, distance: n.distance };
                    if ((this._fireSnapDrag(s.marker, s), this._fireSnapDrag(this._layer, s), n.distance < o)) {
                        (i._orgLatLng = i.getLatLng()), i.setLatLng(r), (i._snapped = !0), (i._snapInfo = s);
                        var l = this._snapLatLng || {},
                            h = r || {};
                        (l.lat === h.lat && l.lng === h.lng) || ((e._snapLatLng = r), e._fireSnap(i, s), e._fireSnap(e._layer, s));
                    } else this._snapLatLng && (this._unsnap(s), (i._snapped = !1), this._fireUnsnap(s.marker, s), this._fireUnsnap(this._layer, s));
                    return !0;
                },
                _createSnapList: function () {
                    var t = this,
                        e = [],
                        i = [],
                        n = this._map;
                    n.off("pm:remove", this._handleSnapLayerRemoval, this),
                        n.on("pm:remove", this._handleSnapLayerRemoval, this),
                        n.eachLayer(function (t) {
                            if ((t instanceof L.Polyline || t instanceof L.Marker || t instanceof L.CircleMarker || t instanceof L.ImageOverlay) && !0 !== t.options.snapIgnore) {
                                if (t.options.snapIgnore === undefined && ((!L.PM.optIn && !0 === t.options.pmIgnore) || (L.PM.optIn && !1 !== t.options.pmIgnore))) return;
                                (t instanceof L.Circle || t instanceof L.CircleMarker) && t.pm && t.pm._hiddenPolyCircle ? e.push(t.pm._hiddenPolyCircle) : t instanceof L.ImageOverlay && (t = L.rectangle(t.getBounds())), e.push(t);
                                var n = L.polyline([], { color: "red", pmIgnore: !0 });
                                (n._pmTempLayer = !0), i.push(n), (t instanceof L.Circle || t instanceof L.CircleMarker) && i.push(n);
                            }
                        }),
                        (e = (e = (e = e.filter(function (e) {
                            return t._layer !== e;
                        })).filter(function (t) {
                            return t._latlng || (t._latlngs && !j(t._latlngs));
                        })).filter(function (t) {
                            return !t._pmTempLayer;
                        })),
                        this._otherSnapLayers
                            ? (this._otherSnapLayers.forEach(function () {
                                var t = L.polyline([], { color: "red", pmIgnore: !0 });
                                (t._pmTempLayer = !0), i.push(t);
                            }),
                                (this._snapList = e.concat(this._otherSnapLayers)))
                            : (this._snapList = e),
                        (this.debugIndicatorLines = i);
                },
                _handleSnapLayerRemoval: function (t) {
                    var e = t.layer,
                        i = this._snapList.findIndex(function (t) {
                            return t._leaflet_id === e._leaflet_id;
                        });
                    this._snapList.splice(i, 1);
                },
                _calcClosestLayer: function (t, e) {
                    var i = this,
                        n = [],
                        r = {};
                    return (
                        e.forEach(function (e, a) {
                            if (!e._parentCopy || e._parentCopy !== i._layer) {
                                var o = i._calcLayerDistances(t, e);
                                i.debugIndicatorLines[a] && i.debugIndicatorLines[a].setLatLngs([t, o.latlng]),
                                    (r.distance === undefined || o.distance <= r.distance) && (o.distance < r.distance && (n = []), ((r = o).layer = e), n.push(r));
                            }
                        }),
                        this._getClosestLayerByPriority(n)
                    );
                },
                _calcLayerDistances: function (t, e) {
                    var i,
                        n,
                        r,
                        a = this,
                        o = this._map,
                        s = e instanceof L.Marker || e instanceof L.CircleMarker,
                        l = e instanceof L.Polygon,
                        h = t,
                        u = s ? e.getLatLng() : e.getLatLngs();
                    if (s) return { latlng: et({}, u), distance: this._getDistance(o, u, h) };
                    return (
                        (function c(t) {
                            t.forEach(function (e, s) {
                                if (Array.isArray(e)) c(e);
                                else if (a.options.snapSegment) {
                                    var u,
                                        p = e;
                                    u = l ? (s + 1 === t.length ? 0 : s + 1) : s + 1 === t.length ? undefined : s + 1;
                                    var d = t[u];
                                    if (d) {
                                        var f = a._getDistanceToSegment(o, h, p, d);
                                        (n === undefined || f < n) && ((n = f), (r = [p, d]));
                                    }
                                } else {
                                    var g = a._getDistance(o, h, e);
                                    (n === undefined || g < n) && ((n = g), (i = e));
                                }
                            });
                        })(u),
                        this.options.snapSegment ? { latlng: et({}, this._getClosestPointOnSegment(o, t, r[0], r[1])), segment: r, distance: n } : { latlng: i, distance: n }
                    );
                },
                _getClosestLayerByPriority: function (t) {
                    t = t.sort(function (t, e) {
                        return t._leaflet_id - e._leaflet_id;
                    });
                    var e = this._map.pm.globalOptions.snappingOrder || [],
                        i = 0,
                        n = {};
                    return (
                        e.concat(["Marker", "CircleMarker", "Circle", "Line", "Polygon", "Rectangle"]).forEach(function (t) {
                            n[t] || ((i += 1), (n[t] = i));
                        }),
                        t.sort(
                            (function (t, e) {
                                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "asc";
                                if (!e || 0 === Object.keys(e).length)
                                    return function (t, e) {
                                        return t - e;
                                    };
                                for (var n, r = Object.keys(e), a = r.length - 1, o = {}; a >= 0;) (n = r[a]), (o[n.toLowerCase()] = e[n]), (a -= 1);
                                function s(t) {
                                    return t instanceof L.Marker
                                        ? "Marker"
                                        : t instanceof L.Circle
                                            ? "Circle"
                                            : t instanceof L.CircleMarker
                                                ? "CircleMarker"
                                                : t instanceof L.Rectangle
                                                    ? "Rectangle"
                                                    : t instanceof L.Polygon
                                                        ? "Polygon"
                                                        : t instanceof L.Polyline
                                                            ? "Line"
                                                            : undefined;
                                }
                                return function (e, n) {
                                    var r, a;
                                    if ("instanceofShape" === t) {
                                        if (((r = s(e.layer).toLowerCase()), (a = s(n.layer).toLowerCase()), !r || !a)) return 0;
                                    } else {
                                        if (!e.hasOwnProperty(t) || !n.hasOwnProperty(t)) return 0;
                                        (r = e[t].toLowerCase()), (a = n[t].toLowerCase());
                                    }
                                    var l = r in o ? o[r] : Number.MAX_SAFE_INTEGER,
                                        h = a in o ? o[a] : Number.MAX_SAFE_INTEGER,
                                        u = 0;
                                    return l < h ? (u = -1) : l > h && (u = 1), "desc" === i ? -1 * u : u;
                                };
                            })("instanceofShape", n)
                        ),
                        t[0] || {}
                    );
                },
                _checkPrioritiySnapping: function (t) {
                    var e = this._map,
                        i = t.segment[0],
                        n = t.segment[1],
                        r = t.latlng,
                        a = this._getDistance(e, i, r),
                        o = this._getDistance(e, n, r),
                        s = a < o ? i : n,
                        l = a < o ? a : o;
                    if (this.options.snapMiddle) {
                        var h = L.PM.Utils.calcMiddleLatLng(e, i, n),
                            u = this._getDistance(e, h, r);
                        u < a && u < o && ((s = h), (l = u));
                    }
                    return et({}, l < this.options.snapDistance ? s : r);
                },
                _unsnap: function () {
                    delete this._snapLatLng;
                },
                _getClosestPointOnSegment: function (t, e, i, n) {
                    var r = t.getMaxZoom();
                    r === Infinity && (r = t.getZoom());
                    var a = t.project(e, r),
                        o = t.project(i, r),
                        s = t.project(n, r),
                        l = L.LineUtil.closestPointOnSegment(a, o, s);
                    return t.unproject(l, r);
                },
                _getDistanceToSegment: function (t, e, i, n) {
                    var r = t.latLngToLayerPoint(e),
                        a = t.latLngToLayerPoint(i),
                        o = t.latLngToLayerPoint(n);
                    return L.LineUtil.pointToSegmentDistance(r, a, o);
                },
                _getDistance: function (t, e, i) {
                    return t.latLngToLayerPoint(e).distanceTo(t.latLngToLayerPoint(i));
                },
            };
            const rt = nt;
            const at = L.Class.extend({
                includes: [rt, S],
                options: {
                    snappable: !0,
                    snapDistance: 20,
                    snapMiddle: !1,
                    allowSelfIntersection: !0,
                    tooltips: !0,
                    templineStyle: {},
                    hintlineStyle: { color: "#3388ff", dashArray: "5,5" },
                    pathOptions: null,
                    cursorMarker: !0,
                    finishOn: null,
                    markerStyle: { draggable: !0, icon: L.icon() },
                    hideMiddleMarkers: !1,
                    minRadiusCircle: null,
                    maxRadiusCircle: null,
                    minRadiusCircleMarker: null,
                    maxRadiusCircleMarker: null,
                    editable: !1,
                    markerEditable: !0,
                    continueDrawing: !1,
                    snapSegment: !0,
                    requireSnapToFinish: !1,
                },
                setOptions: function (t) {
                    L.Util.setOptions(this, t);
                },
                getOptions: function () {
                    return this.options;
                },
                initialize: function (t) {
                    var e = this,
                        i = new L.Icon.Default();
                    (i.options.tooltipAnchor = [0, 0]),
                        (this.options.markerStyle.icon = i),
                        (this._map = t),
                        (this.shapes = ["Marker", "CircleMarker", "Line", "Polygon", "Rectangle", "Circle", "Cut"]),
                        this.shapes.forEach(function (t) {
                            e[t] = new L.PM.Draw[t](e._map);
                        }),
                        this.Marker.setOptions({ continueDrawing: !0 }),
                        this.CircleMarker.setOptions({ continueDrawing: !0 });
                },
                setPathOptions: function (t) {
                    var e = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
                    this.options.pathOptions = e ? r()(this.options.pathOptions, t) : t;
                },
                getShapes: function () {
                    return this.shapes;
                },
                getShape: function () {
                    return this._shape;
                },
                enable: function (t, e) {
                    if (!t) throw new Error("Error: Please pass a shape as a parameter. Possible shapes are: ".concat(this.getShapes().join(",")));
                    this.disable(), this[t].enable(e);
                },
                disable: function () {
                    var t = this;
                    this.shapes.forEach(function (e) {
                        t[e].disable();
                    });
                },
                addControls: function () {
                    var t = this;
                    this.shapes.forEach(function (e) {
                        t[e].addButton();
                    });
                },
                getActiveShape: function () {
                    var t,
                        e = this;
                    return (
                        this.shapes.forEach(function (i) {
                            e[i]._enabled && (t = i);
                        }),
                        t
                    );
                },
                _setGlobalDrawMode: function () {
                    "Cut" === this._shape ? this._fireGlobalCutModeToggled() : this._fireGlobalDrawModeToggled();
                    var t = L.PM.Utils.findLayers(this._map);
                    this._enabled
                        ? t.forEach(function (t) {
                            L.PM.Utils.disablePopup(t);
                        })
                        : t.forEach(function (t) {
                            L.PM.Utils.enablePopup(t);
                        });
                },
                createNewDrawInstance: function (t, e) {
                    var i = this._getShapeFromBtnName(e);
                    if (this[t]) throw new TypeError("Draw Type already exists");
                    if (!L.PM.Draw[i]) throw new TypeError("There is no class L.PM.Draw.".concat(i));
                    return (
                        (this[t] = new L.PM.Draw[i](this._map)), (this[t].toolbarButtonName = t), (this[t]._shape = t), this.shapes.push(t), this[e] && this[t].setOptions(this[e].options), this[t].setOptions(this[t].options), this[t]
                    );
                },
                _getShapeFromBtnName: function (t) {
                    var e = {
                        drawMarker: "Marker",
                        drawCircle: "Circle",
                        drawPolygon: "Polygon",
                        drawPolyline: "Line",
                        drawRectangle: "Rectangle",
                        drawCircleMarker: "CircleMarker",
                        editMode: "Edit",
                        dragMode: "Drag",
                        cutPolygon: "Cut",
                        removalMode: "Removal",
                        rotateMode: "Rotate",
                    };
                    return e[t] ? e[t] : this[t] ? this[t]._shape : t;
                },
                _finishLayer: function (t) {
                    t.pm && (t.pm.setOptions(this.options), (t.pm._shape = this._shape), (t.pm._map = this._map)), this._addDrawnLayerProp(t);
                },
                _addDrawnLayerProp: function (t) {
                    t._drawnByGeoman = !0;
                },
                _setPane: function (t, e) {
                    "layerPane" === e
                        ? (t.options.pane = (this._map.pm.globalOptions.panes && this._map.pm.globalOptions.panes.layerPane) || "overlayPane")
                        : "vertexPane" === e
                            ? (t.options.pane = (this._map.pm.globalOptions.panes && this._map.pm.globalOptions.panes.vertexPane) || "markerPane")
                            : "markerPane" === e && (t.options.pane = (this._map.pm.globalOptions.panes && this._map.pm.globalOptions.panes.markerPane) || "markerPane");
                },
                _isFirstLayer: function () {
                    return 0 === (this._map || this._layer._map).pm.getGeomanLayers().length;
                },
            });
            at.Marker = at.extend({
                initialize: function (t) {
                    (this._map = t), (this._shape = "Marker"), (this.toolbarButtonName = "drawMarker");
                },
                enable: function (t) {
                    var e = this;
                    L.Util.setOptions(this, t),
                        (this._enabled = !0),
                        this._map.on("click", this._createMarker, this),
                        this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !0),
                        (this._hintMarker = L.marker([0, 0], this.options.markerStyle)),
                        this._setPane(this._hintMarker, "markerPane"),
                        (this._hintMarker._pmTempLayer = !0),
                        this._hintMarker.addTo(this._map),
                        this.options.tooltips && this._hintMarker.bindTooltip(I("tooltips.placeMarker"), { permanent: !0, offset: L.point(0, 10), direction: "bottom", opacity: 0.8 }).openTooltip(),
                        (this._layer = this._hintMarker),
                        this._map.on("mousemove", this._syncHintMarker, this),
                        this.options.markerEditable &&
                        this._map.eachLayer(function (t) {
                            e.isRelevantMarker(t) && t.pm.enable();
                        }),
                        this._fireDrawStart(),
                        this._setGlobalDrawMode();
                },
                disable: function () {
                    var t = this;
                    this._enabled &&
                        ((this._enabled = !1),
                            this._map.off("click", this._createMarker, this),
                            this._hintMarker.remove(),
                            this._map.off("mousemove", this._syncHintMarker, this),
                            this._map.eachLayer(function (e) {
                                t.isRelevantMarker(e) && e.pm.disable();
                            }),
                            this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !1),
                            this.options.snappable && this._cleanupSnapping(),
                            this._fireDrawEnd(),
                            this._setGlobalDrawMode());
                },
                enabled: function () {
                    return this._enabled;
                },
                toggle: function (t) {
                    this.enabled() ? this.disable() : this.enable(t);
                },
                isRelevantMarker: function (t) {
                    return t instanceof L.Marker && t.pm && !t._pmTempLayer;
                },
                _syncHintMarker: function (t) {
                    if ((this._hintMarker.setLatLng(t.latlng), this.options.snappable)) {
                        var e = t;
                        (e.target = this._hintMarker), this._handleSnapping(e);
                    }
                    this._fireChange(this._hintMarker.getLatLng(), "Draw");
                },
                _createMarker: function (t) {
                    if (t.latlng && (!this.options.requireSnapToFinish || this._hintMarker._snapped || this._isFirstLayer())) {
                        this._hintMarker._snapped || this._hintMarker.setLatLng(t.latlng);
                        var e = this._hintMarker.getLatLng(),
                            i = new L.Marker(e, this.options.markerStyle);
                        this._setPane(i, "markerPane"),
                            this._finishLayer(i),
                            i.pm || (i.options.draggable = !1),
                            i.addTo(this._map.pm._getContainingLayer()),
                            i.pm && this.options.markerEditable ? i.pm.enable() : i.dragging && i.dragging.disable(),
                            this._fireCreate(i),
                            this._cleanupSnapping(),
                            this.options.continueDrawing || this.disable();
                    }
                },
            });
            var ot = 6371008.8,
                st = {
                    centimeters: 637100880,
                    centimetres: 637100880,
                    degrees: 57.22891354143274,
                    feet: 20902260.511392,
                    inches: 39.37 * ot,
                    kilometers: 6371.0088,
                    kilometres: 6371.0088,
                    meters: ot,
                    metres: ot,
                    miles: 3958.761333810546,
                    millimeters: 6371008800,
                    millimetres: 6371008800,
                    nauticalmiles: ot / 1852,
                    radians: 1,
                    yards: 6967335.223679999,
                };
            function lt(t, e, i) {
                void 0 === i && (i = {});
                var n = { type: "Feature" };
                return (0 === i.id || i.id) && (n.id = i.id), i.bbox && (n.bbox = i.bbox), (n.properties = e || {}), (n.geometry = t), n;
            }
            function ht(t, e, i) {
                if ((void 0 === i && (i = {}), !t)) throw new Error("coordinates is required");
                if (!Array.isArray(t)) throw new Error("coordinates must be an Array");
                if (t.length < 2) throw new Error("coordinates must be at least 2 numbers long");
                if (!_t(t[0]) || !_t(t[1])) throw new Error("coordinates must contain numbers");
                return lt({ type: "Point", coordinates: t }, e, i);
            }
            function ut(t, e, i) {
                if ((void 0 === i && (i = {}), t.length < 2)) throw new Error("coordinates must be an array of two or more positions");
                return lt({ type: "LineString", coordinates: t }, e, i);
            }
            function ct(t, e) {
                void 0 === e && (e = {});
                var i = { type: "FeatureCollection" };
                return e.id && (i.id = e.id), e.bbox && (i.bbox = e.bbox), (i.features = t), i;
            }
            function pt(t, e) {
                void 0 === e && (e = "kilometers");
                var i = st[e];
                if (!i) throw new Error(e + " units is invalid");
                return t * i;
            }
            function dt(t, e) {
                void 0 === e && (e = "kilometers");
                var i = st[e];
                if (!i) throw new Error(e + " units is invalid");
                return t / i;
            }
            function ft(t) {
                return (180 * (t % (2 * Math.PI))) / Math.PI;
            }
            function gt(t) {
                return ((t % 360) * Math.PI) / 180;
            }
            function _t(t) {
                return !isNaN(t) && null !== t && !Array.isArray(t);
            }
            function yt(t) {
                var e,
                    i,
                    n = { type: "FeatureCollection", features: [] };
                if ("LineString" === (i = "Feature" === t.type ? t.geometry : t).type) e = [i.coordinates];
                else if ("MultiLineString" === i.type) e = i.coordinates;
                else if ("MultiPolygon" === i.type) e = [].concat.apply([], i.coordinates);
                else {
                    if ("Polygon" !== i.type) throw new Error("Input must be a LineString, MultiLineString, Polygon, or MultiPolygon Feature or Geometry");
                    e = i.coordinates;
                }
                return (
                    e.forEach(function (t) {
                        e.forEach(function (e) {
                            for (var i = 0; i < t.length - 1; i++)
                                for (var r = i; r < e.length - 1; r++) {
                                    if (t === e) {
                                        if (1 === Math.abs(i - r)) continue;
                                        if (0 === i && r === t.length - 2 && t[i][0] === t[t.length - 1][0] && t[i][1] === t[t.length - 1][1]) continue;
                                    }
                                    var a = mt(t[i][0], t[i][1], t[i + 1][0], t[i + 1][1], e[r][0], e[r][1], e[r + 1][0], e[r + 1][1]);
                                    a && n.features.push(ht([a[0], a[1]]));
                                }
                        });
                    }),
                    n
                );
            }
            function mt(t, e, i, n, r, a, o, s) {
                var l,
                    h,
                    u,
                    c,
                    p = { x: null, y: null, onLine1: !1, onLine2: !1 };
                return 0 === (l = (s - a) * (i - t) - (o - r) * (n - e))
                    ? null !== p.x && null !== p.y && p
                    : ((c = (i - t) * (h = e - a) - (n - e) * (u = t - r)),
                        (h = ((o - r) * h - (s - a) * u) / l),
                        (u = c / l),
                        (p.x = t + h * (i - t)),
                        (p.y = e + h * (n - e)),
                        h >= 0 && h <= 1 && (p.onLine1 = !0),
                        u >= 0 && u <= 1 && (p.onLine2 = !0),
                        !(!p.onLine1 || !p.onLine2) && [p.x, p.y]);
            }
            function vt(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e &&
                        (n = n.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        i.push.apply(i, n);
                }
                return i;
            }
            function Lt(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? vt(Object(i), !0).forEach(function (e) {
                            bt(t, e, i[e]);
                        })
                        : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                            : vt(Object(i)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                            });
                }
                return t;
            }
            function bt(t, e, i) {
                return e in t ? Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = i), t;
            }
            function kt(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e &&
                        (n = n.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        i.push.apply(i, n);
                }
                return i;
            }
            function Mt(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? kt(Object(i), !0).forEach(function (e) {
                            xt(t, e, i[e]);
                        })
                        : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                            : kt(Object(i)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                            });
                }
                return t;
            }
            function xt(t, e, i) {
                return e in t ? Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = i), t;
            }
            function wt(t) {
                if (!t) throw new Error("coord is required");
                if (!Array.isArray(t)) {
                    if ("Feature" === t.type && null !== t.geometry && "Point" === t.geometry.type) return t.geometry.coordinates;
                    if ("Point" === t.type) return t.coordinates;
                }
                if (Array.isArray(t) && t.length >= 2 && !Array.isArray(t[0]) && !Array.isArray(t[1])) return t;
                throw new Error("coord must be GeoJSON Point or an Array of numbers");
            }
            function Ct(t) {
                if (Array.isArray(t)) return t;
                if ("Feature" === t.type) {
                    if (null !== t.geometry) return t.geometry.coordinates;
                } else if (t.coordinates) return t.coordinates;
                throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array");
            }
            function Pt(t) {
                return "Feature" === t.type ? t.geometry : t;
            }
            function Et(t, e) {
                return "FeatureCollection" === t.type ? "FeatureCollection" : "GeometryCollection" === t.type ? "GeometryCollection" : "Feature" === t.type && null !== t.geometry ? t.geometry.type : t.type;
            }
            function St(t, e, i) {
                if (null !== t)
                    for (var n, r, a, o, s, l, h, u, c = 0, p = 0, d = t.type, f = "FeatureCollection" === d, g = "Feature" === d, _ = f ? t.features.length : 1, y = 0; y < _; y++) {
                        s = (u = !!(h = f ? t.features[y].geometry : g ? t.geometry : t) && "GeometryCollection" === h.type) ? h.geometries.length : 1;
                        for (var m = 0; m < s; m++) {
                            var v = 0,
                                L = 0;
                            if (null !== (o = u ? h.geometries[m] : h)) {
                                l = o.coordinates;
                                var b = o.type;
                                switch (((c = !i || ("Polygon" !== b && "MultiPolygon" !== b) ? 0 : 1), b)) {
                                    case null:
                                        break;
                                    case "Point":
                                        if (!1 === e(l, p, y, v, L)) return !1;
                                        p++, v++;
                                        break;
                                    case "LineString":
                                    case "MultiPoint":
                                        for (n = 0; n < l.length; n++) {
                                            if (!1 === e(l[n], p, y, v, L)) return !1;
                                            p++, "MultiPoint" === b && v++;
                                        }
                                        "LineString" === b && v++;
                                        break;
                                    case "Polygon":
                                    case "MultiLineString":
                                        for (n = 0; n < l.length; n++) {
                                            for (r = 0; r < l[n].length - c; r++) {
                                                if (!1 === e(l[n][r], p, y, v, L)) return !1;
                                                p++;
                                            }
                                            "MultiLineString" === b && v++, "Polygon" === b && L++;
                                        }
                                        "Polygon" === b && v++;
                                        break;
                                    case "MultiPolygon":
                                        for (n = 0; n < l.length; n++) {
                                            for (L = 0, r = 0; r < l[n].length; r++) {
                                                for (a = 0; a < l[n][r].length - c; a++) {
                                                    if (!1 === e(l[n][r][a], p, y, v, L)) return !1;
                                                    p++;
                                                }
                                                L++;
                                            }
                                            v++;
                                        }
                                        break;
                                    case "GeometryCollection":
                                        for (n = 0; n < o.geometries.length; n++) if (!1 === St(o.geometries[n], e, i)) return !1;
                                        break;
                                    default:
                                        throw new Error("Unknown Geometry Type");
                                }
                            }
                        }
                    }
            }
            function Ot(t, e) {
                if ("Feature" === t.type) e(t, 0);
                else if ("FeatureCollection" === t.type) for (var i = 0; i < t.features.length && !1 !== e(t.features[i], i); i++);
            }
            function Dt(t, e) {
                var i,
                    n,
                    r,
                    a,
                    o,
                    s,
                    l,
                    h,
                    u,
                    c,
                    p = 0,
                    d = "FeatureCollection" === t.type,
                    f = "Feature" === t.type,
                    g = d ? t.features.length : 1;
                for (i = 0; i < g; i++) {
                    for (
                        s = d ? t.features[i].geometry : f ? t.geometry : t,
                        h = d ? t.features[i].properties : f ? t.properties : {},
                        u = d ? t.features[i].bbox : f ? t.bbox : undefined,
                        c = d ? t.features[i].id : f ? t.id : undefined,
                        o = (l = !!s && "GeometryCollection" === s.type) ? s.geometries.length : 1,
                        r = 0;
                        r < o;
                        r++
                    )
                        if (null !== (a = l ? s.geometries[r] : s))
                            switch (a.type) {
                                case "Point":
                                case "LineString":
                                case "MultiPoint":
                                case "Polygon":
                                case "MultiLineString":
                                case "MultiPolygon":
                                    if (!1 === e(a, p, h, u, c)) return !1;
                                    break;
                                case "GeometryCollection":
                                    for (n = 0; n < a.geometries.length; n++) if (!1 === e(a.geometries[n], p, h, u, c)) return !1;
                                    break;
                                default:
                                    throw new Error("Unknown Geometry Type");
                            }
                        else if (!1 === e(null, p, h, u, c)) return !1;
                    p++;
                }
            }
            function Rt(t, e) {
                Dt(t, function (t, i, n, r, a) {
                    var o,
                        s = null === t ? null : t.type;
                    switch (s) {
                        case null:
                        case "Point":
                        case "LineString":
                        case "Polygon":
                            return !1 !== e(lt(t, n, { bbox: r, id: a }), i, 0) && void 0;
                    }
                    switch (s) {
                        case "MultiPoint":
                            o = "Point";
                            break;
                        case "MultiLineString":
                            o = "LineString";
                            break;
                        case "MultiPolygon":
                            o = "Polygon";
                    }
                    for (var l = 0; l < t.coordinates.length; l++) {
                        var h = t.coordinates[l];
                        if (!1 === e(lt({ type: o, coordinates: h }, n), i, l)) return !1;
                    }
                });
            }
            (at.Line = at.extend({
                initialize: function (t) {
                    (this._map = t), (this._shape = "Line"), (this.toolbarButtonName = "drawPolyline"), (this._doesSelfIntersect = !1);
                },
                enable: function (t) {
                    L.Util.setOptions(this, t),
                        (this._enabled = !0),
                        (this._layerGroup = new L.LayerGroup()),
                        (this._layerGroup._pmTempLayer = !0),
                        this._layerGroup.addTo(this._map),
                        (this._layer = L.polyline([], this.options.templineStyle)),
                        this._setPane(this._layer, "layerPane"),
                        (this._layer._pmTempLayer = !0),
                        this._layerGroup.addLayer(this._layer),
                        (this._hintline = L.polyline([], this.options.hintlineStyle)),
                        this._setPane(this._hintline, "layerPane"),
                        (this._hintline._pmTempLayer = !0),
                        this._layerGroup.addLayer(this._hintline),
                        (this._hintMarker = L.marker(this._map.getCenter(), { interactive: !1, zIndexOffset: 100, icon: L.divIcon({ className: "marker-icon cursor-marker" }) })),
                        this._setPane(this._hintMarker, "vertexPane"),
                        (this._hintMarker._pmTempLayer = !0),
                        this._layerGroup.addLayer(this._hintMarker),
                        this.options.cursorMarker && L.DomUtil.addClass(this._hintMarker._icon, "visible"),
                        this.options.tooltips && this._hintMarker.bindTooltip(I("tooltips.firstVertex"), { permanent: !0, offset: L.point(0, 10), direction: "bottom", opacity: 0.8 }).openTooltip(),
                        (this._map._container.style.cursor = "crosshair"),
                        this._map.on("click", this._createVertex, this),
                        this.options.finishOn && "snap" !== this.options.finishOn && this._map.on(this.options.finishOn, this._finishShape, this),
                        "dblclick" === this.options.finishOn && ((this.tempMapDoubleClickZoomState = this._map.doubleClickZoom._enabled), this.tempMapDoubleClickZoomState && this._map.doubleClickZoom.disable()),
                        this._map.on("mousemove", this._syncHintMarker, this),
                        this._hintMarker.on("move", this._syncHintLine, this),
                        this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !0),
                        (this._otherSnapLayers = []),
                        this._fireDrawStart(),
                        this._setGlobalDrawMode();
                },
                disable: function () {
                    this._enabled &&
                        ((this._enabled = !1),
                            (this._map._container.style.cursor = ""),
                            this._map.off("click", this._createVertex, this),
                            this._map.off("mousemove", this._syncHintMarker, this),
                            this.options.finishOn && "snap" !== this.options.finishOn && this._map.off(this.options.finishOn, this._finishShape, this),
                            this.tempMapDoubleClickZoomState && this._map.doubleClickZoom.enable(),
                            this._map.removeLayer(this._layerGroup),
                            this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !1),
                            this.options.snappable && this._cleanupSnapping(),
                            this._fireDrawEnd(),
                            this._setGlobalDrawMode());
                },
                enabled: function () {
                    return this._enabled;
                },
                toggle: function (t) {
                    this.enabled() ? this.disable() : this.enable(t);
                },
                _syncHintLine: function () {
                    var t = this._layer.getLatLngs();
                    if (t.length > 0) {
                        var e = t[t.length - 1];
                        this._hintline.setLatLngs([e, this._hintMarker.getLatLng()]);
                    }
                },
                _syncHintMarker: function (t) {
                    if ((this._hintMarker.setLatLng(t.latlng), this.options.snappable)) {
                        var e = t;
                        (e.target = this._hintMarker), this._handleSnapping(e);
                    }
                    this.options.allowSelfIntersection || this._handleSelfIntersection(!0, t.latlng);
                    var i = this._layer._defaultShape().slice();
                    i.push(this._hintMarker.getLatLng()), this._change(i);
                },
                hasSelfIntersection: function () {
                    return yt(this._layer.toGeoJSON(15)).features.length > 0;
                },
                _handleSelfIntersection: function (t, e) {
                    var i = L.polyline(this._layer.getLatLngs());
                    t && (e || (e = this._hintMarker.getLatLng()), i.addLatLng(e));
                    var n = yt(i.toGeoJSON(15));
                    (this._doesSelfIntersect = n.features.length > 0), this._doesSelfIntersect ? this._hintline.setStyle({ color: "#f00000ff" }) : this._hintline.isEmpty() || this._hintline.setStyle(this.options.hintlineStyle);
                },
                _createVertex: function (t) {
                    if (this.options.allowSelfIntersection || (this._handleSelfIntersection(!0, t.latlng), !this._doesSelfIntersect)) {
                        this._hintMarker._snapped || this._hintMarker.setLatLng(t.latlng);
                        var e = this._hintMarker.getLatLng();
                        if (e.equals(this._layer.getLatLngs()[0])) this._finishShape(t);
                        else {
                            (this._layer._latlngInfo = this._layer._latlngInfo || []), this._layer._latlngInfo.push({ latlng: e, snapInfo: this._hintMarker._snapInfo }), this._layer.addLatLng(e);
                            var i = this._createMarker(e);
                            this._setTooltipText(),
                                this._hintline.setLatLngs([e, e]),
                                this._fireVertexAdded(i, undefined, e, "Draw"),
                                this._change(this._layer.getLatLngs()),
                                "snap" === this.options.finishOn && this._hintMarker._snapped && this._finishShape(t);
                        }
                    }
                },
                _removeLastVertex: function () {
                    var t = this._layer.getLatLngs(),
                        e = t.pop();
                    if (t.length < 1) this.disable();
                    else {
                        var i = this._layerGroup
                            .getLayers()
                            .filter(function (t) {
                                return t instanceof L.Marker;
                            })
                            .filter(function (t) {
                                return !L.DomUtil.hasClass(t._icon, "cursor-marker");
                            })
                            .find(function (t) {
                                return t.getLatLng() === e;
                            }),
                            n = this._layerGroup.getLayers().filter(function (t) {
                                return t instanceof L.Marker;
                            }),
                            r = L.PM.Utils.findDeepMarkerIndex(n, i).indexPath;
                        this._layerGroup.removeLayer(i), this._layer.setLatLngs(t), this._syncHintLine(), this._setTooltipText(), this._fireVertexRemoved(i, r, "Draw"), this._change(this._layer.getLatLngs());
                    }
                },
                _finishShape: function () {
                    if ((this.options.allowSelfIntersection || (this._handleSelfIntersection(!1), !this._doesSelfIntersect)) && (!this.options.requireSnapToFinish || this._hintMarker._snapped || this._isFirstLayer())) {
                        var t = this._layer.getLatLngs();
                        if (!(t.length <= 1)) {
                            var e = L.polyline(t, this.options.pathOptions);
                            this._setPane(e, "layerPane"),
                                this._finishLayer(e),
                                e.addTo(this._map.pm._getContainingLayer()),
                                this._fireCreate(e),
                                this.options.snappable && this._cleanupSnapping(),
                                this.disable(),
                                this.options.continueDrawing && this.enable();
                        }
                    }
                },
                _createMarker: function (t) {
                    var e = new L.Marker(t, { draggable: !1, icon: L.divIcon({ className: "marker-icon" }) });
                    return this._setPane(e, "vertexPane"), (e._pmTempLayer = !0), this._layerGroup.addLayer(e), e.on("click", this._finishShape, this), e;
                },
                _setTooltipText: function () {
                    var t = "";
                    (t = I(this._layer.getLatLngs().flat().length <= 1 ? "tooltips.continueLine" : "tooltips.finishLine")), this._hintMarker.setTooltipContent(t);
                },
                _change: function (t) {
                    this._fireChange(t, "Draw");
                },
            })),
                (at.Polygon = at.Line.extend({
                    initialize: function (t) {
                        (this._map = t), (this._shape = "Polygon"), (this.toolbarButtonName = "drawPolygon");
                    },
                    _createMarker: function (t) {
                        var e = new L.Marker(t, { draggable: !1, icon: L.divIcon({ className: "marker-icon" }) });
                        return (
                            this._setPane(e, "vertexPane"),
                            (e._pmTempLayer = !0),
                            this._layerGroup.addLayer(e),
                            1 === this._layer.getLatLngs().flat().length
                                ? (e.on("click", this._finishShape, this), (this._tempSnapLayerIndex = this._otherSnapLayers.push(e) - 1), this.options.snappable && this._cleanupSnapping())
                                : e.on("click", function () {
                                    return 1;
                                }),
                            e
                        );
                    },
                    _setTooltipText: function () {
                        var t = "";
                        (t = I(this._layer.getLatLngs().flat().length <= 2 ? "tooltips.continueLine" : "tooltips.finishPoly")), this._hintMarker.setTooltipContent(t);
                    },
                    _finishShape: function () {
                        if (
                            (this.options.allowSelfIntersection || (this._handleSelfIntersection(!0, this._layer.getLatLngs()[0]), !this._doesSelfIntersect)) &&
                            (!this.options.requireSnapToFinish || this._hintMarker._snapped || this._isFirstLayer())
                        ) {
                            var t = this._layer.getLatLngs();
                            if (!(t.length <= 2)) {
                                var e = L.polygon(t, this.options.pathOptions);
                                this._setPane(e, "layerPane"),
                                    this._finishLayer(e),
                                    e.addTo(this._map.pm._getContainingLayer()),
                                    this._fireCreate(e),
                                    this._cleanupSnapping(),
                                    this._otherSnapLayers.splice(this._tempSnapLayerIndex, 1),
                                    delete this._tempSnapLayerIndex,
                                    this.disable(),
                                    this.options.continueDrawing && this.enable();
                            }
                        }
                    },
                })),
                (at.Rectangle = at.extend({
                    initialize: function (t) {
                        (this._map = t), (this._shape = "Rectangle"), (this.toolbarButtonName = "drawRectangle");
                    },
                    enable: function (t) {
                        if (
                            (L.Util.setOptions(this, t),
                                (this._enabled = !0),
                                (this._layerGroup = new L.LayerGroup()),
                                (this._layerGroup._pmTempLayer = !0),
                                this._layerGroup.addTo(this._map),
                                (this._layer = L.rectangle(
                                    [
                                        [0, 0],
                                        [0, 0],
                                    ],
                                    this.options.pathOptions
                                )),
                                this._setPane(this._layer, "layerPane"),
                                (this._layer._pmTempLayer = !0),
                                (this._startMarker = L.marker([0, 0], { icon: L.divIcon({ className: "marker-icon rect-start-marker" }), draggable: !1, zIndexOffset: -100, opacity: this.options.cursorMarker ? 1 : 0 })),
                                this._setPane(this._startMarker, "vertexPane"),
                                (this._startMarker._pmTempLayer = !0),
                                this._layerGroup.addLayer(this._startMarker),
                                (this._hintMarker = L.marker([0, 0], { zIndexOffset: 150, icon: L.divIcon({ className: "marker-icon cursor-marker" }) })),
                                this._setPane(this._hintMarker, "vertexPane"),
                                (this._hintMarker._pmTempLayer = !0),
                                this._layerGroup.addLayer(this._hintMarker),
                                this.options.tooltips && this._hintMarker.bindTooltip(I("tooltips.firstVertex"), { permanent: !0, offset: L.point(0, 10), direction: "bottom", opacity: 0.8 }).openTooltip(),
                                this.options.cursorMarker)
                        ) {
                            L.DomUtil.addClass(this._hintMarker._icon, "visible"), (this._styleMarkers = []);
                            for (var e = 0; e < 2; e += 1) {
                                var i = L.marker([0, 0], { icon: L.divIcon({ className: "marker-icon rect-style-marker" }), draggable: !1, zIndexOffset: 100 });
                                this._setPane(i, "vertexPane"), (i._pmTempLayer = !0), this._layerGroup.addLayer(i), this._styleMarkers.push(i);
                            }
                        }
                        (this._map._container.style.cursor = "crosshair"),
                            this._map.on("click", this._placeStartingMarkers, this),
                            this._map.on("mousemove", this._syncHintMarker, this),
                            this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !0),
                            (this._otherSnapLayers = []),
                            this._fireDrawStart(),
                            this._setGlobalDrawMode();
                    },
                    disable: function () {
                        this._enabled &&
                            ((this._enabled = !1),
                                (this._map._container.style.cursor = ""),
                                this._map.off("click", this._finishShape, this),
                                this._map.off("click", this._placeStartingMarkers, this),
                                this._map.off("mousemove", this._syncHintMarker, this),
                                this._map.removeLayer(this._layerGroup),
                                this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !1),
                                this.options.snappable && this._cleanupSnapping(),
                                this._fireDrawEnd(),
                                this._setGlobalDrawMode());
                    },
                    enabled: function () {
                        return this._enabled;
                    },
                    toggle: function (t) {
                        this.enabled() ? this.disable() : this.enable(t);
                    },
                    _placeStartingMarkers: function (t) {
                        this._hintMarker._snapped || this._hintMarker.setLatLng(t.latlng);
                        var e = this._hintMarker.getLatLng();
                        L.DomUtil.addClass(this._startMarker._icon, "visible"),
                            this._startMarker.setLatLng(e),
                            this.options.cursorMarker &&
                            this._styleMarkers &&
                            this._styleMarkers.forEach(function (t) {
                                L.DomUtil.addClass(t._icon, "visible"), t.setLatLng(e);
                            }),
                            this._map.off("click", this._placeStartingMarkers, this),
                            this._map.on("click", this._finishShape, this),
                            this._hintMarker.setTooltipContent(I("tooltips.finishRect")),
                            this._setRectangleOrigin();
                    },
                    _setRectangleOrigin: function () {
                        var t = this._startMarker.getLatLng();
                        t && (this._layerGroup.addLayer(this._layer), this._layer.setLatLngs([t, t]), this._hintMarker.on("move", this._syncRectangleSize, this));
                    },
                    _syncHintMarker: function (t) {
                        if ((this._hintMarker.setLatLng(t.latlng), this.options.snappable)) {
                            var e = t;
                            (e.target = this._hintMarker), this._handleSnapping(e);
                        }
                        var i = this._layerGroup && this._layerGroup.hasLayer(this._layer) ? this._layer.getLatLngs() : [this._hintMarker.getLatLng()];
                        this._fireChange(i, "Draw");
                    },
                    _syncRectangleSize: function () {
                        var t = this,
                            e = V(this._startMarker.getLatLng(), this._map),
                            i = V(this._hintMarker.getLatLng(), this._map),
                            n = L.PM.Utils._getRotatedRectangle(e, i, this.options.rectangleAngle || 0, this._map);
                        if ((this._layer.setLatLngs(n), this.options.cursorMarker && this._styleMarkers)) {
                            var r = [];
                            n.forEach(function (t) {
                                t.equals(e, 1e-8) || t.equals(i, 1e-8) || r.push(t);
                            }),
                                r.forEach(function (e, i) {
                                    try {
                                        t._styleMarkers[i].setLatLng(e);
                                    } catch (n) { }
                                });
                        }
                    },
                    _findCorners: function () {
                        var t = this._layer.getBounds();
                        return [t.getNorthWest(), t.getNorthEast(), t.getSouthEast(), t.getSouthWest()];
                    },
                    _finishShape: function (t) {
                        this._hintMarker._snapped || this._hintMarker.setLatLng(t.latlng);
                        var e = this._hintMarker.getLatLng(),
                            i = this._startMarker.getLatLng();
                        if (!this.options.requireSnapToFinish || this._hintMarker._snapped || this._isFirstLayer()) {
                            var n = L.rectangle([i, e], this.options.pathOptions);
                            if (this.options.rectangleAngle) {
                                var r = L.PM.Utils._getRotatedRectangle(i, e, this.options.rectangleAngle || 0, this._map);
                                n.setLatLngs(r), n.pm && n.pm._setAngle(this.options.rectangleAngle || 0);
                            }
                            this._setPane(n, "layerPane"), this._finishLayer(n), n.addTo(this._map.pm._getContainingLayer()), this._fireCreate(n), this.disable(), this.options.continueDrawing && this.enable();
                        }
                    },
                })),
                (at.Circle = at.extend({
                    initialize: function (t) {
                        (this._map = t), (this._shape = "Circle"), (this.toolbarButtonName = "drawCircle");
                    },
                    enable: function (t) {
                        L.Util.setOptions(this, t),
                            (this.options.radius = 0),
                            (this._enabled = !0),
                            (this._layerGroup = new L.LayerGroup()),
                            (this._layerGroup._pmTempLayer = !0),
                            this._layerGroup.addTo(this._map),
                            (this._layer = L.circle([0, 0], Lt(Lt({}, this.options.templineStyle), {}, { radius: 0 }))),
                            this._setPane(this._layer, "layerPane"),
                            (this._layer._pmTempLayer = !0),
                            (this._centerMarker = L.marker([0, 0], { icon: L.divIcon({ className: "marker-icon" }), draggable: !1, zIndexOffset: 100 })),
                            this._setPane(this._centerMarker, "vertexPane"),
                            (this._centerMarker._pmTempLayer = !0),
                            (this._hintMarker = L.marker([0, 0], { zIndexOffset: 110, icon: L.divIcon({ className: "marker-icon cursor-marker" }) })),
                            this._setPane(this._hintMarker, "vertexPane"),
                            (this._hintMarker._pmTempLayer = !0),
                            this._layerGroup.addLayer(this._hintMarker),
                            this.options.cursorMarker && L.DomUtil.addClass(this._hintMarker._icon, "visible"),
                            this.options.tooltips && this._hintMarker.bindTooltip(I("tooltips.startCircle"), { permanent: !0, offset: L.point(0, 10), direction: "bottom", opacity: 0.8 }).openTooltip(),
                            (this._hintline = L.polyline([], this.options.hintlineStyle)),
                            this._setPane(this._hintline, "layerPane"),
                            (this._hintline._pmTempLayer = !0),
                            this._layerGroup.addLayer(this._hintline),
                            (this._map._container.style.cursor = "crosshair"),
                            this._map.on("click", this._placeCenterMarker, this),
                            this._map.on("mousemove", this._syncHintMarker, this),
                            this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !0),
                            (this._otherSnapLayers = []),
                            this._fireDrawStart(),
                            this._setGlobalDrawMode();
                    },
                    disable: function () {
                        this._enabled &&
                            ((this._enabled = !1),
                                (this._map._container.style.cursor = ""),
                                this._map.off("click", this._finishShape, this),
                                this._map.off("click", this._placeCenterMarker, this),
                                this._map.off("mousemove", this._syncHintMarker, this),
                                this._map.removeLayer(this._layerGroup),
                                this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !1),
                                this.options.snappable && this._cleanupSnapping(),
                                this._fireDrawEnd(),
                                this._setGlobalDrawMode());
                    },
                    enabled: function () {
                        return this._enabled;
                    },
                    toggle: function (t) {
                        this.enabled() ? this.disable() : this.enable(t);
                    },
                    _syncHintLine: function () {
                        var t = this._centerMarker.getLatLng(),
                            e = this._getNewDestinationOfHintMarker();
                        this._hintline.setLatLngs([t, e]);
                    },
                    _syncCircleRadius: function () {
                        var t,
                            e = this._centerMarker.getLatLng(),
                            i = this._hintMarker.getLatLng();
                        (t = this._map.options.crs === L.CRS.Simple ? this._map.distance(e, i) : e.distanceTo(i)),
                            this.options.minRadiusCircle && t < this.options.minRadiusCircle
                                ? this._layer.setRadius(this.options.minRadiusCircle)
                                : this.options.maxRadiusCircle && t > this.options.maxRadiusCircle
                                    ? this._layer.setRadius(this.options.maxRadiusCircle)
                                    : this._layer.setRadius(t);
                    },
                    _syncHintMarker: function (t) {
                        if ((this._hintMarker.setLatLng(t.latlng), this._hintMarker.setLatLng(this._getNewDestinationOfHintMarker()), this.options.snappable)) {
                            var e = t;
                            (e.target = this._hintMarker), this._handleSnapping(e);
                        }
                        this._handleHintMarkerSnapping();
                        var i = this._layerGroup && this._layerGroup.hasLayer(this._centerMarker) ? this._centerMarker.getLatLng() : this._hintMarker.getLatLng();
                        this._fireChange(i, "Draw");
                    },
                    _placeCenterMarker: function (t) {
                        this._layerGroup.addLayer(this._layer), this._layerGroup.addLayer(this._centerMarker), this._hintMarker._snapped || this._hintMarker.setLatLng(t.latlng);
                        var e = this._hintMarker.getLatLng();
                        this._layerGroup.addLayer(this._layer), this._centerMarker.setLatLng(e), this._map.off("click", this._placeCenterMarker, this), this._map.on("click", this._finishShape, this), this._placeCircleCenter();
                    },
                    _placeCircleCenter: function () {
                        var t = this._centerMarker.getLatLng();
                        t &&
                            (this._layer.setLatLng(t),
                                this._hintMarker.on("move", this._syncHintLine, this),
                                this._hintMarker.on("move", this._syncCircleRadius, this),
                                this._hintMarker.setTooltipContent(I("tooltips.finishCircle")),
                                this._fireCenterPlaced(),
                                this._fireChange(this._layer.getLatLng(), "Draw"));
                    },
                    _finishShape: function (t) {
                        if (!this.options.requireSnapToFinish || this._hintMarker._snapped || this._isFirstLayer()) {
                            this._hintMarker._snapped || this._hintMarker.setLatLng(t.latlng);
                            var e,
                                i = this._centerMarker.getLatLng(),
                                n = this._hintMarker.getLatLng();
                            (e = this._map.options.crs === L.CRS.Simple ? this._map.distance(i, n) : i.distanceTo(n)),
                                this.options.minRadiusCircle && e < this.options.minRadiusCircle
                                    ? (e = this.options.minRadiusCircle)
                                    : this.options.maxRadiusCircle && e > this.options.maxRadiusCircle && (e = this.options.maxRadiusCircle);
                            var r = Lt(Lt({}, this.options.pathOptions), {}, { radius: e }),
                                a = L.circle(i, r);
                            this._setPane(a, "layerPane"),
                                this._finishLayer(a),
                                a.addTo(this._map.pm._getContainingLayer()),
                                a.pm && a.pm._updateHiddenPolyCircle(),
                                this._fireCreate(a),
                                this.disable(),
                                this.options.continueDrawing && this.enable();
                        }
                    },
                    _getNewDestinationOfHintMarker: function () {
                        var t = this._centerMarker.getLatLng(),
                            e = this._hintMarker.getLatLng(),
                            i = t.distanceTo(e);
                        return (
                            t.equals(L.latLng([0, 0])) ||
                            (this.options.minRadiusCircle && i < this.options.minRadiusCircle
                                ? (e = z(this._map, t, e, this.options.minRadiusCircle))
                                : this.options.maxRadiusCircle && i > this.options.maxRadiusCircle && (e = z(this._map, t, e, this.options.maxRadiusCircle))),
                            e
                        );
                    },
                    _handleHintMarkerSnapping: function () {
                        if (this._hintMarker._snapped) {
                            var t = this._centerMarker.getLatLng(),
                                e = this._hintMarker.getLatLng(),
                                i = t.distanceTo(e);
                            t.equals(L.latLng([0, 0])) ||
                                (((this.options.minRadiusCircle && i < this.options.minRadiusCircle) || (this.options.maxRadiusCircle && i > this.options.maxRadiusCircle)) && this._hintMarker.setLatLng(this._hintMarker._orgLatLng));
                        }
                        this._hintMarker.setLatLng(this._getNewDestinationOfHintMarker());
                    },
                })),
                (at.CircleMarker = at.Marker.extend({
                    initialize: function (t) {
                        (this._map = t), (this._shape = "CircleMarker"), (this.toolbarButtonName = "drawCircleMarker"), (this._layerIsDragging = !1);
                    },
                    enable: function (t) {
                        var e = this;
                        if ((L.Util.setOptions(this, t), (this._enabled = !0), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !0), this.options.editable)) {
                            var i = {};
                            L.setOptions(i, this.options.templineStyle),
                                (i.radius = 0),
                                (this._layerGroup = new L.LayerGroup()),
                                (this._layerGroup._pmTempLayer = !0),
                                this._layerGroup.addTo(this._map),
                                (this._layer = L.circleMarker([0, 0], i)),
                                this._setPane(this._layer, "layerPane"),
                                (this._layer._pmTempLayer = !0),
                                (this._centerMarker = L.marker([0, 0], { icon: L.divIcon({ className: "marker-icon" }), draggable: !1, zIndexOffset: 100 })),
                                this._setPane(this._centerMarker, "vertexPane"),
                                (this._centerMarker._pmTempLayer = !0),
                                (this._hintMarker = L.marker([0, 0], { zIndexOffset: 110, icon: L.divIcon({ className: "marker-icon cursor-marker" }) })),
                                this._setPane(this._hintMarker, "vertexPane"),
                                (this._hintMarker._pmTempLayer = !0),
                                this._layerGroup.addLayer(this._hintMarker),
                                this.options.cursorMarker && L.DomUtil.addClass(this._hintMarker._icon, "visible"),
                                this.options.tooltips && this._hintMarker.bindTooltip(I("tooltips.startCircle"), { permanent: !0, offset: L.point(0, 10), direction: "bottom", opacity: 0.8 }).openTooltip(),
                                (this._hintline = L.polyline([], this.options.hintlineStyle)),
                                this._setPane(this._hintline, "layerPane"),
                                (this._hintline._pmTempLayer = !0),
                                this._layerGroup.addLayer(this._hintline),
                                this._map.on("click", this._placeCenterMarker, this),
                                (this._map._container.style.cursor = "crosshair");
                        } else
                            this._map.on("click", this._createMarker, this),
                                (this._hintMarker = L.circleMarker([0, 0], this.options.templineStyle)),
                                this._setPane(this._hintMarker, "layerPane"),
                                (this._hintMarker._pmTempLayer = !0),
                                this._hintMarker.addTo(this._map),
                                (this._layer = this._hintMarker),
                                this.options.tooltips && this._hintMarker.bindTooltip(I("tooltips.placeCircleMarker"), { permanent: !0, offset: L.point(0, 10), direction: "bottom", opacity: 0.8 }).openTooltip();
                        this._map.on("mousemove", this._syncHintMarker, this),
                            !this.options.editable &&
                            this.options.markerEditable &&
                            this._map.eachLayer(function (t) {
                                e.isRelevantMarker(t) && t.pm.enable();
                            }),
                            this._layer.bringToBack(),
                            this._fireDrawStart(),
                            this._setGlobalDrawMode();
                    },
                    disable: function () {
                        var t = this;
                        this._enabled &&
                            ((this._enabled = !1),
                                this.options.editable
                                    ? ((this._map._container.style.cursor = ""), this._map.off("click", this._finishShape, this), this._map.off("click", this._placeCenterMarker, this), this._map.removeLayer(this._layerGroup))
                                    : (this._map.off("click", this._createMarker, this),
                                        this._map.eachLayer(function (e) {
                                            t.isRelevantMarker(e) && e.pm.disable();
                                        }),
                                        this._hintMarker.remove()),
                                this._map.off("mousemove", this._syncHintMarker, this),
                                this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !1),
                                this.options.snappable && this._cleanupSnapping(),
                                this._fireDrawEnd(),
                                this._setGlobalDrawMode());
                    },
                    _placeCenterMarker: function (t) {
                        this._layerGroup.addLayer(this._layer), this._layerGroup.addLayer(this._centerMarker), this._hintMarker._snapped || this._hintMarker.setLatLng(t.latlng);
                        var e = this._hintMarker.getLatLng();
                        this._layerGroup.addLayer(this._layer), this._centerMarker.setLatLng(e), this._map.off("click", this._placeCenterMarker, this), this._map.on("click", this._finishShape, this), this._placeCircleCenter();
                    },
                    _placeCircleCenter: function () {
                        var t = this._centerMarker.getLatLng();
                        t &&
                            (this._layer.setLatLng(t),
                                this._hintMarker.on("move", this._syncHintLine, this),
                                this._hintMarker.on("move", this._syncCircleRadius, this),
                                this._hintMarker.setTooltipContent(I("tooltips.finishCircle")),
                                this._fireCenterPlaced(),
                                this._fireChange(this._layer.getLatLng(), "Draw"));
                    },
                    _syncHintLine: function () {
                        var t = this._centerMarker.getLatLng(),
                            e = this._getNewDestinationOfHintMarker();
                        this._hintline.setLatLngs([t, e]);
                    },
                    _syncCircleRadius: function () {
                        var t = this._centerMarker.getLatLng(),
                            e = this._hintMarker.getLatLng(),
                            i = this._map.project(t).distanceTo(this._map.project(e));
                        this.options.minRadiusCircleMarker && i < this.options.minRadiusCircleMarker
                            ? this._layer.setRadius(this.options.minRadiusCircleMarker)
                            : this.options.maxRadiusCircleMarker && i > this.options.maxRadiusCircleMarker
                                ? this._layer.setRadius(this.options.maxRadiusCircleMarker)
                                : this._layer.setRadius(i);
                    },
                    _syncHintMarker: function (t) {
                        if ((this._hintMarker.setLatLng(t.latlng), this._hintMarker.setLatLng(this._getNewDestinationOfHintMarker()), this.options.snappable)) {
                            var e = t;
                            (e.target = this._hintMarker), this._handleSnapping(e);
                        }
                        this._handleHintMarkerSnapping();
                        var i = this._layerGroup && this._layerGroup.hasLayer(this._centerMarker) ? this._centerMarker.getLatLng() : this._hintMarker.getLatLng();
                        this._fireChange(i, "Draw");
                    },
                    isRelevantMarker: function (t) {
                        return t instanceof L.CircleMarker && !(t instanceof L.Circle) && t.pm && !t._pmTempLayer;
                    },
                    _createMarker: function (t) {
                        if ((!this.options.requireSnapToFinish || this._hintMarker._snapped || this._isFirstLayer()) && t.latlng && !this._layerIsDragging) {
                            this._hintMarker._snapped || this._hintMarker.setLatLng(t.latlng);
                            var e = this._hintMarker.getLatLng(),
                                i = L.circleMarker(e, this.options.pathOptions);
                            this._setPane(i, "layerPane"),
                                this._finishLayer(i),
                                i.addTo(this._map.pm._getContainingLayer()),
                                i.pm && this.options.markerEditable && i.pm.enable(),
                                this._fireCreate(i),
                                this._cleanupSnapping(),
                                this.options.continueDrawing || this.disable();
                        }
                    },
                    _finishShape: function (t) {
                        if (!this.options.requireSnapToFinish || this._hintMarker._snapped || this._isFirstLayer()) {
                            this._hintMarker._snapped || this._hintMarker.setLatLng(t.latlng);
                            var e = this._centerMarker.getLatLng(),
                                i = this._hintMarker.getLatLng(),
                                n = this._map.project(e).distanceTo(this._map.project(i));
                            this.options.editable &&
                                (this.options.minRadiusCircleMarker && n < this.options.minRadiusCircleMarker
                                    ? (n = this.options.minRadiusCircleMarker)
                                    : this.options.maxRadiusCircleMarker && n > this.options.maxRadiusCircleMarker && (n = this.options.maxRadiusCircleMarker));
                            var r = Mt(Mt({}, this.options.pathOptions), {}, { radius: n }),
                                a = L.circleMarker(e, r);
                            this._setPane(a, "layerPane"),
                                this._finishLayer(a),
                                a.addTo(this._map.pm._getContainingLayer()),
                                a.pm && a.pm._updateHiddenPolyCircle(),
                                this._fireCreate(a),
                                this.disable(),
                                this.options.continueDrawing && this.enable();
                        }
                    },
                    _getNewDestinationOfHintMarker: function () {
                        var t = this._hintMarker.getLatLng();
                        if (this.options.editable) {
                            var e = this._centerMarker.getLatLng();
                            if (e.equals(L.latLng([0, 0]))) return t;
                            var i = this._map.project(e).distanceTo(this._map.project(t));
                            this.options.minRadiusCircleMarker && i < this.options.minRadiusCircleMarker
                                ? (t = z(this._map, e, t, this._pxRadiusToMeter(this.options.minRadiusCircleMarker)))
                                : this.options.maxRadiusCircleMarker && i > this.options.maxRadiusCircleMarker && (t = z(this._map, e, t, this._pxRadiusToMeter(this.options.maxRadiusCircleMarker)));
                        }
                        return t;
                    },
                    _handleHintMarkerSnapping: function () {
                        if (this.options.editable) {
                            if (this._hintMarker._snapped) {
                                var t = this._centerMarker.getLatLng(),
                                    e = this._hintMarker.getLatLng(),
                                    i = this._map.project(t).distanceTo(this._map.project(e));
                                ((this.options.minRadiusCircleMarker && i < this.options.minRadiusCircleMarker) || (this.options.maxRadiusCircleMarker && i > this.options.maxRadiusCircleMarker)) &&
                                    this._hintMarker.setLatLng(this._hintMarker._orgLatLng);
                            }
                            this._hintMarker.setLatLng(this._getNewDestinationOfHintMarker());
                        }
                    },
                    _pxRadiusToMeter: function (t) {
                        var e = this._centerMarker.getLatLng(),
                            i = this._map.project(e),
                            n = L.point(i.x + t, i.y);
                        return this._map.unproject(n).distanceTo(e);
                    },
                }));
            const Bt = function (t) {
                if (!t) throw new Error("geojson is required");
                var e = [];
                return (
                    Rt(t, function (t) {
                        !(function (t, e) {
                            var i = [],
                                n = t.geometry;
                            if (null !== n) {
                                switch (n.type) {
                                    case "Polygon":
                                        i = Ct(n);
                                        break;
                                    case "LineString":
                                        i = [Ct(n)];
                                }
                                i.forEach(function (i) {
                                    var n = (function (t, e) {
                                        var i = [];
                                        return (
                                            t.reduce(function (t, n) {
                                                var r,
                                                    a,
                                                    o,
                                                    s,
                                                    l,
                                                    h,
                                                    u = ut([t, n], e);
                                                return (u.bbox = ((a = n), (o = (r = t)[0]), (s = r[1]), (l = a[0]), (h = a[1]), [o < l ? o : l, s < h ? s : h, o > l ? o : l, s > h ? s : h])), i.push(u), n;
                                            }),
                                            i
                                        );
                                    })(i, t.properties);
                                    n.forEach(function (t) {
                                        (t.id = e.length), e.push(t);
                                    });
                                });
                            }
                        })(t, e);
                    }),
                    ct(e)
                );
            };
            var Tt = i(1787);
            function It(t, e) {
                var i = Ct(t),
                    n = Ct(e);
                if (2 !== i.length) throw new Error("<intersects> line1 must only contain 2 coordinates");
                if (2 !== n.length) throw new Error("<intersects> line2 must only contain 2 coordinates");
                var r = i[0][0],
                    a = i[0][1],
                    o = i[1][0],
                    s = i[1][1],
                    l = n[0][0],
                    h = n[0][1],
                    u = n[1][0],
                    c = n[1][1],
                    p = (c - h) * (o - r) - (u - l) * (s - a),
                    d = (u - l) * (a - h) - (c - h) * (r - l),
                    f = (o - r) * (a - h) - (s - a) * (r - l);
                if (0 === p) return null;
                var g = d / p,
                    _ = f / p;
                return g >= 0 && g <= 1 && _ >= 0 && _ <= 1 ? ht([r + g * (o - r), a + g * (s - a)]) : null;
            }
            const jt = function (t, e) {
                var i = {},
                    n = [];
                if (
                    ("LineString" === t.type && (t = lt(t)),
                        "LineString" === e.type && (e = lt(e)),
                        "Feature" === t.type &&
                        "Feature" === e.type &&
                        null !== t.geometry &&
                        null !== e.geometry &&
                        "LineString" === t.geometry.type &&
                        "LineString" === e.geometry.type &&
                        2 === t.geometry.coordinates.length &&
                        2 === e.geometry.coordinates.length)
                ) {
                    var r = It(t, e);
                    return r && n.push(r), ct(n);
                }
                var a = Tt();
                return (
                    a.load(Bt(e)),
                    Ot(Bt(t), function (t) {
                        Ot(a.search(t), function (e) {
                            var r = It(t, e);
                            if (r) {
                                var a = Ct(r).join(",");
                                i[a] || ((i[a] = !0), n.push(r));
                            }
                        });
                    }),
                    ct(n)
                );
            };
            const Gt = function (t, e, i) {
                void 0 === i && (i = {});
                var n = wt(t),
                    r = wt(e),
                    a = gt(r[1] - n[1]),
                    o = gt(r[0] - n[0]),
                    s = gt(n[1]),
                    l = gt(r[1]),
                    h = Math.pow(Math.sin(a / 2), 2) + Math.pow(Math.sin(o / 2), 2) * Math.cos(s) * Math.cos(l);
                return pt(2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h)), i.units);
            };
            const At = function (t) {
                var e = t[0],
                    i = t[1],
                    n = t[2],
                    r = t[3];
                if (Gt(t.slice(0, 2), [n, i]) >= Gt(t.slice(0, 2), [e, r])) {
                    var a = (i + r) / 2;
                    return [e, a - (n - e) / 2, n, a + (n - e) / 2];
                }
                var o = (e + n) / 2;
                return [o - (r - i) / 2, i, o + (r - i) / 2, r];
            };
            function Nt(t) {
                var e = [Infinity, Infinity, -Infinity, -Infinity];
                return (
                    St(t, function (t) {
                        e[0] > t[0] && (e[0] = t[0]), e[1] > t[1] && (e[1] = t[1]), e[2] < t[0] && (e[2] = t[0]), e[3] < t[1] && (e[3] = t[1]);
                    }),
                    e
                );
            }
            Nt["default"] = Nt;
            const zt = Nt;
            const Ut = function (t, e) {
                void 0 === e && (e = {});
                var i = e.precision,
                    n = e.coordinates,
                    r = e.mutate;
                if (((i = i === undefined || null === i || isNaN(i) ? 6 : i), (n = n === undefined || null === n || isNaN(n) ? 3 : n), !t)) throw new Error("<geojson> is required");
                if ("number" != typeof i) throw new Error("<precision> must be a number");
                if ("number" != typeof n) throw new Error("<coordinates> must be a number");
                (!1 !== r && r !== undefined) || (t = JSON.parse(JSON.stringify(t)));
                var a = Math.pow(10, i);
                return (
                    St(t, function (t) {
                        !(function (t, e, i) {
                            t.length > i && t.splice(i, t.length);
                            for (var n = 0; n < t.length; n++) t[n] = Math.round(t[n] * e) / e;
                        })(t, a, n);
                    }),
                    t
                );
            };
            function Vt(t, e, i) {
                if ((void 0 === i && (i = {}), !0 === i.final))
                    return (function (t, e) {
                        var i = Vt(e, t);
                        return (i = (i + 180) % 360);
                    })(t, e);
                var n = wt(t),
                    r = wt(e),
                    a = gt(n[0]),
                    o = gt(r[0]),
                    s = gt(n[1]),
                    l = gt(r[1]),
                    h = Math.sin(o - a) * Math.cos(l),
                    u = Math.cos(s) * Math.sin(l) - Math.sin(s) * Math.cos(l) * Math.cos(o - a);
                return ft(Math.atan2(h, u));
            }
            function Ft(t, e, i, n) {
                void 0 === n && (n = {});
                var r = wt(t),
                    a = gt(r[0]),
                    o = gt(r[1]),
                    s = gt(i),
                    l = dt(e, n.units),
                    h = Math.asin(Math.sin(o) * Math.cos(l) + Math.cos(o) * Math.sin(l) * Math.cos(s));
                return ht([ft(a + Math.atan2(Math.sin(s) * Math.sin(l) * Math.cos(o), Math.cos(l) - Math.sin(o) * Math.sin(h))), ft(h)], n.properties);
            }
            const Kt = function (t, e, i) {
                void 0 === i && (i = {});
                var n = ht([Infinity, Infinity], { dist: Infinity }),
                    r = 0;
                return (
                    Rt(t, function (t) {
                        for (var a = Ct(t), o = 0; o < a.length - 1; o++) {
                            var s = ht(a[o]);
                            s.properties.dist = Gt(e, s, i);
                            var l = ht(a[o + 1]);
                            l.properties.dist = Gt(e, l, i);
                            var h = Gt(s, l, i),
                                u = Math.max(s.properties.dist, l.properties.dist),
                                c = Vt(s, l),
                                p = Ft(e, u, c + 90, i),
                                d = Ft(e, u, c - 90, i),
                                f = jt(ut([p.geometry.coordinates, d.geometry.coordinates]), ut([s.geometry.coordinates, l.geometry.coordinates])),
                                g = null;
                            f.features.length > 0 && (((g = f.features[0]).properties.dist = Gt(e, g, i)), (g.properties.location = r + Gt(s, g, i))),
                                s.properties.dist < n.properties.dist && (((n = s).properties.index = o), (n.properties.location = r)),
                                l.properties.dist < n.properties.dist && (((n = l).properties.index = o + 1), (n.properties.location = r + h)),
                                g && g.properties.dist < n.properties.dist && ((n = g).properties.index = o),
                                (r += h);
                        }
                    }),
                    n
                );
            };
            function Ht(t, e) {
                var i = [],
                    n = Tt();
                return (
                    Rt(e, function (e) {
                        if (
                            (i.forEach(function (t, e) {
                                t.id = e;
                            }),
                                i.length)
                        ) {
                            var r = n.search(e);
                            if (r.features.length) {
                                var a = Jt(e, r);
                                (i = i.filter(function (t) {
                                    return t.id !== a.id;
                                })),
                                    n.remove(a),
                                    Ot(qt(a, e), function (t) {
                                        i.push(t), n.insert(t);
                                    });
                            }
                        } else
                            (i = qt(t, e).features).forEach(function (t) {
                                t.bbox || (t.bbox = At(zt(t)));
                            }),
                                n.load(ct(i));
                    }),
                    ct(i)
                );
            }
            function qt(t, e) {
                var i = [],
                    n = Ct(t)[0],
                    r = Ct(t)[t.geometry.coordinates.length - 1];
                if (Yt(n, wt(e)) || Yt(r, wt(e))) return ct([t]);
                var a = Tt(),
                    o = Bt(t);
                a.load(o);
                var s = a.search(e);
                if (!s.features.length) return ct([t]);
                var l = Jt(e, s),
                    h = (function (t, e, i) {
                        var n = i;
                        return (
                            Ot(t, function (t, r) {
                                n = 0 === r && i === undefined ? t : e(n, t, r);
                            }),
                            n
                        );
                    })(
                        o,
                        function (t, n, r) {
                            var a = Ct(n)[1],
                                o = wt(e);
                            return r === l.id ? (t.push(o), i.push(ut(t)), Yt(o, a) ? [o] : [o, a]) : (t.push(a), t);
                        },
                        [n]
                    );
                return h.length > 1 && i.push(ut(h)), ct(i);
            }
            function Jt(t, e) {
                if (!e.features.length) throw new Error("lines must contain features");
                if (1 === e.features.length) return e.features[0];
                var i,
                    n = Infinity;
                return (
                    Ot(e, function (e) {
                        var r = Kt(e, t).properties.dist;
                        r < n && ((i = e), (n = r));
                    }),
                    i
                );
            }
            function Yt(t, e) {
                return t[0] === e[0] && t[1] === e[1];
            }
            const Xt = function (t, e) {
                if (!t) throw new Error("line is required");
                if (!e) throw new Error("splitter is required");
                var i = Et(t),
                    n = Et(e);
                if ("LineString" !== i) throw new Error("line must be LineString");
                if ("FeatureCollection" === n) throw new Error("splitter cannot be a FeatureCollection");
                if ("GeometryCollection" === n) throw new Error("splitter cannot be a GeometryCollection");
                var r = Ut(e, { precision: 7 });
                switch (n) {
                    case "Point":
                        return qt(t, r);
                    case "MultiPoint":
                        return Ht(t, r);
                    case "LineString":
                    case "MultiLineString":
                    case "Polygon":
                    case "MultiPolygon":
                        return Ht(t, jt(t, r));
                }
            };
            function Zt(t, e, i) {
                if ((void 0 === i && (i = {}), !t)) throw new Error("point is required");
                if (!e) throw new Error("polygon is required");
                var n = wt(t),
                    r = Pt(e),
                    a = r.type,
                    o = e.bbox,
                    s = r.coordinates;
                if (
                    o &&
                    !1 ===
                    (function (t, e) {
                        return e[0] <= t[0] && e[1] <= t[1] && e[2] >= t[0] && e[3] >= t[1];
                    })(n, o)
                )
                    return !1;
                "Polygon" === a && (s = [s]);
                for (var l = !1, h = 0; h < s.length && !l; h++)
                    if ($t(n, s[h][0], i.ignoreBoundary)) {
                        for (var u = !1, c = 1; c < s[h].length && !u;) $t(n, s[h][c], !i.ignoreBoundary) && (u = !0), c++;
                        u || (l = !0);
                    }
                return l;
            }
            function $t(t, e, i) {
                var n = !1;
                e[0][0] === e[e.length - 1][0] && e[0][1] === e[e.length - 1][1] && (e = e.slice(0, e.length - 1));
                for (var r = 0, a = e.length - 1; r < e.length; a = r++) {
                    var o = e[r][0],
                        s = e[r][1],
                        l = e[a][0],
                        h = e[a][1];
                    if (t[1] * (o - l) + s * (l - t[0]) + h * (t[0] - o) == 0 && (o - t[0]) * (l - t[0]) <= 0 && (s - t[1]) * (h - t[1]) <= 0) return !i;
                    s > t[1] != h > t[1] && t[0] < ((l - o) * (t[1] - s)) / (h - s) + o && (n = !n);
                }
                return n;
            }
            function Wt(t, e, i, n, r) {
                var a = i[0],
                    o = i[1],
                    s = t[0],
                    l = t[1],
                    h = e[0],
                    u = e[1],
                    c = h - s,
                    p = u - l,
                    d = (i[0] - s) * p - (i[1] - l) * c;
                if (null !== r) {
                    if (Math.abs(d) > r) return !1;
                } else if (0 !== d) return !1;
                return n
                    ? "start" === n
                        ? Math.abs(c) >= Math.abs(p)
                            ? c > 0
                                ? s < a && a <= h
                                : h <= a && a < s
                            : p > 0
                                ? l < o && o <= u
                                : u <= o && o < l
                        : "end" === n
                            ? Math.abs(c) >= Math.abs(p)
                                ? c > 0
                                    ? s <= a && a < h
                                    : h < a && a <= s
                                : p > 0
                                    ? l <= o && o < u
                                    : u < o && o <= l
                            : "both" === n && (Math.abs(c) >= Math.abs(p) ? (c > 0 ? s < a && a < h : h < a && a < s) : p > 0 ? l < o && o < u : u < o && o < l)
                    : Math.abs(c) >= Math.abs(p)
                        ? c > 0
                            ? s <= a && a <= h
                            : h <= a && a <= s
                        : p > 0
                            ? l <= o && o <= u
                            : u <= o && o <= l;
            }
            const Qt = function (t, e, i) {
                void 0 === i && (i = {});
                for (var n = wt(t), r = Ct(e), a = 0; a < r.length - 1; a++) {
                    var o = !1;
                    if (
                        (i.ignoreEndVertices && (0 === a && (o = "start"), a === r.length - 2 && (o = "end"), 0 === a && a + 1 === r.length - 1 && (o = "both")),
                            Wt(r[a], r[a + 1], n, o, "undefined" == typeof i.epsilon ? null : i.epsilon))
                    )
                        return !0;
                }
                return !1;
            };
            function te(t, e) {
                var i = Pt(t),
                    n = Pt(e),
                    r = i.type,
                    a = n.type,
                    o = i.coordinates,
                    s = n.coordinates;
                switch (r) {
                    case "Point":
                        if ("Point" === a) return ie(o, s);
                        throw new Error("feature2 " + a + " geometry not supported");
                    case "MultiPoint":
                        switch (a) {
                            case "Point":
                                return (function (t, e) {
                                    var i,
                                        n = !1;
                                    for (i = 0; i < t.coordinates.length; i++)
                                        if (ie(t.coordinates[i], e.coordinates)) {
                                            n = !0;
                                            break;
                                        }
                                    return n;
                                })(i, n);
                            case "MultiPoint":
                                return (function (t, e) {
                                    for (var i = 0, n = e.coordinates; i < n.length; i++) {
                                        for (var r = n[i], a = !1, o = 0, s = t.coordinates; o < s.length; o++) {
                                            if (ie(r, s[o])) {
                                                a = !0;
                                                break;
                                            }
                                        }
                                        if (!a) return !1;
                                    }
                                    return !0;
                                })(i, n);
                            default:
                                throw new Error("feature2 " + a + " geometry not supported");
                        }
                    case "LineString":
                        switch (a) {
                            case "Point":
                                return Qt(n, i, { ignoreEndVertices: !0 });
                            case "LineString":
                                return (function (t, e) {
                                    for (var i = !1, n = 0, r = e.coordinates; n < r.length; n++) {
                                        var a = r[n];
                                        if ((Qt({ type: "Point", coordinates: a }, t, { ignoreEndVertices: !0 }) && (i = !0), !Qt({ type: "Point", coordinates: a }, t, { ignoreEndVertices: !1 }))) return !1;
                                    }
                                    return i;
                                })(i, n);
                            case "MultiPoint":
                                return (function (t, e) {
                                    for (var i = !1, n = 0, r = e.coordinates; n < r.length; n++) {
                                        var a = r[n];
                                        if ((Qt(a, t, { ignoreEndVertices: !0 }) && (i = !0), !Qt(a, t))) return !1;
                                    }
                                    if (i) return !0;
                                    return !1;
                                })(i, n);
                            default:
                                throw new Error("feature2 " + a + " geometry not supported");
                        }
                    case "Polygon":
                        switch (a) {
                            case "Point":
                                return Zt(n, i, { ignoreBoundary: !0 });
                            case "LineString":
                                return (function (t, e) {
                                    var i = !1,
                                        n = 0,
                                        r = zt(t),
                                        a = zt(e);
                                    if (!ee(r, a)) return !1;
                                    for (; n < e.coordinates.length - 1; n++) {
                                        if (Zt({ type: "Point", coordinates: ne(e.coordinates[n], e.coordinates[n + 1]) }, t, { ignoreBoundary: !0 })) {
                                            i = !0;
                                            break;
                                        }
                                    }
                                    return i;
                                })(i, n);
                            case "Polygon":
                                return (function (t, e) {
                                    if ("Feature" === t.type && null === t.geometry) return !1;
                                    if ("Feature" === e.type && null === e.geometry) return !1;
                                    var i = zt(t),
                                        n = zt(e);
                                    if (!ee(i, n)) return !1;
                                    for (var r = Pt(e).coordinates, a = 0, o = r; a < o.length; a++)
                                        for (var s = 0, l = o[a]; s < l.length; s++) {
                                            if (!Zt(l[s], t)) return !1;
                                        }
                                    return !0;
                                })(i, n);
                            case "MultiPoint":
                                return (function (t, e) {
                                    for (var i = 0, n = e.coordinates; i < n.length; i++) {
                                        if (!Zt(n[i], t, { ignoreBoundary: !0 })) return !1;
                                    }
                                    return !0;
                                })(i, n);
                            default:
                                throw new Error("feature2 " + a + " geometry not supported");
                        }
                    default:
                        throw new Error("feature1 " + r + " geometry not supported");
                }
            }
            function ee(t, e) {
                return !(t[0] > e[0]) && !(t[2] < e[2]) && !(t[1] > e[1]) && !(t[3] < e[3]);
            }
            function ie(t, e) {
                return t[0] === e[0] && t[1] === e[1];
            }
            function ne(t, e) {
                return [(t[0] + e[0]) / 2, (t[1] + e[1]) / 2];
            }
            var re = i(2676),
                ae = i.n(re);
            function oe(t) {
                var e = { type: "Feature" };
                return (e.geometry = t), e;
            }
            function se(t) {
                return "Feature" === t.type ? t.geometry : t;
            }
            function le(t) {
                return t.geometry.coordinates;
            }
            function he(t) {
                return oe({ type: "Polygon", coordinates: t });
            }
            function ue(t) {
                return oe({ type: "MultiPolygon", coordinates: t });
            }
            function ce(t) {
                return Array.isArray(t) ? 1 + ce(t[0]) : -1;
            }
            function pe(t) {
                t instanceof L.Polyline && (t = t.toGeoJSON(15));
                var e = le(t),
                    i = ce(e),
                    n = [];
                return (
                    i > 1
                        ? e.forEach(function (t) {
                            n.push(
                                (function (t) {
                                    return oe({ type: "LineString", coordinates: t });
                                })(t)
                            );
                        })
                        : n.push(t),
                    n
                );
            }
            function de(t) {
                var e = [];
                return (
                    t.eachLayer(function (t) {
                        e.push(le(t.toGeoJSON(15)));
                    }),
                    (function (t) {
                        return oe({ type: "MultiLineString", coordinates: t });
                    })(e)
                );
            }
            function fe(t, e) {
                return (
                    (function (t) {
                        if (Array.isArray(t)) return t;
                    })(t) ||
                    (function (t, e) {
                        var i = null == t ? null : ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                        if (null == i) return;
                        var n,
                            r,
                            a = [],
                            o = !0,
                            s = !1;
                        try {
                            for (i = i.call(t); !(o = (n = i.next()).done) && (a.push(n.value), !e || a.length !== e); o = !0);
                        } catch (l) {
                            (s = !0), (r = l);
                        } finally {
                            try {
                                o || null == i["return"] || i["return"]();
                            } finally {
                                if (s) throw r;
                            }
                        }
                        return a;
                    })(t, e) ||
                    (function (t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return ge(t, e);
                        var i = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === i && t.constructor && (i = t.constructor.name);
                        if ("Map" === i || "Set" === i) return Array.from(t);
                        if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return ge(t, e);
                    })(t, e) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function ge(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n;
            }
            at.Cut = at.Polygon.extend({
                initialize: function (t) {
                    (this._map = t), (this._shape = "Cut"), (this.toolbarButtonName = "cutPolygon");
                },
                _finishShape: function () {
                    var t = this;
                    if (((this._editedLayers = []), this.options.allowSelfIntersection || (this._handleSelfIntersection(!0, this._layer.getLatLngs()[0]), !this._doesSelfIntersect))) {
                        var e = this._layer.getLatLngs(),
                            i = L.polygon(e, this.options.pathOptions);
                        (i._latlngInfos = this._layer._latlngInfo),
                            this.cut(i),
                            this._cleanupSnapping(),
                            this._otherSnapLayers.splice(this._tempSnapLayerIndex, 1),
                            delete this._tempSnapLayerIndex,
                            this._editedLayers.forEach(function (e) {
                                var i = e.layer,
                                    n = e.originalLayer;
                                t._fireCut(n, i, n), t._fireCut(t._map, i, n), n.pm._fireEdit();
                            }),
                            (this._editedLayers = []),
                            this.disable(),
                            this.options.continueDrawing && this.enable();
                    }
                },
                cut: function (t) {
                    var e = this,
                        i = this._map._layers,
                        n = t._latlngInfos || [];
                    Object.keys(i)
                        .map(function (t) {
                            return i[t];
                        })
                        .filter(function (t) {
                            return t.pm;
                        })
                        .filter(function (t) {
                            return !t._pmTempLayer;
                        })
                        .filter(function (t) {
                            return (!L.PM.optIn && !t.options.pmIgnore) || (L.PM.optIn && !1 === t.options.pmIgnore);
                        })
                        .filter(function (t) {
                            return t instanceof L.Polyline;
                        })
                        .filter(function (e) {
                            return e !== t;
                        })
                        .filter(function (t) {
                            return t.pm.options.allowCutting;
                        })
                        .filter(function (t) {
                            return !(e.options.layersToCut && L.Util.isArray(e.options.layersToCut) && e.options.layersToCut.length > 0) || e.options.layersToCut.indexOf(t) > -1;
                        })
                        .filter(function (t) {
                            return !e._layerGroup.hasLayer(t);
                        })
                        .filter(function (e) {
                            try {
                                var i = !!jt(t.toGeoJSON(15), e.toGeoJSON(15)).features.length > 0;
                                return i || (e instanceof L.Polyline && !(e instanceof L.Polygon))
                                    ? i
                                    : ((n = t.toGeoJSON(15)), (r = e.toGeoJSON(15)), (a = se(n)), (o = se(r)), !(0 === (s = ae().intersection(a.coordinates, o.coordinates)).length || !(1 === s.length ? he(s[0]) : ue(s))));
                            } catch (l) {
                                return e instanceof L.Polygon && console.error("You can't cut polygons with self-intersections"), !1;
                            }
                            var n, r, a, o, s;
                        })
                        .forEach(function (i) {
                            var r;
                            if (i instanceof L.Polygon) {
                                var a = (r = L.polygon(i.getLatLngs())).getLatLngs();
                                n.forEach(function (t) {
                                    if (t && t.snapInfo) {
                                        var i = t.latlng,
                                            n = e._calcClosestLayer(i, [r]);
                                        if (n && n.segment && n.distance < e.options.snapDistance) {
                                            var o = n.segment;
                                            if (o && 2 === o.length) {
                                                var s = L.PM.Utils._getIndexFromSegment(a, o),
                                                    l = s.indexPath,
                                                    h = s.parentPath,
                                                    u = s.newIndex;
                                                (l.length > 1 ? R()(a, h) : a).splice(u, 0, i);
                                            }
                                        }
                                    }
                                });
                            } else r = i;
                            var o = e._cutLayer(t, r),
                                s = L.geoJSON(o, i.options);
                            if (1 === s.getLayers().length) {
                                var l = s.getLayers();
                                s = fe(l, 1)[0];
                            }
                            e._setPane(s, "layerPane");
                            var h = s.addTo(e._map.pm._getContainingLayer());
                            if (
                                (h.pm.enable(i.pm.options),
                                    h.pm.disable(),
                                    (i._pmTempLayer = !0),
                                    (t._pmTempLayer = !0),
                                    i.remove(),
                                    i.removeFrom(e._map.pm._getContainingLayer()),
                                    t.remove(),
                                    t.removeFrom(e._map.pm._getContainingLayer()),
                                    h.getLayers && 0 === h.getLayers().length && e._map.pm.removeLayer({ target: h }),
                                    h instanceof L.LayerGroup
                                        ? (h.eachLayer(function (t) {
                                            e._addDrawnLayerProp(t);
                                        }),
                                            e._addDrawnLayerProp(h))
                                        : e._addDrawnLayerProp(h),
                                    e.options.layersToCut && L.Util.isArray(e.options.layersToCut) && e.options.layersToCut.length > 0)
                            ) {
                                var u = e.options.layersToCut.indexOf(i);
                                u > -1 && e.options.layersToCut.splice(u, 1);
                            }
                            e._editedLayers.push({ layer: h, originalLayer: i });
                        });
                },
                _cutLayer: function (t, e) {
                    var i,
                        n,
                        r,
                        a,
                        o,
                        s,
                        l = L.geoJSON();
                    if (e instanceof L.Polygon) (n = e.toGeoJSON(15)), (r = t.toGeoJSON(15)), (a = se(n)), (o = se(r)), (i = 0 === (s = ae().difference(a.coordinates, o.coordinates)).length ? null : 1 === s.length ? he(s[0]) : ue(s));
                    else {
                        var h = pe(e);
                        h.forEach(function (e) {
                            var i = Xt(e, t.toGeoJSON(15));
                            (i && i.features.length > 0 ? L.geoJSON(i) : L.geoJSON(e)).getLayers().forEach(function (e) {
                                te(t.toGeoJSON(15), e.toGeoJSON(15)) || e.addTo(l);
                            });
                        }),
                            (i = h.length > 1 ? de(l) : l.toGeoJSON(15));
                    }
                    return i;
                },
                _change: L.Util.falseFn,
            });
            const _e = {
                enableLayerDrag: function () {
                    if (this.options.draggable && this._layer._map) {
                        this.disable(),
                            (this._layerDragEnabled = !0),
                            this._map || (this._map = this._layer._map),
                            (this._layer instanceof L.Marker || this._layer instanceof L.ImageOverlay) && L.DomEvent.on(this._getDOMElem(), "dragstart", this._stopDOMImageDrag),
                            this._layer.dragging && this._layer.dragging.disable(),
                            (this._tempDragCoord = null),
                            F(this._layer) instanceof L.Canvas ? (this._layer.on("mouseout", this.removeDraggingClass, this), this._layer.on("mouseover", this.addDraggingClass, this)) : this.addDraggingClass(),
                            (this._originalMapDragState = this._layer._map.dragging._enabled),
                            (this._safeToCacheDragState = !0);
                        var t = this._getDOMElem();
                        t &&
                            (F(this._layer) instanceof L.Canvas
                                ? (this._layer.on("touchstart mousedown", this._dragMixinOnMouseDown, this), this._map.pm._addTouchEvents(t))
                                : L.DomEvent.on(t, "touchstart mousedown", this._simulateMouseDownEvent, this)),
                            this._fireDragEnable();
                    }
                },
                disableLayerDrag: function () {
                    (this._layerDragEnabled = !1),
                        F(this._layer) instanceof L.Canvas ? (this._layer.off("mouseout", this.removeDraggingClass, this), this._layer.off("mouseover", this.addDraggingClass, this)) : this.removeDraggingClass(),
                        this._originalMapDragState && this._dragging && this._map.dragging.enable(),
                        (this._safeToCacheDragState = !1),
                        this._layer.dragging && this._layer.dragging.disable();
                    var t = this._getDOMElem();
                    t &&
                        (F(this._layer) instanceof L.Canvas
                            ? (this._layer.off("touchstart mousedown", this._dragMixinOnMouseDown, this), this._map.pm._removeTouchEvents(t))
                            : L.DomEvent.off(t, "touchstart mousedown", this._simulateMouseDownEvent, this)),
                        this._layerDragged && this._fireUpdate(),
                        (this._layerDragged = !1),
                        this._fireDragDisable();
                },
                dragging: function () {
                    return this._dragging;
                },
                layerDragEnabled: function () {
                    return !!this._layerDragEnabled;
                },
                _simulateMouseDownEvent: function (t) {
                    var e = { originalEvent: t, target: this._layer },
                        i = t.touches ? t.touches[0] : t;
                    return (e.containerPoint = this._map.mouseEventToContainerPoint(i)), (e.latlng = this._map.containerPointToLatLng(e.containerPoint)), this._dragMixinOnMouseDown(e), !1;
                },
                _simulateMouseMoveEvent: function (t) {
                    var e = { originalEvent: t, target: this._layer },
                        i = t.touches ? t.touches[0] : t;
                    return (e.containerPoint = this._map.mouseEventToContainerPoint(i)), (e.latlng = this._map.containerPointToLatLng(e.containerPoint)), this._dragMixinOnMouseMove(e), !1;
                },
                _simulateMouseUpEvent: function (t) {
                    var e = { originalEvent: t, target: this._layer };
                    return -1 === t.type.indexOf("touch") && ((e.containerPoint = this._map.mouseEventToContainerPoint(t)), (e.latlng = this._map.containerPointToLatLng(e.containerPoint))), this._dragMixinOnMouseUp(e), !1;
                },
                _dragMixinOnMouseDown: function (t) {
                    if (!(t.originalEvent.button > 0)) {
                        this._overwriteEventIfItComesFromMarker(t);
                        var e = t._fromLayerSync,
                            i = this._syncLayers("_dragMixinOnMouseDown", t);
                        this._layer instanceof L.Marker && (!this.options.snappable || e || i ? this._disableSnapping() : this._initSnappableMarkers()),
                            this._layer instanceof L.CircleMarker &&
                            !(this._layer instanceof L.Circle) &&
                            (!this.options.snappable || e || i
                                ? this._layer.pm.options.editable
                                    ? this._layer.pm._disableSnapping()
                                    : this._layer.pm._disableSnappingDrag()
                                : this._layer.pm.options.editable || this._initSnappableMarkersDrag()),
                            this._safeToCacheDragState && ((this._originalMapDragState = this._layer._map.dragging._enabled), (this._safeToCacheDragState = !1)),
                            (this._tempDragCoord = t.latlng),
                            L.DomEvent.on(this._map.getContainer(), "touchend mouseup", this._simulateMouseUpEvent, this),
                            L.DomEvent.on(this._map.getContainer(), "touchmove mousemove", this._simulateMouseMoveEvent, this);
                    }
                },
                _dragMixinOnMouseMove: function (t) {
                    this._overwriteEventIfItComesFromMarker(t);
                    var e = this._getDOMElem();
                    this._syncLayers("_dragMixinOnMouseMove", t),
                        this._dragging ||
                        ((this._dragging = !0),
                            L.DomUtil.addClass(e, "leaflet-pm-dragging"),
                            this._layer instanceof L.Marker || this._layer.bringToFront(),
                            this._originalMapDragState && this._map.dragging.disable(),
                            this._fireDragStart()),
                        this._tempDragCoord || (this._tempDragCoord = t.latlng),
                        this._onLayerDrag(t),
                        this._layer instanceof L.CircleMarker && this._layer.pm._updateHiddenPolyCircle();
                },
                _dragMixinOnMouseUp: function (t) {
                    var e = this,
                        i = this._getDOMElem();
                    return (
                        this._syncLayers("_dragMixinOnMouseUp", t),
                        this._originalMapDragState && this._map.dragging.enable(),
                        (this._safeToCacheDragState = !0),
                        L.DomEvent.off(this._map.getContainer(), "touchmove mousemove", this._simulateMouseMoveEvent, this),
                        L.DomEvent.off(this._map.getContainer(), "touchend mouseup", this._simulateMouseUpEvent, this),
                        !!this._dragging &&
                        (this._layer instanceof L.CircleMarker && this._layer.pm._updateHiddenPolyCircle(),
                            (this._layerDragged = !0),
                            window.setTimeout(function () {
                                (e._dragging = !1), i && L.DomUtil.removeClass(i, "leaflet-pm-dragging"), e._fireDragEnd(), e._fireEdit();
                            }, 10),
                            !0)
                    );
                },
                _onLayerDrag: function (t) {
                    var e = t.latlng,
                        i = e.lat - this._tempDragCoord.lat,
                        n = e.lng - this._tempDragCoord.lng,
                        r = function u(t) {
                            return t.map(function (t) {
                                if (Array.isArray(t)) return u(t);
                                var e = { lat: t.lat + i, lng: t.lng + n };
                                return (t.alt || 0 === t.alt) && (e.alt = t.alt), e;
                            });
                        };
                    if (this._layer instanceof L.Circle || (this._layer instanceof L.CircleMarker && this._layer.options.editable)) {
                        var a = r([this._layer.getLatLng()]);
                        this._layer.setLatLng(a[0]), this._fireChange(this._layer.getLatLng(), "Edit");
                    } else if (this._layer instanceof L.CircleMarker || this._layer instanceof L.Marker) {
                        var o = this._layer.getLatLng();
                        this._layer._snapped && (o = this._layer._orgLatLng);
                        var s = r([o]);
                        this._layer.setLatLng(s[0]), this._fireChange(this._layer.getLatLng(), "Edit");
                    } else if (this._layer instanceof L.ImageOverlay) {
                        var l = r([this._layer.getBounds().getNorthWest(), this._layer.getBounds().getSouthEast()]);
                        this._layer.setBounds(l), this._fireChange(this._layer.getBounds(), "Edit");
                    } else {
                        var h = r(this._layer.getLatLngs());
                        this._layer.setLatLngs(h), this._fireChange(this._layer.getLatLngs(), "Edit");
                    }
                    (this._tempDragCoord = e), (t.layer = this._layer), this._fireDrag(t);
                },
                addDraggingClass: function () {
                    var t = this._getDOMElem();
                    t && L.DomUtil.addClass(t, "leaflet-pm-draggable");
                },
                removeDraggingClass: function () {
                    var t = this._getDOMElem();
                    t && L.DomUtil.removeClass(t, "leaflet-pm-draggable");
                },
                _getDOMElem: function () {
                    var t = null;
                    return (
                        this._layer._path
                            ? (t = this._layer._path)
                            : this._layer._renderer && this._layer._renderer._container
                                ? (t = this._layer._renderer._container)
                                : this._layer._image
                                    ? (t = this._layer._image)
                                    : this._layer._icon && (t = this._layer._icon),
                        t
                    );
                },
                _overwriteEventIfItComesFromMarker: function (t) {
                    t.target.getLatLng && (!t.target._radius || t.target._radius <= 10) && ((t.containerPoint = this._map.mouseEventToContainerPoint(t.originalEvent)), (t.latlng = this._map.containerPointToLatLng(t.containerPoint)));
                },
                _syncLayers: function (t, e) {
                    var i = this;
                    if (this.enabled()) return !1;
                    if (!e._fromLayerSync && this._layer === e.target && this.options.syncLayersOnDrag) {
                        e._fromLayerSync = !0;
                        var n = [];
                        if (L.Util.isArray(this.options.syncLayersOnDrag))
                            (n = this.options.syncLayersOnDrag),
                                this.options.syncLayersOnDrag.forEach(function (t) {
                                    t instanceof L.LayerGroup && (n = n.concat(t.pm.getLayers(!0)));
                                });
                        else if (!0 === this.options.syncLayersOnDrag && this._parentLayerGroup)
                            for (var r in this._parentLayerGroup) {
                                var a = this._parentLayerGroup[r];
                                a.pm && (n = a.pm.getLayers(!0));
                            }
                        return (
                            L.Util.isArray(n) &&
                            n.length > 0 &&
                            (n = n
                                .filter(function (t) {
                                    return !!t.pm;
                                })
                                .filter(function (t) {
                                    return !!t.pm.options.draggable;
                                })).forEach(function (n) {
                                    n !== i._layer && n.pm[t] && ((n._snapped = !1), n.pm[t](e));
                                }),
                            n.length > 0
                        );
                    }
                    return !1;
                },
                _stopDOMImageDrag: function (t) {
                    return t.preventDefault(), !1;
                },
            };
            function ye(t, e, i) {
                var n = i.getMaxZoom();
                if ((n === Infinity && (n = i.getZoom()), L.Util.isArray(t))) {
                    var r = [];
                    return (
                        t.forEach(function (t) {
                            r.push(ye(t, e, i));
                        }),
                        r
                    );
                }
                return t instanceof L.LatLng
                    ? (function (t, e, i, n) {
                        return i.unproject(e.transform(i.project(t, n)), n);
                    })(t, e, i, n)
                    : null;
            }
            function me(t, e) {
                e instanceof L.Layer && (e = e.getLatLng());
                var i = t.getMaxZoom();
                return i === Infinity && (i = t.getZoom()), t.project(e, i);
            }
            function ve(t, e) {
                var i = t.getMaxZoom();
                return i === Infinity && (i = t.getZoom()), t.unproject(e, i);
            }
            var Le = {
                _onRotateStart: function (t) {
                    this._preventRenderingMarkers(!0),
                        (this._rotationOriginLatLng = this._getRotationCenter().clone()),
                        (this._rotationOriginPoint = me(this._map, this._rotationOriginLatLng)),
                        (this._rotationStartPoint = me(this._map, t.target.getLatLng())),
                        (this._initialRotateLatLng = U(this._layer)),
                        (this._startAngle = this.getAngle());
                    var e = U(this._rotationLayer, this._rotationLayer.pm._rotateOrgLatLng);
                    this._fireRotationStart(this._rotationLayer, e), this._fireRotationStart(this._map, e);
                },
                _onRotate: function (t) {
                    var e = me(this._map, t.target.getLatLng()),
                        i = this._rotationStartPoint,
                        n = this._rotationOriginPoint,
                        r = Math.atan2(e.y - n.y, e.x - n.x) - Math.atan2(i.y - n.y, i.x - n.x);
                    this._layer.setLatLngs(this._rotateLayer(r, this._initialRotateLatLng, this._rotationOriginLatLng, L.PM.Matrix.init(), this._map));
                    var a = this;
                    !(function h(t) {
                        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [],
                            i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
                        if ((i > -1 && e.push(i), L.Util.isArray(t[0])))
                            t.forEach(function (t, i) {
                                return h(t, e.slice(), i);
                            });
                        else {
                            var n = R()(a._markers, e);
                            t.forEach(function (t, e) {
                                n[e].setLatLng(t);
                            });
                        }
                    })(this._layer.getLatLngs());
                    var o = U(this._rotationLayer);
                    this._rotationLayer.setLatLngs(this._rotateLayer(r, this._rotationLayer.pm._rotateOrgLatLng, this._rotationOriginLatLng, L.PM.Matrix.init(), this._map));
                    var s = (180 * r) / Math.PI,
                        l = (s = s < 0 ? s + 360 : s) + this._startAngle;
                    this._setAngle(l),
                        this._rotationLayer.pm._setAngle(l),
                        this._fireRotation(this._rotationLayer, s, o),
                        this._fireRotation(this._map, s, o),
                        this._rotationLayer.pm._fireChange(this._rotationLayer.getLatLngs(), "Rotation");
                },
                _onRotateEnd: function () {
                    var t = this._startAngle;
                    delete this._rotationOriginLatLng, delete this._rotationOriginPoint, delete this._rotationStartPoint, delete this._initialRotateLatLng, delete this._startAngle;
                    var e = U(this._rotationLayer, this._rotationLayer.pm._rotateOrgLatLng);
                    (this._rotationLayer.pm._rotateOrgLatLng = U(this._rotationLayer)),
                        this._fireRotationEnd(this._rotationLayer, t, e),
                        this._fireRotationEnd(this._map, t, e),
                        this._rotationLayer.pm._fireEdit(this._rotationLayer, "Rotation"),
                        this._preventRenderingMarkers(!1),
                        (this._layerRotated = !0);
                },
                _rotateLayer: function (t, e, i, n, r) {
                    var a = me(r, i);
                    return (this._matrix = n.clone().rotate(t, a).flip()), ye(e, this._matrix, r);
                },
                _setAngle: function (t) {
                    (t = t < 0 ? t + 360 : t), (this._angle = t % 360);
                },
                _getRotationCenter: function () {
                    var t = L.polygon(this._layer.getLatLngs(), { stroke: !1, fill: !1, pmIgnore: !0 }).addTo(this._layer._map),
                        e = t.getCenter();
                    return t.removeFrom(this._layer._map), e;
                },
                enableRotate: function () {
                    if (this.options.allowRotation) {
                        (this._rotatePoly = L.polygon(this._layer.getLatLngs(), { fill: !1, stroke: !1, pmIgnore: !1, snapIgnore: !0 }).addTo(this._layer._map)),
                            this._rotatePoly.pm._setAngle(this.getAngle()),
                            this._rotatePoly.pm.setOptions(this._layer._map.pm.getGlobalOptions()),
                            this._rotatePoly.pm.setOptions({ rotate: !0, snappable: !1, hideMiddleMarkers: !0 }),
                            (this._rotatePoly.pm._rotationLayer = this._layer),
                            this._rotatePoly.pm.enable(),
                            (this._rotateOrgLatLng = U(this._layer)),
                            (this._rotateEnabled = !0),
                            this._layer.on("remove", this.disableRotate, this),
                            this._fireRotationEnable(this._layer),
                            this._fireRotationEnable(this._layer._map);
                    } else this.disableRotate();
                },
                disableRotate: function () {
                    this.rotateEnabled() &&
                        (this._rotatePoly.pm._layerRotated && this._fireUpdate(),
                            (this._rotatePoly.pm._layerRotated = !1),
                            this._rotatePoly.pm.disable(),
                            this._rotatePoly.remove(),
                            this._rotatePoly.pm.setOptions({ rotate: !1 }),
                            (this._rotatePoly = undefined),
                            (this._rotateOrgLatLng = undefined),
                            this._layer.off("remove", this.disableRotate, this),
                            (this._rotateEnabled = !1),
                            this._fireRotationDisable(this._layer),
                            this._fireRotationDisable(this._layer._map));
                },
                rotateEnabled: function () {
                    return this._rotateEnabled;
                },
                rotateLayer: function (t) {
                    var e = this.getAngle(),
                        i = this._layer.getLatLngs(),
                        n = t * (Math.PI / 180);
                    this._layer.setLatLngs(this._rotateLayer(n, this._layer.getLatLngs(), this._getRotationCenter(), L.PM.Matrix.init(), this._layer._map)),
                        (this._rotateOrgLatLng = L.polygon(this._layer.getLatLngs()).getLatLngs()),
                        this._setAngle(this.getAngle() + t),
                        this.rotateEnabled() &&
                        this._rotatePoly &&
                        this._rotatePoly.pm.enabled() &&
                        (this._rotatePoly.setLatLngs(this._rotateLayer(n, this._rotatePoly.getLatLngs(), this._getRotationCenter(), L.PM.Matrix.init(), this._rotatePoly._map)), this._rotatePoly.pm._initMarkers());
                    var r = this.getAngle() - e;
                    (r = r < 0 ? r + 360 : r),
                        (this._startAngle = e),
                        this._fireRotation(this._layer, r, i, this._layer),
                        this._fireRotation(this._map, r, i, this._layer),
                        delete this._startAngle,
                        this._fireChange(this._layer.getLatLngs(), "Rotation");
                },
                rotateLayerToAngle: function (t) {
                    var e = t - this.getAngle();
                    this.rotateLayer(e);
                },
                getAngle: function () {
                    return this._angle || 0;
                },
            };
            const be = Le;
            const ke = L.Class.extend({
                includes: [_e, rt, be, S],
                options: {
                    snappable: !0,
                    snapDistance: 20,
                    allowSelfIntersection: !0,
                    allowSelfIntersectionEdit: !1,
                    preventMarkerRemoval: !1,
                    removeLayerBelowMinVertexCount: !0,
                    limitMarkersToCount: -1,
                    hideMiddleMarkers: !1,
                    snapSegment: !0,
                    syncLayersOnDrag: !1,
                    draggable: !0,
                    allowEditing: !0,
                    allowRemoval: !0,
                    allowCutting: !0,
                    allowRotation: !0,
                    addVertexOn: "click",
                    removeVertexOn: "contextmenu",
                    removeVertexValidation: undefined,
                    addVertexValidation: undefined,
                    moveVertexValidation: undefined,
                },
                setOptions: function (t) {
                    L.Util.setOptions(this, t);
                },
                getOptions: function () {
                    return this.options;
                },
                applyOptions: function () { },
                isPolygon: function () {
                    return this._layer instanceof L.Polygon;
                },
                getShape: function () {
                    return this._shape;
                },
                _setPane: function (t, e) {
                    "layerPane" === e
                        ? (t.options.pane = (this._map.pm.globalOptions.panes && this._map.pm.globalOptions.panes.layerPane) || "overlayPane")
                        : "vertexPane" === e
                            ? (t.options.pane = (this._map.pm.globalOptions.panes && this._map.pm.globalOptions.panes.vertexPane) || "markerPane")
                            : "markerPane" === e && (t.options.pane = (this._map.pm.globalOptions.panes && this._map.pm.globalOptions.panes.markerPane) || "markerPane");
                },
                remove: function () {
                    (this._map || this._layer._map).pm.removeLayer({ target: this._layer });
                },
                _vertexValidation: function (t, e) {
                    var i = e.target,
                        n = { layer: this._layer, marker: i, event: e },
                        r = "";
                    return (
                        "move" === t ? (r = "moveVertexValidation") : "add" === t ? (r = "addVertexValidation") : "remove" === t && (r = "removeVertexValidation"),
                        this.options[r] && "function" == typeof this.options[r] && !this.options[r](n) ? ("move" === t && (i._cancelDragEventChain = i.getLatLng()), !1) : ((i._cancelDragEventChain = null), !0)
                    );
                },
                _vertexValidationDrag: function (t) {
                    return !t._cancelDragEventChain || ((t._latlng = t._cancelDragEventChain), t.update(), !1);
                },
                _vertexValidationDragEnd: function (t) {
                    return !t._cancelDragEventChain || ((t._cancelDragEventChain = null), !1);
                },
            });
            function Me(t) {
                return (
                    (function (t) {
                        if (Array.isArray(t)) return xe(t);
                    })(t) ||
                    (function (t) {
                        if (("undefined" != typeof Symbol && null != t[Symbol.iterator]) || null != t["@@iterator"]) return Array.from(t);
                    })(t) ||
                    (function (t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return xe(t, e);
                        var i = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === i && t.constructor && (i = t.constructor.name);
                        if ("Map" === i || "Set" === i) return Array.from(t);
                        if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return xe(t, e);
                    })(t) ||
                    (function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function xe(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n;
            }
            (ke.LayerGroup = L.Class.extend({
                initialize: function (t) {
                    var e = this;
                    (this._layerGroup = t),
                        (this._layers = this.getLayers()),
                        this._getMap(),
                        this._layers.forEach(function (t) {
                            return e._initLayer(t);
                        });
                    this._layerGroup.on(
                        "layeradd",
                        L.Util.throttle(
                            function (t) {
                                if (!t.layer._pmTempLayer) {
                                    e._layers = e.getLayers();
                                    var i = e._layers.filter(function (t) {
                                        return !t.pm._parentLayerGroup || !(e._layerGroup._leaflet_id in t.pm._parentLayerGroup);
                                    });
                                    i.forEach(function (t) {
                                        e._initLayer(t);
                                    }),
                                        i.length > 0 && e._getMap() && e._getMap().pm.globalEditModeEnabled() && e.enabled() && e.enable(e.getOptions());
                                }
                            },
                            100,
                            this
                        ),
                        this
                    ),
                        this._layerGroup.on(
                            "layerremove",
                            function (t) {
                                e._removeLayerFromGroup(t.target);
                            },
                            this
                        );
                    this._layerGroup.on(
                        "layerremove",
                        L.Util.throttle(
                            function (t) {
                                t.target._pmTempLayer || (e._layers = e.getLayers());
                            },
                            100,
                            this
                        ),
                        this
                    );
                },
                enable: function (t) {
                    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
                    0 === e.length && (this._layers = this.getLayers()),
                        (this._options = t),
                        this._layers.forEach(function (i) {
                            i instanceof L.LayerGroup ? -1 === e.indexOf(i._leaflet_id) && (e.push(i._leaflet_id), i.pm.enable(t, e)) : i.pm.enable(t);
                        });
                },
                disable: function () {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                    0 === t.length && (this._layers = this.getLayers()),
                        this._layers.forEach(function (e) {
                            e instanceof L.LayerGroup ? -1 === t.indexOf(e._leaflet_id) && (t.push(e._leaflet_id), e.pm.disable(t)) : e.pm.disable();
                        });
                },
                enabled: function () {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                    0 === t.length && (this._layers = this.getLayers());
                    var e = this._layers.find(function (e) {
                        return e instanceof L.LayerGroup ? -1 === t.indexOf(e._leaflet_id) && (t.push(e._leaflet_id), e.pm.enabled(t)) : e.pm.enabled();
                    });
                    return !!e;
                },
                toggleEdit: function (t) {
                    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
                    0 === e.length && (this._layers = this.getLayers()),
                        (this._options = t),
                        this._layers.forEach(function (i) {
                            i instanceof L.LayerGroup ? -1 === e.indexOf(i._leaflet_id) && (e.push(i._leaflet_id), i.pm.toggleEdit(t, e)) : i.pm.toggleEdit(t);
                        });
                },
                _initLayer: function (t) {
                    var e = L.Util.stamp(this._layerGroup);
                    t.pm._parentLayerGroup || (t.pm._parentLayerGroup = {}), (t.pm._parentLayerGroup[e] = this._layerGroup);
                },
                _removeLayerFromGroup: function (t) {
                    if (t.pm && t.pm._layerGroup) {
                        var e = L.Util.stamp(this._layerGroup);
                        delete t.pm._layerGroup[e];
                    }
                },
                dragging: function () {
                    if (((this._layers = this.getLayers()), this._layers)) {
                        var t = this._layers.find(function (t) {
                            return t.pm.dragging();
                        });
                        return !!t;
                    }
                    return !1;
                },
                getOptions: function () {
                    return this.options;
                },
                _getMap: function () {
                    var t;
                    return (
                        this._map ||
                        (null ===
                            (t = this._layers.find(function (t) {
                                return !!t._map;
                            })) || void 0 === t
                            ? void 0
                            : t._map) ||
                        null
                    );
                },
                getLayers: function () {
                    var t = arguments.length > 0 && arguments[0] !== undefined && arguments[0],
                        e = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1],
                        i = !(arguments.length > 2 && arguments[2] !== undefined) || arguments[2],
                        n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [],
                        r = [];
                    return (
                        t
                            ? this._layerGroup.getLayers().forEach(function (t) {
                                r.push(t), t instanceof L.LayerGroup && -1 === n.indexOf(t._leaflet_id) && (n.push(t._leaflet_id), (r = r.concat(t.pm.getLayers(!0, !0, !0, n))));
                            })
                            : (r = this._layerGroup.getLayers()),
                        i &&
                        (r = r.filter(function (t) {
                            return !(t instanceof L.LayerGroup);
                        })),
                        e &&
                        (r = (r = (r = r.filter(function (t) {
                            return !!t.pm;
                        })).filter(function (t) {
                            return !t._pmTempLayer;
                        })).filter(function (t) {
                            return (!L.PM.optIn && !t.options.pmIgnore) || (L.PM.optIn && !1 === t.options.pmIgnore);
                        })),
                        r
                    );
                },
                setOptions: function (t) {
                    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
                    0 === e.length && (this._layers = this.getLayers()),
                        (this.options = t),
                        this._layers.forEach(function (i) {
                            i.pm && (i instanceof L.LayerGroup ? -1 === e.indexOf(i._leaflet_id) && (e.push(i._leaflet_id), i.pm.setOptions(t, e)) : i.pm.setOptions(t));
                        });
                },
            })),
                (ke.Marker = ke.extend({
                    _shape: "Marker",
                    initialize: function (t) {
                        (this._layer = t), (this._enabled = !1), this._layer.on("dragend", this._onDragEnd, this);
                    },
                    enable: function () {
                        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { draggable: !0 };
                        L.Util.setOptions(this, t),
                            this.options.allowEditing && this._layer._map
                                ? ((this._map = this._layer._map), this.enabled() && this.disable(), this.applyOptions(), this._layer.on("remove", this.disable, this), (this._enabled = !0), this._fireEnable())
                                : this.disable();
                    },
                    disable: function () {
                        this.enabled() &&
                            (this.disableLayerDrag(),
                                this._layer.off("remove", this.disable, this),
                                this._layer.off("contextmenu", this._removeMarker, this),
                                this._layerEdited && this._fireUpdate(),
                                (this._layerEdited = !1),
                                this._fireDisable(),
                                (this._enabled = !1));
                    },
                    enabled: function () {
                        return this._enabled;
                    },
                    toggleEdit: function (t) {
                        this.enabled() ? this.disable() : this.enable(t);
                    },
                    applyOptions: function () {
                        this.options.snappable ? this._initSnappableMarkers() : this._disableSnapping(),
                            this.options.draggable ? this.enableLayerDrag() : this.disableLayerDrag(),
                            this.options.preventMarkerRemoval || this._layer.on("contextmenu", this._removeMarker, this);
                    },
                    _removeMarker: function (t) {
                        var e = t.target;
                        e.remove(), this._fireRemove(e), this._fireRemove(this._map, e);
                    },
                    _onDragEnd: function () {
                        this._fireEdit(), (this._layerEdited = !0);
                    },
                    _initSnappableMarkers: function () {
                        var t = this._layer;
                        (this.options.snapDistance = this.options.snapDistance || 30),
                            (this.options.snapSegment = this.options.snapSegment === undefined || this.options.snapSegment),
                            t.off("pm:drag", this._handleSnapping, this),
                            t.on("pm:drag", this._handleSnapping, this),
                            t.off("pm:dragend", this._cleanupSnapping, this),
                            t.on("pm:dragend", this._cleanupSnapping, this),
                            t.off("pm:dragstart", this._unsnap, this),
                            t.on("pm:dragstart", this._unsnap, this);
                    },
                    _disableSnapping: function () {
                        var t = this._layer;
                        t.off("pm:drag", this._handleSnapping, this), t.off("pm:dragend", this._cleanupSnapping, this), t.off("pm:dragstart", this._unsnap, this);
                    },
                }));
            const we = {
                filterMarkerGroup: function () {
                    (this.markerCache = []),
                        this.createCache(),
                        this._layer.on("pm:edit", this.createCache, this),
                        this.applyLimitFilters({}),
                        this._layer.on("pm:disable", this._removeMarkerLimitEvents, this),
                        this.options.limitMarkersToCount > -1 && (this._layer.on("pm:vertexremoved", this._initMarkers, this), this._map.on("mousemove", this.applyLimitFilters, this));
                },
                _removeMarkerLimitEvents: function () {
                    this._map.off("mousemove", this.applyLimitFilters, this),
                        this._layer.off("pm:edit", this.createCache, this),
                        this._layer.off("pm:disable", this._removeMarkerLimitEvents, this),
                        this._layer.off("pm:vertexremoved", this._initMarkers, this);
                },
                createCache: function () {
                    var t = [].concat(Me(this._markerGroup.getLayers()), Me(this.markerCache));
                    this.markerCache = t.filter(function (t, e, i) {
                        return i.indexOf(t) === e;
                    });
                },
                renderLimits: function (t) {
                    var e = this;
                    this.markerCache.forEach(function (i) {
                        t.includes(i) ? e._markerGroup.addLayer(i) : e._markerGroup.removeLayer(i);
                    });
                },
                applyLimitFilters: function (t) {
                    var e = t.latlng,
                        i = void 0 === e ? { lat: 0, lng: 0 } : e;
                    if (!this._preventRenderMarkers) {
                        var n = Me(this._filterClosestMarkers(i));
                        this.renderLimits(n);
                    }
                },
                _filterClosestMarkers: function (t) {
                    var e = Me(this.markerCache),
                        i = this.options.limitMarkersToCount;
                    return (
                        e.sort(function (e, i) {
                            return e._latlng.distanceTo(t) - i._latlng.distanceTo(t);
                        }),
                        e.filter(function (t, e) {
                            return !(i > -1) || e < i;
                        })
                    );
                },
                _preventRenderMarkers: !1,
                _preventRenderingMarkers: function (t) {
                    this._preventRenderMarkers = !!t;
                },
            };
            function Ce(t, e) {
                return (
                    (function (t) {
                        if (Array.isArray(t)) return t;
                    })(t) ||
                    (function (t, e) {
                        var i = null == t ? null : ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                        if (null == i) return;
                        var n,
                            r,
                            a = [],
                            o = !0,
                            s = !1;
                        try {
                            for (i = i.call(t); !(o = (n = i.next()).done) && (a.push(n.value), !e || a.length !== e); o = !0);
                        } catch (l) {
                            (s = !0), (r = l);
                        } finally {
                            try {
                                o || null == i["return"] || i["return"]();
                            } finally {
                                if (s) throw r;
                            }
                        }
                        return a;
                    })(t, e) ||
                    (function (t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return Pe(t, e);
                        var i = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === i && t.constructor && (i = t.constructor.name);
                        if ("Map" === i || "Set" === i) return Array.from(t);
                        if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return Pe(t, e);
                    })(t, e) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function Pe(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n;
            }
            (ke.Line = ke.extend({
                includes: [we],
                _shape: "Line",
                initialize: function (t) {
                    (this._layer = t), (this._enabled = !1);
                },
                enable: function (t) {
                    L.Util.setOptions(this, t),
                        (this._map = this._layer._map),
                        this._map &&
                        (this.options.allowEditing
                            ? (this.enabled() && this.disable(),
                                (this._enabled = !0),
                                this._initMarkers(),
                                this.applyOptions(),
                                this._layer.on("remove", this.disable, this),
                                this.options.allowSelfIntersection || this._layer.on("pm:vertexremoved", this._handleSelfIntersectionOnVertexRemoval, this),
                                this.options.allowSelfIntersection
                                    ? (this.cachedColor = undefined)
                                    : ("#f00000ff" !== this._layer.options.color ? ((this.cachedColor = this._layer.options.color), (this.isRed = !1)) : (this.isRed = !0), this._handleLayerStyle()),
                                this._fireEnable())
                            : this.disable());
                },
                disable: function () {
                    if (this.enabled() && !this._dragging) {
                        (this._enabled = !1),
                            this._markerGroup.clearLayers(),
                            this._markerGroup.removeFrom(this._map),
                            this._layer.off("remove", this.disable, this),
                            this.options.allowSelfIntersection || this._layer.off("pm:vertexremoved", this._handleSelfIntersectionOnVertexRemoval, this);
                        var t = this._layer._path ? this._layer._path : this._layer._renderer._container;
                        L.DomUtil.removeClass(t, "leaflet-pm-draggable"),
                            this.hasSelfIntersection() && L.DomUtil.removeClass(t, "leaflet-pm-invalid"),
                            this._layerEdited && this._fireUpdate(),
                            (this._layerEdited = !1),
                            this._fireDisable();
                    }
                },
                enabled: function () {
                    return this._enabled;
                },
                toggleEdit: function (t) {
                    return this.enabled() ? this.disable() : this.enable(t), this.enabled();
                },
                applyOptions: function () {
                    this.options.snappable ? this._initSnappableMarkers() : this._disableSnapping();
                },
                _initMarkers: function () {
                    var t = this,
                        e = this._map,
                        i = this._layer.getLatLngs();
                    this._markerGroup && this._markerGroup.clearLayers(), (this._markerGroup = new L.LayerGroup()), (this._markerGroup._pmTempLayer = !0);
                    (this._markers = (function n(e) {
                        if (Array.isArray(e[0])) return e.map(n, t);
                        var i = e.map(t._createMarker, t);
                        return (
                            !0 !== t.options.hideMiddleMarkers &&
                            e.map(function (n, r) {
                                var a = t.isPolygon() ? (r + 1) % e.length : r + 1;
                                return t._createMiddleMarker(i[r], i[a]);
                            }),
                            i
                        );
                    })(i)),
                        this.filterMarkerGroup(),
                        e.addLayer(this._markerGroup);
                },
                _createMarker: function (t) {
                    var e = new L.Marker(t, { draggable: !0, icon: L.divIcon({ className: "marker-icon" }) });
                    return (
                        this._setPane(e, "vertexPane"),
                        (e._pmTempLayer = !0),
                        this.options.rotate
                            ? (e.on("dragstart", this._onRotateStart, this), e.on("drag", this._onRotate, this), e.on("dragend", this._onRotateEnd, this))
                            : (e.on("click", this._onVertexClick, this),
                                e.on("dragstart", this._onMarkerDragStart, this),
                                e.on("move", this._onMarkerDrag, this),
                                e.on("dragend", this._onMarkerDragEnd, this),
                                this.options.preventMarkerRemoval || e.on(this.options.removeVertexOn, this._removeMarker, this)),
                        this._markerGroup.addLayer(e),
                        e
                    );
                },
                _createMiddleMarker: function (t, e) {
                    if (!t || !e) return !1;
                    var i = L.PM.Utils.calcMiddleLatLng(this._map, t.getLatLng(), e.getLatLng()),
                        n = this._createMarker(i),
                        r = L.divIcon({ className: "marker-icon marker-icon-middle" });
                    return (
                        n.setIcon(r),
                        (n.leftM = t),
                        (n.rightM = e),
                        (t._middleMarkerNext = n),
                        (e._middleMarkerPrev = n),
                        n.on(this.options.addVertexOn, this._onMiddleMarkerClick, this),
                        n.on("movestart", this._onMiddleMarkerMoveStart, this),
                        n
                    );
                },
                _onMiddleMarkerClick: function (t) {
                    var e = t.target;
                    if (this._vertexValidation("add", t)) {
                        var i = L.divIcon({ className: "marker-icon" });
                        e.setIcon(i), this._addMarker(e, e.leftM, e.rightM);
                    }
                },
                _onMiddleMarkerMoveStart: function (t) {
                    var e = t.target;
                    e.on("moveend", this._onMiddleMarkerMoveEnd, this), this._vertexValidation("add", t) ? ((e._dragging = !0), this._addMarker(e, e.leftM, e.rightM)) : e.on("move", this._onMiddleMarkerMovePrevent, this);
                },
                _onMiddleMarkerMovePrevent: function (t) {
                    var e = t.target;
                    this._vertexValidationDrag(e);
                },
                _onMiddleMarkerMoveEnd: function (t) {
                    var e = t.target;
                    if ((e.off("move", this._onMiddleMarkerMovePrevent, this), e.off("moveend", this._onMiddleMarkerMoveEnd, this), this._vertexValidationDragEnd(e))) {
                        var i = L.divIcon({ className: "marker-icon" });
                        e.setIcon(i),
                            setTimeout(function () {
                                delete e._dragging;
                            }, 100);
                    }
                },
                _addMarker: function (t, e, i) {
                    t.off("movestart", this._onMiddleMarkerMoveStart, this), t.off(this.options.addVertexOn, this._onMiddleMarkerClick, this);
                    var n = t.getLatLng(),
                        r = this._layer._latlngs;
                    delete t.leftM, delete t.rightM;
                    var a = L.PM.Utils.findDeepMarkerIndex(this._markers, e),
                        o = a.indexPath,
                        s = a.index,
                        l = a.parentPath,
                        h = o.length > 1 ? R()(r, l) : r,
                        u = o.length > 1 ? R()(this._markers, l) : this._markers;
                    h.splice(s + 1, 0, n),
                        u.splice(s + 1, 0, t),
                        this._layer.setLatLngs(r),
                        !0 !== this.options.hideMiddleMarkers && (this._createMiddleMarker(e, t), this._createMiddleMarker(t, i)),
                        this._fireEdit(),
                        (this._layerEdited = !0),
                        this._fireChange(this._layer.getLatLngs(), "Edit"),
                        this._fireVertexAdded(t, L.PM.Utils.findDeepMarkerIndex(this._markers, t).indexPath, n),
                        this.options.snappable && this._initSnappableMarkers();
                },
                hasSelfIntersection: function () {
                    return yt(this._layer.toGeoJSON(15)).features.length > 0;
                },
                _handleSelfIntersectionOnVertexRemoval: function () {
                    this._handleLayerStyle(!0), this.hasSelfIntersection() && (this._layer.setLatLngs(this._coordsBeforeEdit), (this._coordsBeforeEdit = null), this._initMarkers());
                },
                _handleLayerStyle: function (t) {
                    var e = this._layer;
                    if (this.hasSelfIntersection()) {
                        if ((!this.options.allowSelfIntersection && this.options.allowSelfIntersectionEdit && this._updateDisabledMarkerStyle(this._markers, !0), this.isRed)) return;
                        t ? this._flashLayer() : (e.setStyle({ color: "#f00000ff" }), (this.isRed = !0)), this._fireIntersect(yt(this._layer.toGeoJSON(15)));
                    } else e.setStyle({ color: this.cachedColor }), (this.isRed = !1), !this.options.allowSelfIntersection && this.options.allowSelfIntersectionEdit && this._updateDisabledMarkerStyle(this._markers, !1);
                },
                _flashLayer: function () {
                    var t = this;
                    this.cachedColor || (this.cachedColor = this._layer.options.color),
                        this._layer.setStyle({ color: "#f00000ff" }),
                        (this.isRed = !0),
                        window.setTimeout(function () {
                            t._layer.setStyle({ color: t.cachedColor }), (t.isRed = !1);
                        }, 200);
                },
                _updateDisabledMarkerStyle: function (t, e) {
                    var i = this;
                    t.forEach(function (t) {
                        Array.isArray(t)
                            ? i._updateDisabledMarkerStyle(t, e)
                            : t._icon && (e && !i._checkMarkerAllowedToDrag(t) ? L.DomUtil.addClass(t._icon, "vertexmarker-disabled") : L.DomUtil.removeClass(t._icon, "vertexmarker-disabled"));
                    });
                },
                _removeMarker: function (t) {
                    var e = t.target;
                    if (this._vertexValidation("remove", t)) {
                        if (!this.options.allowSelfIntersection) {
                            var i = this._layer.getLatLngs();
                            this._coordsBeforeEdit = JSON.parse(JSON.stringify(i));
                        }
                        var n = this._layer.getLatLngs(),
                            r = L.PM.Utils.findDeepMarkerIndex(this._markers, e),
                            a = r.indexPath,
                            o = r.index,
                            s = r.parentPath;
                        if (a) {
                            var l = a.length > 1 ? R()(n, s) : n,
                                h = a.length > 1 ? R()(this._markers, s) : this._markers;
                            if (this.options.removeLayerBelowMinVertexCount || !(l.length <= 2 || (this.isPolygon() && l.length <= 3))) {
                                l.splice(o, 1), this._layer.setLatLngs(n), this.isPolygon() && l.length <= 2 && l.splice(0, l.length);
                                var u = !1;
                                if (
                                    (l.length <= 1 && (l.splice(0, l.length), this._layer.setLatLngs(n), this.disable(), this.enable(this.options), (u = !0)),
                                        j(n) && this._layer.remove(),
                                        (n = G(n)),
                                        this._layer.setLatLngs(n),
                                        (this._markers = G(this._markers)),
                                        !u &&
                                        ((h = a.length > 1 ? R()(this._markers, s) : this._markers),
                                            e._middleMarkerPrev && this._markerGroup.removeLayer(e._middleMarkerPrev),
                                            e._middleMarkerNext && this._markerGroup.removeLayer(e._middleMarkerNext),
                                            this._markerGroup.removeLayer(e),
                                            h))
                                ) {
                                    var c, p;
                                    if ((this.isPolygon() ? ((c = (o + 1) % h.length), (p = (o + (h.length - 1)) % h.length)) : ((p = o - 1 < 0 ? undefined : o - 1), (c = o + 1 >= h.length ? undefined : o + 1)), c !== p)) {
                                        var d = h[p],
                                            f = h[c];
                                        !0 !== this.options.hideMiddleMarkers && this._createMiddleMarker(d, f);
                                    }
                                    h.splice(o, 1);
                                }
                                this._fireEdit(), (this._layerEdited = !0), this._fireVertexRemoved(e, a), this._fireChange(this._layer.getLatLngs(), "Edit");
                            } else this._flashLayer();
                        }
                    }
                },
                updatePolygonCoordsFromMarkerDrag: function (t) {
                    var e = this._layer.getLatLngs(),
                        i = t.getLatLng(),
                        n = L.PM.Utils.findDeepMarkerIndex(this._markers, t),
                        r = n.indexPath,
                        a = n.index,
                        o = n.parentPath;
                    (r.length > 1 ? R()(e, o) : e).splice(a, 1, i), this._layer.setLatLngs(e);
                },
                _getNeighborMarkers: function (t) {
                    var e = L.PM.Utils.findDeepMarkerIndex(this._markers, t),
                        i = e.indexPath,
                        n = e.index,
                        r = e.parentPath,
                        a = i.length > 1 ? R()(this._markers, r) : this._markers,
                        o = (n + 1) % a.length;
                    return { prevMarker: a[(n + (a.length - 1)) % a.length], nextMarker: a[o] };
                },
                _checkMarkerAllowedToDrag: function (t) {
                    var e = this._getNeighborMarkers(t),
                        i = e.prevMarker,
                        n = e.nextMarker,
                        r = L.polyline([i.getLatLng(), t.getLatLng()]),
                        a = L.polyline([t.getLatLng(), n.getLatLng()]),
                        o = jt(this._layer.toGeoJSON(15), r.toGeoJSON(15)).features.length,
                        s = jt(this._layer.toGeoJSON(15), a.toGeoJSON(15)).features.length;
                    return t.getLatLng() === this._markers[0][0].getLatLng() ? (s += 1) : t.getLatLng() === this._markers[0][this._markers[0].length - 1].getLatLng() && (o += 1), !(o <= 2 && s <= 2);
                },
                _onMarkerDragStart: function (t) {
                    var e = t.target;
                    if ((this.cachedColor || (this.cachedColor = this._layer.options.color), this._vertexValidation("move", t))) {
                        var i = L.PM.Utils.findDeepMarkerIndex(this._markers, e).indexPath;
                        this._fireMarkerDragStart(t, i),
                            this.options.allowSelfIntersection || (this._coordsBeforeEdit = this._layer.getLatLngs()),
                            !this.options.allowSelfIntersection && this.options.allowSelfIntersectionEdit && this.hasSelfIntersection()
                                ? (this._markerAllowedToDrag = this._checkMarkerAllowedToDrag(e))
                                : (this._markerAllowedToDrag = null);
                    }
                },
                _onMarkerDrag: function (t) {
                    var e = t.target;
                    if (this._vertexValidationDrag(e)) {
                        var i = L.PM.Utils.findDeepMarkerIndex(this._markers, e),
                            n = i.indexPath,
                            r = i.index,
                            a = i.parentPath;
                        if (n) {
                            if (!this.options.allowSelfIntersection && this.options.allowSelfIntersectionEdit && this.hasSelfIntersection() && !1 === this._markerAllowedToDrag)
                                return this._layer.setLatLngs(this._coordsBeforeEdit), this._initMarkers(), void this._handleLayerStyle();
                            this.updatePolygonCoordsFromMarkerDrag(e);
                            var o = n.length > 1 ? R()(this._markers, a) : this._markers,
                                s = (r + 1) % o.length,
                                l = (r + (o.length - 1)) % o.length,
                                h = e.getLatLng(),
                                u = o[l].getLatLng(),
                                c = o[s].getLatLng();
                            if (e._middleMarkerNext) {
                                var p = L.PM.Utils.calcMiddleLatLng(this._map, h, c);
                                e._middleMarkerNext.setLatLng(p);
                            }
                            if (e._middleMarkerPrev) {
                                var d = L.PM.Utils.calcMiddleLatLng(this._map, h, u);
                                e._middleMarkerPrev.setLatLng(d);
                            }
                            this.options.allowSelfIntersection || this._handleLayerStyle(), this._fireMarkerDrag(t, n), this._fireChange(this._layer.getLatLngs(), "Edit");
                        }
                    }
                },
                _onMarkerDragEnd: function (t) {
                    var e = t.target;
                    if (this._vertexValidationDragEnd(e)) {
                        var i = L.PM.Utils.findDeepMarkerIndex(this._markers, e).indexPath,
                            n = this.hasSelfIntersection();
                        n && this.options.allowSelfIntersectionEdit && this._markerAllowedToDrag && (n = !1);
                        var r = !this.options.allowSelfIntersection && n;
                        if ((this._fireMarkerDragEnd(t, i, r), r))
                            return (
                                this._layer.setLatLngs(this._coordsBeforeEdit),
                                (this._coordsBeforeEdit = null),
                                this._initMarkers(),
                                this.options.snappable && this._initSnappableMarkers(),
                                this._handleLayerStyle(),
                                void this._fireLayerReset(t, i)
                            );
                        !this.options.allowSelfIntersection && this.options.allowSelfIntersectionEdit && this._handleLayerStyle(), this._fireEdit(), (this._layerEdited = !0), this._fireChange(this._layer.getLatLngs(), "Edit");
                    }
                },
                _onVertexClick: function (t) {
                    var e = t.target;
                    if (!e._dragging) {
                        var i = L.PM.Utils.findDeepMarkerIndex(this._markers, e).indexPath;
                        this._fireVertexClick(t, i);
                    }
                },
            })),
                (ke.Polygon = ke.Line.extend({
                    _shape: "Polygon",
                    _checkMarkerAllowedToDrag: function (t) {
                        var e = this._getNeighborMarkers(t),
                            i = e.prevMarker,
                            n = e.nextMarker,
                            r = L.polyline([i.getLatLng(), t.getLatLng()]),
                            a = L.polyline([t.getLatLng(), n.getLatLng()]),
                            o = jt(this._layer.toGeoJSON(15), r.toGeoJSON(15)).features.length,
                            s = jt(this._layer.toGeoJSON(15), a.toGeoJSON(15)).features.length;
                        return !(o <= 2 && s <= 2);
                    },
                })),
                (ke.Rectangle = ke.Polygon.extend({
                    _shape: "Rectangle",
                    _initMarkers: function () {
                        var t = this,
                            e = this._map,
                            i = this._findCorners();
                        this._markerGroup && this._markerGroup.clearLayers(),
                            (this._markerGroup = new L.LayerGroup()),
                            (this._markerGroup._pmTempLayer = !0),
                            e.addLayer(this._markerGroup),
                            (this._markers = []),
                            (this._markers[0] = i.map(this._createMarker, this));
                        var n = Ce(this._markers, 1);
                        (this._cornerMarkers = n[0]),
                            this._layer.getLatLngs()[0].forEach(function (e, i) {
                                var n = t._cornerMarkers.find(function (t) {
                                    return t._index === i;
                                });
                                n && n.setLatLng(e);
                            });
                    },
                    applyOptions: function () {
                        this.options.snappable ? this._initSnappableMarkers() : this._disableSnapping(), this._addMarkerEvents();
                    },
                    _createMarker: function (t, e) {
                        var i = new L.Marker(t, { draggable: !0, icon: L.divIcon({ className: "marker-icon" }) });
                        return this._setPane(i, "vertexPane"), (i._origLatLng = t), (i._index = e), (i._pmTempLayer = !0), this._markerGroup.addLayer(i), i;
                    },
                    _addMarkerEvents: function () {
                        var t = this;
                        this._markers[0].forEach(function (e) {
                            e.on("dragstart", t._onMarkerDragStart, t), e.on("drag", t._onMarkerDrag, t), e.on("dragend", t._onMarkerDragEnd, t), t.options.preventMarkerRemoval || e.on("contextmenu", t._removeMarker, t);
                        });
                    },
                    _removeMarker: function () {
                        return null;
                    },
                    _onMarkerDragStart: function (t) {
                        if (this._vertexValidation("move", t)) {
                            var e = t.target,
                                i = this._cornerMarkers;
                            (e._oppositeCornerLatLng = i
                                .find(function (t) {
                                    return t._index === (e._index + 2) % 4;
                                })
                                .getLatLng()),
                                (e._snapped = !1),
                                this._fireMarkerDragStart(t);
                        }
                    },
                    _onMarkerDrag: function (t) {
                        var e = t.target;
                        this._vertexValidationDrag(e) && e._index !== undefined && (this._adjustRectangleForMarkerMove(e), this._fireMarkerDrag(t), this._fireChange(this._layer.getLatLngs(), "Edit"));
                    },
                    _onMarkerDragEnd: function (t) {
                        var e = t.target;
                        this._vertexValidationDragEnd(e) &&
                            (this._cornerMarkers.forEach(function (t) {
                                delete t._oppositeCornerLatLng;
                            }),
                                this._fireMarkerDragEnd(t),
                                this._fireEdit(),
                                (this._layerEdited = !0),
                                this._fireChange(this._layer.getLatLngs(), "Edit"));
                    },
                    _adjustRectangleForMarkerMove: function (t) {
                        L.extend(t._origLatLng, t._latlng);
                        var e = L.PM.Utils._getRotatedRectangle(t.getLatLng(), t._oppositeCornerLatLng, this._angle || 0, this._map);
                        this._layer.setLatLngs(e), this._adjustAllMarkers(), this._layer.redraw();
                    },
                    _adjustAllMarkers: function () {
                        var t = this,
                            e = this._layer.getLatLngs()[0];
                        e && 4 !== e.length && e.length > 0
                            ? (e.forEach(function (e, i) {
                                t._cornerMarkers[i].setLatLng(e);
                            }),
                                this._cornerMarkers.slice(e.length).forEach(function (t) {
                                    t.setLatLng(e[0]);
                                }))
                            : e && e.length
                                ? this._cornerMarkers.forEach(function (t) {
                                    t.setLatLng(e[t._index]);
                                })
                                : console.error("The layer has no LatLngs");
                    },
                    _findCorners: function () {
                        var t = this._layer.getLatLngs()[0];
                        return L.PM.Utils._getRotatedRectangle(t[0], t[2], this._angle || 0, this._map);
                    },
                })),
                (ke.Circle = ke.extend({
                    _shape: "Circle",
                    initialize: function (t) {
                        (this._layer = t), (this._enabled = !1), this._updateHiddenPolyCircle();
                    },
                    enable: function (t) {
                        L.Util.setOptions(this, t),
                            (this._map = this._layer._map),
                            this.options.allowEditing
                                ? (this.enabled() || this.disable(), (this._enabled = !0), this._initMarkers(), this.applyOptions(), this._layer.on("remove", this.disable, this), this._updateHiddenPolyCircle(), this._fireEnable())
                                : this.disable();
                    },
                    disable: function () {
                        if (this.enabled() && !this._dragging) {
                            this._centerMarker.off("dragstart", this._onCircleDragStart, this),
                                this._centerMarker.off("drag", this._onCircleDrag, this),
                                this._centerMarker.off("dragend", this._onCircleDragEnd, this),
                                this._outerMarker.off("drag", this._handleOuterMarkerSnapping, this),
                                this._layer.off("remove", this.disable, this),
                                (this._enabled = !1),
                                this._helperLayers.clearLayers();
                            var t = this._layer._path ? this._layer._path : this._layer._renderer._container;
                            L.DomUtil.removeClass(t, "leaflet-pm-draggable"), this._layerEdited && this._fireUpdate(), (this._layerEdited = !1), this._fireDisable();
                        }
                    },
                    enabled: function () {
                        return this._enabled;
                    },
                    toggleEdit: function (t) {
                        this.enabled() ? this.disable() : this.enable(t);
                    },
                    _initMarkers: function () {
                        var t = this._map;
                        this._helperLayers && this._helperLayers.clearLayers(), (this._helperLayers = new L.LayerGroup()), (this._helperLayers._pmTempLayer = !0), this._helperLayers.addTo(t);
                        var e = this._layer.getLatLng(),
                            i = this._layer._radius,
                            n = this._getLatLngOnCircle(e, i);
                        (this._centerMarker = this._createCenterMarker(e)),
                            (this._outerMarker = this._createOuterMarker(n)),
                            (this._markers = [this._centerMarker, this._outerMarker]),
                            this._createHintLine(this._centerMarker, this._outerMarker);
                    },
                    applyOptions: function () {
                        this.options.snappable
                            ? (this._initSnappableMarkers(),
                                this._outerMarker.on("drag", this._handleOuterMarkerSnapping, this),
                                this._outerMarker.on("move", this._syncHintLine, this),
                                this._outerMarker.on("move", this._syncCircleRadius, this),
                                this._centerMarker.on("move", this._moveCircle, this))
                            : this._disableSnapping();
                    },
                    _createHintLine: function (t, e) {
                        var i = t.getLatLng(),
                            n = e.getLatLng();
                        (this._hintline = L.polyline([i, n], this.options.hintlineStyle)), this._setPane(this._hintline, "layerPane"), (this._hintline._pmTempLayer = !0), this._helperLayers.addLayer(this._hintline);
                    },
                    _createCenterMarker: function (t) {
                        var e = this._createMarker(t);
                        return (
                            L.DomUtil.addClass(e._icon, "leaflet-pm-draggable"),
                            e.on("drag", this._moveCircle, this),
                            e.on("dragstart", this._onCircleDragStart, this),
                            e.on("drag", this._onCircleDrag, this),
                            e.on("dragend", this._onCircleDragEnd, this),
                            e
                        );
                    },
                    _createOuterMarker: function (t) {
                        var e = this._createMarker(t);
                        return e.on("drag", this._resizeCircle, this), e;
                    },
                    _createMarker: function (t) {
                        var e = new L.Marker(t, { draggable: !0, icon: L.divIcon({ className: "marker-icon" }) });
                        return (
                            this._setPane(e, "vertexPane"),
                            (e._origLatLng = t),
                            (e._pmTempLayer = !0),
                            e.on("dragstart", this._onMarkerDragStart, this),
                            e.on("drag", this._onMarkerDrag, this),
                            e.on("dragend", this._onMarkerDragEnd, this),
                            this._helperLayers.addLayer(e),
                            e
                        );
                    },
                    _resizeCircle: function () {
                        this._outerMarker.setLatLng(this._getNewDestinationOfOuterMarker()), this._syncHintLine(), this._syncCircleRadius();
                    },
                    _moveCircle: function (t) {
                        if (!t.target._cancelDragEventChain) {
                            var e = t.latlng;
                            this._layer.setLatLng(e);
                            var i = this._layer._radius,
                                n = this._getLatLngOnCircle(e, i);
                            (this._outerMarker._latlng = n), this._outerMarker.update(), this._syncHintLine(), this._updateHiddenPolyCircle(), this._fireCenterPlaced("Edit"), this._fireChange(this._layer.getLatLng(), "Edit");
                        }
                    },
                    _syncCircleRadius: function () {
                        var t = this._centerMarker.getLatLng(),
                            e = this._outerMarker.getLatLng(),
                            i = this._map.distance(t, e);
                        this.options.minRadiusCircle && i < this.options.minRadiusCircle
                            ? this._layer.setRadius(this.options.minRadiusCircle)
                            : this.options.maxRadiusCircle && i > this.options.maxRadiusCircle
                                ? this._layer.setRadius(this.options.maxRadiusCircle)
                                : this._layer.setRadius(i),
                            this._updateHiddenPolyCircle(),
                            this._fireChange(this._layer.getLatLng(), "Edit");
                    },
                    _syncHintLine: function () {
                        var t = this._centerMarker.getLatLng(),
                            e = this._outerMarker.getLatLng();
                        this._hintline.setLatLngs([t, e]);
                    },
                    _disableSnapping: function () {
                        var t = this;
                        this._markers.forEach(function (e) {
                            e.off("move", t._syncHintLine, t), e.off("move", t._syncCircleRadius, t), e.off("drag", t._handleSnapping, t), e.off("dragend", t._cleanupSnapping, t);
                        }),
                            this._layer.off("pm:dragstart", this._unsnap, this);
                    },
                    _onMarkerDragStart: function (t) {
                        this._vertexValidation("move", t) && this._fireMarkerDragStart(t);
                    },
                    _onMarkerDrag: function (t) {
                        var e = t.target;
                        this._vertexValidationDrag(e) && this._fireMarkerDrag(t);
                    },
                    _onMarkerDragEnd: function (t) {
                        var e = t.target;
                        this._vertexValidationDragEnd(e) && (this._fireEdit(), (this._layerEdited = !0), this._fireMarkerDragEnd(t));
                    },
                    _onCircleDragStart: function (t) {
                        this._vertexValidationDrag(t.target) ? (delete this._vertexValidationReset, this._fireDragStart()) : (this._vertexValidationReset = !0);
                    },
                    _onCircleDrag: function (t) {
                        this._vertexValidationReset || this._fireDrag(t);
                    },
                    _onCircleDragEnd: function () {
                        this._vertexValidationReset ? delete this._vertexValidationReset : this._fireDragEnd();
                    },
                    _updateHiddenPolyCircle: function () {
                        var t = this._map && this._map.pm._isCRSSimple();
                        this._hiddenPolyCircle ? this._hiddenPolyCircle.setLatLngs(L.PM.Utils.circleToPolygon(this._layer, 200, !t).getLatLngs()) : (this._hiddenPolyCircle = L.PM.Utils.circleToPolygon(this._layer, 200, !t)),
                            this._hiddenPolyCircle._parentCopy || (this._hiddenPolyCircle._parentCopy = this._layer);
                    },
                    _getLatLngOnCircle: function (t, e) {
                        var i = this._map.project(t),
                            n = L.point(i.x + e, i.y);
                        return this._map.unproject(n);
                    },
                    _getNewDestinationOfOuterMarker: function () {
                        var t = this._centerMarker.getLatLng(),
                            e = this._outerMarker.getLatLng(),
                            i = this._map.distance(t, e);
                        return (
                            this.options.minRadiusCircle && i < this.options.minRadiusCircle
                                ? (e = z(this._map, t, e, this.options.minRadiusCircle))
                                : this.options.maxRadiusCircle && i > this.options.maxRadiusCircle && (e = z(this._map, t, e, this.options.maxRadiusCircle)),
                            e
                        );
                    },
                    _handleOuterMarkerSnapping: function () {
                        if (this._outerMarker._snapped) {
                            var t = this._centerMarker.getLatLng(),
                                e = this._outerMarker.getLatLng(),
                                i = this._map.distance(t, e);
                            ((this.options.minRadiusCircle && i < this.options.minRadiusCircle) || (this.options.maxRadiusCircle && i > this.options.maxRadiusCircle)) && this._outerMarker.setLatLng(this._outerMarker._orgLatLng);
                        }
                        this._outerMarker.setLatLng(this._getNewDestinationOfOuterMarker());
                    },
                })),
                (ke.CircleMarker = ke.extend({
                    _shape: "CircleMarker",
                    initialize: function (t) {
                        (this._layer = t), (this._enabled = !1), this._updateHiddenPolyCircle();
                    },
                    enable: function () {
                        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { draggable: !0, snappable: !0 };
                        L.Util.setOptions(this, t),
                            this.options.allowEditing && this._layer._map
                                ? ((this._map = this._layer._map),
                                    this.enabled() && this.disable(),
                                    this.applyOptions(),
                                    this._layer.on("remove", this.disable, this),
                                    (this._enabled = !0),
                                    this._layer.on("pm:dragstart", this._onDragStart, this),
                                    this._layer.on("pm:drag", this._onMarkerDrag, this),
                                    this._layer.on("pm:dragend", this._onMarkerDragEnd, this),
                                    this._updateHiddenPolyCircle(),
                                    this._fireEnable())
                                : this.disable();
                    },
                    disable: function () {
                        this._dragging ||
                            (this._helperLayers && this._helperLayers.clearLayers(),
                                this._map || (this._map = this._layer._map),
                                this._map ||
                                (this.options.editable
                                    ? (this._map.off("move", this._syncMarkers, this), this._outerMarker && this._outerMarker.on("drag", this._handleOuterMarkerSnapping, this))
                                    : this._map.off("move", this._updateHiddenPolyCircle, this)),
                                this.disableLayerDrag(),
                                this._layer.off("contextmenu", this._removeMarker, this),
                                this._layer.off("remove", this.disable, this),
                                this.enabled() && (this._layerEdited && this._fireUpdate(), (this._layerEdited = !1), this._fireDisable()),
                                (this._enabled = !1));
                    },
                    enabled: function () {
                        return this._enabled;
                    },
                    toggleEdit: function (t) {
                        this.enabled() ? this.disable() : this.enable(t);
                    },
                    applyOptions: function () {
                        !this.options.editable && this.options.draggable ? this.enableLayerDrag() : this.disableLayerDrag(),
                            this.options.editable ? (this._initMarkers(), this._map.on("move", this._syncMarkers, this)) : this._map.on("move", this._updateHiddenPolyCircle, this),
                            this.options.snappable
                                ? this.options.editable
                                    ? (this._initSnappableMarkers(),
                                        this._centerMarker.on("drag", this._moveCircle, this),
                                        this.options.editable && this._outerMarker.on("drag", this._handleOuterMarkerSnapping, this),
                                        this._outerMarker.on("move", this._syncHintLine, this),
                                        this._outerMarker.on("move", this._syncCircleRadius, this))
                                    : this._initSnappableMarkersDrag()
                                : this.options.editable
                                    ? this._disableSnapping()
                                    : this._disableSnappingDrag(),
                            this.options.preventMarkerRemoval || this._layer.on("contextmenu", this._removeMarker, this);
                    },
                    _initMarkers: function () {
                        var t = this._map;
                        this._helperLayers && this._helperLayers.clearLayers(), (this._helperLayers = new L.LayerGroup()), (this._helperLayers._pmTempLayer = !0), this._helperLayers.addTo(t);
                        var e = this._layer.getLatLng(),
                            i = this._layer._radius,
                            n = this._getLatLngOnCircle(e, i);
                        (this._centerMarker = this._createCenterMarker(e)),
                            (this._outerMarker = this._createOuterMarker(n)),
                            (this._markers = [this._centerMarker, this._outerMarker]),
                            this._createHintLine(this._centerMarker, this._outerMarker);
                    },
                    _getLatLngOnCircle: function (t, e) {
                        var i = this._map.project(t),
                            n = L.point(i.x + e, i.y);
                        return this._map.unproject(n);
                    },
                    _createHintLine: function (t, e) {
                        var i = t.getLatLng(),
                            n = e.getLatLng();
                        (this._hintline = L.polyline([i, n], this.options.hintlineStyle)), this._setPane(this._hintline, "layerPane"), (this._hintline._pmTempLayer = !0), this._helperLayers.addLayer(this._hintline);
                    },
                    _createCenterMarker: function (t) {
                        var e = this._createMarker(t);
                        return this.options.draggable ? L.DomUtil.addClass(e._icon, "leaflet-pm-draggable") : e.dragging.disable(), e;
                    },
                    _createOuterMarker: function (t) {
                        var e = this._createMarker(t);
                        return e.on("drag", this._resizeCircle, this), e;
                    },
                    _createMarker: function (t) {
                        var e = new L.Marker(t, { draggable: !0, icon: L.divIcon({ className: "marker-icon" }) });
                        return (
                            this._setPane(e, "vertexPane"),
                            (e._origLatLng = t),
                            (e._pmTempLayer = !0),
                            e.on("dragstart", this._onMarkerDragStart, this),
                            e.on("drag", this._onMarkerDrag, this),
                            e.on("dragend", this._onMarkerDragEnd, this),
                            this._helperLayers.addLayer(e),
                            e
                        );
                    },
                    _moveCircle: function () {
                        var t = this._centerMarker.getLatLng();
                        this._layer.setLatLng(t);
                        var e = this._layer._radius,
                            i = this._getLatLngOnCircle(t, e);
                        (this._outerMarker._latlng = i), this._outerMarker.update(), this._syncHintLine(), this._updateHiddenPolyCircle(), this._fireCenterPlaced("Edit"), this._fireChange(this._layer.getLatLng(), "Edit");
                    },
                    _syncMarkers: function () {
                        var t = this._layer.getLatLng(),
                            e = this._layer._radius,
                            i = this._getLatLngOnCircle(t, e);
                        this._outerMarker.setLatLng(i), this._centerMarker.setLatLng(t), this._syncHintLine(), this._updateHiddenPolyCircle();
                    },
                    _resizeCircle: function () {
                        this._outerMarker.setLatLng(this._getNewDestinationOfOuterMarker()), this._syncHintLine(), this._syncCircleRadius();
                    },
                    _syncCircleRadius: function () {
                        var t = this._centerMarker.getLatLng(),
                            e = this._outerMarker.getLatLng(),
                            i = this._map.project(t).distanceTo(this._map.project(e));
                        this.options.minRadiusCircleMarker && i < this.options.minRadiusCircleMarker
                            ? this._layer.setRadius(this.options.minRadiusCircleMarker)
                            : this.options.maxRadiusCircleMarker && i > this.options.maxRadiusCircleMarker
                                ? this._layer.setRadius(this.options.maxRadiusCircleMarker)
                                : this._layer.setRadius(i),
                            this._updateHiddenPolyCircle(),
                            this._fireChange(this._layer.getLatLng(), "Edit");
                    },
                    _syncHintLine: function () {
                        var t = this._centerMarker.getLatLng(),
                            e = this._outerMarker.getLatLng();
                        this._hintline.setLatLngs([t, e]);
                    },
                    _removeMarker: function () {
                        this.options.editable && this.disable(), this._layer.remove(), this._fireRemove(this._layer), this._fireRemove(this._map, this._layer);
                    },
                    _onDragStart: function () {
                        this._map.pm.Draw.CircleMarker._layerIsDragging = !0;
                    },
                    _onMarkerDragStart: function (t) {
                        this._vertexValidation("move", t) && this._fireMarkerDragStart(t);
                    },
                    _onMarkerDrag: function (t) {
                        var e = t.target;
                        (e instanceof L.Marker && !this._vertexValidationDrag(e)) || this._fireMarkerDrag(t);
                    },
                    _onMarkerDragEnd: function (t) {
                        this._map.pm.Draw.CircleMarker._layerIsDragging = !1;
                        var e = t.target;
                        this._vertexValidationDragEnd(e) && (this.options.editable && (this._fireEdit(), (this._layerEdited = !0)), this._fireMarkerDragEnd(t));
                    },
                    _initSnappableMarkersDrag: function () {
                        var t = this._layer;
                        (this.options.snapDistance = this.options.snapDistance || 30),
                            (this.options.snapSegment = this.options.snapSegment === undefined || this.options.snapSegment),
                            t.off("pm:drag", this._handleSnapping, this),
                            t.on("pm:drag", this._handleSnapping, this),
                            t.off("pm:dragend", this._cleanupSnapping, this),
                            t.on("pm:dragend", this._cleanupSnapping, this),
                            t.off("pm:dragstart", this._unsnap, this),
                            t.on("pm:dragstart", this._unsnap, this);
                    },
                    _disableSnappingDrag: function () {
                        var t = this._layer;
                        t.off("pm:drag", this._handleSnapping, this), t.off("pm:dragend", this._cleanupSnapping, this), t.off("pm:dragstart", this._unsnap, this);
                    },
                    _updateHiddenPolyCircle: function () {
                        var t = this._layer._map || this._map;
                        if (t) {
                            var e = L.PM.Utils.pxRadiusToMeterRadius(this._layer.getRadius(), t, this._layer.getLatLng()),
                                i = L.circle(this._layer.getLatLng(), this._layer.options);
                            i.setRadius(e);
                            var n = t && t.pm._isCRSSimple();
                            this._hiddenPolyCircle ? this._hiddenPolyCircle.setLatLngs(L.PM.Utils.circleToPolygon(i, 200, !n).getLatLngs()) : (this._hiddenPolyCircle = L.PM.Utils.circleToPolygon(i, 200, !n)),
                                this._hiddenPolyCircle._parentCopy || (this._hiddenPolyCircle._parentCopy = this._layer);
                        }
                    },
                    _getNewDestinationOfOuterMarker: function () {
                        var t = this._centerMarker.getLatLng(),
                            e = this._outerMarker.getLatLng(),
                            i = this._map.project(t).distanceTo(this._map.project(e));
                        return (
                            this.options.minRadiusCircleMarker && i < this.options.minRadiusCircleMarker
                                ? (e = z(this._map, t, e, L.PM.Utils.pxRadiusToMeterRadius(this.options.minRadiusCircleMarker, this._map, t)))
                                : this.options.maxRadiusCircleMarker && i > this.options.maxRadiusCircleMarker && (e = z(this._map, t, e, L.PM.Utils.pxRadiusToMeterRadius(this.options.maxRadiusCircleMarker, this._map, t))),
                            e
                        );
                    },
                    _handleOuterMarkerSnapping: function () {
                        if (this._outerMarker._snapped) {
                            var t = this._centerMarker.getLatLng(),
                                e = this._outerMarker.getLatLng(),
                                i = this._map.project(t).distanceTo(this._map.project(e));
                            ((this.options.minRadiusCircleMarker && i < this.options.minRadiusCircleMarker) || (this.options.maxRadiusCircleMarker && i > this.options.maxRadiusCircleMarker)) &&
                                this._outerMarker.setLatLng(this._outerMarker._orgLatLng);
                        }
                        this._outerMarker.setLatLng(this._getNewDestinationOfOuterMarker());
                    },
                })),
                (ke.ImageOverlay = ke.extend({
                    _shape: "ImageOverlay",
                    initialize: function (t) {
                        (this._layer = t), (this._enabled = !1);
                    },
                    toggleEdit: function (t) {
                        this.enabled() ? this.disable() : this.enable(t);
                    },
                    enabled: function () {
                        return this._enabled;
                    },
                    enable: function () {
                        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { draggable: !0, snappable: !0 };
                        L.Util.setOptions(this, t),
                            (this._map = this._layer._map),
                            this._map &&
                            (this.options.allowEditing
                                ? (this.enabled() || this.disable(), this.enableLayerDrag(), this._layer.on("remove", this.disable, this), (this._enabled = !0), (this._otherSnapLayers = this._findCorners()), this._fireEnable())
                                : this.disable());
                    },
                    disable: function () {
                        this._dragging ||
                            (this._map || (this._map = this._layer._map),
                                this.disableLayerDrag(),
                                this._layer.off("remove", this.disable, this),
                                this.enabled() || (this._layerEdited && this._fireUpdate(), (this._layerEdited = !1), this._fireDisable()),
                                (this._enabled = !1));
                    },
                    _findCorners: function () {
                        var t = this._layer.getBounds();
                        return [t.getNorthWest(), t.getNorthEast(), t.getSouthEast(), t.getSouthWest()];
                    },
                }));
            var Ee = function (t, e, i, n, r, a) {
                this._matrix = [t, e, i, n, r, a];
            };
            (Ee.init = function () {
                return new L.PM.Matrix(1, 0, 0, 1, 0, 0);
            }),
                (Ee.prototype = {
                    transform: function (t) {
                        return this._transform(t.clone());
                    },
                    _transform: function (t) {
                        var e = this._matrix,
                            i = t.x,
                            n = t.y;
                        return (t.x = e[0] * i + e[1] * n + e[4]), (t.y = e[2] * i + e[3] * n + e[5]), t;
                    },
                    untransform: function (t) {
                        var e = this._matrix;
                        return new L.Point((t.x / e[0] - e[4]) / e[0], (t.y / e[2] - e[5]) / e[2]);
                    },
                    clone: function () {
                        var t = this._matrix;
                        return new L.PM.Matrix(t[0], t[1], t[2], t[3], t[4], t[5]);
                    },
                    translate: function (t) {
                        return t === undefined ? new L.Point(this._matrix[4], this._matrix[5]) : ("number" == typeof t ? ((e = t), (i = t)) : ((e = t.x), (i = t.y)), this._add(1, 0, 0, 1, e, i));
                        var e, i;
                    },
                    scale: function (t, e) {
                        return t === undefined
                            ? new L.Point(this._matrix[0], this._matrix[3])
                            : ((e = e || L.point(0, 0)), "number" == typeof t ? ((i = t), (n = t)) : ((i = t.x), (n = t.y)), this._add(i, 0, 0, n, e.x, e.y)._add(1, 0, 0, 1, -e.x, -e.y));
                        var i, n;
                    },
                    rotate: function (t, e) {
                        var i = Math.cos(t),
                            n = Math.sin(t);
                        return (e = e || new L.Point(0, 0)), this._add(i, n, -n, i, e.x, e.y)._add(1, 0, 0, 1, -e.x, -e.y);
                    },
                    flip: function () {
                        return (this._matrix[1] *= -1), (this._matrix[2] *= -1), this;
                    },
                    _add: function (t, e, i, n, r, a) {
                        var o,
                            s = [[], [], []],
                            l = this._matrix,
                            h = [
                                [l[0], l[2], l[4]],
                                [l[1], l[3], l[5]],
                                [0, 0, 1],
                            ],
                            u = [
                                [t, i, r],
                                [e, n, a],
                                [0, 0, 1],
                            ];
                        t &&
                            t instanceof L.PM.Matrix &&
                            (u = [
                                [(l = t._matrix)[0], l[2], l[4]],
                                [l[1], l[3], l[5]],
                                [0, 0, 1],
                            ]);
                        for (var c = 0; c < 3; c += 1)
                            for (var p = 0; p < 3; p += 1) {
                                o = 0;
                                for (var d = 0; d < 3; d += 1) o += h[c][d] * u[d][p];
                                s[c][p] = o;
                            }
                        return (this._matrix = [s[0][0], s[1][0], s[0][1], s[1][1], s[0][2], s[1][2]]), this;
                    },
                });
            const Se = Ee;
            var Oe = {
                calcMiddleLatLng: function (t, e, i) {
                    var n = t.project(e),
                        r = t.project(i);
                    return t.unproject(n._add(r)._divideBy(2));
                },
                findLayers: function (t) {
                    var e = [];
                    return (
                        t.eachLayer(function (t) {
                            (t instanceof L.Polyline || t instanceof L.Marker || t instanceof L.Circle || t instanceof L.CircleMarker || t instanceof L.ImageOverlay) && e.push(t);
                        }),
                        (e = (e = (e = e.filter(function (t) {
                            return !!t.pm;
                        })).filter(function (t) {
                            return !t._pmTempLayer;
                        })).filter(function (t) {
                            return (!L.PM.optIn && !t.options.pmIgnore) || (L.PM.optIn && !1 === t.options.pmIgnore);
                        }))
                    );
                },
                circleToPolygon: function (t) {
                    for (
                        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 60,
                        i = !(arguments.length > 2 && arguments[2] !== undefined) || arguments[2],
                        n = t.getLatLng(),
                        r = t.getRadius(),
                        a = N(n, r, e, 0, i),
                        o = [],
                        s = 0;
                        s < a.length;
                        s += 1
                    ) {
                        var l = [a[s].lat, a[s].lng];
                        o.push(l);
                    }
                    return L.polygon(o, t.options);
                },
                disablePopup: function (t) {
                    t.getPopup() && ((t._tempPopupCopy = t.getPopup()), t.unbindPopup());
                },
                enablePopup: function (t) {
                    t._tempPopupCopy && (t.bindPopup(t._tempPopupCopy), delete t._tempPopupCopy);
                },
                _fireEvent: function (t, e, i) {
                    var n = arguments.length > 3 && arguments[3] !== undefined && arguments[3];
                    t.fire(e, i, n);
                    var r = this.getAllParentGroups(t),
                        a = r.groups;
                    a.forEach(function (t) {
                        t.fire(e, i, n);
                    });
                },
                getAllParentGroups: function (t) {
                    var e = [],
                        i = [];
                    return !t._pmLastGroupFetch || !t._pmLastGroupFetch.time || new Date().getTime() - t._pmLastGroupFetch.time > 1e3
                        ? ((function n(t) {
                            for (var r in t._eventParents)
                                if (-1 === e.indexOf(r)) {
                                    e.push(r);
                                    var a = t._eventParents[r];
                                    i.push(a), n(a);
                                }
                        })(t),
                            (t._pmLastGroupFetch = { time: new Date().getTime(), groups: i, groupIds: e }),
                            { groupIds: e, groups: i })
                        : { groups: t._pmLastGroupFetch.groups, groupIds: t._pmLastGroupFetch.groupIds };
                },
                createGeodesicPolygon: N,
                getTranslation: I,
                findDeepCoordIndex: function (t, e) {
                    var i;
                    t.some(
                        (function r(t) {
                            return function (n, a) {
                                var o = t.concat(a);
                                return n.lat && n.lat === e.lat && n.lng === e.lng ? ((i = o), !0) : Array.isArray(n) && n.some(r(o));
                            };
                        })([])
                    );
                    var n = {};
                    return i && (n = { indexPath: i, index: i[i.length - 1], parentPath: i.slice(0, i.length - 1) }), n;
                },
                findDeepMarkerIndex: function (t, e) {
                    var i;
                    t.some(
                        (function r(t) {
                            return function (n, a) {
                                var o = t.concat(a);
                                return n._leaflet_id === e._leaflet_id ? ((i = o), !0) : Array.isArray(n) && n.some(r(o));
                            };
                        })([])
                    );
                    var n = {};
                    return i && (n = { indexPath: i, index: i[i.length - 1], parentPath: i.slice(0, i.length - 1) }), n;
                },
                _getIndexFromSegment: function (t, e) {
                    if (e && 2 === e.length) {
                        var i = this.findDeepCoordIndex(t, e[0]),
                            n = this.findDeepCoordIndex(t, e[1]),
                            r = Math.max(i.index, n.index);
                        return (0 !== i.index && 0 !== n.index) || 1 === r || (r += 1), { indexA: i, indexB: n, newIndex: r, indexPath: i.indexPath, parentPath: i.parentPath };
                    }
                    return null;
                },
                _getRotatedRectangle: function (t, e, i, n) {
                    var r = me(n, t),
                        a = me(n, e),
                        o = (i * Math.PI) / 180,
                        s = Math.cos(o),
                        l = Math.sin(o),
                        h = (a.x - r.x) * s + (a.y - r.y) * l,
                        u = (a.y - r.y) * s - (a.x - r.x) * l,
                        c = h * s + r.x,
                        p = h * l + r.y,
                        d = -u * l + r.x,
                        f = u * s + r.y;
                    return [ve(n, r), ve(n, { x: c, y: p }), ve(n, a), ve(n, { x: d, y: f })];
                },
                pxRadiusToMeterRadius: function (t, e, i) {
                    var n = e.project(i),
                        r = L.point(n.x + t, n.y);
                    return e.distance(e.unproject(r), i);
                },
            };
            const De = Oe;
            (L.PM = L.PM || {
                version: "2.12.0",
                Map: K,
                Toolbar: Q,
                Draw: at,
                Edit: ke,
                Utils: De,
                Matrix: Se,
                activeLang: "en",
                optIn: !1,
                initialize: function (t) {
                    this.addInitHooks(t);
                },
                setOptIn: function (t) {
                    this.optIn = !!t;
                },
                addInitHooks: function () {
                    L.Map.addInitHook(function () {
                        (this.pm = undefined), L.PM.optIn ? !1 === this.options.pmIgnore && (this.pm = new L.PM.Map(this)) : this.options.pmIgnore || (this.pm = new L.PM.Map(this));
                    }),
                        L.LayerGroup.addInitHook(function () {
                            (this.pm = undefined), L.PM.optIn ? !1 === this.options.pmIgnore && (this.pm = new L.PM.Edit.LayerGroup(this)) : this.options.pmIgnore || (this.pm = new L.PM.Edit.LayerGroup(this));
                        }),
                        L.Marker.addInitHook(function () {
                            (this.pm = undefined), L.PM.optIn ? !1 === this.options.pmIgnore && (this.pm = new L.PM.Edit.Marker(this)) : this.options.pmIgnore || (this.pm = new L.PM.Edit.Marker(this));
                        }),
                        L.CircleMarker.addInitHook(function () {
                            (this.pm = undefined), L.PM.optIn ? !1 === this.options.pmIgnore && (this.pm = new L.PM.Edit.CircleMarker(this)) : this.options.pmIgnore || (this.pm = new L.PM.Edit.CircleMarker(this));
                        }),
                        L.Polyline.addInitHook(function () {
                            (this.pm = undefined), L.PM.optIn ? !1 === this.options.pmIgnore && (this.pm = new L.PM.Edit.Line(this)) : this.options.pmIgnore || (this.pm = new L.PM.Edit.Line(this));
                        }),
                        L.Polygon.addInitHook(function () {
                            (this.pm = undefined), L.PM.optIn ? !1 === this.options.pmIgnore && (this.pm = new L.PM.Edit.Polygon(this)) : this.options.pmIgnore || (this.pm = new L.PM.Edit.Polygon(this));
                        }),
                        L.Rectangle.addInitHook(function () {
                            (this.pm = undefined), L.PM.optIn ? !1 === this.options.pmIgnore && (this.pm = new L.PM.Edit.Rectangle(this)) : this.options.pmIgnore || (this.pm = new L.PM.Edit.Rectangle(this));
                        }),
                        L.Circle.addInitHook(function () {
                            (this.pm = undefined), L.PM.optIn ? !1 === this.options.pmIgnore && (this.pm = new L.PM.Edit.Circle(this)) : this.options.pmIgnore || (this.pm = new L.PM.Edit.Circle(this));
                        }),
                        L.ImageOverlay.addInitHook(function () {
                            (this.pm = undefined), L.PM.optIn ? !1 === this.options.pmIgnore && (this.pm = new L.PM.Edit.ImageOverlay(this)) : this.options.pmIgnore || (this.pm = new L.PM.Edit.ImageOverlay(this));
                        });
                },
                reInitLayer: function (t) {
                    var e = this;
                    t instanceof L.LayerGroup &&
                        t.eachLayer(function (t) {
                            e.reInitLayer(t);
                        }),
                        t.pm ||
                        (L.PM.optIn && !1 !== t.options.pmIgnore) ||
                        t.options.pmIgnore ||
                        (t instanceof L.Map
                            ? (t.pm = new L.PM.Map(t))
                            : t instanceof L.Marker
                                ? (t.pm = new L.PM.Edit.Marker(t))
                                : t instanceof L.Circle
                                    ? (t.pm = new L.PM.Edit.Circle(t))
                                    : t instanceof L.CircleMarker
                                        ? (t.pm = new L.PM.Edit.CircleMarker(t))
                                        : t instanceof L.Rectangle
                                            ? (t.pm = new L.PM.Edit.Rectangle(t))
                                            : t instanceof L.Polygon
                                                ? (t.pm = new L.PM.Edit.Polygon(t))
                                                : t instanceof L.Polyline
                                                    ? (t.pm = new L.PM.Edit.Line(t))
                                                    : t instanceof L.LayerGroup
                                                        ? (t.pm = new L.PM.Edit.LayerGroup(t))
                                                        : t instanceof L.ImageOverlay && (t.pm = new L.PM.Edit.ImageOverlay(t)));
                },
            }),
                L.PM.initialize();
        },
        7107: () => {
            (Array.prototype.findIndex =
                Array.prototype.findIndex ||
                function (t) {
                    if (null === this) throw new TypeError("Array.prototype.findIndex called on null or undefined");
                    if ("function" != typeof t) throw new TypeError("callback must be a function");
                    for (var e = Object(this), i = e.length >>> 0, n = arguments[1], r = 0; r < i; r++) if (t.call(n, e[r], r, e)) return r;
                    return -1;
                }),
                (Array.prototype.find =
                    Array.prototype.find ||
                    function (t) {
                        if (null === this) throw new TypeError("Array.prototype.find called on null or undefined");
                        if ("function" != typeof t) throw new TypeError("callback must be a function");
                        for (var e = Object(this), i = e.length >>> 0, n = arguments[1], r = 0; r < i; r++) {
                            var a = e[r];
                            if (t.call(n, a, r, e)) return a;
                        }
                    }),
                "function" != typeof Object.assign &&
                (Object.assign = function (t) {
                    "use strict";
                    if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                    t = Object(t);
                    for (var e = 1; e < arguments.length; e++) {
                        var i = arguments[e];
                        if (null != i) for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
                    }
                    return t;
                }),
                [Element.prototype, CharacterData.prototype, DocumentType.prototype].forEach(function (t) {
                    t.hasOwnProperty("remove") ||
                        Object.defineProperty(t, "remove", {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            value: function () {
                                this.parentNode.removeChild(this);
                            },
                        });
                }),
                Array.prototype.includes ||
                Object.defineProperty(Array.prototype, "includes", {
                    value: function (t, e) {
                        if (null == this) throw new TypeError('"this" is null or not defined');
                        var i = Object(this),
                            n = i.length >>> 0;
                        if (0 === n) return !1;
                        var r,
                            a,
                            o = 0 | e,
                            s = Math.max(o >= 0 ? o : n - Math.abs(o), 0);
                        for (; s < n;) {
                            if ((r = i[s]) === (a = t) || ("number" == typeof r && "number" == typeof a && isNaN(r) && isNaN(a))) return !0;
                            s++;
                        }
                        return !1;
                    },
                });
        },
        1787: (t, e, i) => {
            var n = i(2582),
                r = i(4102),
                a = i(1540),
                o = i(9705).Z,
                s = a.featureEach,
                l = (a.coordEach, r.polygon, r.featureCollection);
            function h(t) {
                var e = new n(t);
                return (
                    (e.insert = function (t) {
                        if ("Feature" !== t.type) throw new Error("invalid feature");
                        return (t.bbox = t.bbox ? t.bbox : o(t)), n.prototype.insert.call(this, t);
                    }),
                    (e.load = function (t) {
                        var e = [];
                        return (
                            Array.isArray(t)
                                ? t.forEach(function (t) {
                                    if ("Feature" !== t.type) throw new Error("invalid features");
                                    (t.bbox = t.bbox ? t.bbox : o(t)), e.push(t);
                                })
                                : s(t, function (t) {
                                    if ("Feature" !== t.type) throw new Error("invalid features");
                                    (t.bbox = t.bbox ? t.bbox : o(t)), e.push(t);
                                }),
                            n.prototype.load.call(this, e)
                        );
                    }),
                    (e.remove = function (t, e) {
                        if ("Feature" !== t.type) throw new Error("invalid feature");
                        return (t.bbox = t.bbox ? t.bbox : o(t)), n.prototype.remove.call(this, t, e);
                    }),
                    (e.clear = function () {
                        return n.prototype.clear.call(this);
                    }),
                    (e.search = function (t) {
                        var e = n.prototype.search.call(this, this.toBBox(t));
                        return l(e);
                    }),
                    (e.collides = function (t) {
                        return n.prototype.collides.call(this, this.toBBox(t));
                    }),
                    (e.all = function () {
                        var t = n.prototype.all.call(this);
                        return l(t);
                    }),
                    (e.toJSON = function () {
                        return n.prototype.toJSON.call(this);
                    }),
                    (e.fromJSON = function (t) {
                        return n.prototype.fromJSON.call(this, t);
                    }),
                    (e.toBBox = function (t) {
                        var e;
                        if (t.bbox) e = t.bbox;
                        else if (Array.isArray(t) && 4 === t.length) e = t;
                        else if (Array.isArray(t) && 6 === t.length) e = [t[0], t[1], t[3], t[4]];
                        else if ("Feature" === t.type) e = o(t);
                        else {
                            if ("FeatureCollection" !== t.type) throw new Error("invalid geojson");
                            e = o(t);
                        }
                        return { minX: e[0], minY: e[1], maxX: e[2], maxY: e[3] };
                    }),
                    e
                );
            }
            (t.exports = h), (t.exports["default"] = h);
        },
        1989: (t, e, i) => {
            var n = i(1789),
                r = i(401),
                a = i(7667),
                o = i(1327),
                s = i(1866);
            function l(t) {
                var e = -1,
                    i = null == t ? 0 : t.length;
                for (this.clear(); ++e < i;) {
                    var n = t[e];
                    this.set(n[0], n[1]);
                }
            }
            (l.prototype.clear = n), (l.prototype["delete"] = r), (l.prototype.get = a), (l.prototype.has = o), (l.prototype.set = s), (t.exports = l);
        },
        8407: (t, e, i) => {
            var n = i(7040),
                r = i(4125),
                a = i(2117),
                o = i(7518),
                s = i(4705);
            function l(t) {
                var e = -1,
                    i = null == t ? 0 : t.length;
                for (this.clear(); ++e < i;) {
                    var n = t[e];
                    this.set(n[0], n[1]);
                }
            }
            (l.prototype.clear = n), (l.prototype["delete"] = r), (l.prototype.get = a), (l.prototype.has = o), (l.prototype.set = s), (t.exports = l);
        },
        7071: (t, e, i) => {
            var n = i(852)(i(5639), "Map");
            t.exports = n;
        },
        3369: (t, e, i) => {
            var n = i(4785),
                r = i(1285),
                a = i(6e3),
                o = i(9916),
                s = i(5265);
            function l(t) {
                var e = -1,
                    i = null == t ? 0 : t.length;
                for (this.clear(); ++e < i;) {
                    var n = t[e];
                    this.set(n[0], n[1]);
                }
            }
            (l.prototype.clear = n), (l.prototype["delete"] = r), (l.prototype.get = a), (l.prototype.has = o), (l.prototype.set = s), (t.exports = l);
        },
        6384: (t, e, i) => {
            var n = i(8407),
                r = i(7465),
                a = i(3779),
                o = i(7599),
                s = i(4758),
                l = i(4309);
            function h(t) {
                var e = (this.__data__ = new n(t));
                this.size = e.size;
            }
            (h.prototype.clear = r), (h.prototype["delete"] = a), (h.prototype.get = o), (h.prototype.has = s), (h.prototype.set = l), (t.exports = h);
        },
        2705: (t, e, i) => {
            var n = i(5639).Symbol;
            t.exports = n;
        },
        1149: (t, e, i) => {
            var n = i(5639).Uint8Array;
            t.exports = n;
        },
        6874: (t) => {
            t.exports = function (t, e, i) {
                switch (i.length) {
                    case 0:
                        return t.call(e);
                    case 1:
                        return t.call(e, i[0]);
                    case 2:
                        return t.call(e, i[0], i[1]);
                    case 3:
                        return t.call(e, i[0], i[1], i[2]);
                }
                return t.apply(e, i);
            };
        },
        4636: (t, e, i) => {
            var n = i(2545),
                r = i(5694),
                a = i(1469),
                o = i(4144),
                s = i(5776),
                l = i(6719),
                h = Object.prototype.hasOwnProperty;
            t.exports = function (t, e) {
                var i = a(t),
                    u = !i && r(t),
                    c = !i && !u && o(t),
                    p = !i && !u && !c && l(t),
                    d = i || u || c || p,
                    f = d ? n(t.length, String) : [],
                    g = f.length;
                for (var _ in t) (!e && !h.call(t, _)) || (d && ("length" == _ || (c && ("offset" == _ || "parent" == _)) || (p && ("buffer" == _ || "byteLength" == _ || "byteOffset" == _)) || s(_, g))) || f.push(_);
                return f;
            };
        },
        9932: (t) => {
            t.exports = function (t, e) {
                for (var i = -1, n = null == t ? 0 : t.length, r = Array(n); ++i < n;) r[i] = e(t[i], i, t);
                return r;
            };
        },
        6556: (t, e, i) => {
            var n = i(9465),
                r = i(7813);
            t.exports = function (t, e, i) {
                ((i !== undefined && !r(t[e], i)) || (i === undefined && !(e in t))) && n(t, e, i);
            };
        },
        4865: (t, e, i) => {
            var n = i(9465),
                r = i(7813),
                a = Object.prototype.hasOwnProperty;
            t.exports = function (t, e, i) {
                var o = t[e];
                (a.call(t, e) && r(o, i) && (i !== undefined || e in t)) || n(t, e, i);
            };
        },
        8470: (t, e, i) => {
            var n = i(7813);
            t.exports = function (t, e) {
                for (var i = t.length; i--;) if (n(t[i][0], e)) return i;
                return -1;
            };
        },
        9465: (t, e, i) => {
            var n = i(8777);
            t.exports = function (t, e, i) {
                "__proto__" == e && n ? n(t, e, { configurable: !0, enumerable: !0, value: i, writable: !0 }) : (t[e] = i);
            };
        },
        3118: (t, e, i) => {
            var n = i(3218),
                r = Object.create,
                a = (function () {
                    function t() { }
                    return function (e) {
                        if (!n(e)) return {};
                        if (r) return r(e);
                        t.prototype = e;
                        var i = new t();
                        return (t.prototype = undefined), i;
                    };
                })();
            t.exports = a;
        },
        8483: (t, e, i) => {
            var n = i(5063)();
            t.exports = n;
        },
        7786: (t, e, i) => {
            var n = i(1811),
                r = i(327);
            t.exports = function (t, e) {
                for (var i = 0, a = (e = n(e, t)).length; null != t && i < a;) t = t[r(e[i++])];
                return i && i == a ? t : undefined;
            };
        },
        4239: (t, e, i) => {
            var n = i(2705),
                r = i(9607),
                a = i(2333),
                o = n ? n.toStringTag : undefined;
            t.exports = function (t) {
                return null == t ? (t === undefined ? "[object Undefined]" : "[object Null]") : o && o in Object(t) ? r(t) : a(t);
            };
        },
        8565: (t) => {
            var e = Object.prototype.hasOwnProperty;
            t.exports = function (t, i) {
                return null != t && e.call(t, i);
            };
        },
        9454: (t, e, i) => {
            var n = i(4239),
                r = i(7005);
            t.exports = function (t) {
                return r(t) && "[object Arguments]" == n(t);
            };
        },
        8458: (t, e, i) => {
            var n = i(3560),
                r = i(5346),
                a = i(3218),
                o = i(346),
                s = /^\[object .+?Constructor\]$/,
                l = Function.prototype,
                h = Object.prototype,
                u = l.toString,
                c = h.hasOwnProperty,
                p = RegExp(
                    "^" +
                    u
                        .call(c)
                        .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
                    "$"
                );
            t.exports = function (t) {
                return !(!a(t) || r(t)) && (n(t) ? p : s).test(o(t));
            };
        },
        8749: (t, e, i) => {
            var n = i(4239),
                r = i(1780),
                a = i(7005),
                o = {};
            (o["[object Float32Array]"] = o["[object Float64Array]"] = o["[object Int8Array]"] = o["[object Int16Array]"] = o["[object Int32Array]"] = o["[object Uint8Array]"] = o["[object Uint8ClampedArray]"] = o[
                "[object Uint16Array]"
            ] = o["[object Uint32Array]"] = !0),
                (o["[object Arguments]"] = o["[object Array]"] = o["[object ArrayBuffer]"] = o["[object Boolean]"] = o["[object DataView]"] = o["[object Date]"] = o["[object Error]"] = o["[object Function]"] = o["[object Map]"] = o[
                    "[object Number]"
                ] = o["[object Object]"] = o["[object RegExp]"] = o["[object Set]"] = o["[object String]"] = o["[object WeakMap]"] = !1),
                (t.exports = function (t) {
                    return a(t) && r(t.length) && !!o[n(t)];
                });
        },
        313: (t, e, i) => {
            var n = i(3218),
                r = i(5726),
                a = i(3498),
                o = Object.prototype.hasOwnProperty;
            t.exports = function (t) {
                if (!n(t)) return a(t);
                var e = r(t),
                    i = [];
                for (var s in t) ("constructor" != s || (!e && o.call(t, s))) && i.push(s);
                return i;
            };
        },
        2980: (t, e, i) => {
            var n = i(6384),
                r = i(6556),
                a = i(8483),
                o = i(9783),
                s = i(3218),
                l = i(1704),
                h = i(6390);
            t.exports = function u(t, e, i, c, p) {
                t !== e &&
                    a(
                        e,
                        function (a, l) {
                            if ((p || (p = new n()), s(a))) o(t, e, l, i, u, c, p);
                            else {
                                var d = c ? c(h(t, l), a, l + "", t, e, p) : undefined;
                                d === undefined && (d = a), r(t, l, d);
                            }
                        },
                        l
                    );
            };
        },
        9783: (t, e, i) => {
            var n = i(6556),
                r = i(4626),
                a = i(7133),
                o = i(278),
                s = i(8517),
                l = i(5694),
                h = i(1469),
                u = i(9246),
                c = i(4144),
                p = i(3560),
                d = i(3218),
                f = i(8630),
                g = i(6719),
                _ = i(6390),
                y = i(9881);
            t.exports = function (t, e, i, m, v, L, b) {
                var k = _(t, i),
                    M = _(e, i),
                    x = b.get(M);
                if (x) n(t, i, x);
                else {
                    var w = L ? L(k, M, i + "", t, e, b) : undefined,
                        C = w === undefined;
                    if (C) {
                        var P = h(M),
                            E = !P && c(M),
                            S = !P && !E && g(M);
                        (w = M),
                            P || E || S
                                ? h(k)
                                    ? (w = k)
                                    : u(k)
                                        ? (w = o(k))
                                        : E
                                            ? ((C = !1), (w = r(M, !0)))
                                            : S
                                                ? ((C = !1), (w = a(M, !0)))
                                                : (w = [])
                                : f(M) || l(M)
                                    ? ((w = k), l(k) ? (w = y(k)) : (d(k) && !p(k)) || (w = s(M)))
                                    : (C = !1);
                    }
                    C && (b.set(M, w), v(w, M, m, L, b), b["delete"](M)), n(t, i, w);
                }
            };
        },
        5976: (t, e, i) => {
            var n = i(6557),
                r = i(5357),
                a = i(61);
            t.exports = function (t, e) {
                return a(r(t, e, n), t + "");
            };
        },
        6560: (t, e, i) => {
            var n = i(5703),
                r = i(8777),
                a = i(6557),
                o = r
                    ? function (t, e) {
                        return r(t, "toString", { configurable: !0, enumerable: !1, value: n(e), writable: !0 });
                    }
                    : a;
            t.exports = o;
        },
        2545: (t) => {
            t.exports = function (t, e) {
                for (var i = -1, n = Array(t); ++i < t;) n[i] = e(i);
                return n;
            };
        },
        531: (t, e, i) => {
            var n = i(2705),
                r = i(9932),
                a = i(1469),
                o = i(3448),
                s = n ? n.prototype : undefined,
                l = s ? s.toString : undefined;
            t.exports = function h(t) {
                if ("string" == typeof t) return t;
                if (a(t)) return r(t, h) + "";
                if (o(t)) return l ? l.call(t) : "";
                var e = t + "";
                return "0" == e && 1 / t == -Infinity ? "-0" : e;
            };
        },
        1717: (t) => {
            t.exports = function (t) {
                return function (e) {
                    return t(e);
                };
            };
        },
        1811: (t, e, i) => {
            var n = i(1469),
                r = i(5403),
                a = i(5514),
                o = i(9833);
            t.exports = function (t, e) {
                return n(t) ? t : r(t, e) ? [t] : a(o(t));
            };
        },
        4318: (t, e, i) => {
            var n = i(1149);
            t.exports = function (t) {
                var e = new t.constructor(t.byteLength);
                return new n(e).set(new n(t)), e;
            };
        },
        4626: (t, e, i) => {
            t = i.nmd(t);
            var n = i(5639),
                r = e && !e.nodeType && e,
                a = r && t && !t.nodeType && t,
                o = a && a.exports === r ? n.Buffer : undefined,
                s = o ? o.allocUnsafe : undefined;
            t.exports = function (t, e) {
                if (e) return t.slice();
                var i = t.length,
                    n = s ? s(i) : new t.constructor(i);
                return t.copy(n), n;
            };
        },
        7133: (t, e, i) => {
            var n = i(4318);
            t.exports = function (t, e) {
                var i = e ? n(t.buffer) : t.buffer;
                return new t.constructor(i, t.byteOffset, t.length);
            };
        },
        278: (t) => {
            t.exports = function (t, e) {
                var i = -1,
                    n = t.length;
                for (e || (e = Array(n)); ++i < n;) e[i] = t[i];
                return e;
            };
        },
        8363: (t, e, i) => {
            var n = i(4865),
                r = i(9465);
            t.exports = function (t, e, i, a) {
                var o = !i;
                i || (i = {});
                for (var s = -1, l = e.length; ++s < l;) {
                    var h = e[s],
                        u = a ? a(i[h], t[h], h, i, t) : undefined;
                    u === undefined && (u = t[h]), o ? r(i, h, u) : n(i, h, u);
                }
                return i;
            };
        },
        4429: (t, e, i) => {
            var n = i(5639)["__core-js_shared__"];
            t.exports = n;
        },
        1463: (t, e, i) => {
            var n = i(5976),
                r = i(6612);
            t.exports = function (t) {
                return n(function (e, i) {
                    var n = -1,
                        a = i.length,
                        o = a > 1 ? i[a - 1] : undefined,
                        s = a > 2 ? i[2] : undefined;
                    for (o = t.length > 3 && "function" == typeof o ? (a--, o) : undefined, s && r(i[0], i[1], s) && ((o = a < 3 ? undefined : o), (a = 1)), e = Object(e); ++n < a;) {
                        var l = i[n];
                        l && t(e, l, n, o);
                    }
                    return e;
                });
            };
        },
        5063: (t) => {
            t.exports = function (t) {
                return function (e, i, n) {
                    for (var r = -1, a = Object(e), o = n(e), s = o.length; s--;) {
                        var l = o[t ? s : ++r];
                        if (!1 === i(a[l], l, a)) break;
                    }
                    return e;
                };
            };
        },
        8777: (t, e, i) => {
            var n = i(852),
                r = (function () {
                    try {
                        var t = n(Object, "defineProperty");
                        return t({}, "", {}), t;
                    } catch (e) { }
                })();
            t.exports = r;
        },
        1957: (t, e, i) => {
            var n = "object" == typeof i.g && i.g && i.g.Object === Object && i.g;
            t.exports = n;
        },
        5050: (t, e, i) => {
            var n = i(7019);
            t.exports = function (t, e) {
                var i = t.__data__;
                return n(e) ? i["string" == typeof e ? "string" : "hash"] : i.map;
            };
        },
        852: (t, e, i) => {
            var n = i(8458),
                r = i(7801);
            t.exports = function (t, e) {
                var i = r(t, e);
                return n(i) ? i : undefined;
            };
        },
        5924: (t, e, i) => {
            var n = i(5569)(Object.getPrototypeOf, Object);
            t.exports = n;
        },
        9607: (t, e, i) => {
            var n = i(2705),
                r = Object.prototype,
                a = r.hasOwnProperty,
                o = r.toString,
                s = n ? n.toStringTag : undefined;
            t.exports = function (t) {
                var e = a.call(t, s),
                    i = t[s];
                try {
                    t[s] = undefined;
                    var n = !0;
                } catch (l) { }
                var r = o.call(t);
                return n && (e ? (t[s] = i) : delete t[s]), r;
            };
        },
        7801: (t) => {
            t.exports = function (t, e) {
                return null == t ? undefined : t[e];
            };
        },
        222: (t, e, i) => {
            var n = i(1811),
                r = i(5694),
                a = i(1469),
                o = i(5776),
                s = i(1780),
                l = i(327);
            t.exports = function (t, e, i) {
                for (var h = -1, u = (e = n(e, t)).length, c = !1; ++h < u;) {
                    var p = l(e[h]);
                    if (!(c = null != t && i(t, p))) break;
                    t = t[p];
                }
                return c || ++h != u ? c : !!(u = null == t ? 0 : t.length) && s(u) && o(p, u) && (a(t) || r(t));
            };
        },
        1789: (t, e, i) => {
            var n = i(4536);
            t.exports = function () {
                (this.__data__ = n ? n(null) : {}), (this.size = 0);
            };
        },
        401: (t) => {
            t.exports = function (t) {
                var e = this.has(t) && delete this.__data__[t];
                return (this.size -= e ? 1 : 0), e;
            };
        },
        7667: (t, e, i) => {
            var n = i(4536),
                r = Object.prototype.hasOwnProperty;
            t.exports = function (t) {
                var e = this.__data__;
                if (n) {
                    var i = e[t];
                    return "__lodash_hash_undefined__" === i ? undefined : i;
                }
                return r.call(e, t) ? e[t] : undefined;
            };
        },
        1327: (t, e, i) => {
            var n = i(4536),
                r = Object.prototype.hasOwnProperty;
            t.exports = function (t) {
                var e = this.__data__;
                return n ? e[t] !== undefined : r.call(e, t);
            };
        },
        1866: (t, e, i) => {
            var n = i(4536);
            t.exports = function (t, e) {
                var i = this.__data__;
                return (this.size += this.has(t) ? 0 : 1), (i[t] = n && e === undefined ? "__lodash_hash_undefined__" : e), this;
            };
        },
        8517: (t, e, i) => {
            var n = i(3118),
                r = i(5924),
                a = i(5726);
            t.exports = function (t) {
                return "function" != typeof t.constructor || a(t) ? {} : n(r(t));
            };
        },
        5776: (t) => {
            var e = /^(?:0|[1-9]\d*)$/;
            t.exports = function (t, i) {
                var n = typeof t;
                return !!(i = null == i ? 9007199254740991 : i) && ("number" == n || ("symbol" != n && e.test(t))) && t > -1 && t % 1 == 0 && t < i;
            };
        },
        6612: (t, e, i) => {
            var n = i(7813),
                r = i(8612),
                a = i(5776),
                o = i(3218);
            t.exports = function (t, e, i) {
                if (!o(i)) return !1;
                var s = typeof e;
                return !!("number" == s ? r(i) && a(e, i.length) : "string" == s && e in i) && n(i[e], t);
            };
        },
        5403: (t, e, i) => {
            var n = i(1469),
                r = i(3448),
                a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                o = /^\w*$/;
            t.exports = function (t, e) {
                if (n(t)) return !1;
                var i = typeof t;
                return !("number" != i && "symbol" != i && "boolean" != i && null != t && !r(t)) || o.test(t) || !a.test(t) || (null != e && t in Object(e));
            };
        },
        7019: (t) => {
            t.exports = function (t) {
                var e = typeof t;
                return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t;
            };
        },
        5346: (t, e, i) => {
            var n,
                r = i(4429),
                a = (n = /[^.]+$/.exec((r && r.keys && r.keys.IE_PROTO) || "")) ? "Symbol(src)_1." + n : "";
            t.exports = function (t) {
                return !!a && a in t;
            };
        },
        5726: (t) => {
            var e = Object.prototype;
            t.exports = function (t) {
                var i = t && t.constructor;
                return t === (("function" == typeof i && i.prototype) || e);
            };
        },
        7040: (t) => {
            t.exports = function () {
                (this.__data__ = []), (this.size = 0);
            };
        },
        4125: (t, e, i) => {
            var n = i(8470),
                r = Array.prototype.splice;
            t.exports = function (t) {
                var e = this.__data__,
                    i = n(e, t);
                return !(i < 0) && (i == e.length - 1 ? e.pop() : r.call(e, i, 1), --this.size, !0);
            };
        },
        2117: (t, e, i) => {
            var n = i(8470);
            t.exports = function (t) {
                var e = this.__data__,
                    i = n(e, t);
                return i < 0 ? undefined : e[i][1];
            };
        },
        7518: (t, e, i) => {
            var n = i(8470);
            t.exports = function (t) {
                return n(this.__data__, t) > -1;
            };
        },
        4705: (t, e, i) => {
            var n = i(8470);
            t.exports = function (t, e) {
                var i = this.__data__,
                    r = n(i, t);
                return r < 0 ? (++this.size, i.push([t, e])) : (i[r][1] = e), this;
            };
        },
        4785: (t, e, i) => {
            var n = i(1989),
                r = i(8407),
                a = i(7071);
            t.exports = function () {
                (this.size = 0), (this.__data__ = { hash: new n(), map: new (a || r)(), string: new n() });
            };
        },
        1285: (t, e, i) => {
            var n = i(5050);
            t.exports = function (t) {
                var e = n(this, t)["delete"](t);
                return (this.size -= e ? 1 : 0), e;
            };
        },
        6e3: (t, e, i) => {
            var n = i(5050);
            t.exports = function (t) {
                return n(this, t).get(t);
            };
        },
        9916: (t, e, i) => {
            var n = i(5050);
            t.exports = function (t) {
                return n(this, t).has(t);
            };
        },
        5265: (t, e, i) => {
            var n = i(5050);
            t.exports = function (t, e) {
                var i = n(this, t),
                    r = i.size;
                return i.set(t, e), (this.size += i.size == r ? 0 : 1), this;
            };
        },
        4523: (t, e, i) => {
            var n = i(8306);
            t.exports = function (t) {
                var e = n(t, function (t) {
                    return 500 === i.size && i.clear(), t;
                }),
                    i = e.cache;
                return e;
            };
        },
        4536: (t, e, i) => {
            var n = i(852)(Object, "create");
            t.exports = n;
        },
        3498: (t) => {
            t.exports = function (t) {
                var e = [];
                if (null != t) for (var i in Object(t)) e.push(i);
                return e;
            };
        },
        1167: (t, e, i) => {
            t = i.nmd(t);
            var n = i(1957),
                r = e && !e.nodeType && e,
                a = r && t && !t.nodeType && t,
                o = a && a.exports === r && n.process,
                s = (function () {
                    try {
                        var t = a && a.require && a.require("util").types;
                        return t || (o && o.binding && o.binding("util"));
                    } catch (e) { }
                })();
            t.exports = s;
        },
        2333: (t) => {
            var e = Object.prototype.toString;
            t.exports = function (t) {
                return e.call(t);
            };
        },
        5569: (t) => {
            t.exports = function (t, e) {
                return function (i) {
                    return t(e(i));
                };
            };
        },
        5357: (t, e, i) => {
            var n = i(6874),
                r = Math.max;
            t.exports = function (t, e, i) {
                return (
                    (e = r(e === undefined ? t.length - 1 : e, 0)),
                    function () {
                        for (var a = arguments, o = -1, s = r(a.length - e, 0), l = Array(s); ++o < s;) l[o] = a[e + o];
                        o = -1;
                        for (var h = Array(e + 1); ++o < e;) h[o] = a[o];
                        return (h[e] = i(l)), n(t, this, h);
                    }
                );
            };
        },
        5639: (t, e, i) => {
            var n = i(1957),
                r = "object" == typeof self && self && self.Object === Object && self,
                a = n || r || Function("return this")();
            t.exports = a;
        },
        6390: (t) => {
            t.exports = function (t, e) {
                if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e) return t[e];
            };
        },
        61: (t, e, i) => {
            var n = i(6560),
                r = i(1275)(n);
            t.exports = r;
        },
        1275: (t) => {
            var e = Date.now;
            t.exports = function (t) {
                var i = 0,
                    n = 0;
                return function () {
                    var r = e(),
                        a = 16 - (r - n);
                    if (((n = r), a > 0)) {
                        if (++i >= 800) return arguments[0];
                    } else i = 0;
                    return t.apply(undefined, arguments);
                };
            };
        },
        7465: (t, e, i) => {
            var n = i(8407);
            t.exports = function () {
                (this.__data__ = new n()), (this.size = 0);
            };
        },
        3779: (t) => {
            t.exports = function (t) {
                var e = this.__data__,
                    i = e["delete"](t);
                return (this.size = e.size), i;
            };
        },
        7599: (t) => {
            t.exports = function (t) {
                return this.__data__.get(t);
            };
        },
        4758: (t) => {
            t.exports = function (t) {
                return this.__data__.has(t);
            };
        },
        4309: (t, e, i) => {
            var n = i(8407),
                r = i(7071),
                a = i(3369);
            t.exports = function (t, e) {
                var i = this.__data__;
                if (i instanceof n) {
                    var o = i.__data__;
                    if (!r || o.length < 199) return o.push([t, e]), (this.size = ++i.size), this;
                    i = this.__data__ = new a(o);
                }
                return i.set(t, e), (this.size = i.size), this;
            };
        },
        5514: (t, e, i) => {
            var n = i(4523),
                r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                a = /\\(\\)?/g,
                o = n(function (t) {
                    var e = [];
                    return (
                        46 === t.charCodeAt(0) && e.push(""),
                        t.replace(r, function (t, i, n, r) {
                            e.push(n ? r.replace(a, "$1") : i || t);
                        }),
                        e
                    );
                });
            t.exports = o;
        },
        327: (t, e, i) => {
            var n = i(3448);
            t.exports = function (t) {
                if ("string" == typeof t || n(t)) return t;
                var e = t + "";
                return "0" == e && 1 / t == -Infinity ? "-0" : e;
            };
        },
        346: (t) => {
            var e = Function.prototype.toString;
            t.exports = function (t) {
                if (null != t) {
                    try {
                        return e.call(t);
                    } catch (i) { }
                    try {
                        return t + "";
                    } catch (i) { }
                }
                return "";
            };
        },
        5703: (t) => {
            t.exports = function (t) {
                return function () {
                    return t;
                };
            };
        },
        7813: (t) => {
            t.exports = function (t, e) {
                return t === e || (t != t && e != e);
            };
        },
        7361: (t, e, i) => {
            var n = i(7786);
            t.exports = function (t, e, i) {
                var r = null == t ? undefined : n(t, e);
                return r === undefined ? i : r;
            };
        },
        8721: (t, e, i) => {
            var n = i(8565),
                r = i(222);
            t.exports = function (t, e) {
                return null != t && r(t, e, n);
            };
        },
        6557: (t) => {
            t.exports = function (t) {
                return t;
            };
        },
        5694: (t, e, i) => {
            var n = i(9454),
                r = i(7005),
                a = Object.prototype,
                o = a.hasOwnProperty,
                s = a.propertyIsEnumerable,
                l = n(
                    (function () {
                        return arguments;
                    })()
                )
                    ? n
                    : function (t) {
                        return r(t) && o.call(t, "callee") && !s.call(t, "callee");
                    };
            t.exports = l;
        },
        1469: (t) => {
            var e = Array.isArray;
            t.exports = e;
        },
        8612: (t, e, i) => {
            var n = i(3560),
                r = i(1780);
            t.exports = function (t) {
                return null != t && r(t.length) && !n(t);
            };
        },
        9246: (t, e, i) => {
            var n = i(8612),
                r = i(7005);
            t.exports = function (t) {
                return r(t) && n(t);
            };
        },
        4144: (t, e, i) => {
            t = i.nmd(t);
            var n = i(5639),
                r = i(5062),
                a = e && !e.nodeType && e,
                o = a && t && !t.nodeType && t,
                s = o && o.exports === a ? n.Buffer : undefined,
                l = (s ? s.isBuffer : undefined) || r;
            t.exports = l;
        },
        3560: (t, e, i) => {
            var n = i(4239),
                r = i(3218);
            t.exports = function (t) {
                if (!r(t)) return !1;
                var e = n(t);
                return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e;
            };
        },
        1780: (t) => {
            t.exports = function (t) {
                return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991;
            };
        },
        3218: (t) => {
            t.exports = function (t) {
                var e = typeof t;
                return null != t && ("object" == e || "function" == e);
            };
        },
        7005: (t) => {
            t.exports = function (t) {
                return null != t && "object" == typeof t;
            };
        },
        8630: (t, e, i) => {
            var n = i(4239),
                r = i(5924),
                a = i(7005),
                o = Function.prototype,
                s = Object.prototype,
                l = o.toString,
                h = s.hasOwnProperty,
                u = l.call(Object);
            t.exports = function (t) {
                if (!a(t) || "[object Object]" != n(t)) return !1;
                var e = r(t);
                if (null === e) return !0;
                var i = h.call(e, "constructor") && e.constructor;
                return "function" == typeof i && i instanceof i && l.call(i) == u;
            };
        },
        3448: (t, e, i) => {
            var n = i(4239),
                r = i(7005);
            t.exports = function (t) {
                return "symbol" == typeof t || (r(t) && "[object Symbol]" == n(t));
            };
        },
        6719: (t, e, i) => {
            var n = i(8749),
                r = i(1717),
                a = i(1167),
                o = a && a.isTypedArray,
                s = o ? r(o) : n;
            t.exports = s;
        },
        1704: (t, e, i) => {
            var n = i(4636),
                r = i(313),
                a = i(8612);
            t.exports = function (t) {
                return a(t) ? n(t, !0) : r(t);
            };
        },
        8306: (t, e, i) => {
            var n = i(3369);
            function r(t, e) {
                if ("function" != typeof t || (null != e && "function" != typeof e)) throw new TypeError("Expected a function");
                var i = function () {
                    var n = arguments,
                        r = e ? e.apply(this, n) : n[0],
                        a = i.cache;
                    if (a.has(r)) return a.get(r);
                    var o = t.apply(this, n);
                    return (i.cache = a.set(r, o) || a), o;
                };
                return (i.cache = new (r.Cache || n)()), i;
            }
            (r.Cache = n), (t.exports = r);
        },
        2492: (t, e, i) => {
            var n = i(2980),
                r = i(1463)(function (t, e, i) {
                    n(t, e, i);
                });
            t.exports = r;
        },
        5062: (t) => {
            t.exports = function () {
                return !1;
            };
        },
        9881: (t, e, i) => {
            var n = i(8363),
                r = i(1704);
            t.exports = function (t) {
                return n(t, r(t));
            };
        },
        9833: (t, e, i) => {
            var n = i(531);
            t.exports = function (t) {
                return null == t ? "" : n(t);
            };
        },
        2676: function (t) {
            t.exports = (function () {
                "use strict";
                function t(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function e(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                    }
                }
                function i(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t;
                }
                var n = (function () {
                    function t(t, e) {
                        (this.next = null), (this.key = t), (this.data = e), (this.left = null), (this.right = null);
                    }
                    return t;
                })();
                function r(t, e) {
                    return t > e ? 1 : t < e ? -1 : 0;
                }
                function a(t, e, i) {
                    for (var r = new n(null, null), a = r, o = r; ;) {
                        var s = i(t, e.key);
                        if (s < 0) {
                            if (null === e.left) break;
                            if (i(t, e.left.key) < 0) {
                                var l = e.left;
                                if (((e.left = l.right), (l.right = e), null === (e = l).left)) break;
                            }
                            (o.left = e), (o = e), (e = e.left);
                        } else {
                            if (!(s > 0)) break;
                            if (null === e.right) break;
                            if (i(t, e.right.key) > 0 && ((l = e.right), (e.right = l.left), (l.left = e), null === (e = l).right)) break;
                            (a.right = e), (a = e), (e = e.right);
                        }
                    }
                    return (a.right = e.left), (o.left = e.right), (e.left = r.right), (e.right = r.left), e;
                }
                function o(t, e, i, r) {
                    var o = new n(t, e);
                    if (null === i) return (o.left = o.right = null), o;
                    var s = r(t, (i = a(t, i, r)).key);
                    return s < 0 ? ((o.left = i.left), (o.right = i), (i.left = null)) : s >= 0 && ((o.right = i.right), (o.left = i), (i.right = null)), o;
                }
                function s(t, e, i) {
                    var n = null,
                        r = null;
                    if (e) {
                        var o = i((e = a(t, e, i)).key, t);
                        0 === o ? ((n = e.left), (r = e.right)) : o < 0 ? ((r = e.right), (e.right = null), (n = e)) : ((n = e.left), (e.left = null), (r = e));
                    }
                    return { left: n, right: r };
                }
                function l(t, e, i) {
                    return null === e ? t : (null === t || ((e = a(t.key, e, i)).left = t), e);
                }
                function h(t, e, i, n, r) {
                    if (t) {
                        n(e + (i ? "└── " : "├── ") + r(t) + "\n");
                        var a = e + (i ? "    " : "│   ");
                        t.left && h(t.left, a, !1, n, r), t.right && h(t.right, a, !0, n, r);
                    }
                }
                var u = (function () {
                    function t(t) {
                        void 0 === t && (t = r), (this._root = null), (this._size = 0), (this._comparator = t);
                    }
                    return (
                        (t.prototype.insert = function (t, e) {
                            return this._size++, (this._root = o(t, e, this._root, this._comparator));
                        }),
                        (t.prototype.add = function (t, e) {
                            var i = new n(t, e);
                            null === this._root && ((i.left = i.right = null), this._size++, (this._root = i));
                            var r = this._comparator,
                                o = a(t, this._root, r),
                                s = r(t, o.key);
                            return 0 === s ? (this._root = o) : (s < 0 ? ((i.left = o.left), (i.right = o), (o.left = null)) : s > 0 && ((i.right = o.right), (i.left = o), (o.right = null)), this._size++, (this._root = i)), this._root;
                        }),
                        (t.prototype.remove = function (t) {
                            this._root = this._remove(t, this._root, this._comparator);
                        }),
                        (t.prototype._remove = function (t, e, i) {
                            var n;
                            return null === e ? null : 0 === i(t, (e = a(t, e, i)).key) ? (null === e.left ? (n = e.right) : ((n = a(t, e.left, i)).right = e.right), this._size--, n) : e;
                        }),
                        (t.prototype.pop = function () {
                            var t = this._root;
                            if (t) {
                                for (; t.left;) t = t.left;
                                return (this._root = a(t.key, this._root, this._comparator)), (this._root = this._remove(t.key, this._root, this._comparator)), { key: t.key, data: t.data };
                            }
                            return null;
                        }),
                        (t.prototype.findStatic = function (t) {
                            for (var e = this._root, i = this._comparator; e;) {
                                var n = i(t, e.key);
                                if (0 === n) return e;
                                e = n < 0 ? e.left : e.right;
                            }
                            return null;
                        }),
                        (t.prototype.find = function (t) {
                            return this._root && ((this._root = a(t, this._root, this._comparator)), 0 !== this._comparator(t, this._root.key)) ? null : this._root;
                        }),
                        (t.prototype.contains = function (t) {
                            for (var e = this._root, i = this._comparator; e;) {
                                var n = i(t, e.key);
                                if (0 === n) return !0;
                                e = n < 0 ? e.left : e.right;
                            }
                            return !1;
                        }),
                        (t.prototype.forEach = function (t, e) {
                            for (var i = this._root, n = [], r = !1; !r;) null !== i ? (n.push(i), (i = i.left)) : 0 !== n.length ? ((i = n.pop()), t.call(e, i), (i = i.right)) : (r = !0);
                            return this;
                        }),
                        (t.prototype.range = function (t, e, i, n) {
                            for (var r = [], a = this._comparator, o = this._root; 0 !== r.length || o;)
                                if (o) r.push(o), (o = o.left);
                                else {
                                    if (a((o = r.pop()).key, e) > 0) break;
                                    if (a(o.key, t) >= 0 && i.call(n, o)) return this;
                                    o = o.right;
                                }
                            return this;
                        }),
                        (t.prototype.keys = function () {
                            var t = [];
                            return (
                                this.forEach(function (e) {
                                    var i = e.key;
                                    return t.push(i);
                                }),
                                t
                            );
                        }),
                        (t.prototype.values = function () {
                            var t = [];
                            return (
                                this.forEach(function (e) {
                                    var i = e.data;
                                    return t.push(i);
                                }),
                                t
                            );
                        }),
                        (t.prototype.min = function () {
                            return this._root ? this.minNode(this._root).key : null;
                        }),
                        (t.prototype.max = function () {
                            return this._root ? this.maxNode(this._root).key : null;
                        }),
                        (t.prototype.minNode = function (t) {
                            if ((void 0 === t && (t = this._root), t)) for (; t.left;) t = t.left;
                            return t;
                        }),
                        (t.prototype.maxNode = function (t) {
                            if ((void 0 === t && (t = this._root), t)) for (; t.right;) t = t.right;
                            return t;
                        }),
                        (t.prototype.at = function (t) {
                            for (var e = this._root, i = !1, n = 0, r = []; !i;)
                                if (e) r.push(e), (e = e.left);
                                else if (r.length > 0) {
                                    if (((e = r.pop()), n === t)) return e;
                                    n++, (e = e.right);
                                } else i = !0;
                            return null;
                        }),
                        (t.prototype.next = function (t) {
                            var e = this._root,
                                i = null;
                            if (t.right) {
                                for (i = t.right; i.left;) i = i.left;
                                return i;
                            }
                            for (var n = this._comparator; e;) {
                                var r = n(t.key, e.key);
                                if (0 === r) break;
                                r < 0 ? ((i = e), (e = e.left)) : (e = e.right);
                            }
                            return i;
                        }),
                        (t.prototype.prev = function (t) {
                            var e = this._root,
                                i = null;
                            if (null !== t.left) {
                                for (i = t.left; i.right;) i = i.right;
                                return i;
                            }
                            for (var n = this._comparator; e;) {
                                var r = n(t.key, e.key);
                                if (0 === r) break;
                                r < 0 ? (e = e.left) : ((i = e), (e = e.right));
                            }
                            return i;
                        }),
                        (t.prototype.clear = function () {
                            return (this._root = null), (this._size = 0), this;
                        }),
                        (t.prototype.toList = function () {
                            return d(this._root);
                        }),
                        (t.prototype.load = function (t, e, i) {
                            void 0 === e && (e = []), void 0 === i && (i = !1);
                            var n = t.length,
                                r = this._comparator;
                            if ((i && _(t, e, 0, n - 1, r), null === this._root)) (this._root = c(t, e, 0, n)), (this._size = n);
                            else {
                                var a = g(this.toList(), p(t, e), r);
                                (n = this._size + n), (this._root = f({ head: a }, 0, n));
                            }
                            return this;
                        }),
                        (t.prototype.isEmpty = function () {
                            return null === this._root;
                        }),
                        Object.defineProperty(t.prototype, "size", {
                            get: function () {
                                return this._size;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "root", {
                            get: function () {
                                return this._root;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.toString = function (t) {
                            void 0 === t &&
                                (t = function (t) {
                                    return String(t.key);
                                });
                            var e = [];
                            return (
                                h(
                                    this._root,
                                    "",
                                    !0,
                                    function (t) {
                                        return e.push(t);
                                    },
                                    t
                                ),
                                e.join("")
                            );
                        }),
                        (t.prototype.update = function (t, e, i) {
                            var n = this._comparator,
                                r = s(t, this._root, n),
                                a = r.left,
                                h = r.right;
                            n(t, e) < 0 ? (h = o(e, i, h, n)) : (a = o(e, i, a, n)), (this._root = l(a, h, n));
                        }),
                        (t.prototype.split = function (t) {
                            return s(t, this._root, this._comparator);
                        }),
                        t
                    );
                })();
                function c(t, e, i, r) {
                    var a = r - i;
                    if (a > 0) {
                        var o = i + Math.floor(a / 2),
                            s = t[o],
                            l = e[o],
                            h = new n(s, l);
                        return (h.left = c(t, e, i, o)), (h.right = c(t, e, o + 1, r)), h;
                    }
                    return null;
                }
                function p(t, e) {
                    for (var i = new n(null, null), r = i, a = 0; a < t.length; a++) r = r.next = new n(t[a], e[a]);
                    return (r.next = null), i.next;
                }
                function d(t) {
                    for (var e = t, i = [], r = !1, a = new n(null, null), o = a; !r;) e ? (i.push(e), (e = e.left)) : i.length > 0 ? (e = (e = o = o.next = i.pop()).right) : (r = !0);
                    return (o.next = null), a.next;
                }
                function f(t, e, i) {
                    var n = i - e;
                    if (n > 0) {
                        var r = e + Math.floor(n / 2),
                            a = f(t, e, r),
                            o = t.head;
                        return (o.left = a), (t.head = t.head.next), (o.right = f(t, r + 1, i)), o;
                    }
                    return null;
                }
                function g(t, e, i) {
                    for (var r = new n(null, null), a = r, o = t, s = e; null !== o && null !== s;) i(o.key, s.key) < 0 ? ((a.next = o), (o = o.next)) : ((a.next = s), (s = s.next)), (a = a.next);
                    return null !== o ? (a.next = o) : null !== s && (a.next = s), r.next;
                }
                function _(t, e, i, n, r) {
                    if (!(i >= n)) {
                        for (var a = t[(i + n) >> 1], o = i - 1, s = n + 1; ;) {
                            do {
                                o++;
                            } while (r(t[o], a) < 0);
                            do {
                                s--;
                            } while (r(t[s], a) > 0);
                            if (o >= s) break;
                            var l = t[o];
                            (t[o] = t[s]), (t[s] = l), (l = e[o]), (e[o] = e[s]), (e[s] = l);
                        }
                        _(t, e, i, s, r), _(t, e, s + 1, n, r);
                    }
                }
                var y = function (t, e) {
                    return t.ll.x <= e.x && e.x <= t.ur.x && t.ll.y <= e.y && e.y <= t.ur.y;
                },
                    m = function (t, e) {
                        if (e.ur.x < t.ll.x || t.ur.x < e.ll.x || e.ur.y < t.ll.y || t.ur.y < e.ll.y) return null;
                        var i = t.ll.x < e.ll.x ? e.ll.x : t.ll.x,
                            n = t.ur.x < e.ur.x ? t.ur.x : e.ur.x;
                        return { ll: { x: i, y: t.ll.y < e.ll.y ? e.ll.y : t.ll.y }, ur: { x: n, y: t.ur.y < e.ur.y ? t.ur.y : e.ur.y } };
                    },
                    v = Number.EPSILON;
                v === undefined && (v = Math.pow(2, -52));
                var L = v * v,
                    b = function (t, e) {
                        if (-v < t && t < v && -v < e && e < v) return 0;
                        var i = t - e;
                        return i * i < L * t * e ? 0 : t < e ? -1 : 1;
                    },
                    k = (function () {
                        function e() {
                            t(this, e), this.reset();
                        }
                        return (
                            i(e, [
                                {
                                    key: "reset",
                                    value: function () {
                                        (this.xRounder = new M()), (this.yRounder = new M());
                                    },
                                },
                                {
                                    key: "round",
                                    value: function (t, e) {
                                        return { x: this.xRounder.round(t), y: this.yRounder.round(e) };
                                    },
                                },
                            ]),
                            e
                        );
                    })(),
                    M = (function () {
                        function e() {
                            t(this, e), (this.tree = new u()), this.round(0);
                        }
                        return (
                            i(e, [
                                {
                                    key: "round",
                                    value: function (t) {
                                        var e = this.tree.add(t),
                                            i = this.tree.prev(e);
                                        if (null !== i && 0 === b(e.key, i.key)) return this.tree.remove(t), i.key;
                                        var n = this.tree.next(e);
                                        return null !== n && 0 === b(e.key, n.key) ? (this.tree.remove(t), n.key) : t;
                                    },
                                },
                            ]),
                            e
                        );
                    })(),
                    x = new k(),
                    w = function (t, e) {
                        return t.x * e.y - t.y * e.x;
                    },
                    C = function (t, e) {
                        return t.x * e.x + t.y * e.y;
                    },
                    P = function (t, e, i) {
                        var n = { x: e.x - t.x, y: e.y - t.y },
                            r = { x: i.x - t.x, y: i.y - t.y },
                            a = w(n, r);
                        return b(a, 0);
                    },
                    E = function (t) {
                        return Math.sqrt(C(t, t));
                    },
                    S = function (t, e, i) {
                        var n = { x: e.x - t.x, y: e.y - t.y },
                            r = { x: i.x - t.x, y: i.y - t.y };
                        return w(r, n) / E(r) / E(n);
                    },
                    O = function (t, e, i) {
                        var n = { x: e.x - t.x, y: e.y - t.y },
                            r = { x: i.x - t.x, y: i.y - t.y };
                        return C(r, n) / E(r) / E(n);
                    },
                    D = function (t, e, i) {
                        return 0 === e.y ? null : { x: t.x + (e.x / e.y) * (i - t.y), y: i };
                    },
                    R = function (t, e, i) {
                        return 0 === e.x ? null : { x: i, y: t.y + (e.y / e.x) * (i - t.x) };
                    },
                    B = function (t, e, i, n) {
                        if (0 === e.x) return R(i, n, t.x);
                        if (0 === n.x) return R(t, e, i.x);
                        if (0 === e.y) return D(i, n, t.y);
                        if (0 === n.y) return D(t, e, i.y);
                        var r = w(e, n);
                        if (0 == r) return null;
                        var a = { x: i.x - t.x, y: i.y - t.y },
                            o = w(a, e) / r,
                            s = w(a, n) / r;
                        return { x: (t.x + s * e.x + (i.x + o * n.x)) / 2, y: (t.y + s * e.y + (i.y + o * n.y)) / 2 };
                    },
                    T = (function () {
                        function e(i, n) {
                            t(this, e), i.events === undefined ? (i.events = [this]) : i.events.push(this), (this.point = i), (this.isLeft = n);
                        }
                        return (
                            i(e, null, [
                                {
                                    key: "compare",
                                    value: function (t, i) {
                                        var n = e.comparePoints(t.point, i.point);
                                        return 0 !== n ? n : (t.point !== i.point && t.link(i), t.isLeft !== i.isLeft ? (t.isLeft ? 1 : -1) : j.compare(t.segment, i.segment));
                                    },
                                },
                                {
                                    key: "comparePoints",
                                    value: function (t, e) {
                                        return t.x < e.x ? -1 : t.x > e.x ? 1 : t.y < e.y ? -1 : t.y > e.y ? 1 : 0;
                                    },
                                },
                            ]),
                            i(e, [
                                {
                                    key: "link",
                                    value: function (t) {
                                        if (t.point === this.point) throw new Error("Tried to link already linked events");
                                        for (var e = t.point.events, i = 0, n = e.length; i < n; i++) {
                                            var r = e[i];
                                            this.point.events.push(r), (r.point = this.point);
                                        }
                                        this.checkForConsuming();
                                    },
                                },
                                {
                                    key: "checkForConsuming",
                                    value: function () {
                                        for (var t = this.point.events.length, e = 0; e < t; e++) {
                                            var i = this.point.events[e];
                                            if (i.segment.consumedBy === undefined)
                                                for (var n = e + 1; n < t; n++) {
                                                    var r = this.point.events[n];
                                                    r.consumedBy === undefined && i.otherSE.point.events === r.otherSE.point.events && i.segment.consume(r.segment);
                                                }
                                        }
                                    },
                                },
                                {
                                    key: "getAvailableLinkedEvents",
                                    value: function () {
                                        for (var t = [], e = 0, i = this.point.events.length; e < i; e++) {
                                            var n = this.point.events[e];
                                            n !== this && !n.segment.ringOut && n.segment.isInResult() && t.push(n);
                                        }
                                        return t;
                                    },
                                },
                                {
                                    key: "getLeftmostComparator",
                                    value: function (t) {
                                        var e = this,
                                            i = new Map(),
                                            n = function (n) {
                                                var r = n.otherSE;
                                                i.set(n, { sine: S(e.point, t.point, r.point), cosine: O(e.point, t.point, r.point) });
                                            };
                                        return function (t, e) {
                                            i.has(t) || n(t), i.has(e) || n(e);
                                            var r = i.get(t),
                                                a = r.sine,
                                                o = r.cosine,
                                                s = i.get(e),
                                                l = s.sine,
                                                h = s.cosine;
                                            return a >= 0 && l >= 0 ? (o < h ? 1 : o > h ? -1 : 0) : a < 0 && l < 0 ? (o < h ? -1 : o > h ? 1 : 0) : l < a ? -1 : l > a ? 1 : 0;
                                        };
                                    },
                                },
                            ]),
                            e
                        );
                    })(),
                    I = 0,
                    j = (function () {
                        function e(i, n, r, a) {
                            t(this, e), (this.id = ++I), (this.leftSE = i), (i.segment = this), (i.otherSE = n), (this.rightSE = n), (n.segment = this), (n.otherSE = i), (this.rings = r), (this.windings = a);
                        }
                        return (
                            i(e, null, [
                                {
                                    key: "compare",
                                    value: function (t, e) {
                                        var i = t.leftSE.point.x,
                                            n = e.leftSE.point.x,
                                            r = t.rightSE.point.x,
                                            a = e.rightSE.point.x;
                                        if (a < i) return 1;
                                        if (r < n) return -1;
                                        var o = t.leftSE.point.y,
                                            s = e.leftSE.point.y,
                                            l = t.rightSE.point.y,
                                            h = e.rightSE.point.y;
                                        if (i < n) {
                                            if (s < o && s < l) return 1;
                                            if (s > o && s > l) return -1;
                                            var u = t.comparePoint(e.leftSE.point);
                                            if (u < 0) return 1;
                                            if (u > 0) return -1;
                                            var c = e.comparePoint(t.rightSE.point);
                                            return 0 !== c ? c : -1;
                                        }
                                        if (i > n) {
                                            if (o < s && o < h) return -1;
                                            if (o > s && o > h) return 1;
                                            var p = e.comparePoint(t.leftSE.point);
                                            if (0 !== p) return p;
                                            var d = t.comparePoint(e.rightSE.point);
                                            return d < 0 ? 1 : d > 0 ? -1 : 1;
                                        }
                                        if (o < s) return -1;
                                        if (o > s) return 1;
                                        if (r < a) {
                                            var f = e.comparePoint(t.rightSE.point);
                                            if (0 !== f) return f;
                                        }
                                        if (r > a) {
                                            var g = t.comparePoint(e.rightSE.point);
                                            if (g < 0) return 1;
                                            if (g > 0) return -1;
                                        }
                                        if (r !== a) {
                                            var _ = l - o,
                                                y = r - i,
                                                m = h - s,
                                                v = a - n;
                                            if (_ > y && m < v) return 1;
                                            if (_ < y && m > v) return -1;
                                        }
                                        return r > a ? 1 : r < a || l < h ? -1 : l > h ? 1 : t.id < e.id ? -1 : t.id > e.id ? 1 : 0;
                                    },
                                },
                            ]),
                            i(
                                e,
                                [
                                    {
                                        key: "replaceRightSE",
                                        value: function (t) {
                                            (this.rightSE = t), (this.rightSE.segment = this), (this.rightSE.otherSE = this.leftSE), (this.leftSE.otherSE = this.rightSE);
                                        },
                                    },
                                    {
                                        key: "bbox",
                                        value: function () {
                                            var t = this.leftSE.point.y,
                                                e = this.rightSE.point.y;
                                            return { ll: { x: this.leftSE.point.x, y: t < e ? t : e }, ur: { x: this.rightSE.point.x, y: t > e ? t : e } };
                                        },
                                    },
                                    {
                                        key: "vector",
                                        value: function () {
                                            return { x: this.rightSE.point.x - this.leftSE.point.x, y: this.rightSE.point.y - this.leftSE.point.y };
                                        },
                                    },
                                    {
                                        key: "isAnEndpoint",
                                        value: function (t) {
                                            return (t.x === this.leftSE.point.x && t.y === this.leftSE.point.y) || (t.x === this.rightSE.point.x && t.y === this.rightSE.point.y);
                                        },
                                    },
                                    {
                                        key: "comparePoint",
                                        value: function (t) {
                                            if (this.isAnEndpoint(t)) return 0;
                                            var e = this.leftSE.point,
                                                i = this.rightSE.point,
                                                n = this.vector();
                                            if (e.x === i.x) return t.x === e.x ? 0 : t.x < e.x ? 1 : -1;
                                            var r = (t.y - e.y) / n.y,
                                                a = e.x + r * n.x;
                                            if (t.x === a) return 0;
                                            var o = (t.x - e.x) / n.x,
                                                s = e.y + o * n.y;
                                            return t.y === s ? 0 : t.y < s ? -1 : 1;
                                        },
                                    },
                                    {
                                        key: "getIntersection",
                                        value: function (t) {
                                            var e = this.bbox(),
                                                i = t.bbox(),
                                                n = m(e, i);
                                            if (null === n) return null;
                                            var r = this.leftSE.point,
                                                a = this.rightSE.point,
                                                o = t.leftSE.point,
                                                s = t.rightSE.point,
                                                l = y(e, o) && 0 === this.comparePoint(o),
                                                h = y(i, r) && 0 === t.comparePoint(r),
                                                u = y(e, s) && 0 === this.comparePoint(s),
                                                c = y(i, a) && 0 === t.comparePoint(a);
                                            if (h && l) return c && !u ? a : !c && u ? s : null;
                                            if (h) return u && r.x === s.x && r.y === s.y ? null : r;
                                            if (l) return c && a.x === o.x && a.y === o.y ? null : o;
                                            if (c && u) return null;
                                            if (c) return a;
                                            if (u) return s;
                                            var p = B(r, this.vector(), o, t.vector());
                                            return null === p ? null : y(n, p) ? x.round(p.x, p.y) : null;
                                        },
                                    },
                                    {
                                        key: "split",
                                        value: function (t) {
                                            var i = [],
                                                n = t.events !== undefined,
                                                r = new T(t, !0),
                                                a = new T(t, !1),
                                                o = this.rightSE;
                                            this.replaceRightSE(a), i.push(a), i.push(r);
                                            var s = new e(r, o, this.rings.slice(), this.windings.slice());
                                            return (
                                                T.comparePoints(s.leftSE.point, s.rightSE.point) > 0 && s.swapEvents(),
                                                T.comparePoints(this.leftSE.point, this.rightSE.point) > 0 && this.swapEvents(),
                                                n && (r.checkForConsuming(), a.checkForConsuming()),
                                                i
                                            );
                                        },
                                    },
                                    {
                                        key: "swapEvents",
                                        value: function () {
                                            var t = this.rightSE;
                                            (this.rightSE = this.leftSE), (this.leftSE = t), (this.leftSE.isLeft = !0), (this.rightSE.isLeft = !1);
                                            for (var e = 0, i = this.windings.length; e < i; e++) this.windings[e] *= -1;
                                        },
                                    },
                                    {
                                        key: "consume",
                                        value: function (t) {
                                            for (var i = this, n = t; i.consumedBy;) i = i.consumedBy;
                                            for (; n.consumedBy;) n = n.consumedBy;
                                            var r = e.compare(i, n);
                                            if (0 !== r) {
                                                if (r > 0) {
                                                    var a = i;
                                                    (i = n), (n = a);
                                                }
                                                if (i.prev === n) {
                                                    var o = i;
                                                    (i = n), (n = o);
                                                }
                                                for (var s = 0, l = n.rings.length; s < l; s++) {
                                                    var h = n.rings[s],
                                                        u = n.windings[s],
                                                        c = i.rings.indexOf(h);
                                                    -1 === c ? (i.rings.push(h), i.windings.push(u)) : (i.windings[c] += u);
                                                }
                                                (n.rings = null), (n.windings = null), (n.consumedBy = i), (n.leftSE.consumedBy = i.leftSE), (n.rightSE.consumedBy = i.rightSE);
                                            }
                                        },
                                    },
                                    {
                                        key: "prevInResult",
                                        value: function () {
                                            return (
                                                this._prevInResult !== undefined ||
                                                (this.prev ? (this.prev.isInResult() ? (this._prevInResult = this.prev) : (this._prevInResult = this.prev.prevInResult())) : (this._prevInResult = null)),
                                                this._prevInResult
                                            );
                                        },
                                    },
                                    {
                                        key: "beforeState",
                                        value: function () {
                                            if (this._beforeState !== undefined) return this._beforeState;
                                            if (this.prev) {
                                                var t = this.prev.consumedBy || this.prev;
                                                this._beforeState = t.afterState();
                                            } else this._beforeState = { rings: [], windings: [], multiPolys: [] };
                                            return this._beforeState;
                                        },
                                    },
                                    {
                                        key: "afterState",
                                        value: function () {
                                            if (this._afterState !== undefined) return this._afterState;
                                            var t = this.beforeState();
                                            this._afterState = { rings: t.rings.slice(0), windings: t.windings.slice(0), multiPolys: [] };
                                            for (var e = this._afterState.rings, i = this._afterState.windings, n = this._afterState.multiPolys, r = 0, a = this.rings.length; r < a; r++) {
                                                var o = this.rings[r],
                                                    s = this.windings[r],
                                                    l = e.indexOf(o);
                                                -1 === l ? (e.push(o), i.push(s)) : (i[l] += s);
                                            }
                                            for (var h = [], u = [], c = 0, p = e.length; c < p; c++)
                                                if (0 !== i[c]) {
                                                    var d = e[c],
                                                        f = d.poly;
                                                    if (-1 === u.indexOf(f))
                                                        if (d.isExterior) h.push(f);
                                                        else {
                                                            -1 === u.indexOf(f) && u.push(f);
                                                            var g = h.indexOf(d.poly);
                                                            -1 !== g && h.splice(g, 1);
                                                        }
                                                }
                                            for (var _ = 0, y = h.length; _ < y; _++) {
                                                var m = h[_].multiPoly;
                                                -1 === n.indexOf(m) && n.push(m);
                                            }
                                            return this._afterState;
                                        },
                                    },
                                    {
                                        key: "isInResult",
                                        value: function () {
                                            if (this.consumedBy) return !1;
                                            if (this._isInResult !== undefined) return this._isInResult;
                                            var t = this.beforeState().multiPolys,
                                                e = this.afterState().multiPolys;
                                            switch (q.type) {
                                                case "union":
                                                    var i = 0 === t.length,
                                                        n = 0 === e.length;
                                                    this._isInResult = i !== n;
                                                    break;
                                                case "intersection":
                                                    var r, a;
                                                    t.length < e.length ? ((r = t.length), (a = e.length)) : ((r = e.length), (a = t.length)), (this._isInResult = a === q.numMultiPolys && r < a);
                                                    break;
                                                case "xor":
                                                    var o = Math.abs(t.length - e.length);
                                                    this._isInResult = o % 2 == 1;
                                                    break;
                                                case "difference":
                                                    var s = function (t) {
                                                        return 1 === t.length && t[0].isSubject;
                                                    };
                                                    this._isInResult = s(t) !== s(e);
                                                    break;
                                                default:
                                                    throw new Error("Unrecognized operation type found ".concat(q.type));
                                            }
                                            return this._isInResult;
                                        },
                                    },
                                ],
                                [
                                    {
                                        key: "fromRing",
                                        value: function (t, i, n) {
                                            var r,
                                                a,
                                                o,
                                                s = T.comparePoints(t, i);
                                            if (s < 0) (r = t), (a = i), (o = 1);
                                            else {
                                                if (!(s > 0)) throw new Error("Tried to create degenerate segment at [".concat(t.x, ", ").concat(t.y, "]"));
                                                (r = i), (a = t), (o = -1);
                                            }
                                            return new e(new T(r, !0), new T(a, !1), [n], [o]);
                                        },
                                    },
                                ]
                            ),
                            e
                        );
                    })(),
                    G = (function () {
                        function e(i, n, r) {
                            if ((t(this, e), !Array.isArray(i) || 0 === i.length)) throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
                            if (((this.poly = n), (this.isExterior = r), (this.segments = []), "number" != typeof i[0][0] || "number" != typeof i[0][1])) throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
                            var a = x.round(i[0][0], i[0][1]);
                            this.bbox = { ll: { x: a.x, y: a.y }, ur: { x: a.x, y: a.y } };
                            for (var o = a, s = 1, l = i.length; s < l; s++) {
                                if ("number" != typeof i[s][0] || "number" != typeof i[s][1]) throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
                                var h = x.round(i[s][0], i[s][1]);
                                (h.x === o.x && h.y === o.y) ||
                                    (this.segments.push(j.fromRing(o, h, this)),
                                        h.x < this.bbox.ll.x && (this.bbox.ll.x = h.x),
                                        h.y < this.bbox.ll.y && (this.bbox.ll.y = h.y),
                                        h.x > this.bbox.ur.x && (this.bbox.ur.x = h.x),
                                        h.y > this.bbox.ur.y && (this.bbox.ur.y = h.y),
                                        (o = h));
                            }
                            (a.x === o.x && a.y === o.y) || this.segments.push(j.fromRing(o, a, this));
                        }
                        return (
                            i(e, [
                                {
                                    key: "getSweepEvents",
                                    value: function () {
                                        for (var t = [], e = 0, i = this.segments.length; e < i; e++) {
                                            var n = this.segments[e];
                                            t.push(n.leftSE), t.push(n.rightSE);
                                        }
                                        return t;
                                    },
                                },
                            ]),
                            e
                        );
                    })(),
                    A = (function () {
                        function e(i, n) {
                            if ((t(this, e), !Array.isArray(i))) throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
                            (this.exteriorRing = new G(i[0], this, !0)),
                                (this.bbox = { ll: { x: this.exteriorRing.bbox.ll.x, y: this.exteriorRing.bbox.ll.y }, ur: { x: this.exteriorRing.bbox.ur.x, y: this.exteriorRing.bbox.ur.y } }),
                                (this.interiorRings = []);
                            for (var r = 1, a = i.length; r < a; r++) {
                                var o = new G(i[r], this, !1);
                                o.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = o.bbox.ll.x),
                                    o.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = o.bbox.ll.y),
                                    o.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = o.bbox.ur.x),
                                    o.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = o.bbox.ur.y),
                                    this.interiorRings.push(o);
                            }
                            this.multiPoly = n;
                        }
                        return (
                            i(e, [
                                {
                                    key: "getSweepEvents",
                                    value: function () {
                                        for (var t = this.exteriorRing.getSweepEvents(), e = 0, i = this.interiorRings.length; e < i; e++)
                                            for (var n = this.interiorRings[e].getSweepEvents(), r = 0, a = n.length; r < a; r++) t.push(n[r]);
                                        return t;
                                    },
                                },
                            ]),
                            e
                        );
                    })(),
                    N = (function () {
                        function e(i, n) {
                            if ((t(this, e), !Array.isArray(i))) throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
                            try {
                                "number" == typeof i[0][0][0] && (i = [i]);
                            } catch (s) { }
                            (this.polys = []), (this.bbox = { ll: { x: Number.POSITIVE_INFINITY, y: Number.POSITIVE_INFINITY }, ur: { x: Number.NEGATIVE_INFINITY, y: Number.NEGATIVE_INFINITY } });
                            for (var r = 0, a = i.length; r < a; r++) {
                                var o = new A(i[r], this);
                                o.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = o.bbox.ll.x),
                                    o.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = o.bbox.ll.y),
                                    o.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = o.bbox.ur.x),
                                    o.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = o.bbox.ur.y),
                                    this.polys.push(o);
                            }
                            this.isSubject = n;
                        }
                        return (
                            i(e, [
                                {
                                    key: "getSweepEvents",
                                    value: function () {
                                        for (var t = [], e = 0, i = this.polys.length; e < i; e++) for (var n = this.polys[e].getSweepEvents(), r = 0, a = n.length; r < a; r++) t.push(n[r]);
                                        return t;
                                    },
                                },
                            ]),
                            e
                        );
                    })(),
                    z = (function () {
                        function e(i) {
                            t(this, e), (this.events = i);
                            for (var n = 0, r = i.length; n < r; n++) i[n].segment.ringOut = this;
                            this.poly = null;
                        }
                        return (
                            i(e, null, [
                                {
                                    key: "factory",
                                    value: function (t) {
                                        for (var i = [], n = 0, r = t.length; n < r; n++) {
                                            var a = t[n];
                                            if (a.isInResult() && !a.ringOut) {
                                                for (var o = null, s = a.leftSE, l = a.rightSE, h = [s], u = s.point, c = []; (o = s), (s = l), h.push(s), s.point !== u;)
                                                    for (; ;) {
                                                        var p = s.getAvailableLinkedEvents();
                                                        if (0 === p.length) {
                                                            var d = h[0].point,
                                                                f = h[h.length - 1].point;
                                                            throw new Error(
                                                                "Unable to complete output ring starting at [".concat(d.x, ",") + " ".concat(d.y, "]. Last matching segment found ends at") + " [".concat(f.x, ", ").concat(f.y, "].")
                                                            );
                                                        }
                                                        if (1 === p.length) {
                                                            l = p[0].otherSE;
                                                            break;
                                                        }
                                                        for (var g = null, _ = 0, y = c.length; _ < y; _++)
                                                            if (c[_].point === s.point) {
                                                                g = _;
                                                                break;
                                                            }
                                                        if (null === g) {
                                                            c.push({ index: h.length, point: s.point });
                                                            var m = s.getLeftmostComparator(o);
                                                            l = p.sort(m)[0].otherSE;
                                                            break;
                                                        }
                                                        var v = c.splice(g)[0],
                                                            L = h.splice(v.index);
                                                        L.unshift(L[0].otherSE), i.push(new e(L.reverse()));
                                                    }
                                                i.push(new e(h));
                                            }
                                        }
                                        return i;
                                    },
                                },
                            ]),
                            i(e, [
                                {
                                    key: "getGeom",
                                    value: function () {
                                        for (var t = this.events[0].point, e = [t], i = 1, n = this.events.length - 1; i < n; i++) {
                                            var r = this.events[i].point,
                                                a = this.events[i + 1].point;
                                            0 !== P(r, t, a) && (e.push(r), (t = r));
                                        }
                                        if (1 === e.length) return null;
                                        var o = e[0],
                                            s = e[1];
                                        0 === P(o, t, s) && e.shift(), e.push(e[0]);
                                        for (var l = this.isExteriorRing() ? 1 : -1, h = this.isExteriorRing() ? 0 : e.length - 1, u = this.isExteriorRing() ? e.length : -1, c = [], p = h; p != u; p += l) c.push([e[p].x, e[p].y]);
                                        return c;
                                    },
                                },
                                {
                                    key: "isExteriorRing",
                                    value: function () {
                                        if (this._isExteriorRing === undefined) {
                                            var t = this.enclosingRing();
                                            this._isExteriorRing = !t || !t.isExteriorRing();
                                        }
                                        return this._isExteriorRing;
                                    },
                                },
                                {
                                    key: "enclosingRing",
                                    value: function () {
                                        return this._enclosingRing === undefined && (this._enclosingRing = this._calcEnclosingRing()), this._enclosingRing;
                                    },
                                },
                                {
                                    key: "_calcEnclosingRing",
                                    value: function () {
                                        for (var t = this.events[0], e = 1, i = this.events.length; e < i; e++) {
                                            var n = this.events[e];
                                            T.compare(t, n) > 0 && (t = n);
                                        }
                                        for (var r = t.segment.prevInResult(), a = r ? r.prevInResult() : null; ;) {
                                            if (!r) return null;
                                            if (!a) return r.ringOut;
                                            if (a.ringOut !== r.ringOut) return a.ringOut.enclosingRing() !== r.ringOut ? r.ringOut : r.ringOut.enclosingRing();
                                            (r = a.prevInResult()), (a = r ? r.prevInResult() : null);
                                        }
                                    },
                                },
                            ]),
                            e
                        );
                    })(),
                    U = (function () {
                        function e(i) {
                            t(this, e), (this.exteriorRing = i), (i.poly = this), (this.interiorRings = []);
                        }
                        return (
                            i(e, [
                                {
                                    key: "addInterior",
                                    value: function (t) {
                                        this.interiorRings.push(t), (t.poly = this);
                                    },
                                },
                                {
                                    key: "getGeom",
                                    value: function () {
                                        var t = [this.exteriorRing.getGeom()];
                                        if (null === t[0]) return null;
                                        for (var e = 0, i = this.interiorRings.length; e < i; e++) {
                                            var n = this.interiorRings[e].getGeom();
                                            null !== n && t.push(n);
                                        }
                                        return t;
                                    },
                                },
                            ]),
                            e
                        );
                    })(),
                    V = (function () {
                        function e(i) {
                            t(this, e), (this.rings = i), (this.polys = this._composePolys(i));
                        }
                        return (
                            i(e, [
                                {
                                    key: "getGeom",
                                    value: function () {
                                        for (var t = [], e = 0, i = this.polys.length; e < i; e++) {
                                            var n = this.polys[e].getGeom();
                                            null !== n && t.push(n);
                                        }
                                        return t;
                                    },
                                },
                                {
                                    key: "_composePolys",
                                    value: function (t) {
                                        for (var e = [], i = 0, n = t.length; i < n; i++) {
                                            var r = t[i];
                                            if (!r.poly)
                                                if (r.isExteriorRing()) e.push(new U(r));
                                                else {
                                                    var a = r.enclosingRing();
                                                    a.poly || e.push(new U(a)), a.poly.addInterior(r);
                                                }
                                        }
                                        return e;
                                    },
                                },
                            ]),
                            e
                        );
                    })(),
                    F = (function () {
                        function e(i) {
                            var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : j.compare;
                            t(this, e), (this.queue = i), (this.tree = new u(n)), (this.segments = []);
                        }
                        return (
                            i(e, [
                                {
                                    key: "process",
                                    value: function (t) {
                                        var e = t.segment,
                                            i = [];
                                        if (t.consumedBy) return t.isLeft ? this.queue.remove(t.otherSE) : this.tree.remove(e), i;
                                        var n = t.isLeft ? this.tree.insert(e) : this.tree.find(e);
                                        if (!n)
                                            throw new Error(
                                                "Unable to find segment #".concat(e.id, " ") +
                                                "[".concat(e.leftSE.point.x, ", ").concat(e.leftSE.point.y, "] -> ") +
                                                "[".concat(e.rightSE.point.x, ", ").concat(e.rightSE.point.y, "] ") +
                                                "in SweepLine tree. Please submit a bug report."
                                            );
                                        for (var r = n, a = n, o = undefined, s = undefined; o === undefined;) null === (r = this.tree.prev(r)) ? (o = null) : r.key.consumedBy === undefined && (o = r.key);
                                        for (; s === undefined;) null === (a = this.tree.next(a)) ? (s = null) : a.key.consumedBy === undefined && (s = a.key);
                                        if (t.isLeft) {
                                            var l = null;
                                            if (o) {
                                                var h = o.getIntersection(e);
                                                if (null !== h && (e.isAnEndpoint(h) || (l = h), !o.isAnEndpoint(h))) for (var u = this._splitSafely(o, h), c = 0, p = u.length; c < p; c++) i.push(u[c]);
                                            }
                                            var d = null;
                                            if (s) {
                                                var f = s.getIntersection(e);
                                                if (null !== f && (e.isAnEndpoint(f) || (d = f), !s.isAnEndpoint(f))) for (var g = this._splitSafely(s, f), _ = 0, y = g.length; _ < y; _++) i.push(g[_]);
                                            }
                                            if (null !== l || null !== d) {
                                                var m = null;
                                                (m = null === l ? d : null === d || T.comparePoints(l, d) <= 0 ? l : d), this.queue.remove(e.rightSE), i.push(e.rightSE);
                                                for (var v = e.split(m), L = 0, b = v.length; L < b; L++) i.push(v[L]);
                                            }
                                            i.length > 0 ? (this.tree.remove(e), i.push(t)) : (this.segments.push(e), (e.prev = o));
                                        } else {
                                            if (o && s) {
                                                var k = o.getIntersection(s);
                                                if (null !== k) {
                                                    if (!o.isAnEndpoint(k)) for (var M = this._splitSafely(o, k), x = 0, w = M.length; x < w; x++) i.push(M[x]);
                                                    if (!s.isAnEndpoint(k)) for (var C = this._splitSafely(s, k), P = 0, E = C.length; P < E; P++) i.push(C[P]);
                                                }
                                            }
                                            this.tree.remove(e);
                                        }
                                        return i;
                                    },
                                },
                                {
                                    key: "_splitSafely",
                                    value: function (t, e) {
                                        this.tree.remove(t);
                                        var i = t.rightSE;
                                        this.queue.remove(i);
                                        var n = t.split(e);
                                        return n.push(i), t.consumedBy === undefined && this.tree.insert(t), n;
                                    },
                                },
                            ]),
                            e
                        );
                    })(),
                    K = ("undefined" != typeof process && process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE) || 1e6,
                    H = ("undefined" != typeof process && process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS) || 1e6,
                    q = new ((function () {
                        function e() {
                            t(this, e);
                        }
                        return (
                            i(e, [
                                {
                                    key: "run",
                                    value: function (t, e, i) {
                                        (q.type = t), x.reset();
                                        for (var n = [new N(e, !0)], r = 0, a = i.length; r < a; r++) n.push(new N(i[r], !1));
                                        if (((q.numMultiPolys = n.length), "difference" === q.type)) for (var o = n[0], s = 1; s < n.length;) null !== m(n[s].bbox, o.bbox) ? s++ : n.splice(s, 1);
                                        if ("intersection" === q.type) for (var l = 0, h = n.length; l < h; l++) for (var c = n[l], p = l + 1, d = n.length; p < d; p++) if (null === m(c.bbox, n[p].bbox)) return [];
                                        for (var f = new u(T.compare), g = 0, _ = n.length; g < _; g++)
                                            for (var y = n[g].getSweepEvents(), v = 0, L = y.length; v < L; v++)
                                                if ((f.insert(y[v]), f.size > K)) throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big). Please file a bug report.");
                                        for (var b = new F(f), k = f.size, M = f.pop(); M;) {
                                            var w = M.key;
                                            if (f.size === k) {
                                                var C = w.segment;
                                                throw new Error(
                                                    "Unable to pop() ".concat(w.isLeft ? "left" : "right", " SweepEvent ") +
                                                    "[".concat(w.point.x, ", ").concat(w.point.y, "] from segment #").concat(C.id, " ") +
                                                    "[".concat(C.leftSE.point.x, ", ").concat(C.leftSE.point.y, "] -> ") +
                                                    "[".concat(C.rightSE.point.x, ", ").concat(C.rightSE.point.y, "] from queue. ") +
                                                    "Please file a bug report."
                                                );
                                            }
                                            if (f.size > K) throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big). Please file a bug report.");
                                            if (b.segments.length > H) throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments). Please file a bug report.");
                                            for (var P = b.process(w), E = 0, S = P.length; E < S; E++) {
                                                var O = P[E];
                                                O.consumedBy === undefined && f.insert(O);
                                            }
                                            (k = f.size), (M = f.pop());
                                        }
                                        x.reset();
                                        var D = z.factory(b.segments);
                                        return new V(D).getGeom();
                                    },
                                },
                            ]),
                            e
                        );
                    })())(),
                    J = function (t) {
                        for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
                        return q.run("union", t, i);
                    },
                    Y = function (t) {
                        for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
                        return q.run("intersection", t, i);
                    },
                    X = function (t) {
                        for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
                        return q.run("xor", t, i);
                    },
                    Z = function (t) {
                        for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
                        return q.run("difference", t, i);
                    };
                return { union: J, intersection: Y, xor: X, difference: Z };
            })();
        },
        2582: function (t) {
            t.exports = (function () {
                "use strict";
                function t(t, n, r, a, o) {
                    !(function s(t, i, n, r, a) {
                        for (; r > n;) {
                            if (r - n > 600) {
                                var o = r - n + 1,
                                    l = i - n + 1,
                                    h = Math.log(o),
                                    u = 0.5 * Math.exp((2 * h) / 3),
                                    c = 0.5 * Math.sqrt((h * u * (o - u)) / o) * (l - o / 2 < 0 ? -1 : 1);
                                s(t, i, Math.max(n, Math.floor(i - (l * u) / o + c)), Math.min(r, Math.floor(i + ((o - l) * u) / o + c)), a);
                            }
                            var p = t[i],
                                d = n,
                                f = r;
                            for (e(t, n, i), a(t[r], p) > 0 && e(t, n, r); d < f;) {
                                for (e(t, d, f), d++, f--; a(t[d], p) < 0;) d++;
                                for (; a(t[f], p) > 0;) f--;
                            }
                            0 === a(t[n], p) ? e(t, n, f) : e(t, ++f, r), f <= i && (n = f + 1), i <= f && (r = f - 1);
                        }
                    })(t, n, r || 0, a || t.length - 1, o || i);
                }
                function e(t, e, i) {
                    var n = t[e];
                    (t[e] = t[i]), (t[i] = n);
                }
                function i(t, e) {
                    return t < e ? -1 : t > e ? 1 : 0;
                }
                var n = function (t) {
                    void 0 === t && (t = 9), (this._maxEntries = Math.max(4, t)), (this._minEntries = Math.max(2, Math.ceil(0.4 * this._maxEntries))), this.clear();
                };
                function r(t, e, i) {
                    if (!i) return e.indexOf(t);
                    for (var n = 0; n < e.length; n++) if (i(t, e[n])) return n;
                    return -1;
                }
                function a(t, e) {
                    o(t, 0, t.children.length, e, t);
                }
                function o(t, e, i, n, r) {
                    r || (r = f(null)), (r.minX = 1 / 0), (r.minY = 1 / 0), (r.maxX = -1 / 0), (r.maxY = -1 / 0);
                    for (var a = e; a < i; a++) {
                        var o = t.children[a];
                        s(r, t.leaf ? n(o) : o);
                    }
                    return r;
                }
                function s(t, e) {
                    return (t.minX = Math.min(t.minX, e.minX)), (t.minY = Math.min(t.minY, e.minY)), (t.maxX = Math.max(t.maxX, e.maxX)), (t.maxY = Math.max(t.maxY, e.maxY)), t;
                }
                function l(t, e) {
                    return t.minX - e.minX;
                }
                function h(t, e) {
                    return t.minY - e.minY;
                }
                function u(t) {
                    return (t.maxX - t.minX) * (t.maxY - t.minY);
                }
                function c(t) {
                    return t.maxX - t.minX + (t.maxY - t.minY);
                }
                function p(t, e) {
                    return t.minX <= e.minX && t.minY <= e.minY && e.maxX <= t.maxX && e.maxY <= t.maxY;
                }
                function d(t, e) {
                    return e.minX <= t.maxX && e.minY <= t.maxY && e.maxX >= t.minX && e.maxY >= t.minY;
                }
                function f(t) {
                    return { children: t, height: 1, leaf: !0, minX: 1 / 0, minY: 1 / 0, maxX: -1 / 0, maxY: -1 / 0 };
                }
                function g(e, i, n, r, a) {
                    for (var o = [i, n]; o.length;)
                        if (!((n = o.pop()) - (i = o.pop()) <= r)) {
                            var s = i + Math.ceil((n - i) / r / 2) * r;
                            t(e, s, i, n, a), o.push(i, s, s, n);
                        }
                }
                return (
                    (n.prototype.all = function () {
                        return this._all(this.data, []);
                    }),
                    (n.prototype.search = function (t) {
                        var e = this.data,
                            i = [];
                        if (!d(t, e)) return i;
                        for (var n = this.toBBox, r = []; e;) {
                            for (var a = 0; a < e.children.length; a++) {
                                var o = e.children[a],
                                    s = e.leaf ? n(o) : o;
                                d(t, s) && (e.leaf ? i.push(o) : p(t, s) ? this._all(o, i) : r.push(o));
                            }
                            e = r.pop();
                        }
                        return i;
                    }),
                    (n.prototype.collides = function (t) {
                        var e = this.data;
                        if (!d(t, e)) return !1;
                        for (var i = []; e;) {
                            for (var n = 0; n < e.children.length; n++) {
                                var r = e.children[n],
                                    a = e.leaf ? this.toBBox(r) : r;
                                if (d(t, a)) {
                                    if (e.leaf || p(t, a)) return !0;
                                    i.push(r);
                                }
                            }
                            e = i.pop();
                        }
                        return !1;
                    }),
                    (n.prototype.load = function (t) {
                        if (!t || !t.length) return this;
                        if (t.length < this._minEntries) {
                            for (var e = 0; e < t.length; e++) this.insert(t[e]);
                            return this;
                        }
                        var i = this._build(t.slice(), 0, t.length - 1, 0);
                        if (this.data.children.length)
                            if (this.data.height === i.height) this._splitRoot(this.data, i);
                            else {
                                if (this.data.height < i.height) {
                                    var n = this.data;
                                    (this.data = i), (i = n);
                                }
                                this._insert(i, this.data.height - i.height - 1, !0);
                            }
                        else this.data = i;
                        return this;
                    }),
                    (n.prototype.insert = function (t) {
                        return t && this._insert(t, this.data.height - 1), this;
                    }),
                    (n.prototype.clear = function () {
                        return (this.data = f([])), this;
                    }),
                    (n.prototype.remove = function (t, e) {
                        if (!t) return this;
                        for (var i, n, a, o = this.data, s = this.toBBox(t), l = [], h = []; o || l.length;) {
                            if ((o || ((o = l.pop()), (n = l[l.length - 1]), (i = h.pop()), (a = !0)), o.leaf)) {
                                var u = r(t, o.children, e);
                                if (-1 !== u) return o.children.splice(u, 1), l.push(o), this._condense(l), this;
                            }
                            a || o.leaf || !p(o, s) ? (n ? (i++, (o = n.children[i]), (a = !1)) : (o = null)) : (l.push(o), h.push(i), (i = 0), (n = o), (o = o.children[0]));
                        }
                        return this;
                    }),
                    (n.prototype.toBBox = function (t) {
                        return t;
                    }),
                    (n.prototype.compareMinX = function (t, e) {
                        return t.minX - e.minX;
                    }),
                    (n.prototype.compareMinY = function (t, e) {
                        return t.minY - e.minY;
                    }),
                    (n.prototype.toJSON = function () {
                        return this.data;
                    }),
                    (n.prototype.fromJSON = function (t) {
                        return (this.data = t), this;
                    }),
                    (n.prototype._all = function (t, e) {
                        for (var i = []; t;) t.leaf ? e.push.apply(e, t.children) : i.push.apply(i, t.children), (t = i.pop());
                        return e;
                    }),
                    (n.prototype._build = function (t, e, i, n) {
                        var r,
                            o = i - e + 1,
                            s = this._maxEntries;
                        if (o <= s) return a((r = f(t.slice(e, i + 1))), this.toBBox), r;
                        n || ((n = Math.ceil(Math.log(o) / Math.log(s))), (s = Math.ceil(o / Math.pow(s, n - 1)))), ((r = f([])).leaf = !1), (r.height = n);
                        var l = Math.ceil(o / s),
                            h = l * Math.ceil(Math.sqrt(s));
                        g(t, e, i, h, this.compareMinX);
                        for (var u = e; u <= i; u += h) {
                            var c = Math.min(u + h - 1, i);
                            g(t, u, c, l, this.compareMinY);
                            for (var p = u; p <= c; p += l) {
                                var d = Math.min(p + l - 1, c);
                                r.children.push(this._build(t, p, d, n - 1));
                            }
                        }
                        return a(r, this.toBBox), r;
                    }),
                    (n.prototype._chooseSubtree = function (t, e, i, n) {
                        for (; n.push(e), !e.leaf && n.length - 1 !== i;) {
                            for (var r = 1 / 0, a = 1 / 0, o = void 0, s = 0; s < e.children.length; s++) {
                                var l = e.children[s],
                                    h = u(l),
                                    c = ((p = t), (d = l), (Math.max(d.maxX, p.maxX) - Math.min(d.minX, p.minX)) * (Math.max(d.maxY, p.maxY) - Math.min(d.minY, p.minY)) - h);
                                c < a ? ((a = c), (r = h < r ? h : r), (o = l)) : c === a && h < r && ((r = h), (o = l));
                            }
                            e = o || e.children[0];
                        }
                        var p, d;
                        return e;
                    }),
                    (n.prototype._insert = function (t, e, i) {
                        var n = i ? t : this.toBBox(t),
                            r = [],
                            a = this._chooseSubtree(n, this.data, e, r);
                        for (a.children.push(t), s(a, n); e >= 0 && r[e].children.length > this._maxEntries;) this._split(r, e), e--;
                        this._adjustParentBBoxes(n, r, e);
                    }),
                    (n.prototype._split = function (t, e) {
                        var i = t[e],
                            n = i.children.length,
                            r = this._minEntries;
                        this._chooseSplitAxis(i, r, n);
                        var o = this._chooseSplitIndex(i, r, n),
                            s = f(i.children.splice(o, i.children.length - o));
                        (s.height = i.height), (s.leaf = i.leaf), a(i, this.toBBox), a(s, this.toBBox), e ? t[e - 1].children.push(s) : this._splitRoot(i, s);
                    }),
                    (n.prototype._splitRoot = function (t, e) {
                        (this.data = f([t, e])), (this.data.height = t.height + 1), (this.data.leaf = !1), a(this.data, this.toBBox);
                    }),
                    (n.prototype._chooseSplitIndex = function (t, e, i) {
                        for (var n, r, a, s, l, h, c, p = 1 / 0, d = 1 / 0, f = e; f <= i - e; f++) {
                            var g = o(t, 0, f, this.toBBox),
                                _ = o(t, f, i, this.toBBox),
                                y =
                                    ((r = g),
                                        (a = _),
                                        (s = void 0),
                                        (l = void 0),
                                        (h = void 0),
                                        (c = void 0),
                                        (s = Math.max(r.minX, a.minX)),
                                        (l = Math.max(r.minY, a.minY)),
                                        (h = Math.min(r.maxX, a.maxX)),
                                        (c = Math.min(r.maxY, a.maxY)),
                                        Math.max(0, h - s) * Math.max(0, c - l)),
                                m = u(g) + u(_);
                            y < p ? ((p = y), (n = f), (d = m < d ? m : d)) : y === p && m < d && ((d = m), (n = f));
                        }
                        return n || i - e;
                    }),
                    (n.prototype._chooseSplitAxis = function (t, e, i) {
                        var n = t.leaf ? this.compareMinX : l,
                            r = t.leaf ? this.compareMinY : h;
                        this._allDistMargin(t, e, i, n) < this._allDistMargin(t, e, i, r) && t.children.sort(n);
                    }),
                    (n.prototype._allDistMargin = function (t, e, i, n) {
                        t.children.sort(n);
                        for (var r = this.toBBox, a = o(t, 0, e, r), l = o(t, i - e, i, r), h = c(a) + c(l), u = e; u < i - e; u++) {
                            var p = t.children[u];
                            s(a, t.leaf ? r(p) : p), (h += c(a));
                        }
                        for (var d = i - e - 1; d >= e; d--) {
                            var f = t.children[d];
                            s(l, t.leaf ? r(f) : f), (h += c(l));
                        }
                        return h;
                    }),
                    (n.prototype._adjustParentBBoxes = function (t, e, i) {
                        for (var n = i; n >= 0; n--) s(e[n], t);
                    }),
                    (n.prototype._condense = function (t) {
                        for (var e = t.length - 1, i = void 0; e >= 0; e--) 0 === t[e].children.length ? (e > 0 ? (i = t[e - 1].children).splice(i.indexOf(t[e]), 1) : this.clear()) : a(t[e], this.toBBox);
                    }),
                    n
                );
            })();
        },
    },
        e = {};
    function i(n) {
        var r = e[n];
        if (r !== undefined) return r.exports;
        var a = (e[n] = { id: n, loaded: !1, exports: {} });
        return t[n].call(a.exports, a, a.exports, i), (a.loaded = !0), a.exports;
    }
    (i.n = (t) => {
        var e = t && t.__esModule ? () => t["default"] : () => t;
        return i.d(e, { a: e }), e;
    }),
        (i.d = (t, e) => {
            for (var n in e) i.o(e, n) && !i.o(t, n) && Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        }),
        (i.g = (function () {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")();
            } catch (t) {
                if ("object" == typeof window) return window;
            }
        })()),
        (i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
        (i.nmd = (t) => ((t.paths = []), t.children || (t.children = []), t));
    i(1052);
})();
