#!/bin/bash 

now=$(date)
echo "{ \"date\": \"$now\", \"id\": $RANDOM }" > src/assets/build.json

version=${1:-patch}
message=${2:-"Prepare new version for release"}

git add . *
git commit -m "$message"

npm version $version

git push origin main

ionic build

serverx-angular --app www --deploy aws.json
