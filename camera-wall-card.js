const VERSION = "0.3.1";

const ICON = {
  cctv: "M6.03 12.03L8.03 15.5L5.5 18.68L2 12.62L6.03 12.03M17 18V15.29C17.88 14.9 18.5 14.03 18.5 13C18.5 12.43 18.3 11.9 17.97 11.5L19.94 10.35C20.95 9.76 21.3 8.47 20.71 7.46L19.33 5.06C18.74 4.05 17.45 3.7 16.44 4.28L8.31 9C7.36 9.53 7.03 10.75 7.58 11.71L9.08 14.31C9.63 15.26 10.86 15.59 11.81 15.04L13.69 13.96C14 14.65 14.5 15.04 15 15.29V18C15 19.1 15.9 20 17 20H22V18H17Z",
  motion: "M10,0.2C9,0.2 8.2,1 8.2,2C8.2,3 9,3.8 10,3.8C11,3.8 11.8,3 11.8,2C11.8,1 11,0.2 10,0.2M15.67,1A7.33,7.33 0 0,0 23,8.33V7A6,6 0 0,1 17,1H15.67M18.33,1C18.33,3.58 20.42,5.67 23,5.67V4.33C21.16,4.33 19.67,2.84 19.67,1H18.33M21,1A2,2 0 0,0 23,3V1H21M7.92,4.03C7.75,4.03 7.58,4.06 7.42,4.11L2,5.8V11H3.8V7.33L5.91,6.67L2,22H3.8L6.67,13.89L9,17V22H10.8V15.59L8.31,11.05L9.04,8.18L10.12,10H15V8.2H11.38L9.38,4.87C9.08,4.37 8.54,4.03 7.92,4.03Z",
  bell: "M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21",
  battery: "M16,20H8V6H16M16.67,4H15V2H9V4H7.33A1.33,1.33 0 0,0 6,5.33V20.67C6,21.4 6.6,22 7.33,22H16.67A1.33,1.33 0 0,0 18,20.67V5.33C18,4.6 17.4,4 16.67,4Z",
  batteryLow: "M16,18H8V6H16M16.67,4H15V2H9V4H7.33A1.33,1.33 0 0,0 6,5.33V20.67C6,21.4 6.6,22 7.33,22H16.67A1.33,1.33 0 0,0 18,20.67V5.33C18,4.6 17.4,4 16.67,4M11,9H13V14H11V9M11,15H13V17H11V15Z",
  offline: "M3.28,2L2,3.27L4.73,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16C16.2,18 16.39,17.92 16.54,17.82L19.73,21L21,19.73M21,6.5L17,10.5V7A1,1 0 0,0 16,6H9.82L21,17.18V6.5Z",
  close: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",
  prev: "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",
  next: "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",
  info: "M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",
  grid: "M3,11H11V3H3M3,21H11V13H3M13,21H21V13H13M13,3V11H21V3",
  cog: "M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z",
};

const PLATFORM_NAMES = { ring: "Ring", unifiprotect: "UniFi" };

const DEAD_STATES = new Set(["unavailable", "unknown"]);

const SVG_NS = "http://www.w3.org/2000/svg";

function h(tag, props = {}, ...children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(props)) {
    if (v == null || v === false) continue;
    if (k === "class") node.className = v;
    else if (k === "style") node.style.cssText = v;
    else node.setAttribute(k, v === true ? "" : v);
  }
  for (const c of children.flat()) if (c != null) node.append(c);
  return node;
}

const iconSvg = (path) => `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${path}"/></svg>`;

function icon(path, cls) {
  const span = h("span", { class: cls ? `ic ${cls}` : "ic" });
  span.innerHTML = iconSvg(path);
  return span;
}

function since(ms) {
  const sec = Math.max(0, (Date.now() - ms) / 1000);
  if (sec < 60) return "just now";
  if (sec < 3600) return `${Math.floor(sec / 60)}m`;
  if (sec < 86400) return `${Math.floor(sec / 3600)}h`;
  return `${Math.floor(sec / 86400)}d`;
}

function parseTime(v) {
  if (!v || DEAD_STATES.has(v)) return null;
  const t = Date.parse(v);
  return Number.isNaN(t) ? null : t;
}

