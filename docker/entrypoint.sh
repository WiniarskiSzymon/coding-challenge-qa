#!/bin/bash
echo 'Running Script'   
npm run pretest
npm run cypress-tests
status=$?
npm run create-report
exit $status