#1 To get started with the build system We need to install dependencies first from bower and npm.

```
npm install
```

```
bower install
```

if an error occurs when installing bower components
I suggest doing the following, source from this stack overflow question [Link](http://stackoverflow.com/questions/29865913/getting-a-permission-error-when-installing-with-bower)

or read and try this as well [Link](https://stackoverflow.com/questions/26307910/npm-install-for-packages-not-working/26928119#26928119?newreg=44400c7b5e7a4382bbbbf01835c87028)

```
sudo bower install --allow-root
```

If the terminal gives an Xcode error just agree to the terms and you'll be on your way by simply typing in
```
sudo xcodebuild -license
```

#2 With our gulpfile already built with their specific tasks, we need to compile our assets and build our templates. (we execute this in order);

Compile our assets
```
gulp compile
```

Build our ejs templates
```
gulp build
```

#3 Run our default gulp task by simply just typing in gulp in the command line, And then we are ready to make a website
```
gulp
```

#4 To start out server simply type the following command make sure you have nodemon installed
```
npm start
```
or
```
node app.js
```
