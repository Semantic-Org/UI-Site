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