const STYLE = `
:host {
  display: block;
  --hv-bg: #121418;
  --hv-surface: rgba(29, 33, 39, 0.92);
  --hv-closed: #3ecf8e;
  --hv-open: #ff5a5f;
  --hv-text: #e6edf2;
  --hv-muted: #8b98a5;
  --hv-accent: #3d8bff;
  --hv-warm: #ffc35a;
  --hv-cool: #5ab4ff;
}
ha-card {
  display: block;
  container: cw-card / inline-size;
  padding: 12px 12px 16px;
  background: var(--hv-bg);
  color: var(--hv-text);
  border-radius: var(--ha-card-border-radius, 12px);
  overflow: hidden;
  font-family: var(--paper-font-body1_-_font-family, Roboto, system-ui, sans-serif);
}
.ic { display: inline-grid; place-items: center; }
.ic svg { width: 16px; height: 16px; fill: currentColor; }
.top { display: flex; flex-wrap: wrap; align-items: center; gap: 8px 12px; margin-bottom: 10px; }
.title { font-size: 18px; font-weight: 600; margin-right: auto; }
.chips { display: flex; flex-wrap: wrap; gap: 6px; }
.chip {
  display: inline-flex; align-items: center; gap: 6px; height: 28px; padding: 0 10px;
  border-radius: 14px; border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.05);
  color: var(--hv-text); font: inherit; font-size: 13px; cursor: pointer; white-space: nowrap;
}
.right { display: flex; align-items: center; gap: 6px; }
.gear {
  display: grid; place-items: center; flex: none; width: 30px; height: 30px; padding: 0; border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.05); color: var(--hv-muted); cursor: pointer;
}
.gear svg { width: 17px; height: 17px; fill: currentColor; }
.gear:hover { color: var(--hv-text); }
ha-card { position: relative; }
.settings {
  position: absolute; top: 0; right: 0; bottom: 0; z-index: 6; display: flex; flex-direction: column;
  width: min(600px, 100%); box-sizing: border-box; background: var(--card-background-color, #1c1f24);
  border-left: 1px solid rgba(255,255,255,0.08); box-shadow: -12px 0 32px rgba(0,0,0,0.45);
}
.settings .s-head { display: flex; align-items: center; gap: 8px; padding: 12px 14px; border-bottom: 1px solid rgba(255,255,255,0.08); }
.settings .s-title { font-size: 16px; font-weight: 600; margin-right: auto; }
.settings .s-body { flex: 1; overflow-y: auto; padding: 14px; }
.settings .s-status { padding: 8px 14px; font-size: 12px; color: var(--hv-muted); border-top: 1px solid rgba(255,255,255,0.08); }
.settings .s-status.err { color: var(--hv-open); }
.settings .s-status:empty { display: none; }
.settings button.s-btn {
  padding: 7px 14px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.12); background: none;
  color: var(--hv-text); font: inherit; font-size: 13px; cursor: pointer;
}
.settings button.s-btn.primary { background: var(--hv-accent); border-color: var(--hv-accent); color: #fff; }
.settings button.s-btn:disabled { opacity: 0.5; cursor: default; }
.chip.ok { color: var(--hv-closed); }
.chip.alert { color: var(--hv-open); background: rgba(255,90,95,0.12); border-color: rgba(255,90,95,0.35); }
.chip.ding { color: #fff; background: var(--hv-open); border-color: var(--hv-open); }
.chip.warm { color: var(--hv-warm); }
.chip.cool { color: var(--hv-cool); }
.tabs {
  display: inline-flex; flex-wrap: wrap; gap: 2px; padding: 3px; border-radius: 10px; background: rgba(255,255,255,0.05);
  max-width: 100%; overflow-x: auto; scrollbar-width: none;
}
.tab {
  border: 0; background: none; color: var(--hv-muted); padding: 6px 12px; border-radius: 7px;
  font: inherit; font-size: 13px; cursor: pointer; white-space: nowrap;
}
.tab .n { margin-left: 5px; opacity: 0.6; font-size: 11px; }
.tab.on { background: var(--hv-accent); color: #fff; }
.tab.on .n { opacity: 0.8; }
@container cw-card (min-width: 860px) {
  .top { display: grid; grid-template-columns: 1fr auto 1fr; gap: 12px; margin-bottom: 12px; }
  .top .tabs { justify-self: center; }
  .top .right { justify-self: end; }
  .title { margin: 0; }
}
.body { display: grid; gap: 12px; grid-template-columns: minmax(0, 1fr); }
.main { position: relative; min-width: 0; }
.grid {
  display: grid; gap: var(--cw-gap, 8px);
  grid-template-columns: repeat(var(--cols, auto-fill), minmax(var(--cw-min-width, 160px), 1fr));
}
.grid.fixed { grid-template-columns: repeat(var(--cols), minmax(0, 1fr)); }
.grid.fit { grid-template-columns: repeat(var(--cols), var(--tile-w)); justify-content: center; align-content: start; }
.tile {
  position: relative; display: block; padding: 0; margin: 0; border: 1px solid rgba(255,255,255,0.08); border-radius: 8px;
  overflow: hidden; background: #000; color: #fff; font: inherit; text-align: left; cursor: pointer;
  aspect-ratio: var(--cw-aspect, 16 / 9); min-width: 0; -webkit-tap-highlight-color: transparent;
}
.tile:focus-visible { outline: 2px solid var(--hv-accent); outline-offset: 2px; }
.tile > img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0; transition: opacity 0.25s; }
.tile > img.ready { opacity: 1; }
.tile .shade { position: absolute; inset: auto 0 0 0; height: 46%; background: linear-gradient(transparent, rgba(0,0,0,0.75)); pointer-events: none; }
.tile .cap {
  position: absolute; left: 0; right: 0; bottom: 0; display: flex; align-items: baseline; gap: 6px;
  padding: 5px 7px; font-size: 12px; font-weight: 500; text-shadow: 0 1px 2px rgba(0,0,0,0.8);
}
.tile .nm { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.tile .ago { flex: none; color: rgba(255,255,255,0.7); font-size: 10px; }
.tile .tags { position: absolute; top: 5px; left: 5px; right: 5px; display: flex; align-items: center; gap: 4px; pointer-events: none; }
.tile .live {
  display: none; align-items: center; gap: 4px; padding: 2px 5px; border-radius: 4px;
  background: rgba(0,0,0,0.6); font-size: 10px; letter-spacing: 0.04em;
}
.tile.streaming .live { display: flex; }
.tile .stream { position: absolute; inset: 0; width: 100%; height: 100%; display: block; pointer-events: none; overflow: hidden; }
.tile.streaming .empty { display: none; }
.tile .live::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: var(--hv-closed); }
.tile .badge {
  display: none; align-items: center; gap: 3px; padding: 2px 6px; border-radius: 4px;
  background: var(--hv-open); color: #fff; font-size: 10px; font-weight: 600; white-space: nowrap;
}
.tile .badge .ic svg { width: 11px; height: 11px; }
.tile .bat {
  display: none; align-items: center; gap: 1px; margin-left: auto; padding: 2px 4px; border-radius: 4px;
  background: rgba(0,0,0,0.6); font-size: 10px;
}
.tile .bat .ic svg { width: 11px; height: 11px; }
.tile .bat.show { display: flex; }
.tile .bat.low { color: var(--hv-warm); }
.tile .bat.crit { color: var(--hv-open); }
.tile .empty {
  position: absolute; inset: 0; display: grid; place-items: center; align-content: center; gap: 4px;
  color: var(--hv-muted); font-size: 11px; pointer-events: none;
}
.tile .empty svg { width: 26px; height: 26px; opacity: 0.6; }
.tile > img.ready ~ .empty { display: none; }
.tile.motion { border-color: var(--hv-open); box-shadow: 0 0 0 1px var(--hv-open), 0 0 18px rgba(255,90,95,0.4); }
.tile.motion .badge.m, .tile.ding .badge.d { display: flex; }
.tile.motion .live, .tile.ding .live { display: none !important; }
.tile.ding { border-color: var(--hv-open); animation: ring 1s ease-in-out infinite; }
.tile.dead { border-style: dashed; cursor: default; }
.tile.dead > img { filter: grayscale(1) brightness(0.5); }
.tile.dead .live { display: none; }
.tile.dead .empty { display: grid !important; z-index: 1; color: var(--hv-text); }
.tile.missing { border-style: dashed; opacity: 0.5; }
.tile.hidden { display: none; }
.log {
  display: flex; flex-direction: column; box-sizing: border-box; max-height: 340px; padding: 10px 6px 6px; min-width: 0;
  border-radius: 10px; border: 1px solid rgba(255,255,255,0.06); background: rgba(255,255,255,0.03);
}
.log h3 { margin: 0 8px 6px; color: var(--hv-muted); font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; }
.log ul { list-style: none; margin: 0; padding: 0; overflow-y: auto; scrollbar-width: thin; }
.log .day { padding: 10px 8px 4px; color: var(--hv-muted); font-size: 11px; font-weight: 600; }
.log .day:first-child { padding-top: 2px; }
.log .item {
  display: flex; align-items: center; gap: 10px; width: 100%; padding: 7px 8px; border: 0; border-radius: 8px;
  background: none; color: var(--hv-text); font: inherit; text-align: left; cursor: pointer;
}
.log .item:hover { background: rgba(255,255,255,0.05); }
.log .dot { display: grid; place-items: center; flex: none; width: 28px; height: 28px; border-radius: 50%; color: var(--hv-cool); background: rgba(90,180,255,0.12); }
.log .dot svg { width: 16px; height: 16px; fill: currentColor; }
.log .ding .dot { color: #fff; background: var(--hv-open); }
.log .txt { flex: 1; min-width: 0; font-size: 13px; line-height: 1.3; }
.log .when { flex: none; color: var(--hv-muted); font-size: 11px; white-space: nowrap; }
.log .empty { padding: 8px; color: var(--hv-muted); font-size: 13px; }
@container cw-card (min-width: 860px) {
  .body.with-log { grid-template-columns: minmax(0, 1fr) var(--hv-log-width, 280px); align-items: start; }
  .body.with-log > .log { max-height: none; height: var(--cw-height, calc(100vh - 110px)); position: sticky; top: 0; }
}
.focus {
  position: absolute; inset: 0; z-index: 3; display: none; flex-direction: column; gap: 8px;
  background: var(--hv-bg); border-radius: 10px;
}
.main.focused { overflow: hidden; }
.main.focused .grid { visibility: hidden; }
.focus.open { display: flex; }
.focus .bar { display: flex; align-items: center; gap: 8px; min-height: 36px; padding: 0 2px; }
.focus .fname { font-size: 16px; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.focus .fmeta { display: flex; gap: 6px; flex-wrap: wrap; margin-right: auto; }
.focus .fmeta .chip { height: 24px; font-size: 12px; cursor: default; }
.focus .btn {
  display: grid; place-items: center; flex: none; width: 36px; height: 36px; padding: 0; border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.05); color: var(--hv-text); cursor: pointer;
}
.focus .btn svg { width: 20px; height: 20px; fill: currentColor; }
.focus .btn:hover { background: rgba(255,255,255,0.1); }
.focus .stream { position: relative; flex: 1; min-height: 0; display: grid; place-items: center; overflow: hidden; border-radius: 8px; background: #000; }
.focus .stream > * { width: 100%; max-height: 100%; }
.focus .stream img { width: 100%; height: 100%; object-fit: contain; }
.focus .stream hui-picture-entity-card, .focus .stream ha-card { --ha-card-border-radius: 0; }
.focus .count { color: var(--hv-muted); font-size: 12px; white-space: nowrap; }
.focus .timer { color: var(--hv-muted); font-size: 12px; white-space: nowrap; }
@keyframes ring { 50% { box-shadow: 0 0 0 2px var(--hv-open), 0 0 26px rgba(255,90,95,0.7); } }
@media (prefers-reduced-motion: reduce) { * { animation: none !important; } }
`;

const DETECT_LABELS = {
  person: "Person",
  vehicle: "Vehicle",
  animal: "Animal",
  package: "Package",
  face: "Face",
  license_plate: "Plate",
  baby_cry: "Baby crying",
  smoke: "Smoke alarm",
  cmonx: "CO alarm",
  glass_break: "Glass break",
  bark: "Barking",
  car_horn: "Car horn",
  siren: "Siren",
  speaking: "Speaking",
};

function detectLabel(id, hass) {
  const m = id.match(/^binary_sensor\..*?_(person|vehicle|animal|package|face|license_plate|baby_cry|smoke|cmonx|glass_break|bark|car_horn|siren|speaking)_detected(_\d+)?$/);
  if (m) return DETECT_LABELS[m[1]];
  return (hass?.states[id]?.attributes.friendly_name || id).replace(/ detected$/i, "");
}

function mainView(cfg) {
  const items = [].concat(cfg.cameras || []).filter(Boolean);
  return { name: cfg.all_name || "All", items, ids: items.map((c) => (typeof c === "string" ? c : c.entity)) };
}

function viewList(cfg) {
  if (!Array.isArray(cfg.views) || !cfg.views.length) return null;
  return cfg.views.map((v, i) => {
    const items = [].concat(v?.cameras || []).filter(Boolean);
    return { name: v?.name || `View ${i + 1}`, items, ids: items.map((c) => (typeof c === "string" ? c : c.entity)) };
  });
}

function platformsOf(cfg) {
  if (cfg.platform === false) return [];
  return [].concat(cfg.platform || ["ring", "unifiprotect"]);
}

function cameraScore(id, r) {
  const k = `${r?.translation_key || ""} ${id}`;
  if (/insecure/.test(k)) return -10;
  if (/last_recording/.test(k)) return -5;
  if (/live_view|high_resolution/.test(k)) return 5;
  if (/medium_resolution/.test(k)) return 3;
  if (/low_resolution/.test(k)) return 2;
  if (/package/.test(k)) return 0;
  return 1;
}

