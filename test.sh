#!/bin/bash
# A sample Bash script, by Ryan
echo I am going to create an army!



counter=1
port=8001
while [ $counter -le 10 ]
do
echo creating bot $counter
docker run --name nodejs-image-demo$port -p $port:8080 -d alexbonti/nodejs-image-demo 
((counter++))
((port++))
done
echo All done