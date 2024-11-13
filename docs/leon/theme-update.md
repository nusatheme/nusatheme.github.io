# Theme Update

## Automatic Theme Update

You can get automatic theme updates with help of [Envato Market](https://www.envato.com/lp/market-plugin/) plugin.
Watch an [instructional video](https://www.youtube.com/watch?v=aPm3D78rJDY) on how to use the plugin, or read a complete, illustrated [instructions](https://www.wpexplorer.com/envato-market-plugin-guide/) on how to use it.

## Manual Theme Update

Download the theme ZIP package from where you've obtained it originally. Then follow the steps below:

### Updating via WordPress dashboard

A simple way of doing a manual theme update is deleting and reinstalling the theme directly via WordPress dashboard. You can read an article or watch a video on how to do this.

### Updating via FTP

This is more advanced manual update procedure and you will need an FTP client (such as FileZilla) to connect to your server:

1. Download the newest theme ZIP file from where you've obtained it and unpack the ZIP file on your computer.
2. Now you will need an FTP client to connect to your server.
3. On your server navigate to `WORDPRESS_FOLDER/wp-content/themes/` directory.
4. Delete the existing ileana folder (or create a backup just in case - you can do this simply by renaming the folder name by appending `.backup` to its name so it becomes `ileana.backup`, for example).
5. Copy the unpacked theme ileana folder from your computer (from step 1 above) into WORDPRESS_FOLDER/wp-content/themes/ folder on your server.
6. Log into your WordPress admin area and check the version of the theme in Appearance → Themes. Your theme should be updated now. (And you can delete the `ileana.backup` folder from step 4 above.)
