CREATE TABLE "CO2-Emission" (
    "Reading_id" SERIAL   NOT NULL,
    "Country" VARCHAR(200)   NOT NULL,
    "Reading_date" INTEGER   NOT NULL,
    "CO2_emission" FLOAT   NOT NULL,
    CONSTRAINT "pk_CO2-Emission" PRIMARY KEY (
        "Reading_id"
     )
);

SELECT * FROM "CO2-Emission";

SELECT * FROM "CO2-Emission" WHERE "Country" = 'Europe';
SELECT * FROM "CO2-Emission" WHERE "Country" = 'Africa';
SELECT * FROM "CO2-Emission" WHERE "Country" = 'Africa (GCP)';
SELECT * FROM "CO2-Emission" WHERE "Country" = 'Asia';
SELECT * FROM "CO2-Emission" WHERE LOWER("Country") LIKE '%america%';
SELECT * FROM "CO2-Emission" WHERE LOWER("Country") LIKE '%asia%';
SElECT * FROM "CO2-Emission" WHERE LOWER("Country") LIKE '%europe%';
SELECT * FROM "CO2-Emission" WHERE LOWER("Country") LIKE '%international%';
SELECT * FROM "CO2-Emission" WHERE LOWER("Country") LIKE '%high-income%';
SELECT * FROM "CO2-Emission" WHERE LOWER("Country") LIKE '%low-income%';
SELECT * FROM "CO2-Emission" WHERE LOWER("Country") LIKE '%lower-middle-income%';
SELECT * FROM "CO2-Emission" WhERE "Country" = 'Middle East (GCP)';
SELECT * FROM "CO2-Emission" WHERE "Country" = 'Non-OECD (GCP)';
SELECT * FROM "CO2-Emission" WHERE LOWER("Country") LIKE '%upper-middle-income%';
SELECT * FROM "CO2-Emission" WHERE "Country" = 'OECD (GCP)';
SELECT * FROM "CO2-Emission" WHERE "Country" = 'Oceania (GCP)';
SELECT * FROM "CO2-Emission" WHERE "Country" = 'Kuwaiti Oil Fires (GCP)';



DELETE FROM "CO2-Emission" WHERE "Country" IN ('Asia', 'Africa', 'Europe' );
DELETE FROM "CO2-Emission" WHERE LOWER("Country") LIKE '%america%';
DELETE FROM "CO2-Emission" WHERE "Country" = 'Africa (GCP)';
DELETE FROM "CO2-Emission" WHERE LOWER("Country") LIKE '%asia%';
DELETE FROM "CO2-Emission" WHERE LOWER("Country") LIKE '%europe%';
DELETE FROM "CO2-Emission" WHERE LOWER("Country") LIKE '%international%';
DELETE FROM "CO2-Emission" WHERE LOWER("Country") LIKE '%high-income%';
DELETE FROM "CO2-Emission" WHERE LOWER("Country") LIKE '%low-income%';
DELETE FROM "CO2-Emission" WHERE LOWER("Country") LIKE '%lower-middle-income%';
DELETE FROM "CO2-Emission" WhERE "Country" = 'Middle East (GCP)';
DELETE FROM "CO2-Emission" WHERE "Country" = 'Non-OECD (GCP)';
DELETE FROM "CO2-Emission" WHERE LOWER("Country") LIKE '%upper-middle-income%';
DELETE FROM "CO2-Emission" WHERE "Country" = 'OECD (GCP)';
DELETE FROM "CO2-Emission" WHERE "Country" = 'Oceania (GCP)';
DELETE FROM "CO2-Emission" WHERE "Country" = 'Kuwaiti Oil Fires (GCP)';


SELECT DISTINCT "Country" FROM "CO2-Emission"
	ORDER By "Country" Asc;


SELECT
	"CO2-Emission"."Reading_date" AS "Year",
	AVG("CO2-Emission"."CO2_emission") AS "Value"
FROM "CO2-Emission" 
	GROUP BY "CO2-Emission"."Reading_date"
	ORDER BY "CO2-Emission"."Reading_date";









