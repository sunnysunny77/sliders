#!/bin/bash

source $INIT_CWD/.env

echo -e "[ req ]\n\
default_bits = 2048\n\
prompt = no\n\
default_md = sha256\n\
req_extensions = req_ext\n\
distinguished_name = dn\n\
[ dn ]\n\
C = AU\n\
ST = Perth\n\
L = Western Australia\n\
O = Web Developers\n\
OU = Dev\n\
CN = $FQDN\n\
[ req_ext ]\n\
subjectAltName = @alt_names\n\
[ alt_names ]\n\
DNS.1 = $FQDN" > csr.conf

echo -e "authorityKeyIdentifier=keyid,issuer\n\
basicConstraints=CA:FALSE\n\
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment\n\
subjectAltName = @alt_names\n\
[alt_names]\n\
DNS.1 = $FQDN" > cert.conf

openssl genrsa \
-des3 \
-passout pass:developemnt \
-out ca.key 2048 &&

echo | openssl req \
-x509 \
-new \
-sha256 \
-days 1024 \
-out ca.crt \
-nodes \
-key ca.key \
-passin pass:developemnt \
-subj "//CN=$FQDN Root CA/C=AU/ST=Western Australia/L=Perth/O=Web Developers/OU=Dev"

openssl req \
-new \
-sha256 \
-nodes \
-out server.csr \
-newkey rsa:2048 \
-keyout server.key \
-config csr.conf

openssl x509 \
-req \
-in server.csr \
-CA ca.crt \
-CAkey ca.key \
-passin pass:developemnt \
-CAcreateserial \
-out server.crt \
-days 500 \
-sha256 \
-extfile cert.conf; 

npm run install-cert