function discoverCameras(hass, cfg, all = false) {
  const reg = hass.entities || {};
  const exclude = new Set([].concat(cfg.exclude || []));
  const views = all ? null : viewList(cfg);
  const listed = all ? [] : [...[].concat(cfg.cameras || []), ...(views ? views.flatMap((v) => v.items) : [])].map((c) => (typeof c === "string" ? { entity: c } : c));
  const out = [];
  const seen = new Set();
  const add = (c) => {
    if (!c.entity || seen.has(c.entity) || exclude.has(c.entity)) return;
    seen.add(c.entity);
    out.push(resolveCamera(hass, cfg, c));
  };
  for (const c of listed) add(c);
  const platforms = platformsOf(cfg);
  if (platforms.length && (all || !listed.length || cfg.discover === true || (views && views.some((v) => !v.items.length)))) {
    const best = new Map();
    for (const id of Object.keys(hass.states)) {
      if (!id.startsWith("camera.")) continue;
      const r = reg[id];
      if (r?.hidden && !cfg.show_hidden) continue;
      if (r?.platform ? !platforms.includes(r.platform) : !(platforms.includes("ring") && id.endsWith("_live_view"))) continue;
      const score = cameraScore(id, r);
      if (score <= -10 || (score < 0 && !cfg.include_last_recording)) continue;
      const key = cfg.include_last_recording ? id : r?.device_id || id;
      const prev = best.get(key);
      if (!prev || score > prev.score) best.set(key, { id, score });
    }
    const items = [...best.values()].map((x) => resolveCamera(hass, cfg, { entity: x.id }));
    items.sort((x, y) => (x.group || "~").localeCompare(y.group || "~") || x.name.localeCompare(y.name));
    for (const c of items) add(c);
  }
  return out;
}

function resolveCamera(hass, cfg, c) {
  const reg = hass.entities || {};
  const r = reg[c.entity];
  const dev = r?.device_id ? hass.devices?.[r.device_id] : null;
  const raw = c.entity.replace(/^camera\./, "");
  const m = raw.match(/^(.*?)_(live_view|last_recording|high_resolution_channel|medium_resolution_channel|low_resolution_channel|package_camera)(_\d+)?$/);
  const base = m ? m[1] : raw;
  const num = m?.[3] || "";
  const siblings = r?.device_id ? Object.values(reg).filter((e) => e.device_id === r.device_id) : [];
  const dc = (id) => hass.states[id]?.attributes.device_class;
  const pick = (domain, keys, suffixes) => {
    const byKey = siblings.find((e) => e.entity_id.startsWith(`${domain}.`) && (keys.includes(e.translation_key) || keys.includes(dc(e.entity_id))));
    if (byKey) return byKey.entity_id;
    for (const s of suffixes) {
      for (const id of [`${domain}.${base}_${s}${num}`, `${domain}.${base}_${s}`]) if (hass.states[id]) return id;
    }
    return null;
  };
  const detections =
    c.detections !== undefined
      ? [].concat(c.detections || [])
      : siblings.length
        ? siblings.map((e) => e.entity_id).filter((id) => id.startsWith("binary_sensor.") && /_detected(_\d+)?$/.test(id))
        : Object.keys(hass.states).filter((id) => id.startsWith(`binary_sensor.${base}_`) && /_detected(_\d+)?$/.test(id));
  const battery =
    c.battery !== undefined
      ? c.battery
      : siblings.find((e) => e.entity_id.startsWith("sensor.") && hass.states[e.entity_id]?.attributes.device_class === "battery")?.entity_id ||
        pick("sensor", ["battery"], ["battery"]);
  const areaId = r?.area_id || dev?.area_id;
  const group = c.group || (cfg.groups !== false && areaId ? hass.areas?.[areaId]?.name : null) || null;
  const fallbackName = hass.states[c.entity]?.attributes.friendly_name?.replace(/ (Live view|Last recording)$/i, "") || base.replace(/_/g, " ");
  return {
    ...c,
    name: c.name || dev?.name_by_user || dev?.name || fallbackName,
    group,
    platform: r?.platform || null,
    motion: [].concat(c.motion !== undefined ? c.motion || [] : [pick("event", ["motion"], ["motion"]) || pick("binary_sensor", ["motion"], ["motion"])]).filter(Boolean),
    ding: [].concat(c.ding !== undefined ? c.ding || [] : [pick("event", ["ding", "doorbell"], ["ding", "doorbell"]) || pick("binary_sensor", ["ding", "doorbell"], ["ding", "doorbell"])]).filter(Boolean),
    detections,
    battery,
    snapshot: c.snapshot || c.entity,
    live: c.live,
    fallback:
      c.fallback !== undefined
        ? c.fallback
        : (siblings.find((e) => e.entity_id.startsWith("camera.") && e.entity_id !== c.entity && (e.translation_key === "last_recording" || /_last_recording(_\d+)?$/.test(e.entity_id)))?.entity_id ||
            (hass.states[`camera.${base}_last_recording`] && `camera.${base}_last_recording` !== c.entity ? `camera.${base}_last_recording` : null)),
  };
}

class CameraWallCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._tab = "all";
    this._built = false;
    this._sig = "";
  }

  static getStubConfig() {
    return { title: "Cameras" };
  }

  static getConfigElement() {
    return document.createElement("camera-wall-card-editor");
  }

  setConfig(config) {
    if (!config) throw new Error("Invalid configuration");
    this._baseConfig = config;
    this._applyConfig(config);
  }

  _applyConfig(config) {
    this._config = { title: "Cameras", refresh: 20, motion_seconds: 90, ...config };
    this._events = [];
    this._seenEvents = new Set();
    this._historyLoaded = false;
    this._built = false;
    this._sig = "";
    this._cams = null;
    this._stamp = null;
    if (this._hass) this.hass = this._hass;
  }

  set hass(hass) {
    const first = !this._hass;
    this._hass = hass;
    if (!this._config) return;
    const stamp = `${Object.keys(hass.states).length}`;
    if (!this._built || hass.entities !== this._regRef || hass.areas !== this._areaRef || stamp !== this._stamp) {
      this._regRef = hass.entities;
      this._areaRef = hass.areas;
      this._stamp = stamp;
      const cams = this._discover();
      const sig = JSON.stringify(cams.map((c) => [c.entity, c.name, c.group]));
      if (!this._built || sig !== this._sig) {
        this._cams = cams;
        this._sig = sig;
        this._build();
      }
    }
    this._update(first);
    if (this._live) this._live.hass = hass;
  }

  get hass() {
    return this._hass;
  }

  getCardSize() {
    return 12;
  }

  getGridOptions() {
    return { columns: "full", rows: "auto", min_columns: 6 };
  }

  connectedCallback() {
    this._tick = setInterval(() => this._update(), 5000);
    this._ro = new ResizeObserver(() => this._layout());
    this._ro.observe(this);
    this._onResize = () => this._layout();
    addEventListener("resize", this._onResize);
    this._onKey = (e) => {
      if (!this._focusId) return;
      if (e.key === "Escape") this._closeFocus();
      else if (e.key === "ArrowRight") this._step(1);
      else if (e.key === "ArrowLeft") this._step(-1);
    };
    addEventListener("keydown", this._onKey);
    this._onVis = () => {
      if (!document.hidden) this._refreshAll();
      this._syncLive();
    };
    document.addEventListener("visibilitychange", this._onVis);
    this._schedule();
    if (this._built) this._layout();
  }

  disconnectedCallback() {
    clearInterval(this._tick);
    clearInterval(this._snapTick);
    clearTimeout(this._popupTimer);
    this._ro?.disconnect();
    this._io?.disconnect();
    removeEventListener("resize", this._onResize);
    removeEventListener("keydown", this._onKey);
    document.removeEventListener("visibilitychange", this._onVis);
    this._dropLive();
  }

  _canEdit() {
    return this._config.edit_button !== false && !!this._hass?.user?.is_admin && !!this._hass.callWS;
  }

  _openSettings() {
    if (this._editing) return;
    this._editing = true;
    this._draft = JSON.parse(JSON.stringify(this._baseConfig));
    const ed = document.createElement("camera-wall-card-editor");
    ed.hass = this._hass;
    ed.setConfig(this._draft);
    ed.addEventListener("config-changed", (e) => {
      e.stopPropagation();
      this._draft = e.detail.config;
      this._applyConfig(this._draft);
    });
    this._editor = ed;
    this._sStatus = h("div", { class: "s-status" });
    const cancel = h("button", { class: "s-btn", type: "button" }, "Cancel");
    const save = h("button", { class: "s-btn primary", type: "button" }, "Save");
    cancel.addEventListener("click", () => this._closeSettings(true));
    save.addEventListener("click", async () => {
      save.disabled = cancel.disabled = true;
      const ok = await this._saveSettings();
      save.disabled = cancel.disabled = false;
      if (ok) this._closeSettings(false);
    });
    this._settingsEl = h(
      "div",
      { class: "settings", role: "dialog", "aria-label": "Camera wall settings" },
      h("div", { class: "s-head" }, h("div", { class: "s-title" }, "Cameras and tabs"), cancel, save),
      h("div", { class: "s-body" }, ed),
      this._sStatus,
    );
    this.shadowRoot.querySelector("ha-card")?.append(this._settingsEl);
  }

  _closeSettings(revert) {
    this._editing = false;
    this._settingsEl?.remove();
    this._settingsEl = null;
    this._editor = null;
    if (revert) this._applyConfig(this._baseConfig);
  }

  _dashboardPath() {
    const seg = decodeURIComponent(location.pathname.split("/")[1] || "");
    return seg && seg !== "lovelace" ? seg : null;
  }

  async _saveSettings() {
    const status = (msg, err = false) => {
      this._sStatus.textContent = msg;
      this._sStatus.classList.toggle("err", err);
    };
    status("Saving…");
    const urlPath = this._dashboardPath();
    try {
      const dash = await this._hass.callWS({ type: "lovelace/config", url_path: urlPath });
      const target = JSON.stringify(this._baseConfig);
      const found = [];
      const walk = (node, parent, key) => {
        if (Array.isArray(node)) node.forEach((n, i) => walk(n, node, i));
        else if (node && typeof node === "object") {
          if (node.type === "custom:camera-wall-card") {
            found.push({ parent, key, node });
            return;
          }
          for (const k of Object.keys(node)) if (node[k] && typeof node[k] === "object") walk(node[k], node, k);
        }
      };
      walk(dash);
      const hit = found.find((f) => JSON.stringify(f.node) === target) || (found.length === 1 ? found[0] : null);
      if (!hit) throw new Error("couldn't find this card in the dashboard. Use the dashboard's own editor instead");
      const next = { ...this._draft, type: "custom:camera-wall-card" };
      hit.parent[hit.key] = next;
      await this._hass.callWS({ type: "lovelace/config/save", url_path: urlPath, config: dash });
      this._baseConfig = next;
      status("");
      return true;
    } catch (err) {
      const msg = err?.message || err?.code || String(err);
      status(/yaml|not supported|not_supported/i.test(msg) ? "This dashboard is in YAML mode, so it can't be saved from here. Edit the YAML file instead." : `Couldn't save: ${msg}`, true);
      return false;
    }
  }

  _discover() {
    return discoverCameras(this._hass, this._config);
  }

  _build() {
    const cfg = this._config;
    if (!this._hass) return;
    if (!this._cams) {
      this._cams = this._discover();
      this._sig = this._cams.map((c) => c.entity).join("|");
    }
    this._built = true;
    this._orderKey = null;
    this._dropLive();
    this._focusId = null;

    const style = h("style");
    style.textContent = STYLE;
    const card = h("ha-card");
    const top = h("div", { class: "top" });
    top.append(h("div", { class: "title" }, cfg.title || ""));
    this._tabsEl = h("div", { class: "tabs", role: "tablist" });
    top.append(this._tabsEl);
    this._chips = h("div", { class: "chips" });
    const right = h("div", { class: "right" }, this._chips);
    if (this._canEdit()) {
      const gear = h("button", { class: "gear", type: "button", title: "Choose cameras and tabs", "aria-label": "Choose cameras and tabs" });
      gear.innerHTML = iconSvg(ICON.cog);
      gear.addEventListener("click", () => this._openSettings());
      right.append(gear);
    }
    top.append(right);
    card.append(top);

    const body = h("div", { class: "body" });
    const main = h("div", { class: "main" });
    this._main = main;
    this._grid = h("div", { class: "grid" });
    if (cfg.aspect) this.style.setProperty("--cw-aspect", String(cfg.aspect).replace(":", " / "));

    this._io?.disconnect();
    this._io = new IntersectionObserver((entries) => {
      for (const en of entries) {
        const t = this._tiles.find((x) => x.el === en.target);
        if (!t) continue;
        t.visible = en.isIntersecting;
        if (t.visible && !t.loaded) this._snap(t);
      }
      this._syncLive();
    });

    this._tiles = this._cams.map((cam) => this._buildTile(cam));
    for (const t of this._tiles) {
      this._grid.append(t.el);
      this._io.observe(t.el);
    }
    if (!this._tiles.length) {
      this._grid.append(h("div", { class: "log" }, h("div", { class: "empty" }, "No cameras found. Open the card editor to pick some.")));
    }
    main.append(this._grid, this._buildFocus());
    body.append(main);

    this._logList = null;
    if (cfg.log !== false && this._tiles.some((t) => t.cam.motion.length || t.cam.ding.length || t.cam.detections.length)) {
      this._logList = h("ul");
      const log = h("div", { class: "log" }, h("h3", {}, cfg.log_title || "Activity"), this._logList);
      body.append(log);
      body.classList.add("with-log");
    }
    card.append(body);
    this.shadowRoot.replaceChildren(style, card);
    if (this._editing && this._settingsEl) card.append(this._settingsEl);

    this._renderTabs();
    this._applyTab();
    this._schedule();
    this._loadHistory();
    requestAnimationFrame(() => this._layout());
  }

  _buildTile(cam) {
    const img = h("img", { alt: "", decoding: "async", draggable: "false" });
    const live = h("span", { class: "live" }, "LIVE");
    const motionTxt = h("span", {}, "Motion");
    const motion = h("span", { class: "badge m" }, icon(ICON.motion), motionTxt);
    const ding = h("span", { class: "badge d" }, icon(ICON.bell), "Ding");
    const bat = h("span", { class: "bat" });
    const empty = h("span", { class: "empty" });
    empty.innerHTML = iconSvg(ICON.cctv);
    const emptyTxt = h("span", {}, "Loading");
    empty.append(emptyTxt);
    const ago = h("span", { class: "ago" });
    const nm = h("span", { class: "nm" }, cam.name);
    const el = h(
      "button",
      { class: "tile", type: "button", title: cam.name, "aria-label": cam.name },
      img,
      empty,
      h("span", { class: "shade" }),
      h("span", { class: "tags" }, live, motion, ding, bat),
      h("span", { class: "cap" }, nm, ago),
    );
    const t = { cam, el, img, bat, ago, nm, motionTxt, emptyTxt, label: cam.name, visible: false, loaded: false, lastMotion: null, lastDing: null, det: {} };
    img.addEventListener("load", () => {
      img.classList.add("ready");
      t.loaded = true;
    });
    img.addEventListener("error", () => {
      t.loaded = false;
      emptyTxt.textContent = "No image";
    });
    this._bindPress(el, () => this._openFocus(cam.entity), () => this._moreInfo(cam.entity));
    return t;
  }

  _buildFocus() {
    const btn = (path, label, fn) => {
      const b = h("button", { class: "btn", type: "button", title: label, "aria-label": label });
      b.innerHTML = iconSvg(path);
      b.addEventListener("click", (e) => {
        e.stopPropagation();
        this._cancelPopupTimer();
        fn();
      });
      return b;
    };
    this._fName = h("div", { class: "fname" });
    this._fMeta = h("div", { class: "fmeta" });
    this._fCount = h("span", { class: "count" });
    this._fTimer = h("span", { class: "timer" });
    this._fStream = h("div", { class: "stream" });
    this._fStream.addEventListener("pointerdown", () => this._cancelPopupTimer());
    this._focus = h(
      "div",
      { class: "focus", role: "dialog", "aria-modal": "false" },
      h(
        "div",
        { class: "bar" },
        btn(ICON.prev, "Previous camera", () => this._step(-1)),
        this._fName,
        this._fMeta,
        this._fTimer,
        this._fCount,
        btn(ICON.next, "Next camera", () => this._step(1)),
        btn(ICON.info, "Details", () => this._moreInfo(this._focusId)),
        btn(ICON.grid, "Back to all cameras", () => this._closeFocus()),
      ),
      this._fStream,
    );
    return this._focus;
  }

  _visibleTiles() {
    const byEl = new Map(this._tiles.map((t) => [t.el, t]));
    return [...this._grid.children].map((el) => byEl.get(el)).filter((t) => t && !t.el.classList.contains("hidden"));
  }

  _step(dir) {
    const list = this._visibleTiles();
    if (!list.length) return;
    const i = list.findIndex((t) => t.cam.entity === this._focusId);
    const next = list[(i + dir + list.length) % list.length];
    this._openFocus(next.cam.entity);
  }

  async _openFocus(entity, auto = false) {
    const t = this._tiles.find((x) => x.cam.entity === entity);
    if (!t) return;
    this._fire("haptic", "selection");
    this._focusId = entity;
    this._focus.classList.add("open");
    this._main.classList.add("focused");
    this._fName.textContent = t.label;
    this._renderFocusMeta();
    const list = this._visibleTiles();
    const idx = list.indexOf(t);
    this._fCount.textContent = idx >= 0 ? `${idx + 1} / ${list.length}` : "";
    clearTimeout(this._popupTimer);
    this._fTimer.textContent = "";
    if (auto) this._startPopupTimer();
    this._fitFocus();

    this._dropLive();
    this._syncLive();
    const token = (this._liveToken = {});
    let el = null;
    if (window.loadCardHelpers) {
      try {
        const helpers = await window.loadCardHelpers();
        if (token !== this._liveToken) return;
        el = helpers.createCardElement({
          type: "picture-entity",
          entity: entity,
          camera_view: "live",
          show_name: false,
          show_state: false,
          tap_action: { action: "none" },
          hold_action: { action: "none" },
        });
        el.hass = this._hass;
      } catch (err) {
        console.warn("camera-wall-card: live view unavailable, showing snapshots", err);
        el = null;
      }
    }
    if (!el) {
      el = h("img", { alt: t.label });
      el.src = this._picUrl(t.cam.snapshot) || "";
      this._fallbackTick = setInterval(() => {
        const u = this._picUrl(t.cam.snapshot);
        if (u) el.src = u;
      }, 2000);
    }
    this._live = el;
    this._fStream.replaceChildren(el);
  }

  _closeFocus() {
    clearTimeout(this._popupTimer);
    this._focusId = null;
    this._focus.classList.remove("open");
    this._main.classList.remove("focused");
    this._dropLive();
    this._syncLive();
    this._refreshAll();
  }

  _dropLive() {
    this._liveToken = null;
    clearInterval(this._fallbackTick);
    if (this._live) this._live.remove();
    this._live = null;
  }

  _startPopupTimer() {
    const secs = Number(this._config.popup_seconds ?? 60);
    if (!secs) return;
    const end = Date.now() + secs * 1000;
    const tick = () => {
      const left = Math.ceil((end - Date.now()) / 1000);
      if (left <= 0) return this._closeFocus();
      this._fTimer.textContent = `Closing in ${left}s`;
      this._popupTimer = setTimeout(tick, 1000);
    };
    tick();
  }

  _cancelPopupTimer() {
    clearTimeout(this._popupTimer);
    if (this._fTimer) this._fTimer.textContent = "";
  }

  _renderFocusMeta() {
    const t = this._tiles.find((x) => x.cam.entity === this._focusId);
    if (!t) return;
    const chips = [];
    if (t.cam.group) chips.push(h("span", { class: "chip" }, t.cam.group));
    const bat = this._battery(t.cam);
    if (bat != null) {
      const cls = bat <= 10 ? "alert" : bat <= (this._config.battery_low ?? 20) ? "warm" : "";
      chips.push(h("span", { class: `chip ${cls}` }, icon(bat <= 20 ? ICON.batteryLow : ICON.battery), `${bat}%`));
    }
    if (t.lastMotion) chips.push(h("span", { class: `chip ${this._active(t.lastMotion) ? "alert" : ""}` }, icon(ICON.motion), since(t.lastMotion)));
    if (t.lastDing) chips.push(h("span", { class: `chip ${this._active(t.lastDing) ? "ding" : ""}` }, icon(ICON.bell), since(t.lastDing)));
    this._fMeta.replaceChildren(...chips);
  }

  _groups() {
    const counts = new Map();
    for (const t of this._tiles) if (t.cam.group) counts.set(t.cam.group, (counts.get(t.cam.group) || 0) + 1);
    return [...counts.entries()];
  }

  _tabKey() {
    return `camera-wall-card:tab:${location.pathname}:${this._config.title || ""}`;
  }

  _renderTabs() {
    const views = viewList(this._config);
    const tabs = [];
    if (views) {
      const main = mainView(this._config);
      if (this._config.all_tab) tabs.push(["all", main.name, main.ids.length || this._tiles.length]);
      views.forEach((v, i) => tabs.push([`v:${i}`, v.name, v.ids.length ? this._tiles.filter((t) => v.ids.includes(t.cam.entity)).length : this._tiles.length]));
    } else {
      tabs.push(["all", mainView(this._config).name, this._tiles.length]);
      for (const [g, n] of this._groups()) tabs.push([`g:${g}`, g, n]);
    }
    if (this._tiles.some((t) => t.cam.motion.length || t.cam.ding.length)) tabs.push(["active", "Recent", null]);
    if (this._tiles.some((t) => t.cam.battery)) tabs.push(["battery", "Battery", null]);
    if (!this._tabRestored) {
      this._tabRestored = true;
      try {
        const saved = localStorage.getItem(this._tabKey());
        if (saved) this._tab = saved;
      } catch (err) {}
    }
    if (!tabs.some(([k]) => k === this._tab)) this._tab = tabs[0][0];
    if (tabs.length < 2) {
      this._tabsEl.style.display = "none";
      return;
    }
    this._tabsEl.style.display = "";
    this._tabsEl.replaceChildren(
      ...tabs.map(([key, label, n]) => {
        const b = h("button", { class: `tab${key === this._tab ? " on" : ""}`, type: "button", role: "tab", "data-k": key }, label);
        if (n != null) b.append(h("span", { class: "n" }, String(n)));
        b.addEventListener("click", () => {
          this._tab = key;
          try {
            localStorage.setItem(this._tabKey(), key);
          } catch (err) {}
          for (const x of this._tabsEl.children) x.classList.toggle("on", x.dataset.k === key);
          this._applyTab();
          this._renderLog();
          this._layout();
        });
        return b;
      }),
    );
  }

  _applyTab() {
    const tab = this._tab;
    const recent = (this._config.recent_minutes ?? 30) * 60000;
    const view = this._viewFor(tab);
    const names = new Map();
    for (const it of mainView(this._config).items) if (it?.entity && it.name) names.set(it.entity, it.name);
    for (const v of viewList(this._config) || []) for (const it of v.items) if (it?.entity && it.name && !names.has(it.entity)) names.set(it.entity, it.name);
    if (view) for (const it of view.items) if (it?.entity && it.name) names.set(it.entity, it.name);
    for (const t of this._tiles) {
      let show = true;
      if (view) show = !view.ids.length || view.ids.includes(t.cam.entity);
      else if (tab.startsWith("g:")) show = t.cam.group === tab.slice(2);
      else if (tab === "active") show = [t.lastMotion, t.lastDing].some((x) => x && Date.now() - x < recent);
      else if (tab === "battery") show = this._battery(t.cam) != null;
      t.el.classList.toggle("hidden", !show);
      const label = names.get(t.cam.entity) || t.cam.name;
      if (label !== t.label) {
        t.label = label;
        t.nm.textContent = label;
        t.el.title = label;
        t.el.setAttribute("aria-label", label);
      }
    }
    let order = this._tiles;
    if (tab === "battery") order = [...this._tiles].sort((a, b) => (this._battery(a.cam) ?? 999) - (this._battery(b.cam) ?? 999));
    else if (view?.ids.length) {
      const rank = new Map(view.ids.map((id, i) => [id, i]));
      order = [...this._tiles].sort((a, b) => (rank.get(a.cam.entity) ?? 1e6) - (rank.get(b.cam.entity) ?? 1e6));
    }
    const key = tab === "battery" ? `battery:${Date.now() >> 16}` : view ? tab : "default";
    if (key !== this._orderKey) {
      this._orderKey = key;
      this._grid.append(...order.map((t) => t.el));
    }
    this._syncLive();
  }

  _viewFor(tab) {
    if (tab.startsWith("v:")) return viewList(this._config)?.[Number(tab.slice(2))] || null;
    if (tab === "all") {
      const main = mainView(this._config);
      return main.ids.length ? main : null;
    }
    return null;
  }

  _liveWanted(t) {
    if (this._config.live === false || t.cam.live === false) return false;
    if (this._focusId || document.hidden || !t.visible || t.el.classList.contains("hidden")) return false;
    const st = this._hass?.states[t.cam.entity];
    return !!st && !DEAD_STATES.has(st.state);
  }

  async _streamReady() {
    if (customElements.get("ha-camera-stream")) return true;
    if (!this._streamLoad) {
      this._streamLoad = (async () => {
        if (!window.loadCardHelpers || !this._tiles?.length) return false;
        try {
          const helpers = await window.loadCardHelpers();
          helpers.createCardElement({ type: "picture-entity", entity: this._tiles[0].cam.entity, camera_view: "live" });
          await Promise.race([customElements.whenDefined("ha-camera-stream"), new Promise((r) => setTimeout(r, 10000))]);
        } catch (err) {
          console.warn("camera-wall-card: live streams unavailable, showing snapshots", err);
        }
        return !!customElements.get("ha-camera-stream");
      })();
    }
    return this._streamLoad;
  }

  async _syncLive() {
    if (!this._tiles || this._config.live === false) return;
    if (!(await this._streamReady())) return;
    for (const t of this._tiles) {
      const want = this._liveWanted(t);
      if (want && !t.stream) {
        const v = document.createElement("ha-camera-stream");
        v.className = "stream";
        v.hass = this._hass;
        v.stateObj = this._hass.states[t.cam.entity];
        v.muted = true;
        v.controls = false;
        v.fitMode = "cover";
        v.setAttribute("muted", "");
        t.streamState = v.stateObj;
        t.stream = v;
        t.el.insertBefore(v, t.img.nextSibling);
        t.el.classList.add("streaming");
      } else if (!want && t.stream) {
        t.stream.remove();
        t.stream = null;
        t.streamState = null;
        t.el.classList.remove("streaming");
      } else if (t.stream) {
        const st = this._hass.states[t.cam.entity];
        if (st !== t.streamState) {
          t.streamState = st;
          t.stream.hass = this._hass;
          t.stream.stateObj = st;
        }
      }
    }
  }

  _layout() {
    if (!this._grid || !this.isConnected) return;
    const cfg = this._config;
    const grid = this._grid;
    const width = grid.clientWidth;
    const vh = window.innerHeight;
    const rect = grid.getBoundingClientRect();
    const height = Math.max(240, Number(cfg.height) || vh - Math.max(0, rect.top) - 24);
    this.style.setProperty("--cw-height", `${Math.round(height)}px`);
    grid.classList.remove("fit", "fixed");
    grid.style.removeProperty("--cols");
    grid.style.removeProperty("--tile-w");
    if (cfg.columns) {
      grid.classList.add("fixed");
      grid.style.setProperty("--cols", cfg.columns);
      this._fitFocus();
      return;
    }
    const fitWanted = cfg.fit === true || (cfg.fit !== false && width >= 700);
    const n = this._visibleTiles().length;
    if (!fitWanted || !n || !width) {
      this._fitFocus();
      return;
    }
    const gap = parseFloat(getComputedStyle(grid).columnGap) || 8;
    const [aw, ah] = String(cfg.aspect || "16/9").split(/[:/]/).map(Number);
    const ratio = ah && aw ? ah / aw : 9 / 16;
    let best = { cols: 1, w: 0 };
    for (let cols = 1; cols <= n; cols++) {
      const rows = Math.ceil(n / cols);
      let w = (width - gap * (cols - 1)) / cols;
      const fitH = (height - gap * (rows - 1)) / rows;
      if (w * ratio > fitH) w = fitH / ratio;
      if (w > best.w) best = { cols, w };
    }
    const minW = Number(cfg.min_tile_width ?? 150);
    if (best.w < minW) {
      this._fitFocus();
      return;
    }
    grid.classList.add("fit");
    grid.style.setProperty("--cols", best.cols);
    grid.style.setProperty("--tile-w", `${Math.floor(best.w)}px`);
    this._fitFocus();
  }

  _fitFocus() {
    if (!this._focus || !this._main) return;
    const gridH = this._grid.offsetHeight;
    const want = Math.min(Number(this.style.getPropertyValue("--cw-height").replace("px", "")) || 600, window.innerHeight - 40);
    this._main.style.minHeight = this._focusId ? `${Math.max(gridH, Math.min(want, 820), 320)}px` : "";
  }

  _schedule() {
    clearInterval(this._snapTick);
    if (!this._tiles?.length || !this.isConnected) return;
    const total = Math.max(2, Number(this._config.refresh) || 20) * 1000;
    const step = Math.max(150, total / this._tiles.length);
    this._cursor = 0;
    this._snapTick = setInterval(() => {
      if (document.hidden || this._focusId) return;
      const n = this._tiles.length;
      for (let i = 0; i < n; i++) {
        const t = this._tiles[(this._cursor + i) % n];
        if (t.visible && !t.stream && !t.el.classList.contains("hidden")) {
          this._cursor = (this._cursor + i + 1) % n;
          this._snap(t);
          return;
        }
      }
    }, step);
  }

  _picUrl(entity) {
    const pic = this._hass?.states[entity]?.attributes.entity_picture;
    if (!pic) return null;
    const url = this._hass.hassUrl ? this._hass.hassUrl(pic) : pic;
    return `${url}${url.includes("?") ? "&" : "?"}_t=${Date.now()}`;
  }

  _snap(t, useFallback = false) {
    const src = useFallback ? t.cam.fallback : t.cam.snapshot;
    if (!src || t.pending) return;
    const tryFallback = () => {
      if (!useFallback && t.cam.fallback && !t.loaded) this._snap(t, true);
      else if (!t.loaded) t.emptyTxt.textContent = "No image";
    };
    const st = this._hass?.states[src];
    if (!st || DEAD_STATES.has(st.state)) return tryFallback();
    const url = this._picUrl(src);
    if (!url) return tryFallback();
    const pre = new Image();
    pre.decoding = "async";
    t.pending = pre;
    const finish = () => {
      if (t.pending !== pre) return false;
      clearTimeout(timer);
      t.pending = null;
      return true;
    };
    const timer = setTimeout(() => {
      if (!finish()) return;
      pre.onload = pre.onerror = null;
      pre.src = "";
      tryFallback();
    }, (this._config.snapshot_timeout ?? 12) * 1000);
    pre.onload = () => {
      if (finish()) t.img.src = pre.src;
    };
    pre.onerror = () => {
      if (finish()) tryFallback();
    };
    pre.src = url;
  }

  _refreshAll() {
    if (!this._tiles) return;
    this._tiles.forEach((t, i) => {
      if (t.visible) setTimeout(() => this._snap(t), i * 60);
    });
  }

  _lastTime(ids) {
    let best = null;
    for (const id of ids) {
      const st = this._hass.states[id];
      if (!st) continue;
      let t = null;
      if (id.startsWith("event.")) t = parseTime(st.state);
      else if (id.startsWith("binary_sensor.")) t = st.state === "on" ? Date.now() : parseTime(st.last_changed);
      if (t && (!best || t > best)) best = t;
    }
    return best;
  }

  _active(t) {
    return t != null && Date.now() - t < (this._config.motion_seconds ?? 90) * 1000;
  }

  _battery(cam) {
    if (!cam.battery) return null;
    const v = parseFloat(this._hass.states[cam.battery]?.state);
    return Number.isFinite(v) ? Math.round(v) : null;
  }

  _update(first = false) {
    if (!this._built || !this._hass || !this._tiles) return;
    const hass = this._hass;
    let online = 0;
    let motionNow = 0;
    let dingNow = 0;
    let lowBat = 0;
    const lowAt = this._config.battery_low ?? 20;
    for (const t of this._tiles) {
      const st = hass.states[t.cam.entity];
      const missing = !st;
      const dead = !missing && DEAD_STATES.has(st.state);
      if (!missing && !dead) online++;
      t.el.classList.toggle("missing", missing);
      t.el.classList.toggle("dead", dead);
      if (missing) t.emptyTxt.textContent = "Not found";
      else if (dead) t.emptyTxt.textContent = "Offline";
      else if (!t.loaded) t.emptyTxt.textContent = "Loading";

      const m = this._lastTime(t.cam.motion);
      const d = this._lastTime(t.cam.ding);
      if (m && t.lastMotion && m > t.lastMotion) {
        this._push({ ts: m, kind: "motion", cam: t.cam });
        if (t.visible) this._snap(t);
      }
      if (d && t.lastDing && d > t.lastDing) {
        this._push({ ts: d, kind: "ding", cam: t.cam });
        if (this._config.ding_popup !== false && !first) {
          if (!this._focusId || this._fTimer.textContent) this._openFocus(t.cam.entity, true);
        }
      }
      if (m && !t.lastMotion && !first && this._historyLoaded && Date.now() - m < 120000) this._push({ ts: m, kind: "motion", cam: t.cam });
      if (d && !t.lastDing && !first && this._historyLoaded && Date.now() - d < 120000) this._push({ ts: d, kind: "ding", cam: t.cam });
      t.lastMotion = m;
      t.lastDing = d;

      const hits = [];
      for (const id of t.cam.detections) {
        const on = hass.states[id]?.state === "on";
        if (on) hits.push(detectLabel(id, hass));
        if (on && t.det[id] === false && !first) this._push({ ts: Date.now(), kind: "motion", label: detectLabel(id, hass), cam: t.cam });
        t.det[id] = on;
      }
      t.motionTxt.textContent = hits.length ? [...new Set(hits)].join(" · ") : "Motion";
      const mOn = this._active(m) || hits.length > 0;
      const dOn = this._active(d);
      if (mOn) motionNow++;
      if (dOn) dingNow++;
      t.el.classList.toggle("motion", mOn && !dead);
      t.el.classList.toggle("ding", dOn && !dead);
      const latest = Math.max(m || 0, d || 0);
      t.ago.textContent = latest ? since(latest) : "";
      t.ago.title = latest ? `Last ${d && d >= (m || 0) ? "ding" : "motion"} ${new Date(latest).toLocaleString()}` : "";

      const b = this._battery(t.cam);
      t.bat.className = "bat";
      if (b != null && b <= (this._config.show_battery_below ?? 100)) {
        t.bat.classList.add("show");
        if (b <= 10) t.bat.classList.add("crit");
        else if (b <= lowAt) t.bat.classList.add("low");
        if (b <= lowAt) lowBat++;
        t.bat.replaceChildren(icon(b <= lowAt ? ICON.batteryLow : ICON.battery), `${b}%`);
      }
    }

    const total = this._tiles.length;
    const chips = [];
    const chip = (cls, path, text, tab) => {
      const c = h("button", { class: `chip ${cls}`, type: "button" }, icon(path), text);
      c.addEventListener("click", () => {
        const btn = [...this._tabsEl.children].find((x) => x.dataset.k === tab);
        btn?.click();
      });
      return c;
    };
    if (total) chips.push(chip(online === total ? "ok" : "alert", online === total ? ICON.cctv : ICON.offline, online === total ? `${total} online` : `${total - online} offline`, "all"));
    if (dingNow) chips.push(chip("ding", ICON.bell, `Ding ${dingNow}`, "active"));
    if (motionNow) chips.push(chip("cool", ICON.motion, `Motion ${motionNow}`, "active"));
    if (lowBat) chips.push(chip("warm", ICON.batteryLow, `${lowBat} low`, "battery"));
    this._chips.replaceChildren(...chips);

    if (this._tab === "active") this._applyTab();
    if (this._focusId) this._renderFocusMeta();
    if (this._logList) this._renderLog();
    this._syncLive();
  }

  _push(e) {
    const key = `${e.cam.entity}|${e.kind}|${e.label || ""}|${Math.round(e.ts / 1000)}`;
    this._seenEvents = this._seenEvents || new Set();
    if (this._seenEvents.has(key)) return;
    this._seenEvents.add(key);
    this._events.push(e);
    this._events.sort((a, b) => b.ts - a.ts);
    this._events.length = Math.min(this._events.length, this._config.log_max ?? 80);
  }

  async _loadHistory() {
    if (this._historyLoaded || !this._logList || !this._hass.callApi) {
      this._historyLoaded = true;
      return;
    }
    const byId = new Map();
    for (const t of this._tiles) {
      for (const id of t.cam.motion) byId.set(id, { cam: t.cam, kind: "motion" });
      for (const id of t.cam.ding) byId.set(id, { cam: t.cam, kind: "ding" });
      for (const id of t.cam.detections) byId.set(id, { cam: t.cam, kind: "motion", label: detectLabel(id, this._hass) });
    }
    const ids = [...byId.keys()];
    if (!ids.length) return;
    const hours = this._config.log_hours ?? 24;
    const start = new Date(Date.now() - hours * 3600000);
    const chunks = [];
    for (let i = 0; i < ids.length; i += 40) chunks.push(ids.slice(i, i + 40));
    try {
      const results = await Promise.all(
        chunks.map((c) => this._hass.callApi("GET", `history/period/${start.toISOString()}?filter_entity_id=${c.join(",")}&minimal_response&no_attributes`)),
      );
      for (const series of results.flat()) {
        if (!series?.length) continue;
        const id = series[0].entity_id;
        const info = byId.get(id);
        if (!info) continue;
        let prev = null;
        for (const row of series) {
          let ts = null;
          if (id.startsWith("event.")) ts = parseTime(row.state);
          else if (row.state === "on" && prev !== "on") ts = parseTime(row.last_changed);
          prev = row.state;
          if (ts && ts >= start.getTime()) this._push({ ts, kind: info.kind, label: info.label, cam: info.cam });
        }
      }
    } catch (err) {
      console.warn("camera-wall-card: could not load history", err);
    }
    for (const [id, info] of byId) {
      const ts = id.startsWith("event.") ? parseTime(this._hass.states[id]?.state) : null;
      if (ts && ts >= start.getTime()) this._push({ ts, kind: info.kind, cam: info.cam });
    }
    this._historyLoaded = true;
    this._renderLog();
  }

  _renderLog() {
    if (!this._logList) return;
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    const dayName = (ms) => {
      const d = new Date(ms);
      if (d.toDateString() === today) return "Today";
      if (d.toDateString() === yesterday) return "Yesterday";
      return d.toLocaleDateString([], { weekday: "long", month: "short", day: "numeric" });
    };
    const items = [];
    let lastDay = null;
    const view = this._viewFor(this._tab || "");
    const only = view?.ids.length ? new Set(view.ids) : null;
    for (const e of this._events) {
      if (only && !only.has(e.cam.entity)) continue;
      const day = dayName(e.ts);
      if (day !== lastDay) {
        items.push(h("li", { class: "day" }, day));
        lastDay = day;
      }
      const dot = h("span", { class: "dot" });
      dot.innerHTML = iconSvg(e.kind === "ding" ? ICON.bell : ICON.motion);
      const btn = h(
        "button",
        { class: `item ${e.kind}`, type: "button" },
        dot,
        h("span", { class: "txt" }, `${e.kind === "ding" ? "Doorbell" : e.label || "Motion"} at ${this._labelFor(e.cam)}`),
        h("span", { class: "when", title: new Date(e.ts).toLocaleString() }, Date.now() - e.ts < 3600000 ? since(e.ts) : new Date(e.ts).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })),
      );
      btn.addEventListener("click", () => this._openFocus(e.cam.entity));
      items.push(h("li", {}, btn));
    }
    if (!items.length) items.push(h("li", { class: "empty" }, this._historyLoaded ? "Nothing yet" : "Loading"));
    this._logList.replaceChildren(...items);
  }

  _labelFor(cam) {
    return this._tiles?.find((t) => t.cam.entity === cam.entity)?.label || cam.name;
  }

  _bindPress(el, onTap, onHold) {
    let timer = null;
    let held = false;
    el.addEventListener("pointerdown", () => {
      held = false;
      timer = setTimeout(() => {
        held = true;
        onHold();
      }, 500);
    });
    const cancel = () => clearTimeout(timer);
    el.addEventListener("pointerup", cancel);
    el.addEventListener("pointerleave", cancel);
    el.addEventListener("pointercancel", cancel);
    el.addEventListener("contextmenu", (e) => e.preventDefault());
    el.addEventListener("click", (e) => {
      if (held) {
        e.preventDefault();
        return;
      }
      onTap();
    });
  }

  _moreInfo(entityId) {
    if (!entityId) return;
    this._fire("haptic", "selection");
    this._fire("hass-more-info", { entityId });
  }

  _fire(type, detail) {
    this.dispatchEvent(new CustomEvent(type, { detail, bubbles: true, composed: true }));
  }
}

