#!/bin/bash 

now=$(date)
echo "{ \"date\": \"$now\", \"id\": $RANDOM }" > src/assets/build.json

version=${1:-patch}
message=${2:-"Prepare new version for release"}

git add . *
git commit -m "$message"

npm version $version

git push origin main

ionic build --prod

cp -R www/* ../mflorence99.github.io

cd ../mflorence99.github.io

git add . *
git commit -m "$message"
git push origin main
