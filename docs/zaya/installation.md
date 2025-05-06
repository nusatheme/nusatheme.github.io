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
To install and use this theme, ensure your WordPress site meets the following requirements: **WordPress version 6.4** or higher and **PHP version 7.4** or above. 

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
![installation step 1](/img/zaya/installation-step-1.webp)
2. Click the **Add New Theme** button near the page title to start the theme installation process. 
3. Next, on the Add Themes screen, you’ll find the **Upload Theme** button. Click it to reveal the upload options. Choose the theme ZIP file you downloaded earlier, then click Install Now to begin the installation.
![installation step 2](/img/zaya/installation-step-2.webp)
4. When the theme is installed, a prompt will appear with an option to activate it immediately. Simply click the Activate link, and your new theme will be live, ready for you to customize and build out your site!
![installation step 4](/img/zaya/installation-step-4.webp)

## Plug-ins Installation

The following plugins are required for this theme to function optimally. Please ensure they are installed and activated to fully unlock all features and enhance your website’s capabilities.
- **Zaya Core**<br/>
  Installing the **Zaya Core** plugin is essential for using this theme’s custom blocks. This core plugin provides a variety of custom blocks that add functionality and design options to your site. Without it, the custom blocks won’t be available. Learn more about the features it provides on this [custom blocks page](/docs/category/custom-blocks).


- **[The Icon Block](https://wordpress.org/plugins/icon-block/) by Nick Diego**<br/>
  Icon Block is a flexible WordPress plugin that allows you to easily add icons to your content. Whether it be from the built in library of icons or by pasting in your own custom SVG code.

  :::important
  This Icon Block plugin is used in many part of the theme block pattern so make sure to install this plugin.
  :::


- **[Ninja Form](https://wordpress.org/plugins/ninja-forms/)** <br/>
  Ninja Forms is a powerful and user-friendly WordPress plugin for building forms without any coding. It offers a drag-and-drop interface, customizable fields, and pre-built templates, making it easy to create contact forms, surveys, or any custom form. <br/>
  This plugin is used to show contact form in the section contact, so if you're not planning to add section contact to your page, it's not necessary to install this plugin.

![install required plugins](/img/zaya/install-required-plugin.webp)

## Demo Content

With the latest block theme features in WordPress, creating a page similar to the demo no longer requires uploading demo content. Instead, you can use pre-designed patterns, which are ready-made sections and layouts specifically crafted to match the demo style. 

To build a page like the theme demo, simply go to the Block Inserter, select **Patterns**, and choose from the available layouts to add them to your page. 

You can combine multiple patterns to achieve the exact look you want, then customize text, images, and other settings as needed to fully personalize the design. This approach offers more flexibility and allows you to mix, match, and style your site effortlessly.

### How to Build a Page with Patterns
1. Navigate to **Appearance** → **Editor** → **Pages** in your WordPress dashboard.
2. Create a new page by clicking **Add New**.
3. In the page settings, change the template to **Landing**.
4. Click the + icon to open the block inserter.
5. In the search bar, type **Home**.
6. Select the **Home** pattern from the results.
7. Customize the content as needed to suit your preferences.

<iframe src="https://drive.google.com/file/d/1U6EkDRXyoAKhXqrqx98KkzSxldzMBw6i/preview" width="800" height="450" allow="autoplay"></iframe>