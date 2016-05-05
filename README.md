# Prototype 2

## Making new screens

To make a new screen, create a container and give it a `data-screen` attribute, like this:

```
<div data-screen="home">
  ...
</div>
```

## Opening a screen

To make a link which opens a specific screen you use a `data-open-screen` attribute:

```
<a href="#" data-open-screen="home">Home</a>
```

If no screen with such name is found you will see a warning in the console, but no error will occur.

## Closing a screen

Closing links use the `data-close-screen` attribute:

```
<a href="#" data-close-screen>Close</a>
```

The attribute doesn’t need a name, it will close all the screens and show the home one.

# Libraries

The prototype uses Backbone, which requires jQuery and Underscore.
