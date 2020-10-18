#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE DATABASE trarepo_development;
    CREATE DATABASE trarepo_test;
EOSQL

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "trarepo_development" <<-EOSQL
    CREATE EXTENSION postgis;
EOSQL

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "trarepo_development" <<-EOSQL
    CREATE EXTENSION pgcrypto;
EOSQL

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "trarepo_test" <<-EOSQL
    CREATE EXTENSION postgis;
EOSQL

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "trarepo_test" <<-EOSQL
    CREATE EXTENSION pgcrypto;
EOSQL