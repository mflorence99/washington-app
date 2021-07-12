version=${1:patch}

git add . *
git commit -m "Prepare new version for release"
git push origin main

npm version ${version}

cp -R www/* ../mflorence99.github.io
