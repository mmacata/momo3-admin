#!/bin/sh
set -ex

# ------------------------------------------------------------------------------
# This script is supposed to be called from Travis continuous integration server
#
# It sets up a sencha build environment with a properly configured
# workspace and the right sencha Cmd …).
# ------------------------------------------------------------------------------

# Only do something on travis
if [ "$TRAVIS" != "true" ]; then
    echo "This script is supposed to be run inside the travis environment."
    return 1
fi

# Where will downloaded fils go? Cached between builds via travis
DOWN_DIR="$TRAVIS_BUILD_DIR/ci/__download"

# Where we will we install the sencha cmd? Cached between builds via travis
INSTALL_DIR="$TRAVIS_BUILD_DIR/ci/__install"

# This is the executable sencha command once it has been installed
SENCHA_CMD="$INSTALL_DIR/sencha"

# The version of sencha command to downlaod and install
SENCHA_CMD_VERSION="6.1.3.42"

# The version of ExtJS to download and configure the sencha workspace with
SENCHA_EXTJS_VERSION="6.0.0"

#(if needed), will not fail if they are there already
mkdir -p $DOWN_DIR
mkdir -p $INSTALL_DIR

# Many of the commands below check if a resource or directory already exists,
# this is here because the relevant directories are cached by travis and may
# already be there from a previous build.

cd $DOWN_DIR

# DOWNLOAD (if needed)
# 1) Sencha cmd (v6.1.2.15)
if [ ! -f "SenchaCmd-$SENCHA_CMD_VERSION-linux-amd64.sh.zip" ]; then
    wget "http://cdn.sencha.com/cmd/$SENCHA_CMD_VERSION/no-jre/SenchaCmd-$SENCHA_CMD_VERSION-linux-amd64.sh.zip"
fi

# 2) Ext JS (v6.0.1)
if [ ! -f "ext-$SENCHA_EXTJS_VERSION-gpl.zip" ]; then
    wget "http://cdn.sencha.com/ext/gpl/ext-$SENCHA_EXTJS_VERSION-gpl.zip"
fi

# EXTRACT (if needed)
# 1) Sencha cmd (v6.1.2.15)
if [ ! -f "SenchaCmd-$SENCHA_CMD_VERSION-linux-amd64.sh" ]; then
    unzip -q "SenchaCmd-$SENCHA_CMD_VERSION-linux-amd64.sh.zip"
fi

# 2) Ext JS (v6.0.1)
if [ ! -d "ext-$SENCHA_EXTJS_VERSION" ]; then
    unzip -q "ext-$SENCHA_EXTJS_VERSION-gpl.zip"
fi

# Install Sencha cmd
if [ ! -f $SENCHA_CMD ]; then
    ./SenchaCmd-$SENCHA_CMD_VERSION-linux-amd64.sh -q -dir $INSTALL_DIR
fi

# Set the ExtJS library as it is not present in the git repository
$SENCHA_CMD app upgrade $DOWN_DIR/ext-$SENCHA_EXTJS_VERSION

# Refresh the app
$SENCHA_CMD app build

# Back to the original working directory
cd $TRAVIS_BUILD_DIR

return 0