const EDITOR_STYLE = `
:host { display: block; }
.row { display: flex; align-items: center; gap: 8px; margin: 0 0 12px; flex-wrap: wrap; }
label.field { display: flex; flex-direction: column; gap: 4px; flex: 1; min-width: 160px; font-size: 12px; color: var(--secondary-text-color); }
input[type=text], input[type=number], input[type=search] {
  box-sizing: border-box; width: 100%; padding: 8px 10px; border-radius: 6px; font: inherit; font-size: 14px;
  border: 1px solid var(--divider-color, #444); background: var(--card-background-color, #1c1c1c); color: var(--primary-text-color);
}
h4 { margin: 18px 0 6px; font-size: 14px; font-weight: 600; }
p.hint { margin: 0 0 10px; font-size: 12px; color: var(--secondary-text-color); }
.view { border: 1px solid var(--divider-color, #444); border-radius: 10px; padding: 10px; margin-bottom: 10px; }
.view-head { display: flex; gap: 8px; align-items: flex-end; margin-bottom: 8px; }
.view-head label.field { min-width: 0; }
button {
  padding: 7px 12px; border-radius: 6px; border: 1px solid var(--divider-color, #444); background: none;
  color: var(--primary-text-color); font: inherit; font-size: 13px; cursor: pointer; white-space: nowrap;
}
button.primary { background: var(--primary-color); border-color: var(--primary-color); color: var(--text-primary-color, #fff); }
button.danger { color: var(--error-color, #db4437); }
button:disabled { opacity: 0.4; cursor: default; }
.tools { display: flex; gap: 6px; align-items: center; margin-bottom: 6px; }
.tools input { flex: 1; }
.count { font-size: 12px; color: var(--secondary-text-color); white-space: nowrap; }
.list { display: grid; grid-template-columns: repeat(auto-fill, minmax(170px, 1fr)); gap: 2px 10px; max-height: 280px; overflow-y: auto; padding: 2px; }
.list label { display: flex; align-items: center; gap: 6px; padding: 4px 2px; font-size: 13px; cursor: pointer; min-width: 0; }
.list label span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.list label small { color: var(--secondary-text-color); font-size: 11px; margin-left: auto; }
.sub { margin: 10px 0 6px; font-size: 12px; font-weight: 600; color: var(--secondary-text-color); text-transform: uppercase; letter-spacing: 0.06em; }
.chosen { display: flex; flex-direction: column; gap: 4px; }
.cam-row { display: flex; align-items: center; gap: 6px; }
.cam-row .num { width: 18px; text-align: right; font-size: 12px; color: var(--secondary-text-color); }
.cam-name { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
.cam-name small { font-size: 11px; color: var(--secondary-text-color); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.cam-row button { padding: 6px 9px; }
.cam-name small.links { white-space: normal; opacity: 0.85; }
.check { display: flex; align-items: center; gap: 8px; font-size: 14px; margin: 6px 0; cursor: pointer; }
`;

