### Version 2.0.0 - June 30, 2015

- **Site** - Added new colors `olive`, `violet`, `brown` and `grey`. These are available in all elements with color variations.  **Thanks @lemartialou**
- **Site** - Added many new site variables, including the ability to control input size across all UI `inputPadding`, along with more border colors, accents, and colors.
- **Build Tools** - Adjusting `site.variables` will now rebuild all UI, instead of just `site.less`
- **Site** - Fixed mixed globals `@defaultDuration` and `@transitionDuration` usage to use a single variable across all UI `@defaultDuration`, the same for `@defaultEasing` and `@transitionEasing`
- **Site** - Added in `pageOverflowX` variable, default theme hides horizontal scrollbars on `body`
- **Site** - Added default `focus` colors for all color variations
- **Site** - All floating/raised variations now inherit from a global `@floatedShadow` making theming easier
- **Form** - Form sizes and input sizes now inherit from `site.variables`
- **Message** - Message now uses `@lineHeight` from `site.variables`
- **Header/Table/Divider** - These components now pull border color defaults from `site.variables` instead of using their own values
- **Site** - Additional font variables have been added to site to help clarify variable purpose.
- **Site** - Increase contrast on default hovered/down colors for colored variations
- **Site** - Page background is now `#FFFFFF` by default instead of an offwhite `#F7F7F7`
- **Site** - Adjusted global line height to the closest even pixel value

### Version 1.11.8 - April 13, 2015

- **Build Tools** - Fixed `npm install` without `semantic.json` to merge changes with site theme and packaged themes in a similar fashion to `npm update`

### Version 1.11.5 - March 23, 2015

- **Build Tools** - Adjusting site.variables will now rebuild all UI, instead of just site.less

### Version 1.11.2 - March 6, 2015

- **Site** - `h1-h5` now have no top margin when `first-child` and no bottom margin when `last-child`

### Version 1.10.0 - February 23, 2015

- **Build Tools** - Fixed issue with recursive merge for site themes in update scripts, [details here](https://github.com/Semantic-Org/Semantic-UI/pull/1845) Thanks @derekslife

### Version 1.8.0 - January 23, 2015

- **Header** - Content headers now inherit `@h1-h6` sizes from `site.variables`

### Version 1.7.0 - January 14, 2015

- **Site** - Form input highlighting color added (helps differentiate form colors with autocompleted fields). Default text highlighting color moved from highlighter yellow to a mellow blue.

### Version 1.6.2 - January 06, 2015

**Site Variables**
- **Site** - EM values for `small` `large` etc are now all calculated from ``@emSize`` allowing you to only change one variable.

### Version 1.2.0 - December 08, 2014

- **Fonts** - Add font subset variable for ``site.variables`` **Thanks gabormeszoly**
- Theme.config.example now links to final site folder

### Version 1.1.0 - December 02, 2014

- **Popup** - Popup now has a ``settings.prefer`` that defaults to ``adjacent``. This setting sets prefered next placement when a popup cannot fit on screen in the chosen placement. ``prefer`` can also be set to ``opposite`` to prefer the same position on the opposite side

### Version 1.0.1 - November 28, 2014

- **Site** - Add protocol variable for Google Font loader to avoid issues with ``//`` when loading locally causing freezing

### Version 1.0.0 - November 24, 2014

- **Popup** - Positioned popups will now extend in the opposite direction to fit better with floated content

### Version 0.15.0 - Mar 14, 2014

- **Icon** - Hide and unhide icon were accidentally given opposite names

### Version 0.1.0 - Sep 25, 2013