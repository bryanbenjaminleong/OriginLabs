import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/App.tsx");import.meta.env = {"BASE_URL": "/", "DEV": true, "MODE": "development", "PROD": false, "SSR": false};import { Switch, Route, Router as WouterRouter } from "/node_modules/.vite/deps/wouter.js?v=41979ed2";
import { Toaster } from "/src/components/ui/toaster.tsx";
import { TooltipProvider } from "/src/components/ui/tooltip.tsx";
import Home from "/src/pages/home.tsx";
import NotFound from "/src/pages/not-found.tsx";
var _jsxFileName = "/opt/origin-labs-site/src/App.tsx";
import __vite__cjsImport5_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=41979ed2"; const _jsxDEV = __vite__cjsImport5_react_jsxDevRuntime["jsxDEV"];
function Router() {
	return /* @__PURE__ */ _jsxDEV(Switch, { children: [/* @__PURE__ */ _jsxDEV(Route, {
		path: "/",
		component: Home
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 10,
		columnNumber: 7
	}, this), /* @__PURE__ */ _jsxDEV(Route, { component: NotFound }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 11,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 9,
		columnNumber: 5
	}, this);
}
_c = Router;
function App() {
	return /* @__PURE__ */ _jsxDEV(TooltipProvider, { children: [/* @__PURE__ */ _jsxDEV(WouterRouter, {
		base: import.meta.env.BASE_URL.replace(/\/$/, ""),
		children: /* @__PURE__ */ _jsxDEV(Router, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 20,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 19,
		columnNumber: 7
	}, this), /* @__PURE__ */ _jsxDEV(Toaster, {}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 22,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 18,
		columnNumber: 5
	}, this);
}
_c2 = App;
export default App;
var _c, _c2;
$RefreshReg$(_c, "Router");
$RefreshReg$(_c2, "App");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/App.tsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/opt/origin-labs-site/src/App.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/opt/origin-labs-site/src/App.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/opt/origin-labs-site/src/App.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsU0FBUyxRQUFRLE9BQU8sVUFBVSxvQkFBb0I7QUFDdEQsU0FBUyxlQUFlO0FBQ3hCLFNBQVMsdUJBQXVCO0FBQ2hDLE9BQU8sVUFBVTtBQUNqQixPQUFPLGNBQWM7OztBQUVyQixTQUFTLFNBQVM7QUFDaEIsUUFDRSx3QkFBQyxRQUFELGFBQ0Usd0JBQUMsT0FBRDtFQUFPLE1BQUs7RUFBSSxXQUFXO0VBQVE7Ozs7V0FDbkMsd0JBQUMsT0FBRCxFQUFPLFdBQVcsVUFBWTs7OztVQUN2Qjs7Ozs7OztBQUliLFNBQVMsTUFBTTtBQUNiLFFBQ0Usd0JBQUMsaUJBQUQsYUFDRSx3QkFBQyxjQUFEO0VBQWMsTUFBTSxPQUFPLEtBQUssSUFBSSxTQUFTLFFBQVEsT0FBTyxHQUFHO1lBQzdELHdCQUFDLFFBQUQsRUFBVTs7Ozs7RUFDRzs7OztXQUNmLHdCQUFDLFNBQUQsRUFBVzs7OztVQUNLOzs7Ozs7O0FBSXRCLGVBQWUiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQXBwLnRzeCJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTd2l0Y2gsIFJvdXRlLCBSb3V0ZXIgYXMgV291dGVyUm91dGVyIH0gZnJvbSBcIndvdXRlclwiO1xuaW1wb3J0IHsgVG9hc3RlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdG9hc3RlclwiO1xuaW1wb3J0IHsgVG9vbHRpcFByb3ZpZGVyIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS90b29sdGlwXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiQC9wYWdlcy9ob21lXCI7XG5pbXBvcnQgTm90Rm91bmQgZnJvbSBcIkAvcGFnZXMvbm90LWZvdW5kXCI7XG5cbmZ1bmN0aW9uIFJvdXRlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8U3dpdGNoPlxuICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtIb21lfSAvPlxuICAgICAgPFJvdXRlIGNvbXBvbmVudD17Tm90Rm91bmR9IC8+XG4gICAgPC9Td2l0Y2g+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8VG9vbHRpcFByb3ZpZGVyPlxuICAgICAgPFdvdXRlclJvdXRlciBiYXNlPXtpbXBvcnQubWV0YS5lbnYuQkFTRV9VUkwucmVwbGFjZSgvXFwvJC8sIFwiXCIpfT5cbiAgICAgICAgPFJvdXRlciAvPlxuICAgICAgPC9Xb3V0ZXJSb3V0ZXI+XG4gICAgICA8VG9hc3RlciAvPlxuICAgIDwvVG9vbHRpcFByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXX0=