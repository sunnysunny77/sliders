#!/bin/bash
if [ -e "server.crt" ] && [ -e "server.key" ] ; then

    echo "sll exist's"
else 
openssl genrsa -aes256  -passout pass:development -out server.pass.key 4096 &&
openssl rsa -in server.pass.key  -passin pass:development  -out server.key &&
openssl req -new -key server.key -out server.csr -subj '/CN=dev.localhost/C=AU/ST=Western Australia/L=Perth/O=Web Development/OU=Developers' &&
openssl x509 -req -sha256 -days 365 -in server.csr -signkey server.key -out server.crt -extfile ssl.conf;  
npm run install-cert
fi 