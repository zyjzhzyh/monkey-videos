#!/bin/sh

OUTPUT='tudouHTML5.user.js'

cat header.js > $OUTPUT
cat ../multiFiles.js >> $OUTPUT
cat tudou.js >> $OUTPUT

echo "$OUTPUT rebuilt"

exit 0
