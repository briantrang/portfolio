# Script to re push to github
echo "Copying over .git"
mkdir tmp/
cp -R ./build/.git tmp/

npm build
# yarn spa_support
cp -R ./tmp/.git ./build/

echo "Creating .gitignore"
touch ./build/.gitignore
echo .DS_Store > ./build/.gitignore

echo "Cleaning up..."
rm -rf tmp/

echo "Run sh deploy.sh now"