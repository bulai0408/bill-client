var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server");
var import_react2 = require("@emotion/react");
var import_create_instance = __toESM(require("@emotion/server/create-instance"));
var import_react3 = require("@remix-run/react");

// app/context.tsx
var import_react = require("react");
var ServerStyleContext = (0, import_react.createContext)(null);
var ClientStyleContext = (0, import_react.createContext)(null);

// app/createEmotionCache.ts
var import_cache = __toESM(require("@emotion/cache"));
function createEmotionCache() {
  return (0, import_cache.default)({ key: "css" });
}

// app/entry.server.tsx
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = (0, import_create_instance.default)(cache);
  const html = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(ServerStyleContext.Provider, {
    value: null
  }, /* @__PURE__ */ React.createElement(import_react2.CacheProvider, {
    value: cache
  }, /* @__PURE__ */ React.createElement(import_react3.RemixServer, {
    context: remixContext,
    url: request.url
  }))));
  const chunks = extractCriticalToChunks(html);
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(ServerStyleContext.Provider, {
    value: chunks.styles
  }, /* @__PURE__ */ React.createElement(import_react2.CacheProvider, {
    value: cache
  }, /* @__PURE__ */ React.createElement(import_react3.RemixServer, {
    context: remixContext,
    url: request.url
  }))));
  responseHeaders.set("Content-Type", "text/html");
  return new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/caiyuheng/Personal/bill/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react9 = __toESM(require("react"));
var import_react10 = require("@emotion/react");
var import_react11 = require("@remix-run/react");
var import_react12 = require("@chakra-ui/react");

// app/styles.css
var styles_default = "/build/_assets/styles-IZP27QNG.css";

// app/styles/app.css
var app_default = "/build/_assets/app-Y3OZUSN4.css";

// app/theme.ts
var import_react4 = require("@chakra-ui/react");
var config = {
  initialColorMode: "light",
  disableTransitionOnChange: false
};
var theme = (0, import_react4.extendTheme)({ config });
var theme_default = theme;

// app/components/layout/Header.tsx
var import_react8 = require("@chakra-ui/react");

// app/components/route/GoBack.tsx
var import_react5 = require("@chakra-ui/react");
var import_react6 = require("@remix-run/react");
var GoBack = () => {
  const history = (0, import_react6.useNavigate)();
  return /* @__PURE__ */ React.createElement(import_react5.Box, {
    className: "cursor-pointer",
    onClick: () => {
      history(-1);
    }
  }, /* @__PURE__ */ React.createElement(import_react5.Text, {
    bgGradient: "linear(to-l, #7928CA, #FF0080)",
    bgClip: "text",
    fontSize: "xl",
    fontWeight: "extrabold"
  }, "Go Back"));
};
var GoBack_default = GoBack;

// app/components/theme/DarkController.tsx
var import_icons = require("@chakra-ui/icons");
var import_react7 = require("@chakra-ui/react");
var DarkController = () => {
  const { colorMode, toggleColorMode } = (0, import_react7.useColorMode)();
  const handleToggleTheme = () => {
    toggleColorMode();
  };
  return /* @__PURE__ */ React.createElement(import_react7.Box, {
    onClick: handleToggleTheme,
    className: "cursor-pointer"
  }, colorMode === "light" ? /* @__PURE__ */ React.createElement(import_icons.MoonIcon, null) : /* @__PURE__ */ React.createElement(import_icons.SunIcon, null));
};
var DarkController_default = DarkController;

// app/components/layout/Header.tsx
var Header = () => {
  return /* @__PURE__ */ React.createElement(import_react8.Box, {
    className: "flex justify-between items-center"
  }, /* @__PURE__ */ React.createElement(GoBack_default, null), /* @__PURE__ */ React.createElement(DarkController_default, null));
};
var Header_default = Header;

