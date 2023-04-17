# Remove node_modules and reinstall as per yarn.lock
rm -rf node_modules
yarn install --frozen-lockfile
