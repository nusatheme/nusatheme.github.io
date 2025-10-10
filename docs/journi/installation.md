---
sidebar_position: 3
---
# Installation

## Wordpress

To install this theme you must have a working version of WordPress already installed. Below are some useful links regarding WordPress information.

- [WordPress - Where to Start ](https://wordpress.org/documentation/category/where-to-start/) - A great knowledge-base for WordPress beginners.
- [WordPress FAQ](http://codex.wordpress.org/FAQ_New_To_WordPress) - General information about WordPress.
- [PHP Function References](http://codex.wordpress.org/Function_Reference) - Detailed information on WordPress PHP functions and a lot of usage examples.

## Theme Requirements
To install and use this theme, ensure your WordPress site meets the following requirements: **WordPress version 6.5** or higher and **PHP version 7.4** or above. 

This theme is built as a block theme, which leverages the latest block-based features and site editing tools introduced in recent WordPress releases.

Having these requirements ensures optimal performance and compatibility with all theme features, including customizable block patterns, styles, and layout controls. 

Running the latest WordPress version is recommended for security, improved functionality, and compatibility with the theme’s advanced capabilities.

We recommend contacting your web hosting provider to confirm that your server’s PHP configuration settings meet the following requirements for optimal theme performance:

- `max_execution_time` 600
- `memory_limit` 128M
- `post_max_size` 32M
- `upload_max_filesize` 32M


If you’re using an unmanaged dedicated server or VPS, you can update your PHP settings directly in your `php.ini` file. Alternatively, you can add the following values to your `.htaccess` file located in your website’s root directory

- `max_execution_time` 600
- `memory_limit` 128M
- `post_max_size` 32M
- `upload_max_filesize` 32M

Configuring these values helps prevent errors during installation and ensures optimal performance. For enhanced security, always use strong passwords, and keep WordPress and your plugins up to date.

## Theme Installation

### Unzip the package
After purchasing the theme from Themeforest, **make sure to unzip the downloaded package** first and find the theme zip file. Some of the folder names may slightly different.
If you try to install the wrong files, you will get the missing ```style.css``` error. This is the most common error that means you are trying to install an incorrect package.


### Upload to Wordpress Admin Dashboard
1. To install your theme, begin by logging into your WordPress admin dashboard. In the dashboard, go to **Appearance → Themes**, where you’ll see an overview of available themes. 
![installation step 1](/img/journi/installation-step-1.webp)
2. Click the **Add New Theme** button near the page title to start the theme installation process. 
3. Next, on the Add Themes screen, you’ll find the **Upload Theme** button. Click it to reveal the upload options. Choose the theme ZIP file you downloaded earlier, then click Install Now to begin the installation.
![installation step 2](/img/journi/installation-step-2.webp)
4. When the theme is installed, a prompt will appear with an option to activate it immediately. Simply click the Activate link, and your new theme will be live, ready for you to customize and build out your site!
![installation step 4](/img/journi/installation-step-4.jpg)

## Plug-ins Installation

The following plugins are required for this theme to function optimally. Please ensure they are installed and activated to fully unlock all features and enhance your website’s capabilities.
- **Journi Core**<br/>
  Installing the **Journi Core** plugin is essential for using this theme’s custom blocks. This core plugin provides a variety of custom blocks that add functionality and design options to your site. Without it, the custom blocks won’t be available. Learn more about the features it provides on this [custom blocks page](/docs/category/custom-blocks-2).

- **[The Icon Block](https://wordpress.org/plugins/icon-block/) by Nick Diego**<br/>
  Icon Block is a flexible WordPress plugin that allows you to easily add icons to your content. Whether it be from the built in library of icons or by pasting in your own custom SVG code.

- **[Ninja Form](https://wordpress.org/plugins/ninja-forms/)** <br/>
  Ninja Forms is a powerful and user-friendly WordPress plugin for building forms without any coding. It offers a drag-and-drop interface, customizable fields, and pre-built templates, making it easy to create contact forms, surveys, or any custom form. 

- **[One Click Demo Import](https://wordpress.org/plugins/one-click-demo-import/)** <br/>
  One Click Demo Import is a simple and efficient WordPress plugin that allows you to quickly import demo content, widgets, and theme settings with a single click. It helps you set up your site to look exactly like the theme demo, making it easier to start customizing without building everything from scratch.  

![install required plugins](/img/journi/install-required-plugin.jpg)

:::info
The **Icon Block** plugin is required for many Journi block patterns. Please install and activate it to ensure patterns display correctly. This plugin requires **WordPress 6.5 or higher**. Please ensure your site is running WordPress version 6.5+ before installing.

**Ninja Form** is used to show newsletter form in the section newsletter, so if you're not planning to add newsletter form to your page or you want to use other plugin for your form, it's not necessary to install this plugin.

**One Click Demo Import** plugin is required to import the demo content for **Journi**. If you prefer to set up your site manually, you don’t need to install this plugin.
:::
<br/>

## Demo Content
To help you get started quickly, **Journi** includes demo content that you can import with just a few clicks. This will make your site look similar to the theme demo, so you can start customizing right away.

### Before You Begin
Make sure you have installed and activated the required plugin:  
- [One Click Demo Import](https://wordpress.org/plugins/one-click-demo-import/)

Without this plugin, the demo import option will not be available.

### How to Import Demo Content
1. Go to **Appearance → Import Demo Data** in your WordPress dashboard.  
2. Click the **Import Demo Data** button.  
3. Wait for the process to complete (this may take a few minutes depending on your hosting).  
4. Once finished, your site will include demo pages, posts, menus, and widgets.  

### After Import
- Your site should now look similar to the **Journi demo**.  
- You can start replacing the demo text and images with your own content.  
- If you don’t need all the demo content, you can safely delete the pages or posts you don’t plan to use.  

:::info
Importing demo content is **optional**. If you prefer to build your site from scratch, you can skip this step.
:::
