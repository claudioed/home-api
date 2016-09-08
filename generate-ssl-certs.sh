#!/bin/bash

if [ ! -e server.js ]
then
	echo "Error: could not find main application server.js file"
	echo "You should run the generate-ssl-certs.sh script from the main application root directory"
	echo "i.e: bash generate-ssl-certs.sh"
	exit -1
fi

echo "Generating self-signed certificates..."
mkdir -p ./config/ssl
openssl req -newkey rsa:2048 -new -nodes -keyout ./config/ssl/key.pem -out ./config/ssl/csr.pem
openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout ./config/ssl/key.pem -out ./config/ssl/cert.pem
rm ./config/ssl/csr.pem
chmod 600 ./config/ssl/key.pem ./config/ssl/cert.pem