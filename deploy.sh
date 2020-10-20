npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git checkout -b gh-pages

git push -f gh-pages:gh-pages
