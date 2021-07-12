#!/bin/bash 

version=${1:-patch}
message=${2:-"Prepare new version for release"}

echo $version

git add . *
git commit -m "$message"
git push origin main

npm version $version

cp -R www/* ../mflorence99.github.io
