#!/usr/bin/env bash
set -euo pipefail

input=$(cat)
file_path=$(printf '%s' "$input" | jq -r '.file_path // empty')

if [[ -z "$file_path" || ! -f "$file_path" ]]; then
	exit 0
fi

case "$file_path" in
	*.js | *.mjs | *.cjs | *.ts | *.vue)
		npx eslint "$file_path"
		;;
	*.json | *.css | *.scss | *.md)
		npx prettier --check "$file_path"
		;;
esac
