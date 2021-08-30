#!/usr/bin/env bash

JOBS_PATH="/Users/nlyons/Documents/Scripts/JOBS"
declare -a clients
cd $JOBS_PATH
pwd
echo "in $JOBS_PATH directory"

function loopByYear() {
 for year in *
 do
   if [ -d "$year" ]; then
     cd ${year}
     loopByLetter
     cd ..
   fi
 done
}

function loopByLetter() {
 for letter in *
 do
   if [ -d "$letter" ]; then
     cd ${letter}
     getClientNames
     cd ..
   fi
 done

}

function getClientNames() {
 for clientname in *
 do
   if [ -d "$clientname" ]; then
     clients+=("$clientname")
   fi
 done
}


loopByYear

IFS=$'\n' clients=($(sort <<<"${clients[*]}" -u))

for i in "${clients[@]}"
do
  echo "$i"
done
