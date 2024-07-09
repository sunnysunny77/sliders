#!/bin/bash
if [ -e "server.crt" ] && [ -e "server.key" ] ; then

    echo "sll exist's"
else 

openssl genrsa -aes128 -passout pass:development 2048 > server.key &&
openssl rsa -in server.key -passin pass:development -out server.key &&
openssl req -utf8 -new -key server.key -out server.csr -subj '/CN=dev.localhost/C=AU/ST=Western Australia/L=Perth/O=Web Development/OU=Developers' &&
openssl x509 -in server.csr -out server.crt -req -signkey server.key -extfile ssl.conf -days 3650;

npm run install-cert
fi 