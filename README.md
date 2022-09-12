# Template App

## Development Commands

### Development mode

```
npm install
clj -A:shadow-cljs watch website_helpers
```

Add `/index.html` to the url to open the test page.

### Building for production

```
./release.bash
```

This will put all the final artifacts in the "release" directory.
