# Theme Update
If you've purchased our WordPress theme and need to update it on your website, follow the steps below. Choose between the Automatic Update (recommended for ease) and the Manual Update options.

## Automatic Theme Update
The easiest way to keep your theme up to date is with the Envato Market plugin. This plugin automatically checks for updates to your purchased themes.

1. Install the [Envato Market plugin](https://www.envato.com/lp/market-plugin/) and link it to your Envato account.
2. Follow this [video tutorial](https://www.youtube.com/watch?v=aPm3D78rJDY) or read through the [instructions](https://www.wpexplorer.com/envato-market-plugin-guide/) provided with the plugin for a step-by-step guide.
Once set up, you'll be notified when a new update is available, and you can update with a single click!

## Manual Theme Update
If you prefer to update your theme manually, you can do so either through the WordPress Dashboard or via FTP. Before starting, download the latest theme ZIP file from where you originally purchased it.

### Updating via WordPress Dashboard
1. Log into your WordPress Dashboard and then go to **Appearance > Themes**.
2. Delete the Existing Theme: Locate and delete the current version of the theme.
3. Upload the New Version: Go to **Add New > Upload Theme** and select the updated ZIP file. Activate the theme after installation.
   
This method is simple but may require temporary downtime while the theme is reinstalled.

### Updating via FTP

This is more advanced manual update procedure and you will need an FTP client (such as FileZilla) to connect to your server:

1. **Unpack the Theme**: Extract the theme folder from the ZIP file you downloaded.
2. **Connect via FTP**: Use an FTP client (e.g., FileZilla) to connect to your server.
3. **Navigate to the Theme Folder**: Locate wp-content/themes/ in your WordPress directory.
4. **Backup and Replace the Theme**:
(Optional) Backup the existing theme folder by renaming it (e.g., mora.backup).
Delete the current theme folder and upload the new version.
5. **Verify**: Log in to your WordPress Dashboard and confirm the theme version under **Appearance > Themes**.
After verifying, you can safely delete any backup files created.
