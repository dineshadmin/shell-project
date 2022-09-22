#!/bin/bash

TIMESTAMP=$(date +"%F")carmeldb
TIMESTAMP2=$(date +"%F-%H-%M")
BACKUP_DIR="/home/ubuntu/sc/$TIMESTAMP"

DB="joomla"
HOST="localhost"
MYSQL_USER="root"
MYSQL_PASSWORD="@dineshDH1418"

MYSQL="$(which mysql)"
MYSQLDUMP="$(which mysqldump)"


sudo mkdir -p $BACKUP_DIR

sudo find "$BACKUP_DIR/*.sql" -mtime +5 -exec rm -rf {} \;


tmp_file=$(mktemp -q /tmp/bk.XXXXXX)
if [ $? -ne 0 ]; then
        echo "$0: Can't create temp file, bye.."
        exit 1
fi


#sudo $MYSQLDUMP -h $HOST -u $MYSQL_USER -p$MYSQL_PASSWORD  $DB > $tmp_file
#sudo mv $tmp_file  $BACKUP_DIR/$DB-$TIMESTAMP2.sql


