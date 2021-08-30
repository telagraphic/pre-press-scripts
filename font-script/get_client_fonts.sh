#!/usr/bin/env bash

JOBS_PATH="/Users/nlyons/Documents/Scripts/JOBS"
FONTS_PATH="/Users/nlyons/Documents/Scripts/FONTS"
rm -rf FONTS
mkdir -p FONTS
cd $JOBS_PATH
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

function getClientNames {
 for clientname in *
 do
   if [ -d "$clientname" ]; then
     # pwd
     # echo ${clientname}
     cd "$clientname"
     getClientFonts
     cd ..
   fi
 done
}

function getClientFonts {
 # echo $1
 for folder in * #$(find * -maxdepth 5)
 do
   if [ -d "$folder" ]; then

    # if [[ {$folder} =~ .*Fonts.* ]]; then || (Font|font)
    if [[ {$folder} =~ .*Fonts.* ]]; then
      echo ${folder}
      pwd
      cp -R "$folder" "/Users/nlyons/Documents/Scripts/FONTS"
    fi
    # cd ${folder}
    # cd ..
   fi
 done
 # cd ..
}


  # if [[ $1 =~ font ]]; then
  #   echo "found a font"
  # fi

loopByYear

# IFS=$'\n' clients=($(sort <<<"${clients[*]}" -u))
#
# for i in "${clients[@]}"
# do
#   echo "$i"
# done
