"use strict";
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && (typeof from === "undefined" ? "undefined" : _type_of(from)) === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// core/index.ts
var core_exports = {};
__export(core_exports, {
    CM: function() {
        return CM;
    },
    NHButton: function() {
        return NHButton;
    },
    NHButtonLink: function() {
        return NHButtonLink;
    },
    NHIcon: function() {
        return NHIcon;
    },
    NHLoader: function() {
        return NHLoader;
    },
    RButtonTheme: function() {
        return RButtonTheme;
    }
});
module.exports = __toCommonJS(core_exports);
// core/common/_record.ts
var RButtonTheme = {
    default: "text-white bg-slate-700 border border-slate-700 hover:bg-slate-500 hover:text-white",
    muted: "text-slate-700 bg-slate-100 border border-slate-300 hover:bg-slate-200 hover:text-slate-800",
    info: "text-white bg-blue-600 border border-blue-600 hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-700 dark:hover:text-white",
    success: "text-white bg-green-600 border border-green-600 hover:bg-green-50 hover:text-green-700 dark:border-green-800 dark:hover:bg-green-800 dark:hover:text-white",
    warning: "text-white bg-amber-500 border border-amber-500 hover:bg-amber-50 hover:text-amber-700 dark:hover:bg-amber-600 dark:hover:text-white",
    error: "text-white bg-red-600 border border-red-600 hover:bg-red-50 hover:text-red-700 dark:hover:bg-red-700 dark:hover:text-white"
};
// core/utils/_tw.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function CM() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}
// node_modules/lucide-react/dist/esm/createLucideIcon.js
var import_react2 = require("react");
// node_modules/lucide-react/dist/esm/shared/src/utils.js
var toKebabCase = function(string) {
    return string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
};
var mergeClasses = function() {
    for(var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++){
        classes[_key] = arguments[_key];
    }
    return classes.filter(function(className, index, array) {
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
};
// node_modules/lucide-react/dist/esm/Icon.js
var import_react = require("react");
// node_modules/lucide-react/dist/esm/defaultAttributes.js
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
// node_modules/lucide-react/dist/esm/Icon.js
var Icon = (0, import_react.forwardRef)(function(_param, ref) {
    var _param_color = _param.color, color = _param_color === void 0 ? "currentColor" : _param_color, _param_size = _param.size, size = _param_size === void 0 ? 24 : _param_size, _param_strokeWidth = _param.strokeWidth, strokeWidth = _param_strokeWidth === void 0 ? 2 : _param_strokeWidth, absoluteStrokeWidth = _param.absoluteStrokeWidth, _param_className = _param.className, className = _param_className === void 0 ? "" : _param_className, children = _param.children, iconNode = _param.iconNode, rest = _object_without_properties(_param, [
        "color",
        "size",
        "strokeWidth",
        "absoluteStrokeWidth",
        "className",
        "children",
        "iconNode"
    ]);
    return (0, import_react.createElement)("svg", _object_spread(_object_spread_props(_object_spread({
        ref: ref
    }, defaultAttributes), {
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: mergeClasses("lucide", className)
    }), rest), _to_consumable_array(iconNode.map(function(param) {
        var _$_param = _sliced_to_array(param, 2), tag = _$_param[0], attrs = _$_param[1];
        return (0, import_react.createElement)(tag, attrs);
    })).concat(_to_consumable_array(Array.isArray(children) ? children : [
        children
    ])));
});
// node_modules/lucide-react/dist/esm/createLucideIcon.js
var createLucideIcon = function(iconName, iconNode) {
    var Component = (0, import_react2.forwardRef)(function(_param, ref) {
        var className = _param.className, props = _object_without_properties(_param, [
            "className"
        ]);
        return (0, import_react2.createElement)(Icon, _object_spread({
            ref: ref,
            iconNode: iconNode,
            className: mergeClasses("lucide-".concat(toKebabCase(iconName)), className)
        }, props));
    });
    Component.displayName = "".concat(iconName);
    return Component;
};
// node_modules/lucide-react/dist/esm/icons/ban.js
var __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "m4.9 4.9 14.2 14.2",
            key: "1m5liu"
        }
    ]
];
var Ban = createLucideIcon("Ban", __iconNode);
// node_modules/lucide-react/dist/esm/icons/blocks.js
var __iconNode2 = [
    [
        "rect",
        {
            width: "7",
            height: "7",
            x: "14",
            y: "3",
            rx: "1",
            key: "6d4xhi"
        }
    ],
    [
        "path",
        {
            d: "M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",
            key: "1fpvtg"
        }
    ]
];
var Blocks = createLucideIcon("Blocks", __iconNode2);
// node_modules/lucide-react/dist/esm/icons/briefcase-business.js
var __iconNode3 = [
    [
        "path",
        {
            d: "M12 12h.01",
            key: "1mp3jc"
        }
    ],
    [
        "path",
        {
            d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",
            key: "1ksdt3"
        }
    ],
    [
        "path",
        {
            d: "M22 13a18.15 18.15 0 0 1-20 0",
            key: "12hx5q"
        }
    ],
    [
        "rect",
        {
            width: "20",
            height: "14",
            x: "2",
            y: "6",
            rx: "2",
            key: "i6l2r4"
        }
    ]
];
var BriefcaseBusiness = createLucideIcon("BriefcaseBusiness", __iconNode3);
// node_modules/lucide-react/dist/esm/icons/calendar.js
var __iconNode4 = [
    [
        "path",
        {
            d: "M8 2v4",
            key: "1cmpym"
        }
    ],
    [
        "path",
        {
            d: "M16 2v4",
            key: "4m81vk"
        }
    ],
    [
        "rect",
        {
            width: "18",
            height: "18",
            x: "3",
            y: "4",
            rx: "2",
            key: "1hopcy"
        }
    ],
    [
        "path",
        {
            d: "M3 10h18",
            key: "8toen8"
        }
    ]
];
var Calendar = createLucideIcon("Calendar", __iconNode4);
// node_modules/lucide-react/dist/esm/icons/chart-bar-big.js
var __iconNode5 = [
    [
        "path",
        {
            d: "M3 3v16a2 2 0 0 0 2 2h16",
            key: "c24i48"
        }
    ],
    [
        "rect",
        {
            x: "7",
            y: "13",
            width: "9",
            height: "4",
            rx: "1",
            key: "1iip1u"
        }
    ],
    [
        "rect",
        {
            x: "7",
            y: "5",
            width: "12",
            height: "4",
            rx: "1",
            key: "1anskk"
        }
    ]
];
var ChartBarBig = createLucideIcon("ChartBarBig", __iconNode5);
// node_modules/lucide-react/dist/esm/icons/check.js
var __iconNode6 = [
    [
        "path",
        {
            d: "M20 6 9 17l-5-5",
            key: "1gmf2c"
        }
    ]
];
var Check = createLucideIcon("Check", __iconNode6);
// node_modules/lucide-react/dist/esm/icons/chevron-down.js
var __iconNode7 = [
    [
        "path",
        {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }
    ]
];
var ChevronDown = createLucideIcon("ChevronDown", __iconNode7);
// node_modules/lucide-react/dist/esm/icons/chevron-left.js
var __iconNode8 = [
    [
        "path",
        {
            d: "m15 18-6-6 6-6",
            key: "1wnfg3"
        }
    ]
];
var ChevronLeft = createLucideIcon("ChevronLeft", __iconNode8);
// node_modules/lucide-react/dist/esm/icons/chevron-right.js
var __iconNode9 = [
    [
        "path",
        {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }
    ]
];
var ChevronRight = createLucideIcon("ChevronRight", __iconNode9);
// node_modules/lucide-react/dist/esm/icons/chevron-up.js
var __iconNode10 = [
    [
        "path",
        {
            d: "m18 15-6-6-6 6",
            key: "153udz"
        }
    ]
];
var ChevronUp = createLucideIcon("ChevronUp", __iconNode10);
// node_modules/lucide-react/dist/esm/icons/circle.js
var __iconNode11 = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ]
];
var Circle = createLucideIcon("Circle", __iconNode11);
// node_modules/lucide-react/dist/esm/icons/cloud.js
var __iconNode12 = [
    [
        "path",
        {
            d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
            key: "p7xjir"
        }
    ]
];
var Cloud = createLucideIcon("Cloud", __iconNode12);
// node_modules/lucide-react/dist/esm/icons/code.js
var __iconNode13 = [
    [
        "polyline",
        {
            points: "16 18 22 12 16 6",
            key: "z7tu5w"
        }
    ],
    [
        "polyline",
        {
            points: "8 6 2 12 8 18",
            key: "1eg1df"
        }
    ]
];
var Code = createLucideIcon("Code", __iconNode13);
// node_modules/lucide-react/dist/esm/icons/credit-card.js
var __iconNode14 = [
    [
        "rect",
        {
            width: "20",
            height: "14",
            x: "2",
            y: "5",
            rx: "2",
            key: "ynyp8z"
        }
    ],
    [
        "line",
        {
            x1: "2",
            x2: "22",
            y1: "10",
            y2: "10",
            key: "1b3vmo"
        }
    ]
];
var CreditCard = createLucideIcon("CreditCard", __iconNode14);
// node_modules/lucide-react/dist/esm/icons/download.js
var __iconNode15 = [
    [
        "path",
        {
            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
            key: "ih7n3h"
        }
    ],
    [
        "polyline",
        {
            points: "7 10 12 15 17 10",
            key: "2ggqvy"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "15",
            y2: "3",
            key: "1vk2je"
        }
    ]
];
var Download = createLucideIcon("Download", __iconNode15);
// node_modules/lucide-react/dist/esm/icons/file-pen.js
var __iconNode16 = [
    [
        "path",
        {
            d: "M12.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v9.5",
            key: "1couwa"
        }
    ],
    [
        "path",
        {
            d: "M14 2v4a2 2 0 0 0 2 2h4",
            key: "tnqrlb"
        }
    ],
    [
        "path",
        {
            d: "M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
            key: "1y4qbx"
        }
    ]
];
var FilePen = createLucideIcon("FilePen", __iconNode16);
// node_modules/lucide-react/dist/esm/icons/file-scan.js
var __iconNode17 = [
    [
        "path",
        {
            d: "M20 10V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4",
            key: "1rdf37"
        }
    ],
    [
        "path",
        {
            d: "M14 2v4a2 2 0 0 0 2 2h4",
            key: "tnqrlb"
        }
    ],
    [
        "path",
        {
            d: "M16 14a2 2 0 0 0-2 2",
            key: "ceaadl"
        }
    ],
    [
        "path",
        {
            d: "M20 14a2 2 0 0 1 2 2",
            key: "1ny6zw"
        }
    ],
    [
        "path",
        {
            d: "M20 22a2 2 0 0 0 2-2",
            key: "1l9q4k"
        }
    ],
    [
        "path",
        {
            d: "M16 22a2 2 0 0 1-2-2",
            key: "1wqh5n"
        }
    ]
];
var FileScan = createLucideIcon("FileScan", __iconNode17);
// node_modules/lucide-react/dist/esm/icons/file-text.js
var __iconNode18 = [
    [
        "path",
        {
            d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
            key: "1rqfz7"
        }
    ],
    [
        "path",
        {
            d: "M14 2v4a2 2 0 0 0 2 2h4",
            key: "tnqrlb"
        }
    ],
    [
        "path",
        {
            d: "M10 9H8",
            key: "b1mrlr"
        }
    ],
    [
        "path",
        {
            d: "M16 13H8",
            key: "t4e002"
        }
    ],
    [
        "path",
        {
            d: "M16 17H8",
            key: "z1uh3a"
        }
    ]
];
var FileText = createLucideIcon("FileText", __iconNode18);
// node_modules/lucide-react/dist/esm/icons/file-x.js
var __iconNode19 = [
    [
        "path",
        {
            d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
            key: "1rqfz7"
        }
    ],
    [
        "path",
        {
            d: "M14 2v4a2 2 0 0 0 2 2h4",
            key: "tnqrlb"
        }
    ],
    [
        "path",
        {
            d: "m14.5 12.5-5 5",
            key: "b62r18"
        }
    ],
    [
        "path",
        {
            d: "m9.5 12.5 5 5",
            key: "1rk7el"
        }
    ]
];
var FileX = createLucideIcon("FileX", __iconNode19);
// node_modules/lucide-react/dist/esm/icons/file.js
var __iconNode20 = [
    [
        "path",
        {
            d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
            key: "1rqfz7"
        }
    ],
    [
        "path",
        {
            d: "M14 2v4a2 2 0 0 0 2 2h4",
            key: "tnqrlb"
        }
    ]
];
var File = createLucideIcon("File", __iconNode20);
// node_modules/lucide-react/dist/esm/icons/flask-conical.js
var __iconNode21 = [
    [
        "path",
        {
            d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",
            key: "18mbvz"
        }
    ],
    [
        "path",
        {
            d: "M6.453 15h11.094",
            key: "3shlmq"
        }
    ],
    [
        "path",
        {
            d: "M8.5 2h7",
            key: "csnxdl"
        }
    ]
];
var FlaskConical = createLucideIcon("FlaskConical", __iconNode21);
// node_modules/lucide-react/dist/esm/icons/folder-plus.js
var __iconNode22 = [
    [
        "path",
        {
            d: "M12 10v6",
            key: "1bos4e"
        }
    ],
    [
        "path",
        {
            d: "M9 13h6",
            key: "1uhe8q"
        }
    ],
    [
        "path",
        {
            d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
            key: "1kt360"
        }
    ]
];
var FolderPlus = createLucideIcon("FolderPlus", __iconNode22);
// node_modules/lucide-react/dist/esm/icons/globe.js
var __iconNode23 = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
            key: "13o1zl"
        }
    ],
    [
        "path",
        {
            d: "M2 12h20",
            key: "9i4pu4"
        }
    ]
];
var Globe = createLucideIcon("Globe", __iconNode23);
// node_modules/lucide-react/dist/esm/icons/graduation-cap.js
var __iconNode24 = [
    [
        "path",
        {
            d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
            key: "j76jl0"
        }
    ],
    [
        "path",
        {
            d: "M22 10v6",
            key: "1lu8f3"
        }
    ],
    [
        "path",
        {
            d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5",
            key: "1r8lef"
        }
    ]
];
var GraduationCap = createLucideIcon("GraduationCap", __iconNode24);
// node_modules/lucide-react/dist/esm/icons/hand-coins.js
var __iconNode25 = [
    [
        "path",
        {
            d: "M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17",
            key: "geh8rc"
        }
    ],
    [
        "path",
        {
            d: "m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",
            key: "1fto5m"
        }
    ],
    [
        "path",
        {
            d: "m2 16 6 6",
            key: "1pfhp9"
        }
    ],
    [
        "circle",
        {
            cx: "16",
            cy: "9",
            r: "2.9",
            key: "1n0dlu"
        }
    ],
    [
        "circle",
        {
            cx: "6",
            cy: "5",
            r: "3",
            key: "151irh"
        }
    ]
];
var HandCoins = createLucideIcon("HandCoins", __iconNode25);
// node_modules/lucide-react/dist/esm/icons/layout-dashboard.js
var __iconNode26 = [
    [
        "rect",
        {
            width: "7",
            height: "9",
            x: "3",
            y: "3",
            rx: "1",
            key: "10lvy0"
        }
    ],
    [
        "rect",
        {
            width: "7",
            height: "5",
            x: "14",
            y: "3",
            rx: "1",
            key: "16une8"
        }
    ],
    [
        "rect",
        {
            width: "7",
            height: "9",
            x: "14",
            y: "12",
            rx: "1",
            key: "1hutg5"
        }
    ],
    [
        "rect",
        {
            width: "7",
            height: "5",
            x: "3",
            y: "16",
            rx: "1",
            key: "ldoo1y"
        }
    ]
];
var LayoutDashboard = createLucideIcon("LayoutDashboard", __iconNode26);
// node_modules/lucide-react/dist/esm/icons/layout-grid.js
var __iconNode27 = [
    [
        "rect",
        {
            width: "7",
            height: "7",
            x: "3",
            y: "3",
            rx: "1",
            key: "1g98yp"
        }
    ],
    [
        "rect",
        {
            width: "7",
            height: "7",
            x: "14",
            y: "3",
            rx: "1",
            key: "6d4xhi"
        }
    ],
    [
        "rect",
        {
            width: "7",
            height: "7",
            x: "14",
            y: "14",
            rx: "1",
            key: "nxv5o0"
        }
    ],
    [
        "rect",
        {
            width: "7",
            height: "7",
            x: "3",
            y: "14",
            rx: "1",
            key: "1bb6yr"
        }
    ]
];
var LayoutGrid = createLucideIcon("LayoutGrid", __iconNode27);
// node_modules/lucide-react/dist/esm/icons/list-filter.js
var __iconNode28 = [
    [
        "path",
        {
            d: "M3 6h18",
            key: "d0wm0j"
        }
    ],
    [
        "path",
        {
            d: "M7 12h10",
            key: "b7w52i"
        }
    ],
    [
        "path",
        {
            d: "M10 18h4",
            key: "1ulq68"
        }
    ]
];
var ListFilter = createLucideIcon("ListFilter", __iconNode28);
// node_modules/lucide-react/dist/esm/icons/list-music.js
var __iconNode29 = [
    [
        "path",
        {
            d: "M21 15V6",
            key: "h1cx4g"
        }
    ],
    [
        "path",
        {
            d: "M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
            key: "8saifv"
        }
    ],
    [
        "path",
        {
            d: "M12 12H3",
            key: "18klou"
        }
    ],
    [
        "path",
        {
            d: "M16 6H3",
            key: "1wxfjs"
        }
    ],
    [
        "path",
        {
            d: "M12 18H3",
            key: "11ftsu"
        }
    ]
];
var ListMusic = createLucideIcon("ListMusic", __iconNode29);
// node_modules/lucide-react/dist/esm/icons/loader-circle.js
var __iconNode30 = [
    [
        "path",
        {
            d: "M21 12a9 9 0 1 1-6.219-8.56",
            key: "13zald"
        }
    ]
];
var LoaderCircle = createLucideIcon("LoaderCircle", __iconNode30);
// node_modules/lucide-react/dist/esm/icons/loader.js
var __iconNode31 = [
    [
        "path",
        {
            d: "M12 2v4",
            key: "3427ic"
        }
    ],
    [
        "path",
        {
            d: "m16.2 7.8 2.9-2.9",
            key: "r700ao"
        }
    ],
    [
        "path",
        {
            d: "M18 12h4",
            key: "wj9ykh"
        }
    ],
    [
        "path",
        {
            d: "m16.2 16.2 2.9 2.9",
            key: "1bxg5t"
        }
    ],
    [
        "path",
        {
            d: "M12 18v4",
            key: "jadmvz"
        }
    ],
    [
        "path",
        {
            d: "m4.9 19.1 2.9-2.9",
            key: "bwix9q"
        }
    ],
    [
        "path",
        {
            d: "M2 12h4",
            key: "j09sii"
        }
    ],
    [
        "path",
        {
            d: "m4.9 4.9 2.9 2.9",
            key: "giyufr"
        }
    ]
];
var Loader = createLucideIcon("Loader", __iconNode31);
// node_modules/lucide-react/dist/esm/icons/lock-open.js
var __iconNode32 = [
    [
        "rect",
        {
            width: "18",
            height: "11",
            x: "3",
            y: "11",
            rx: "2",
            ry: "2",
            key: "1w4ew1"
        }
    ],
    [
        "path",
        {
            d: "M7 11V7a5 5 0 0 1 9.9-1",
            key: "1mm8w8"
        }
    ]
];
var LockOpen = createLucideIcon("LockOpen", __iconNode32);
// node_modules/lucide-react/dist/esm/icons/lock.js
var __iconNode33 = [
    [
        "rect",
        {
            width: "18",
            height: "11",
            x: "3",
            y: "11",
            rx: "2",
            ry: "2",
            key: "1w4ew1"
        }
    ],
    [
        "path",
        {
            d: "M7 11V7a5 5 0 0 1 10 0v4",
            key: "fwvmzm"
        }
    ]
];
var Lock = createLucideIcon("Lock", __iconNode33);
// node_modules/lucide-react/dist/esm/icons/log-out.js
var __iconNode34 = [
    [
        "path",
        {
            d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
            key: "1uf3rs"
        }
    ],
    [
        "polyline",
        {
            points: "16 17 21 12 16 7",
            key: "1gabdz"
        }
    ],
    [
        "line",
        {
            x1: "21",
            x2: "9",
            y1: "12",
            y2: "12",
            key: "1uyos4"
        }
    ]
];
var LogOut = createLucideIcon("LogOut", __iconNode34);
// node_modules/lucide-react/dist/esm/icons/map-pin.js
var __iconNode35 = [
    [
        "path",
        {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }
    ]
];
var MapPin = createLucideIcon("MapPin", __iconNode35);
// node_modules/lucide-react/dist/esm/icons/message-square.js
var __iconNode36 = [
    [
        "path",
        {
            d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
            key: "1lielz"
        }
    ]
];
var MessageSquare = createLucideIcon("MessageSquare", __iconNode36);
// node_modules/lucide-react/dist/esm/icons/monitor.js
var __iconNode37 = [
    [
        "rect",
        {
            width: "20",
            height: "14",
            x: "2",
            y: "3",
            rx: "2",
            key: "48i651"
        }
    ],
    [
        "line",
        {
            x1: "8",
            x2: "16",
            y1: "21",
            y2: "21",
            key: "1svkeh"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "17",
            y2: "21",
            key: "vw1qmm"
        }
    ]
];
var Monitor = createLucideIcon("Monitor", __iconNode37);
// node_modules/lucide-react/dist/esm/icons/moon.js
var __iconNode38 = [
    [
        "path",
        {
            d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",
            key: "a7tn18"
        }
    ]
];
var Moon = createLucideIcon("Moon", __iconNode38);
// node_modules/lucide-react/dist/esm/icons/panel-left.js
var __iconNode39 = [
    [
        "rect",
        {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            key: "afitv7"
        }
    ],
    [
        "path",
        {
            d: "M9 3v18",
            key: "fh3hqa"
        }
    ]
];
var PanelLeft = createLucideIcon("PanelLeft", __iconNode39);
// node_modules/lucide-react/dist/esm/icons/plus.js
var __iconNode40 = [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "M12 5v14",
            key: "s699le"
        }
    ]
];
var Plus = createLucideIcon("Plus", __iconNode40);
// node_modules/lucide-react/dist/esm/icons/printer.js
var __iconNode41 = [
    [
        "path",
        {
            d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
            key: "143wyd"
        }
    ],
    [
        "path",
        {
            d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",
            key: "1itne7"
        }
    ],
    [
        "rect",
        {
            x: "6",
            y: "14",
            width: "12",
            height: "8",
            rx: "1",
            key: "1ue0tg"
        }
    ]
];
var Printer = createLucideIcon("Printer", __iconNode41);
// node_modules/lucide-react/dist/esm/icons/puzzle.js
var __iconNode42 = [
    [
        "path",
        {
            d: "M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",
            key: "w46dr5"
        }
    ]
];
var Puzzle = createLucideIcon("Puzzle", __iconNode42);
// node_modules/lucide-react/dist/esm/icons/qr-code.js
var __iconNode43 = [
    [
        "rect",
        {
            width: "5",
            height: "5",
            x: "3",
            y: "3",
            rx: "1",
            key: "1tu5fj"
        }
    ],
    [
        "rect",
        {
            width: "5",
            height: "5",
            x: "16",
            y: "3",
            rx: "1",
            key: "1v8r4q"
        }
    ],
    [
        "rect",
        {
            width: "5",
            height: "5",
            x: "3",
            y: "16",
            rx: "1",
            key: "1x03jg"
        }
    ],
    [
        "path",
        {
            d: "M21 16h-3a2 2 0 0 0-2 2v3",
            key: "177gqh"
        }
    ],
    [
        "path",
        {
            d: "M21 21v.01",
            key: "ents32"
        }
    ],
    [
        "path",
        {
            d: "M12 7v3a2 2 0 0 1-2 2H7",
            key: "8crl2c"
        }
    ],
    [
        "path",
        {
            d: "M3 12h.01",
            key: "nlz23k"
        }
    ],
    [
        "path",
        {
            d: "M12 3h.01",
            key: "n36tog"
        }
    ],
    [
        "path",
        {
            d: "M12 16v.01",
            key: "133mhm"
        }
    ],
    [
        "path",
        {
            d: "M16 12h1",
            key: "1slzba"
        }
    ],
    [
        "path",
        {
            d: "M21 12v.01",
            key: "1lwtk9"
        }
    ],
    [
        "path",
        {
            d: "M12 21v-1",
            key: "1880an"
        }
    ]
];
var QrCode = createLucideIcon("QrCode", __iconNode43);
// node_modules/lucide-react/dist/esm/icons/rotate-ccw.js
var __iconNode44 = [
    [
        "path",
        {
            d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
            key: "1357e3"
        }
    ],
    [
        "path",
        {
            d: "M3 3v5h5",
            key: "1xhq8a"
        }
    ]
];
var RotateCcw = createLucideIcon("RotateCcw", __iconNode44);
// node_modules/lucide-react/dist/esm/icons/save.js
var __iconNode45 = [
    [
        "path",
        {
            d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
            key: "1c8476"
        }
    ],
    [
        "path",
        {
            d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",
            key: "1ydtos"
        }
    ],
    [
        "path",
        {
            d: "M7 3v4a1 1 0 0 0 1 1h7",
            key: "t51u73"
        }
    ]
];
var Save = createLucideIcon("Save", __iconNode45);
// node_modules/lucide-react/dist/esm/icons/scan-text.js
var __iconNode46 = [
    [
        "path",
        {
            d: "M3 7V5a2 2 0 0 1 2-2h2",
            key: "aa7l1z"
        }
    ],
    [
        "path",
        {
            d: "M17 3h2a2 2 0 0 1 2 2v2",
            key: "4qcy5o"
        }
    ],
    [
        "path",
        {
            d: "M21 17v2a2 2 0 0 1-2 2h-2",
            key: "6vwrx8"
        }
    ],
    [
        "path",
        {
            d: "M7 21H5a2 2 0 0 1-2-2v-2",
            key: "ioqczr"
        }
    ],
    [
        "path",
        {
            d: "M7 8h8",
            key: "1jbsf9"
        }
    ],
    [
        "path",
        {
            d: "M7 12h10",
            key: "b7w52i"
        }
    ],
    [
        "path",
        {
            d: "M7 16h6",
            key: "1vyc9m"
        }
    ]
];
var ScanText = createLucideIcon("ScanText", __iconNode46);
// node_modules/lucide-react/dist/esm/icons/scan.js
var __iconNode47 = [
    [
        "path",
        {
            d: "M3 7V5a2 2 0 0 1 2-2h2",
            key: "aa7l1z"
        }
    ],
    [
        "path",
        {
            d: "M17 3h2a2 2 0 0 1 2 2v2",
            key: "4qcy5o"
        }
    ],
    [
        "path",
        {
            d: "M21 17v2a2 2 0 0 1-2 2h-2",
            key: "6vwrx8"
        }
    ],
    [
        "path",
        {
            d: "M7 21H5a2 2 0 0 1-2-2v-2",
            key: "ioqczr"
        }
    ]
];
var Scan = createLucideIcon("Scan", __iconNode47);
// node_modules/lucide-react/dist/esm/icons/search.js
var __iconNode48 = [
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }
    ],
    [
        "path",
        {
            d: "m21 21-4.3-4.3",
            key: "1qie3q"
        }
    ]
];
var Search = createLucideIcon("Search", __iconNode48);
// node_modules/lucide-react/dist/esm/icons/send.js
var __iconNode49 = [
    [
        "path",
        {
            d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
            key: "1ffxy3"
        }
    ],
    [
        "path",
        {
            d: "m21.854 2.147-10.94 10.939",
            key: "12cjpa"
        }
    ]
];
var Send = createLucideIcon("Send", __iconNode49);
// node_modules/lucide-react/dist/esm/icons/shopping-cart.js
var __iconNode50 = [
    [
        "circle",
        {
            cx: "8",
            cy: "21",
            r: "1",
            key: "jimo8o"
        }
    ],
    [
        "circle",
        {
            cx: "19",
            cy: "21",
            r: "1",
            key: "13723u"
        }
    ],
    [
        "path",
        {
            d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
            key: "9zh506"
        }
    ]
];
var ShoppingCart = createLucideIcon("ShoppingCart", __iconNode50);
// node_modules/lucide-react/dist/esm/icons/square-mouse-pointer.js
var __iconNode51 = [
    [
        "path",
        {
            d: "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z",
            key: "xwnzip"
        }
    ],
    [
        "path",
        {
            d: "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",
            key: "14rsvq"
        }
    ]
];
var SquareMousePointer = createLucideIcon("SquareMousePointer", __iconNode51);
// node_modules/lucide-react/dist/esm/icons/square-pen.js
var __iconNode52 = [
    [
        "path",
        {
            d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
            key: "1m0v6g"
        }
    ],
    [
        "path",
        {
            d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
            key: "ohrbg2"
        }
    ]
];
var SquarePen = createLucideIcon("SquarePen", __iconNode52);
// node_modules/lucide-react/dist/esm/icons/sun.js
var __iconNode53 = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "4",
            key: "4exip2"
        }
    ],
    [
        "path",
        {
            d: "M12 2v2",
            key: "tus03m"
        }
    ],
    [
        "path",
        {
            d: "M12 20v2",
            key: "1lh1kg"
        }
    ],
    [
        "path",
        {
            d: "m4.93 4.93 1.41 1.41",
            key: "149t6j"
        }
    ],
    [
        "path",
        {
            d: "m17.66 17.66 1.41 1.41",
            key: "ptbguv"
        }
    ],
    [
        "path",
        {
            d: "M2 12h2",
            key: "1t8f8n"
        }
    ],
    [
        "path",
        {
            d: "M20 12h2",
            key: "1q8mjw"
        }
    ],
    [
        "path",
        {
            d: "m6.34 17.66-1.41 1.41",
            key: "1m8zz5"
        }
    ],
    [
        "path",
        {
            d: "m19.07 4.93-1.41 1.41",
            key: "1shlcs"
        }
    ]
];
var Sun = createLucideIcon("Sun", __iconNode53);
// node_modules/lucide-react/dist/esm/icons/swords.js
var __iconNode54 = [
    [
        "polyline",
        {
            points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5",
            key: "1hfsw2"
        }
    ],
    [
        "line",
        {
            x1: "13",
            x2: "19",
            y1: "19",
            y2: "13",
            key: "1vrmhu"
        }
    ],
    [
        "line",
        {
            x1: "16",
            x2: "20",
            y1: "16",
            y2: "20",
            key: "1bron3"
        }
    ],
    [
        "line",
        {
            x1: "19",
            x2: "21",
            y1: "21",
            y2: "19",
            key: "13pww6"
        }
    ],
    [
        "polyline",
        {
            points: "14.5 6.5 18 3 21 3 21 6 17.5 9.5",
            key: "hbey2j"
        }
    ],
    [
        "line",
        {
            x1: "5",
            x2: "9",
            y1: "14",
            y2: "18",
            key: "1hf58s"
        }
    ],
    [
        "line",
        {
            x1: "7",
            x2: "4",
            y1: "17",
            y2: "20",
            key: "pidxm4"
        }
    ],
    [
        "line",
        {
            x1: "3",
            x2: "5",
            y1: "19",
            y2: "21",
            key: "1pehsh"
        }
    ]
];
var Swords = createLucideIcon("Swords", __iconNode54);
// node_modules/lucide-react/dist/esm/icons/tablet.js
var __iconNode55 = [
    [
        "rect",
        {
            width: "16",
            height: "20",
            x: "4",
            y: "2",
            rx: "2",
            ry: "2",
            key: "76otgf"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12.01",
            y1: "18",
            y2: "18",
            key: "1dp563"
        }
    ]
];
var Tablet = createLucideIcon("Tablet", __iconNode55);
// node_modules/lucide-react/dist/esm/icons/trash-2.js
var __iconNode56 = [
    [
        "path",
        {
            d: "M3 6h18",
            key: "d0wm0j"
        }
    ],
    [
        "path",
        {
            d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
            key: "4alrt4"
        }
    ],
    [
        "path",
        {
            d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
            key: "v07s0e"
        }
    ],
    [
        "line",
        {
            x1: "10",
            x2: "10",
            y1: "11",
            y2: "17",
            key: "1uufr5"
        }
    ],
    [
        "line",
        {
            x1: "14",
            x2: "14",
            y1: "11",
            y2: "17",
            key: "xtxkd"
        }
    ]
];
var Trash2 = createLucideIcon("Trash2", __iconNode56);
// node_modules/lucide-react/dist/esm/icons/tree-palm.js
var __iconNode57 = [
    [
        "path",
        {
            d: "M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4",
            key: "foxbe7"
        }
    ],
    [
        "path",
        {
            d: "M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3",
            key: "18arnh"
        }
    ],
    [
        "path",
        {
            d: "M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35",
            key: "ywahnh"
        }
    ],
    [
        "path",
        {
            d: "M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14",
            key: "ft0feo"
        }
    ]
];
var TreePalm = createLucideIcon("TreePalm", __iconNode57);
// node_modules/lucide-react/dist/esm/icons/user-cog.js
var __iconNode58 = [
    [
        "circle",
        {
            cx: "18",
            cy: "15",
            r: "3",
            key: "gjjjvw"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }
    ],
    [
        "path",
        {
            d: "M10 15H6a4 4 0 0 0-4 4v2",
            key: "1nfge6"
        }
    ],
    [
        "path",
        {
            d: "m21.7 16.4-.9-.3",
            key: "12j9ji"
        }
    ],
    [
        "path",
        {
            d: "m15.2 13.9-.9-.3",
            key: "1fdjdi"
        }
    ],
    [
        "path",
        {
            d: "m16.6 18.7.3-.9",
            key: "heedtr"
        }
    ],
    [
        "path",
        {
            d: "m19.1 12.2.3-.9",
            key: "1af3ki"
        }
    ],
    [
        "path",
        {
            d: "m19.6 18.7-.4-1",
            key: "1x9vze"
        }
    ],
    [
        "path",
        {
            d: "m16.8 12.3-.4-1",
            key: "vqeiwj"
        }
    ],
    [
        "path",
        {
            d: "m14.3 16.6 1-.4",
            key: "1qlj63"
        }
    ],
    [
        "path",
        {
            d: "m20.7 13.8 1-.4",
            key: "1v5t8k"
        }
    ]
];
var UserCog = createLucideIcon("UserCog", __iconNode58);
// node_modules/lucide-react/dist/esm/icons/user-round.js
var __iconNode59 = [
    [
        "circle",
        {
            cx: "12",
            cy: "8",
            r: "5",
            key: "1hypcn"
        }
    ],
    [
        "path",
        {
            d: "M20 21a8 8 0 0 0-16 0",
            key: "rfgkzh"
        }
    ]
];
var UserRound = createLucideIcon("UserRound", __iconNode59);
// node_modules/lucide-react/dist/esm/icons/x.js
var __iconNode60 = [
    [
        "path",
        {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }
    ],
    [
        "path",
        {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }
    ]
];
var X = createLucideIcon("X", __iconNode60);
// node_modules/lucide-react/dist/esm/icons/zoom-out.js
var __iconNode61 = [
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }
    ],
    [
        "line",
        {
            x1: "21",
            x2: "16.65",
            y1: "21",
            y2: "16.65",
            key: "13gj7c"
        }
    ],
    [
        "line",
        {
            x1: "8",
            x2: "14",
            y1: "11",
            y2: "11",
            key: "durymu"
        }
    ]
];
var ZoomOut = createLucideIcon("ZoomOut", __iconNode61);
// node_modules/lucide-react/dist/esm/icons/zoom-in.js
var __iconNode62 = [
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }
    ],
    [
        "line",
        {
            x1: "21",
            x2: "16.65",
            y1: "21",
            y2: "16.65",
            key: "13gj7c"
        }
    ],
    [
        "line",
        {
            x1: "11",
            x2: "11",
            y1: "8",
            y2: "14",
            key: "1vmskp"
        }
    ],
    [
        "line",
        {
            x1: "8",
            x2: "14",
            y1: "11",
            y2: "11",
            key: "durymu"
        }
    ]
];
var ZoomIn = createLucideIcon("ZoomIn", __iconNode62);
// core/components/_nh.loader.tsx
var NHLoader = function(param) {
    var className = param.className, isText = param.isText, iconClassName = param.iconClassName;
    return /* @__PURE__ */ React.createElement("div", {
        className: CM("absolute flex items-center justify-center w-full h-full", className)
    }, /* @__PURE__ */ React.createElement("div", {
        className: "flex flex-col items-center "
    }, /* @__PURE__ */ React.createElement(Loader, {
        className: CM("inline size-6 animate-spin", iconClassName)
    }), isText && /* @__PURE__ */ React.createElement("div", {
        className: "mt-2 text-xs"
    }, "Please wait a moment")));
};
// core/components/_nh.button.tsx
var NHButton = function(param) {
    var _param_type = param.type, type = _param_type === void 0 ? "button" : _param_type, _param_theme = param.theme, theme = _param_theme === void 0 ? "default" : _param_theme, caption = param.caption, className = param.className, iconStart = param.iconStart, iconEnd = param.iconEnd, isLoading = param.isLoading, isDisabled = param.isDisabled, onClick = param.onClick;
    var handeClick = function() {
        if (onClick) onClick();
    };
    return /* @__PURE__ */ React.createElement("button", {
        type: type,
        "aria-label": caption || "button",
        className: CM("flex gap-1 items-center text-xs rounded-sm px-2 py.1.5 transition relative", RButtonTheme[theme], className, isLoading || isDisabled ? "!cursor-none disabled:!opacity-80" : "hover:cursor-pointer hover:animate-pulse"),
        disabled: isDisabled || isLoading,
        onClick: handeClick
    }, /* @__PURE__ */ React.createElement("div", {
        className: "relative flex items-center select-none hover:cursor-pointer"
    }, iconStart && /* @__PURE__ */ React.createElement("div", {
        className: "flex items-center"
    }, iconStart), caption && caption, iconEnd && /* @__PURE__ */ React.createElement("div", {
        className: "flex items-center"
    }, iconEnd)), isLoading && /* @__PURE__ */ React.createElement(NHLoader, {
        iconClassName: "size-4"
    }));
};
var NHButtonLink = function(param) {
    var _param_theme = param.theme, theme = _param_theme === void 0 ? "default" : _param_theme, path = param.path, caption = param.caption, className = param.className, iconStart = param.iconStart, iconEnd = param.iconEnd, isLoading = param.isLoading, onClick = param.onClick;
    var handeClick = function() {
        if (onClick) onClick();
    };
    return /* @__PURE__ */ React.createElement("a", {
        "aria-label": caption,
        href: path,
        className: CM("flex gap-1 items-center text-xs rounded-sm px-2 py.1.5 transition hover:cursor-pointer", RButtonTheme[theme], className),
        onClick: handeClick
    }, iconStart && /* @__PURE__ */ React.createElement("div", {
        className: "flex items-center"
    }, iconStart), caption && caption, iconEnd && /* @__PURE__ */ React.createElement("div", {
        className: "flex items-center"
    }, iconEnd), isLoading && /* @__PURE__ */ React.createElement(NHLoader, null));
};
// core/components/_nh.icon.tsx
var Icons = {
    Cancel: Ban,
    CalendarIcon: Calendar,
    Check: Check,
    Download: Download,
    Edit: SquarePen,
    CreditCard: CreditCard,
    ChevronDown: ChevronDown,
    ChevronLeft: ChevronLeft,
    ChevronRight: ChevronRight,
    ChevronUp: ChevronUp,
    Circle: Circle,
    File: File,
    FileIcon: File,
    FileScan: FileScan,
    FileText: FileText,
    FileEdit: FilePen,
    FileX: FileX,
    FolderPlus: FolderPlus,
    GlobeIcon: Globe,
    HandCoins: HandCoins,
    ListFilter: ListFilter,
    ListMusic: ListMusic,
    Lock: Lock,
    Loader2: LoaderCircle,
    LoaderIcon: Loader,
    LogOut: LogOut,
    MapPin: MapPin,
    Moon: Moon,
    PanelLeft: PanelLeft,
    Plus: Plus,
    Printer: Printer,
    RotateCcw: RotateCcw,
    Save: Save,
    Search: Search,
    Send: Send,
    SquareMousePointer: SquareMousePointer,
    Sun: Sun,
    TreePalm: TreePalm,
    Trash2: Trash2,
    User2: UserRound,
    UserCog: UserCog,
    Unlock: LockOpen,
    X: X,
    XIcon: X,
    ZoomIn: ZoomIn,
    ZoomOut: ZoomOut,
    BriefcaseBusiness: BriefcaseBusiness,
    Puzzle: Puzzle,
    Monitor: Monitor,
    LayoutDashboard: LayoutDashboard,
    MessageSquare: MessageSquare,
    Code: Code,
    Tablet: Tablet,
    LayoutGrid: LayoutGrid,
    GraduationCap: GraduationCap,
    FlaskConical: FlaskConical,
    ChartBarBig: ChartBarBig,
    Cloud: Cloud,
    ShoppingCart: ShoppingCart,
    Swords: Swords,
    Scan: Scan,
    ScanText: ScanText,
    QrCode: QrCode,
    Blocks: Blocks
};
var NHIcon = function(_param) {
    var icon = _param.icon, props = _object_without_properties(_param, [
        "icon"
    ]);
    var IconRender = Icons[icon];
    if (!IconRender) {
        console.warn('Icon "'.concat(icon, '" not found'));
        return null;
    }
    return /* @__PURE__ */ React.createElement(IconRender, _object_spread({}, props));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    CM: CM,
    NHButton: NHButton,
    NHButtonLink: NHButtonLink,
    NHIcon: NHIcon,
    NHLoader: NHLoader,
    RButtonTheme: RButtonTheme
}); /*! Bundled license information:

lucide-react/dist/esm/shared/src/utils.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/defaultAttributes.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/Icon.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/createLucideIcon.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/ban.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/blocks.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/briefcase-business.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/calendar.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/chart-bar-big.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/check.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/chevron-down.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/chevron-left.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/chevron-right.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/chevron-up.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/circle.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/cloud.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/code.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/credit-card.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/download.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/file-pen.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/file-scan.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/file-text.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/file-x.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/file.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/flask-conical.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/folder-plus.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/globe.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/graduation-cap.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/hand-coins.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/layout-dashboard.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/layout-grid.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/list-filter.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/list-music.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/loader-circle.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/loader.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/lock-open.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/lock.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/log-out.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/map-pin.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/message-square.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/monitor.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/moon.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/panel-left.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/plus.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/printer.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/puzzle.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/qr-code.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/rotate-ccw.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/save.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/scan-text.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/scan.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/search.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/send.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/shopping-cart.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/square-mouse-pointer.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/square-pen.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/sun.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/swords.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/tablet.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/trash-2.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/tree-palm.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/user-cog.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/user-round.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/x.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/zoom-out.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/zoom-in.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.479.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/ 
