#!/bin/bash
if [ -e "server.crt" ] && [ -e "server.key" ] ; then
    echo "sll exist's"
else 
   openssl req -config ssl.conf -new -x509 -sha256 -newkey rsa:2048 -nodes -days 1000 -keyout server.key -out server.crt; npm run install-cert
fi 