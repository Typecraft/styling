# typecraft styles

This repository contains default stylesheets for the development of typecraft.
The stylesheets are written in SCSS, and then compiled down to CSS files.

The resulting CSS is autocompressed and autoprefixed.

## Installation

```
npm install
```

## Building

```
npm start build
# Or just gulp, if the command is installed globally

npm start watch
# Watches for changes in any files under src/ and automatically rebuilds
```

## Running
The project ships with a very simple static-serve server, which can be run with
```
npm run start
```

Then navigate to localhost:6081 to view the result.

## Folder structure

```
.
├── build  Location for built files. Do not edit anything here, as all files may be overwritten automatically.
├── gulpfile.js  Contains the build tasks
├── index.js  File containing ES6 webpack compatible imports of the built css files.
├── package.json  Module configuration
├── public  Files pertinent to the simple static server
├── README.md  Recursion
├── server.js  java.lang.StackOverflowError
└── src  Source files for the project

```
