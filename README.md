# Camera Wall Card

Every Ring and UniFi Protect camera on one screen, in the same style as the [Home View Card](https://github.com/iambrayden/haos-home-view).

- Finds all your Ring and UniFi Protect cameras by itself, one tile per camera.
- Live video in every tile. Only the tiles on screen in the open tab stream.
- Views: one tab per property (or however you like to group them), each with its own cameras, order and names. Set them up in the visual editor.
- Fits every camera on screen without scrolling (30 cameras fit on a 1080p wall display). Phones get a scrolling two-column grid.
- Tabs for each Home Assistant area, plus **Recent** (motion or a ding in the last 30 minutes) and **Battery** (lowest first).
- Motion outlines the tile in red with a "Motion" tag, or what UniFi Protect detected ("Person · Vehicle"). A doorbell press makes it pulse and opens that camera live for 60 seconds.
- Battery level on every battery camera, amber at 20% and red at 10%.
- Offline cameras show greyed out with a dashed border.
- Tap a tile for the live stream. Use the arrows or the ← → keys to step through cameras, and Esc to go back. Long-press opens the normal Home Assistant dialog.
- Activity feed of motion and doorbell events from the last 24 hours. Tap one to open that camera.
- Status chips: cameras offline, doorbells ringing, motion right now, low batteries.

![screenshot](docs/screenshot.png)

## Install

### HACS

1. HACS → three dots → Custom repositories → add this repo as type **Dashboard**.
2. Install **Camera Wall Card**, then reload the browser.

### Manual

1. Copy `camera-wall-card.js` to `/config/www/camera-wall-card.js`.
2. Settings → Dashboards → three dots → Resources → Add resource:
   - URL: `/local/camera-wall-card.js`
   - Type: JavaScript module
3. Reload the browser.

## Dashboard

1. Settings → Dashboards → **Add dashboard** → New dashboard from scratch. Call it `Cameras`.
2. Open it, three dots → Edit dashboard → three dots → **Raw configuration editor**.
3. Paste [`examples/cameras-dashboard.yaml`](examples/cameras-dashboard.yaml) and save.

The view uses `panel: true` so the wall gets the full width.

To jump here from the Home View, give a camera a tap action:

```yaml
tap_action:
  action: navigate
  navigation_path: /dashboard-cameras/live
```

## Setup

With only this line the card picks up every camera from Ring and UniFi Protect, with each one's motion, doorbell, detection and battery sensors:

```yaml
type: custom:camera-wall-card
```

### Tabs and cameras

Press the gear in the top right of the card (admins only). It opens a panel where you can:

- Rename the **main tab** and pick which cameras it shows.
- Add a **property tab** for each property, name it, and pick its cameras.
- Switch a tab to **Rename & order** to rename a camera with its ✎ button and move it with the arrows.

Changes show on the card as you make them. **Save** writes them to the dashboard so every device gets them. **Cancel** puts everything back. The same editor is also in the dashboard's own card editor.

In **Rename & order**, tick **Show linked motion and doorbell sensors** to see which entities each camera is linked to and when they last fired. If the activity feed stays empty, look there first.

The YAML it writes looks like this:

```yaml
type: custom:camera-wall-card
all_name: Overview
all_tab: true
cameras:
  - camera.front_door_live_view
  - camera.dock_high_resolution_channel
views:
  - name: Main House
    cameras:
      - entity: camera.front_door_live_view
        name: Porch
      - camera.driveway_live_view
  - name: Lake House
    cameras:
      - entity: camera.dock_high_resolution_channel
        name: Boat Dock
      - camera.lake_driveway_high_resolution_channel
```

A view with no cameras shows all of them. The card remembers the last tab you had open on each device. The activity feed follows the tab.

Without views, tabs come from the area each device is assigned to.

To leave cameras out of discovery:

```yaml
exclude:
  - camera.test_cam_live_view
```

## Options

| Option | Default | Description |
| --- | --- | --- |
| `title` | `Cameras` | Card heading |
| `views` | | Tabs, each `{name, cameras}`. Cameras are entity IDs or `{entity, name, live}`. |
| `all_name` | `All` | Name of the main tab |
| `all_tab` | `false` | With views, also show the main tab |
| `edit_button` | `true` | Show the gear for admins |
| `live` | `true` | Live video in the tiles. `false` shows snapshots that refresh in rotation. |
| `cameras` | | Cameras on the main tab: entity IDs or `{entity, name, group, motion, ding, detections, battery, snapshot, live}`. Leave out to show all. |
| `exclude` | | Cameras to skip |
| `platform` | `[ring, unifiprotect]` | Integrations to discover from. Set `false` to turn discovery off. |
| `discover` | `false` | With `cameras:` set, also add every discovered camera after them |
| `include_last_recording` | `false` | Also show Ring's `_last_recording` cameras |
| `snapshot_timeout` | `12` | Seconds to wait for a snapshot before falling back to the last recording |
| `groups` | `true` | Tabs from areas. `false` to turn off. |
| `refresh` | `20` | Seconds to cycle through all snapshots. Requests are spread out, so 30 cameras at 20s is one request about every 0.7s. |
| `fit` | `auto` | Fit every tile on screen. `auto` does this on screens 700px and wider. `true` always, `false` never. |
| `columns` | | Fixed number of columns instead of fitting |
| `height` | | Height in px to fit into. Defaults to what's left of the browser window. |
| `min_tile_width` | `150` | Below this the grid scrolls instead of shrinking further |
| `aspect` | `16/9` | Tile shape |
| `motion_seconds` | `90` | How long a tile stays red after a motion or ding event |
| `recent_minutes` | `30` | Window for the **Recent** tab |
| `ding_popup` | `true` | Open a camera live when its doorbell rings |
| `popup_seconds` | `60` | Close that pop-up after this long. Touching it keeps it open. `0` keeps it open. |
| `battery_low` | `20` | Battery % that counts as low |
| `show_battery_below` | `100` | Only show the battery tag at or below this % |
| `log` | `true` | Activity feed. Sits to the right on wide screens and below on narrow ones. |
| `log_title` | `Activity` | Heading for the feed |
| `log_hours` | `24` | How far back to load history |
| `log_max` | `80` | Most entries to keep |

## Live video

Each tile streams through Home Assistant the same way a picture card does. UniFi Protect streams locally, so many at once are fine. Ring streams come from Ring's cloud on demand: battery cameras drain faster while streaming and Ring may refuse some streams if too many open at once. Splitting cameras into views keeps the count down, since only the open tab streams. Streams also stop while a camera is open full size or the browser tab is in the background.

To turn streaming off for one camera, use `{entity: ..., live: false}`. To turn it off everywhere, set `live: false`.

When a tile isn't streaming it shows a snapshot. If Ring's live snapshot doesn't arrive within 12 seconds the tile shows the last recording instead.

## Theming

Same variables as the Home View Card:

```
--hv-bg  --hv-text  --hv-muted  --hv-accent  --hv-closed  --hv-open  --hv-warm  --hv-cool
--hv-log-width  --cw-gap  --cw-min-width  --cw-aspect
```

## Demo

`demo/index.html` runs the card with 30 fake Ring cameras and 4 UniFi Protect cameras. Motion fires every few seconds. Add `?props` for four property views, `?editor` for the editor, or `?ding` to see a doorbell press.

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000/demo/.