// route:/Users/caiyuheng/Personal/bill/app/root.tsx
var meta = () => ({
  title: "Bill"
});
var links = () => {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstaticom" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
    },
    { rel: "stylesheet", href: styles_default },
    { rel: "stylesheet", href: app_default }
  ];
};
var Document = (0, import_react10.withEmotionCache)(({ children }, emotionCache) => {
  const serverStyleData = (0, import_react9.useContext)(ServerStyleContext);
  const clientStyleData = (0, import_react9.useContext)(ClientStyleContext);
  (0, import_react9.useEffect)(() => {
    emotionCache.sheet.container = document.head;
    const tags = emotionCache.sheet.tags;
    emotionCache.sheet.flush();
    tags.forEach((tag) => {
      emotionCache.sheet._insertTag(tag);
    });
    clientStyleData == null ? void 0 : clientStyleData.reset();
  }, []);
  return /* @__PURE__ */ import_react9.default.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ import_react9.default.createElement("head", null, /* @__PURE__ */ import_react9.default.createElement(import_react11.Meta, null), /* @__PURE__ */ import_react9.default.createElement(import_react11.Links, null), serverStyleData == null ? void 0 : serverStyleData.map(({ key, ids, css }) => /* @__PURE__ */ import_react9.default.createElement("style", {
    key,
    "data-emotion": `${key} ${ids.join(" ")}`,
    dangerouslySetInnerHTML: { __html: css }
  }))), /* @__PURE__ */ import_react9.default.createElement("body", null, children, /* @__PURE__ */ import_react9.default.createElement(import_react11.ScrollRestoration, null), /* @__PURE__ */ import_react9.default.createElement(import_react11.Scripts, null), /* @__PURE__ */ import_react9.default.createElement(import_react11.LiveReload, null)));
});
function App() {
  return /* @__PURE__ */ import_react9.default.createElement(Document, null, /* @__PURE__ */ import_react9.default.createElement(import_react12.ChakraProvider, {
    theme: theme_default
  }, /* @__PURE__ */ import_react9.default.createElement(import_react12.Box, {
    className: "px-4 py-2"
  }, /* @__PURE__ */ import_react9.default.createElement(Header_default, null), /* @__PURE__ */ import_react9.default.createElement(import_react11.Outlet, null))));
}

// route:/Users/caiyuheng/Personal/bill/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_react13 = require("@chakra-ui/react");
var import_react14 = require("@remix-run/react");
function Index() {
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(import_react13.Heading, null, "Welcome To Money "), /* @__PURE__ */ React.createElement(import_react13.Text, null, /* @__PURE__ */ React.createElement(import_react13.Link, {
    as: import_react14.Link,
    color: "teal.500",
    to: "/list"
  }, "See"), " ", "your record list"));
}

// route:/Users/caiyuheng/Personal/bill/app/routes/list.tsx
var list_exports = {};
__export(list_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  action: () => action,
  default: () => list_default,
  loader: () => loader
});
var import_icons2 = require("@chakra-ui/icons");
var import_react15 = require("@chakra-ui/react");
var import_react16 = require("@remix-run/react");
var import_server_runtime = require("@remix-run/server-runtime");
var import_dayjs = __toESM(require("dayjs"));
var import_framer_motion = require("framer-motion");
var import_lodash = require("lodash");
var import_react17 = require("react");

// app/api/index.ts
var import_axios = __toESM(require("axios"));
var api = import_axios.default.create({
  baseURL: "https://bill.kami.fit"
});
api.interceptors.request.use(function(config2) {
  return config2;
}, function(error) {
  return Promise.reject(error);
});
api.interceptors.response.use(function(response) {
  return response.data;
}, function(error) {
  return Promise.reject(error);
});
var api_default = api;

