﻿-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/Dvuune
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "Stations" (
    "Station_id" VARCHAR(20)   NOT NULL,
    "Station_name" VARCHAR(100)   NOT NULL,
    "Latitude" FLOAT   NOT NULL,
    "Longitude" FLOAT   NOT NULL,
    "Country" VARCHAR(200)   NOT NULL,
    CONSTRAINT "pk_Stations" PRIMARY KEY (
        "Station_id"
     )
);

CREATE TABLE "Temperatures_Readings" (
    "Reading_id" INTEGER   NOT NULL,
    "Station_id" VARCHAR(20)   NOT NULL,
    "Reading_date" TIMESTAMP   NOT NULL,
    "Reading_value" FLOAT   NOT NULL,
    CONSTRAINT "pk_Temperatures_Readings" PRIMARY KEY (
        "Reading_id"
     )
);

CREATE TABLE "Precipitation" (
    "Reading_id" INTEGER   NOT NULL,
    "Station_id" VARCHAR(20)   NOT NULL,
    "Reading_date" TIMESTAMP   NOT NULL,
    "Reading_value" FLOAT   NOT NULL,
    CONSTRAINT "pk_Precipitation" PRIMARY KEY (
        "Reading_id"
     )
);

CREATE TABLE "CO2-Emission" (
    "Reading_id" SERIAL   NOT NULL,
    "Country" VARCHAR(200)   NOT NULL,
    "Reading_date" TIMESTAMP   NOT NULL,
    "CO2_emission" FLOAT   NOT NULL,
    CONSTRAINT "pk_CO2-Emission" PRIMARY KEY (
        "Reading_id"
     )
);

ALTER TABLE "Temperatures_Readings" ADD CONSTRAINT "fk_Temperatures_Readings_Station_id" FOREIGN KEY("Station_id")
REFERENCES "Stations" ("Station_id");

ALTER TABLE "Precipitation" ADD CONSTRAINT "fk_Precipitation_Station_id" FOREIGN KEY("Station_id")
REFERENCES "Stations" ("Station_id");

