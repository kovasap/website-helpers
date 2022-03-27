#!/bin/bash

clj -A:shadow-cljs release website_helpers

rm -r release
mkdir release
cp -r public/* release/
rm release/index.html
git add release/**
git commit -m "new release"
git push