// route:/Users/caiyuheng/Personal/bill/app/routes/list.tsx
var loader = async () => {
  const res = await api_default.get("/record/list");
  const data = res.data ?? [];
  return {
    data
  };
};
var action = async ({ request }) => {
  const form = await request.formData();
  const id = Number(form.get("id"));
  const name = form.get("name");
  const price = form.get("price");
  const _method = form.get("_method");
  if (!["delete", "put"].includes(_method)) {
    throw new Response(`Not support ${form.get("_method")} method`, {
      status: 400
    });
  }
  if (!id && id !== 0) {
    throw new Response("Lose of `id` params", {
      status: 400
    });
  }
  if (_method === "delete") {
    await api_default.post("/record/delete", { id });
  } else if (_method === "put") {
    await api_default.post("/record/update", { id, name, price });
  } else {
    throw new Error("Something went wrong");
  }
  return (0, import_server_runtime.redirect)("/list");
};
var List = () => {
  const { data } = (0, import_react16.useLoaderData)();
  const { isOpen, onOpen, onClose } = (0, import_react15.useDisclosure)();
  const [selectedRecord, setSelectedRecord] = (0, import_react17.useState)();
  const groupByCreatedTimeData = (0, import_lodash.groupBy)(data, (i) => (0, import_dayjs.default)(i.created_at).format("YYYY-MM-DD"));
  return /* @__PURE__ */ React.createElement(import_react15.Box, null, Object.keys(groupByCreatedTimeData).map((key) => {
    const list = groupByCreatedTimeData[key];
    return /* @__PURE__ */ React.createElement(import_react15.Box, {
      key,
      className: "mb-4 last:mb-0"
    }, /* @__PURE__ */ React.createElement(import_react15.Text, {
      className: "text-gray-500 text-lg mb-2 font-bold"
    }, key), list.map((item) => {
      const { id, price, type, name } = item;
      const money = type === 1 ? /* @__PURE__ */ React.createElement(import_react15.Text, {
        className: "text-green-500 font-bold italic"
      }, `+${price}`) : /* @__PURE__ */ React.createElement(import_react15.Text, {
        className: "text-red-500 font-bold italic"
      }, `-${price}`);
      return /* @__PURE__ */ React.createElement(import_react15.Box, {
        as: import_framer_motion.motion.div,
        key: id,
        className: "flex justify-between items-center shadow-lg p-2 rounded mb-2 last:mb-0 px-4 ml-2 dark:!bg-red-500",
        whileHover: { scale: 1.01, y: -3 },
        onClick: () => {
          setSelectedRecord(item);
          onOpen();
        }
      }, /* @__PURE__ */ React.createElement(import_react15.Text, {
        className: "text-xl font-bold"
      }, name), money);
    }));
  }), /* @__PURE__ */ React.createElement(RecordEditor, {
    isOpen,
    onClose,
    selectedRecord
  }), isOpen ? null : /* @__PURE__ */ React.createElement(import_react15.Box, {
    className: "fixed overflow-hidden bottom-4 left-1/2 -translate-x-1/2 bg-blue-400 rounded-full w-12 h-12 shadow-md cursor-pointer hover:scale-125 hover:-translate-y-2 transition-transform"
  }, /* @__PURE__ */ React.createElement(import_react16.Link, {
    to: "/add",
    className: "w-full h-full flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement(import_icons2.AddIcon, {
    className: "!text-white"
  }))));
};
var list_default = List;
var RecordEditor = ({
  isOpen,
  onClose,
  selectedRecord
}) => {
  const { state } = (0, import_react16.useTransition)();
  const updateFormRef = (0, import_react17.useRef)(null);
  const isSubmitting = state === "submitting";
  const submit = (0, import_react16.useSubmit)();
  function handleUpdate() {
    submit(updateFormRef.current, { replace: true });
  }
  (0, import_react17.useEffect)(() => {
    return () => {
      if (isSubmitting) {
        onClose();
      }
    };
  }, [isSubmitting]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react15.Modal, {
    isOpen,
    onClose
  }, /* @__PURE__ */ React.createElement(import_react15.ModalOverlay, null), /* @__PURE__ */ React.createElement(import_react15.ModalContent, null, /* @__PURE__ */ React.createElement(import_react15.ModalHeader, {
    className: "flex justify-between items-center"
  }, /* @__PURE__ */ React.createElement(import_react15.Text, null, "Modify Your Bill"), /* @__PURE__ */ React.createElement(import_react15.Box, {
    className: "flex gap-4"
  }, /* @__PURE__ */ React.createElement(import_react15.Button, {
    size: "sm",
    onClick: handleUpdate,
    isLoading: isSubmitting,
    colorScheme: "blue"
  }, "Modify"), /* @__PURE__ */ React.createElement(import_react16.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "_method",
    value: "delete"
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "id",
    value: selectedRecord == null ? void 0 : selectedRecord.id
  }), /* @__PURE__ */ React.createElement(import_react15.Button, {
    size: "sm",
    type: "submit",
    colorScheme: "red"
  }, "Delete")))), /* @__PURE__ */ React.createElement(import_react15.ModalBody, null, /* @__PURE__ */ React.createElement(import_react16.Form, {
    ref: updateFormRef,
    method: "post",
    className: "flex justify-between items-center"
  }, /* @__PURE__ */ React.createElement(import_react15.Editable, {
    defaultValue: selectedRecord == null ? void 0 : selectedRecord.name,
    className: "w-40"
  }, /* @__PURE__ */ React.createElement(import_react15.EditablePreview, null), /* @__PURE__ */ React.createElement(import_react15.EditableInput, {
    name: "name"
  })), /* @__PURE__ */ React.createElement(import_react15.Editable, {
    defaultValue: selectedRecord == null ? void 0 : selectedRecord.price,
    className: "w-40",
    startWithEditView: true
  }, /* @__PURE__ */ React.createElement(import_react15.EditablePreview, null), /* @__PURE__ */ React.createElement(import_react15.EditableInput, {
    name: "price",
    type: "number"
  })), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "_method",
    value: "put"
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "id",
    value: selectedRecord == null ? void 0 : selectedRecord.id
  }))), /* @__PURE__ */ React.createElement(import_react15.ModalFooter, null))));
};
function CatchBoundary() {
  const caught = (0, import_react16.useCatch)();
  if (caught.status === 500) {
    return /* @__PURE__ */ React.createElement(import_react15.Box, null, "Something went wrong with the server...");
  }
  throw new Error(`Error Code: ${caught.status}`);
}
function ErrorBoundary() {
  return /* @__PURE__ */ React.createElement(import_react15.Box, null, "Shit\u{1F630}");
}

