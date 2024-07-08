#!/bin/bash
go install github.com/caddyserver/xcaddy/cmd/xcaddy@latest && xcaddy build && sudo chmod 777 caddy && npm run mkcert;