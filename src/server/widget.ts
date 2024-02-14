declare var __SERVER_DOMAIN__: string;
console.log(__SERVER_DOMAIN__);
const defaultStyles: any = {
  border: "none",
  "z-index": 2147483647,
  height: "650px",
  width: "350px",
  display: "block !important",
  visibility: "visible",
  background: "none transparent",
  opacity: 1,
  "pointer-events": "auto",
  "touch-action": "auto",
  position: "fixed",
  right: "20px",
  bottom: "20px",
};

interface IConfig {
  publicKey: string | null;
  identifier?: string | null;
  token?: string | null;
  styleUrl?: string | null;
  settings?: string | null;
}

interface IWidget {
  config: IConfig | null;
  iframe: HTMLIFrameElement | null;
  init: (config: IConfig) => void;
  load: () => void;
  setupListeners: () => void;
  createIframe: () => void;
  handleMessage: (event: MessageEvent) => void;
}

const Widget: IWidget = {
  iframe: null,
  config: null,
  init: function (config: IConfig) {
    this.config = config;
    this.load();
  },
  load: function () {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var config: IConfig = {
      publicKey:
        url.searchParams.get("sdkKey") || url.searchParams.get("publicKey"),
      identifier:
        url.searchParams.get("identifier") || url.searchParams.get("email"),
      token: url.searchParams.get("token"),
      styleUrl: url.searchParams.get("styleUrl"),
      settings: url.searchParams.get("settings"),
    };
    this.config = Object.assign({}, this.config, config);
    this.createIframe();
  },
  createIframe: function () {
    this.iframe = document.createElement("iframe");
    let styles = "";
    for (const key in defaultStyles) {
      styles += key + ": " + defaultStyles[key] + ";";
    }
    this.iframe.setAttribute("style", styles);
    this.iframe.src = `${__SERVER_DOMAIN__}`;
    this.iframe.referrerPolicy = "origin";
    document.body.appendChild(this.iframe);
    this.setupListeners();
  },
  setupListeners: function () {
    window.addEventListener("message", this.handleMessage.bind(this));
  },
  handleMessage: function (e) {
    e.preventDefault();
    if (!e.data || typeof e.data !== "string") return;
    const data = JSON.parse(e.data);
    switch (data.action) {
      case "init": {
        if (this.iframe) {
          window.postMessage(JSON.stringify(this.config), "*");
        }
        break;
      }
      default:
        break;
    }
  },
};

export default Widget;
