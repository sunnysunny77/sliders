<!DOCTYPE html>
<html lang="en">
<body>
    <h1>
        install
    </h1>
    <br>
    https://git-scm.com/downloads 
    <br>
    https://www.php.net/downloads.php
    <br>
    https://nodejs.org/en/download/package-manager
    <br>
    https://go.dev/doc/install
    <br>
    <br>
    <br>
    For Debian, Ubuntu, and Raspbian, an xcaddy package is available
    <br>
    <br>
    sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https
    <br>
    curl -1sLf 'https://dl.cloudsmith.io/public/caddy/xcaddy/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-xcaddy-archive-keyring.gpg
    <br>
    curl -1sLf 'https://dl.cloudsmith.io/public/caddy/xcaddy/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-xcaddy.list
    <br>
    sudo apt update
    <br>
    sudo apt install xcaddy
    <br>
    sudo apt install libnss3-tools
    <br>
    <br>
    <br>
    <br>  
    <br>
    <br>
    npm i "install app"
    <br>
    <br>
    <h1>
        Individual commands
    </h1>
    <br>
    <br>
    npm run caddy-server "start server",
    <br>
    <br>
    npm run caddy-config "load server config",
    <br>
    <br>
    npm run caddy-format "format config",
    <br>
    <br>
    npm run php-server "start php server",
    <br>
    <br>
    npm run open-server "open browser",
    <br>
    <br>
    npm run watch-css "watch-css" 
    <br>
    npm run build-css "build-css"
    <br>
    npm run production-css "build-css -no-source-map",
    <br>
    <br>
    npm run watch-js "watch-js",
    <br>
    npm run build-js "build-js",
    <br>
    npm run production-js "build-js -no-source-map",
    <br>
    <br>
    <h1>
        Real commands
    </h1>
    npm run watch "live localhost ssl server watching all",
    <br>
    <br>
    npm run build  "build-css build-js",
    <br>
    <br>
    npm run production "production-css production-js  -no-source-map"
    <br>
    <br>
</html>
