#! /usr/env sh

set -e

zip -r build.zip build

curl -H "Content-type: application/zip" \
     -H "Authorization: Bearer $netlify_key"
     --data-binary "@build.zip" \
     http://api.netlify.com/api/v1/sites