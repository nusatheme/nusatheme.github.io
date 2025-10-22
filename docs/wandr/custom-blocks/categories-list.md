# Categories List

The **Categories List** block displays a list of your site’s categories, along with the number of posts in each category. It works similarly to the WordPress Core Categories block but is designed to be easier to style and more flexible for theme integration.  

![categories list](/img/wandr/categories-list.jpg)

## How to Add Categories List Block
1. In the WordPress editor, click the **“+” Add Block** button.  
2. Search for **Categories List** and insert it into your page, post, or sidebar.  
3. Configure the block settings in the right sidebar.  

## Block Settings

### Show All
- **Default: On**  
- Displays all available categories automatically.  
- Ignores the `selectedCategories` setting.  

### Selected Categories
- Only available when **Show All = Off**.  
- Lets you manually select categories using a search field.  
- Useful for highlighting specific categories such as “Featured Topics” or “Popular Categories.”  

### Show Count
- **Default: On**  
- Displays the number of posts in each category next to its name.  
- Example: `Travel (12)`  

### Show Empty
- **Default: Off**  
- When enabled, categories with `0` posts are also displayed.  
- Matches the behavior of the WordPress Core Categories block.  

## Display Behavior
- Categories are shown as a **list (`ul/li`)** with each category linking to its archive page.  
- Example output:  
  ```html
  <ul class="wp-block-wandr-category-list">
    <li class="cat-item cat-item-5">
      <a href="/category/travel">Travel</a>
      <span class="cat-item__count">12</span>
    </li>
  </ul>
  ```
- Post counts are shown next to category names when Show Count is enabled.

## Styling
This block has been designed to be theme-friendly, meaning it’s easier for the theme to style consistently compared to the Core Categories block.
- Typography, spacing, and colors are handled by the theme’s CSS.
- Developers can target `.wp-block-wandr-category-list` and `.cat-item` for custom styling.
- Users can apply additional styles via the WordPress Site Editor if needed.


## Use Cases
- **Sidebar Widget**  
  Display selected categories as “Featured Topics.”
- **Footer Section**   
  Provide quick links to top categories.
- **Homepage Section**   
  Highlight popular or curated categories using Selected Categories.


## Best Practices
- Use Show All for archive-style pages where visitors need a complete list of categories.
- Use Selected Categories for curated sections like “Featured Topics” or “Popular Categories.”
- Keep Show Empty disabled unless you specifically want to display categories that don’t yet have posts.
- Place the block in sidebars or footer areas for quick navigation, or in homepage sections to guide visitors to key content.