#!/bin/bash
go install github.com/caddyserver/xcaddy/cmd/xcaddy@latest && xcaddy build && npm run mkcert;