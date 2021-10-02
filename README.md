# should-i
 A website template for helping you decide stuff

# Configuration

The defaults are in `config.json`. Go ahead and modify that to your liking.

## `question`

The question that should be asked. Use a question mark, since it added automatically.

## `background`

Background color.

## `color`

Text color.

## `title`

The title is what is displayed in the browser tab.

## `description`

This is a description that is shown when you link to the site.

## `image`

This is an image that is shown when you link to the site.

## `probability`

The probability it will be a yes. Should be a number between 0 and 1. Defaults to 0.95 (almost always yes).

# Build and publish

To build the site, run:
```
npm run build
```

This will output an index.html

## Google Analytics

If you don't want to save your Google Analytics tracking code in your repo, save it as an environement variable called `GA_TRACKING` on whatever machine you're building on. It should be on the form `G-XXXXXXXXXX`.

The tracking code will be public regardless, but why not add some extra precaution?

## Credit

Template by Tobias Skarhed

[Spinner by FontAwesome](https://fontawesome.com/license)