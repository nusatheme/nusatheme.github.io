---
sidebar_position: 9
---
# Recent Post AJAX
![load more posts](/img/zaya/load-more-post.jpg)

## How to Update the "Load More" Post Card Layout (AJAX)
In the Zaya theme, the "**Load More Posts**" button for recent posts uses an AJAX request to dynamically fetch and display additional posts without reloading the page. This AJAX response uses a static template file located in the theme, not the block editor content of the homepage.

If you change the layout or design of the recent post card in the homepage editor, that change will not automatically apply to posts loaded via AJAX. You’ll also need to manually update the corresponding file used for rendering AJAX-loaded posts.


### Step-by-Step Guide
1. **Open the Block Editor**<br />
Navigate to the Homepage in the WordPress site editor. Locate the "**Recent Post**" section (as shown in the image) where the post cards are displayed.

2. **Select the Post Card Group**<br />
In the List View, find the **Group** block that represents a single post card. Right-click on the block (or use the three-dot menu). Select “Copy” to copy the block's HTML structure. This includes all layout, classes, and nested blocks you styled in the editor.

3. **Open the Theme File Editor**<br />
   Go to Tools → Theme File Editor in the WordPress admin sidebar. Under Theme Files, navigate to:
   ```
   patterns/recent-post.html
   ```
   This is the file used by your theme's AJAX callback to render each post card dynamically.

4. **Paste into Template File**<br />
   In the recent-post.html file:
   Replace the existing content inside the `<li>` element with the copied markup.
   Keep or adjust the `<li>` wrapper as needed:

   ```
   <li class="wp-block-post {{post_classes}} aos-init" data-aos="fade-up">
     <!-- Paste your copied block here -->
   </li>
   ```

5. **Save the File**<br />
   Click “Update File” to save your changes.
   Now, when users click "**Load More Posts**", the AJAX-loaded posts will use your updated design.


![load more posts](/img/zaya/copy-group-post-card.jpg)

:::info
#### Why This Happens
The homepage uses the block editor (Gutenberg), while the AJAX response is rendered server-side via a PHP callback. Since WordPress cannot reuse editor-defined block layouts directly in PHP callbacks, a separate template file must be maintained for the AJAX-rendered output.
:::

:::tip
#### Test Your Changes
After editing patterns/recent-post.html, refresh your homepage and click "**Load More Posts**" to confirm the AJAX-loaded posts match the updated design.
:::