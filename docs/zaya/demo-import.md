---
sidebar_position: 6
---
# Demo Import
## Understanding Zaya Starter Demos

Zaya includes multiple professionally designed starter demos to help you quickly build different types of websites.

Each starter demo is more than just a homepage layout. A demo includes its own:

- Homepage design
- Global styles
- Typography
- Colors
- Navigation menu
- Template customization
- Custom CSS

Because of this, starter demos are designed to work as a complete website style system.

---

## Available Starter Demos

Zaya currently includes 4 starter demos:

- Zaya (Default)
- Clara
- Daniel
- Amelia

Each demo has its own unique design style and homepage layout.

---

## Important: Starter Demos Cannot Coexist

:::warning
Zaya starter demos are not designed to run together at the same time.
:::

When you import a new demo:

- The new demo styles become active
- Navigation menus are updated
- Template customizations are changed
- Global styling is updated

Previous pages and content are **not deleted**, but they may no longer display correctly because the active design system has changed.

### Example

If you import the **Clara** demo and later import the **Daniel** demo:

- The Clara homepage still exists
- But Clara styles may no longer look correct
- Daniel styles and template customizations are now active

If you want to return to Clara, simply import the Clara demo again.

---

## What Happens During Demo Import?

| Feature | What Happens |
|---|---|
| Demo Content | Imported |
| Homepage | Imported |
| Navigation Menu | Replaced with demo menu |
| Global Styles | Updated to selected demo |
| Template Customization | Updated |
| Custom CSS | Updated |
| Media Files | Added only, not removed |
| Existing Posts/Pages | Preserved |
| Existing Images | Preserved |
| Existing Site Content | Not deleted |

:::info
Zaya does not remove your existing content during demo import.
:::

---

## Recommended Workflow (Best Practice)

For the best experience, we strongly recommend this workflow:

1. Install WordPress on a fresh website
2. Install and activate Zaya
3. Choose **ONE** starter demo
4. Import the demo
5. Customize the content

This ensures the demo works exactly as intended.

---

## Can I Import Multiple Demos?

Technically, yes.

However, importing multiple demos on the same website is **not recommended** because each demo uses different:

- Global styles
- Template customizations
- Navigation structures
- Custom CSS

The most recently imported demo becomes the active website style.

---

## Returning to a Previous Demo

You can switch back to a previous demo at any time by importing that demo again.

For example:

- Import Clara
- Import Daniel
- Import Clara again

After re-importing Clara:

- Clara styles become active again
- Clara navigation returns
- Clara template customization is restored

---

## Using Demos on Existing Websites

You can import Zaya starter demos on an existing website.

However, please understand:

- Existing content is not deleted
- Existing media is not removed
- Global styles and templates will change
- Navigation menus may be replaced

:::tip
Always create a full backup before importing a starter demo on a live website.
:::

---

## Frequently Asked Questions

### My homepage looks broken after importing another demo

This usually happens because the newly imported demo replaced the previous demo’s:

- Global styles
- Template customization
- Custom CSS

#### Solution

- Re-import the previous demo
- Or rebuild the page using the currently active demo style

---

### Why did my navigation menu change?

Each starter demo includes its own navigation menu.

Importing a new demo replaces the current navigation setup.

---

### Did Zaya delete my content?

No.

Zaya does not remove:

- Posts
- Pages
- Images
- Media files

during demo import.

---

### Can I combine sections from different demos?

Yes, but manually.

You can copy blocks or sections between pages, but starter demos themselves are not designed to work together as complete site styles.

---

## Best Practices

To avoid styling conflicts and unexpected layouts:

- Use a fresh WordPress installation whenever possible
- Choose one starter demo as your main foundation
- Avoid repeatedly switching demos on production websites
- Create backups before importing demos
- Customize content after completing the import

Following these recommendations will give you the smoothest experience with Zaya.