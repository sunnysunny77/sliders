#!/bin/bash
go install github.com/caddyserver/xcaddy/cmd/xcaddy@latest && xcaddy build && sudo chmod o=rw caddy && npm run mkcert;