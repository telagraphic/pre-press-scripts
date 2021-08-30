#!/usr/bin/env bash


#works but requires auth
mount -t smbfs '//admintrm@10.11.4.8/Workflow' ~/Desktop/mounts

# works!
mount -t smbfs '//nlyons:picky43-Dent@10.11.4.8/Workflow' ~/Desktop/mounts

# go to Volumes
cd /Volumes
ls -la
cd Workflow