// route:/Users/caiyuheng/Personal/bill/app/routes/add.tsx
var add_exports = {};
__export(add_exports, {
  action: () => action2,
  default: () => add_default
});
var import_react18 = require("@chakra-ui/react");
var import_react19 = require("@remix-run/react");
var import_server_runtime2 = require("@remix-run/server-runtime");
var formConfig = [
  {
    name: "name"
  },
  {
    name: "price",
    attr: {
      type: "number"
    }
  }
];
var validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Name is required";
  } else if (!values.price) {
    errors.price = "Price is required";
  }
  return errors;
};
var badRequest = (data) => (0, import_server_runtime2.json)(data, { status: 400 });
var action2 = async ({ request }) => {
  const form = await request.formData();
  const name = form.get("name");
  const price = form.get("price");
  if (typeof name !== "string" || typeof price !== "string") {
    return badRequest({
      formError: "Form not submitted correctly."
    });
  }
  const fields = { name, price };
  const fieldErrors = validate(fields);
  if (Object.values(fieldErrors).some(Boolean))
    return badRequest({ fieldErrors, fields });
  try {
    await api_default.post("/record/create", {
      name,
      price: Number(price),
      type: 0
    });
    return (0, import_server_runtime2.redirect)("/list");
  } catch (e) {
    return badRequest({ formError: "Something went wrong" });
  }
};
var AddRecord = () => {
  const actionData = (0, import_react19.useActionData)();
  const { state } = (0, import_react19.useTransition)();
  const isSubmitting = state === "submitting";
  return /* @__PURE__ */ React.createElement(import_react19.Form, {
    method: "post"
  }, formConfig.map((i) => {
    var _a;
    const key = i.name;
    const attr = i.attr;
    const errorMessage = (_a = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _a[key];
    return /* @__PURE__ */ React.createElement(import_react18.FormControl, {
      key,
      isInvalid: !!errorMessage,
      isDisabled: isSubmitting
    }, /* @__PURE__ */ React.createElement(import_react18.FormLabel, {
      htmlFor: key,
      className: "first-letter:uppercase"
    }, key), (attr == null ? void 0 : attr.type) === "number" ? /* @__PURE__ */ React.createElement(import_react18.NumberInput, {
      defaultValue: 0,
      min: 0
    }, /* @__PURE__ */ React.createElement(import_react18.NumberInputField, {
      id: key,
      name: key
    }), /* @__PURE__ */ React.createElement(import_react18.NumberInputStepper, null, /* @__PURE__ */ React.createElement(import_react18.NumberIncrementStepper, null), /* @__PURE__ */ React.createElement(import_react18.NumberDecrementStepper, null))) : /* @__PURE__ */ React.createElement(import_react18.Input, __spreadValues({
      id: key,
      name: key
    }, attr)), errorMessage ? /* @__PURE__ */ React.createElement(import_react18.FormErrorMessage, null, errorMessage) : null);
  }), /* @__PURE__ */ React.createElement(import_react18.Box, null, (actionData == null ? void 0 : actionData.formError) ? /* @__PURE__ */ React.createElement(import_react18.FormErrorMessage, null, actionData.formError) : null), /* @__PURE__ */ React.createElement(import_react18.Button, {
    mt: 4,
    colorScheme: "teal",
    isLoading: isSubmitting,
    type: "submit"
  }, "Submit"));
};
var add_default = AddRecord;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "19af4a1f", "entry": { "module": "/build/entry.client-2RAWHOQD.js", "imports": ["/build/_shared/chunk-QTRYHYK4.js", "/build/_shared/chunk-NMWBLGMW.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-RKXAFT36.js", "imports": ["/build/_shared/chunk-EPUNYPQW.js", "/build/_shared/chunk-UAG5HP32.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/add": { "id": "routes/add", "parentId": "root", "path": "add", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/add-WYNWRSWL.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-2ZDHZUCA.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/list": { "id": "routes/list", "parentId": "root", "path": "list", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/list-R5Q2OANT.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true } }, "url": "/build/manifest-19AF4A1F.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/list": {
    id: "routes/list",
    parentId: "root",
    path: "list",
    index: void 0,
    caseSensitive: void 0,
    module: list_exports
  },
  "routes/add": {
    id: "routes/add",
    parentId: "root",
    path: "add",
    index: void 0,
    caseSensitive: void 0,
    module: add_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
