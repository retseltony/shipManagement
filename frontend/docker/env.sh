#!/bin/bash

# Recreate config file
config_file="./env-config.js"
rm -rf $config_file
touch $config_file

# Add assignment 
echo "window._env_ = {" >> $config_file

# Read each line in .env file
# Each line represents key=value pairs
while read -r line || [[ -n "$line" ]];
do
  [[ $line = \#* ]] || [[ -z "$line"  ]] && continue
  # Split env variables by character `=`
  if printf '%s\n' "$line" | grep -q -e '='; then
    varname=$(printf '%s\n' "$line" | sed -e 's/=.*//')
    varvalue=$(printf '%s\n' "$line" | sed -e 's/^[^=]*=//')
  fi

  # Read value of current variable if exists as Environment variable
  value=$(printf '%s\n' "${!varname}")
  # Otherwise use value from .env file
  [[ -z $value ]] && value=${varvalue}
  
  # Append configuration property to JS file
  echo "  $varname: $value," >> $config_file
done <  ./.env 

echo "}" >> $config_file

sed s/'$PORT'/$PORT/g < /etc/nginx/conf.d/default.conf.tpl > /etc/nginx/conf.d/default.conf
sed -i s~'$PUBLIC_URL'"~${PUBLIC_URL//\'}~" /etc/nginx/conf.d/default.conf