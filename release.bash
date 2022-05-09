#!/bin/bash

# Using compile instead of release because of
# https://github.com/gadfly361/rid3/issues/10#issuecomment-962701995
clj -A:shadow-cljs compile website_helpers

rm -r release
mkdir release
cp -r public/* release/
rm release/index.html
git add release/**
git commit -m "new release"
git push
