npm run build

cd build

git init
git add -A
git commit -m 'deploy'

git checkout -b gh-pages

git push -f https://github.com/vinodselvin/Calculators.git gh-pages:gh-pages
