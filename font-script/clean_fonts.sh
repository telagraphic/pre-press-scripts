#!/usr/bin/env bash

# JOBS_PATH="/nlyons/Volumes/Workflow/JOBS"
JOBS_PATH="/Volumes/Workflow/JOBS"
FONTS_PATH="/Users/nlyons/Documents/Scripts/FONTS"
cd $FONTS_PATH
pwd

function cleanFontNames {
 for clientName in *
 do
   cp -rf "$clientName" ../CLEAN_FONTS `echo $fyle | sed -e 's/Fonts//g' -e 's/fonts//g' `
 done
}


# $fyle `echo $fyle | sed -e 's/FOO//gI' -e 's/BANG//gI' `
cleanFontNames
