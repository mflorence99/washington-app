#!/bin/bash 

ionic build

serverx-angular --app www --deploy aws.json --dryrun