class CameraWallCardEditor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._filters = {};
  }

  setConfig(config) {
    this._config = JSON.parse(JSON.stringify(config || {}));
    if (JSON.stringify(config) !== this._sent) this._render();
  }

  set hass(hass) {
    const first = !this._hass;
    this._hass = hass;
    if (first) this._render();
  }

  _options() {
    const cfg = { ...this._config, views: undefined, cameras: undefined, exclude: undefined, discover: undefined };
    let cams = discoverCameras(this._hass, cfg, true);
    if (!cams.length) {
      cams = Object.keys(this._hass.states)
        .filter((id) => id.startsWith("camera."))
        .map((id) => resolveCamera(this._hass, cfg, { entity: id }));
    }
    const known = new Set(cams.map((c) => c.entity));
    for (const v of this._config.views || []) {
      for (const c of [].concat(v.cameras || [])) {
        const id = typeof c === "string" ? c : c?.entity;
        if (id && !known.has(id)) {
          known.add(id);
          cams.push(resolveCamera(this._hass, cfg, { entity: id }));
        }
      }
    }
    return cams;
  }

  _emit() {
    const config = JSON.parse(JSON.stringify(this._config));
    if (Array.isArray(config.views) && !config.views.length) delete config.views;
    this._sent = JSON.stringify(config);
    this.dispatchEvent(new CustomEvent("config-changed", { detail: { config }, bubbles: true, composed: true }));
  }

  _set(key, value) {
    if (value === "" || value == null) delete this._config[key];
    else this._config[key] = value;
    this._emit();
  }

  _render() {
    if (!this._hass || !this._config) return;
    const style = h("style");
    style.textContent = EDITOR_STYLE;
    const root = h("div");
    const cams = this._options();
    const views = Array.isArray(this._config.views) ? this._config.views : [];

    const title = h("input", { type: "text", value: this._config.title ?? "Cameras" });
    title.addEventListener("change", () => this._set("title", title.value));
    root.append(h("div", { class: "row" }, h("label", { class: "field" }, "Title", title)));

    root.append(h("h4", {}, "Main tab"));
    root.append(this._renderView({ name: this._config.all_name || "", cameras: this._config.cameras }, -1, views, cams));
    root.append(h("h4", {}, "Property tabs"));
    root.append(
      h(
        "p",
        { class: "hint" },
        views.length
          ? "Each one is a tab across the top of the card. Name it after the property, pick its cameras, give them your own names and put them in order."
          : `No property tabs yet. Add one per property to pick its cameras and name them.`,
      ),
    );
    views.forEach((v, i) => root.append(this._renderView(v, i, views, cams)));
    const add = h("button", { class: "primary", type: "button" }, "Add property tab");
    add.addEventListener("click", () => {
      this._config.views = [...views, { name: `Property ${views.length + 1}`, cameras: [] }];
      this._emit();
      this._render();
    });
    root.append(h("div", { class: "row" }, add));

    root.append(h("h4", {}, "Options"));
    root.append(this._check("ding_popup", "Open a camera live when its doorbell rings", true));
    root.append(this._check("log", "Activity feed", true));
    root.append(this._check("live", "Live video in the grid (off shows refreshing snapshots)", true));
    const refresh = h("input", { type: "number", min: "2", step: "1", value: this._config.refresh ?? 20 });
    refresh.addEventListener("change", () => this._set("refresh", refresh.value ? Number(refresh.value) : null));
    const cols = h("input", { type: "number", min: "1", step: "1", value: this._config.columns ?? "", placeholder: "Auto" });
    cols.addEventListener("change", () => this._set("columns", cols.value ? Number(cols.value) : null));
    root.append(
      h(
        "div",
        { class: "row" },
        h("label", { class: "field" }, "Seconds to refresh every snapshot", refresh),
        h("label", { class: "field" }, "Columns", cols),
      ),
    );
    this.shadowRoot.replaceChildren(style, root);
  }

  _check(key, text, def) {
    const box = h("input", { type: "checkbox" });
    box.checked = this._config[key] ?? def;
    box.addEventListener("change", () => this._set(key, box.checked === def ? null : box.checked));
    return h("label", { class: "check" }, box, text);
  }

  _links(cam) {
    if (!cam) return "";
    const describe = (id) => {
      const st = this._hass.states[id];
      if (!st) return `${id} (missing)`;
      if (id.startsWith("event.")) {
        const t = parseTime(st.state);
        return `${id} (${t ? `last ${since(t)}${since(t) === "just now" ? "" : " ago"}` : "never fired"})`;
      }
      return `${id} (${st.state}, ${since(Date.parse(st.last_changed))})`;
    };
    const part = (label, ids) => `${label}: ${ids.length ? ids.map(describe).join(", ") : "none found"}`;
    const out = [part("Motion", cam.motion)];
    if (cam.ding.length || cam.platform === "ring") out.push(part("Doorbell", cam.ding));
    if (cam.detections.length) out.push(`Detections: ${cam.detections.length}`);
    return out.join(" · ");
  }

  _renderView(view, i, views, cams) {
    const isMain = i < 0;
    const byId = new Map(cams.map((c) => [c.entity, c]));
    const items = () => [].concat(view.cameras || []).map((c) => (typeof c === "string" ? { entity: c } : { ...c })).filter((c) => c.entity);
    const store = (list) => {
      view.cameras = list.map((c) => (c.name || c.live === false ? c : c.entity));
      if (isMain) {
        if (view.cameras.length) this._config.cameras = view.cameras;
        else delete this._config.cameras;
      } else {
        views[i] = view;
        this._config.views = [...views];
      }
      this._emit();
    };
    const rerender = () => this._render();

    const name = h("input", { type: "text", value: view.name || "", placeholder: isMain ? "All" : "e.g. Main House" });
    name.addEventListener("change", () => {
      if (isMain) {
        const v = name.value.trim();
        if (v && v !== "All") this._config.all_name = v;
        else delete this._config.all_name;
        this._emit();
        return;
      }
      view.name = name.value;
      store(items());
    });
    const left = h("button", { type: "button", title: "Move tab left" }, "←");
    const right = h("button", { type: "button", title: "Move tab right" }, "→");
    left.disabled = i === 0;
    right.disabled = i === views.length - 1;
    const move = (d) => {
      const next = [...views];
      [next[i], next[i + d]] = [next[i + d], next[i]];
      this._config.views = next;
      this._emit();
      rerender();
    };
    left.addEventListener("click", () => move(-1));
    right.addEventListener("click", () => move(1));
    const remove = h("button", { class: "danger", type: "button" }, "Remove");
    remove.addEventListener("click", () => {
      this._config.views = views.filter((_, k) => k !== i);
      this._emit();
      rerender();
    });

    const chosen = h("div", { class: "chosen" });
    const list = items();
    if (!list.length) chosen.append(h("p", { class: "hint" }, isMain ? "Nothing picked, so this tab shows every camera. Tick cameras below to choose which ones it shows." : "No cameras picked yet, so this tab shows every camera. Tick some below."));
    list.forEach((it, k) => {
      const cam = byId.get(it.entity);
      const input = h("input", { type: "text", value: it.name || "", placeholder: cam?.name || it.entity });
      input.addEventListener("change", () => {
        const cur = items();
        cur[k].name = input.value.trim() || undefined;
        if (!cur[k].name) delete cur[k].name;
        store(cur);
      });
      const shift = (d) => {
        const cur = items();
        [cur[k], cur[k + d]] = [cur[k + d], cur[k]];
        store(cur);
        rerender();
      };
      const up = h("button", { type: "button", title: "Move up" }, "↑");
      const down = h("button", { type: "button", title: "Move down" }, "↓");
      up.disabled = k === 0;
      down.disabled = k === list.length - 1;
      up.addEventListener("click", () => shift(-1));
      down.addEventListener("click", () => shift(1));
      const del = h("button", { class: "danger", type: "button", title: "Remove from this tab" }, "✕");
      del.addEventListener("click", () => {
        store(items().filter((_, x) => x !== k));
        rerender();
      });
      chosen.append(
        h(
          "div",
          { class: "cam-row" },
          h("span", { class: "num" }, String(k + 1)),
          h(
            "div",
            { class: "cam-name" },
            input,
            h("small", {}, `${it.entity}${cam?.platform ? ` · ${PLATFORM_NAMES[cam.platform] || cam.platform}` : ""}`),
            h("small", { class: "links" }, this._links(cam)),
          ),
          up,
          down,
          del,
        ),
      );
    });

    const count = h("span", { class: "count" }, list.length ? `${list.length} picked` : "All cameras");
    const search = h("input", { type: "search", placeholder: "Search cameras", value: this._filters[i] || "" });
    const picker = h("div", { class: "list" });
    const picked = new Set(list.map((c) => c.entity));
    const rows = cams.map((c) => {
      const box = h("input", { type: "checkbox" });
      box.checked = picked.has(c.entity);
      box.addEventListener("change", () => {
        const cur = items();
        store(box.checked ? [...cur, { entity: c.entity }] : cur.filter((x) => x.entity !== c.entity));
        rerender();
      });
      const tag = PLATFORM_NAMES[c.platform] || c.group || "";
      const row = h("label", { title: c.entity }, box, h("span", {}, c.name), tag ? h("small", {}, tag) : null);
      row.dataset.q = `${c.name} ${c.entity} ${c.group || ""} ${tag}`.toLowerCase();
      return row;
    });
    const filter = () => {
      const q = search.value.trim().toLowerCase();
      this._filters[i] = search.value;
      for (const r of rows) r.style.display = !q || r.dataset.q.includes(q) ? "" : "none";
    };
    search.addEventListener("input", filter);
    picker.append(...rows);
    filter();
    const tickAll = h("button", { type: "button" }, "Tick shown");
    tickAll.addEventListener("click", () => {
      const cur = items();
      const have = new Set(cur.map((c) => c.entity));
      cams.forEach((c, k) => {
        if (rows[k].style.display !== "none" && !have.has(c.entity)) cur.push({ entity: c.entity });
      });
      store(cur);
      rerender();
    });
    const clear = h("button", { type: "button" }, "Clear");
    clear.addEventListener("click", () => {
      store([]);
      rerender();
    });

    return h(
      "div",
      { class: "view" },
      isMain
        ? h("div", { class: "view-head" }, h("label", { class: "field" }, "Main tab name", name), views.length ? this._check("all_tab", "Show this tab", false) : null)
        : h("div", { class: "view-head" }, h("label", { class: "field" }, "Tab name", name), left, right, remove),
      h("div", { class: "sub" }, "Cameras on this tab"),
      chosen,
      h("div", { class: "sub" }, "Add cameras"),
      h("div", { class: "tools" }, search, tickAll, clear, count),
      picker,
    );
  }
}

customElements.define("camera-wall-card", CameraWallCard);
customElements.define("camera-wall-card-editor", CameraWallCardEditor);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "camera-wall-card",
  name: "Camera Wall",
  description: "Every camera on one screen with motion, doorbell and battery status, and a tap-to-live view.",
  preview: false,
});

console.info(`%c CAMERA-WALL-CARD %c ${VERSION} `, "background:#3d8bff;color:#fff;border-radius:3px 0 0 3px", "background:#121418;color:#a9dcef;border-radius:0 3px 3px 0");
