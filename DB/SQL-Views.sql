CREATE VIEW precipitation_readings_full AS
SELECT "Precipitation_Readings"."Reading_id",
    "Precipitation_Readings"."Station_id",
    "Precipitation_Readings"."Reading_date",
    "Precipitation_Readings"."Reading_value",
    "Stations"."Country"
   FROM "Precipitation_Readings"
     JOIN "Stations" ON "Precipitation_Readings"."Station_id"::text = "Stations"."Station_id"::text;

CREATE VIEW precipitation_readings_filtered AS
 SELECT "Stations"."Country",
    to_char(tr."Reading_date", 'YYYY'::text) AS "YEAR",
    tr."Reading_value"
   FROM "Precipitation_Readings" tr
     JOIN "Stations" ON tr."Station_id"::text = "Stations"."Station_id"::text
     JOIN ( SELECT "Precipitation_Readings"."Station_id",
            count(DISTINCT "Precipitation_Readings"."Reading_date") AS "Year_count"
           FROM "Precipitation_Readings"
          GROUP BY "Precipitation_Readings"."Station_id"
         HAVING count(DISTINCT "Precipitation_Readings"."Reading_date") = (( SELECT count(DISTINCT "Precipitation_Readings_1"."Reading_date") AS count
                   FROM "Precipitation_Readings" "Precipitation_Readings_1"))) t ON tr."Station_id"::text = t."Station_id"::text;

CREATE VIEW temperature_readings_full AS
 SELECT "Temperature_Readings"."Reading_id",
    "Temperature_Readings"."Station_id",
    "Temperature_Readings"."Reading_date",
    "Temperature_Readings"."Reading_value",
    "Stations"."Country"
   FROM "Temperature_Readings"
     JOIN "Stations" ON "Temperature_Readings"."Station_id"::text = "Stations"."Station_id"::text;

 CREATE VIEW temperature_readings_filtered AS
 SELECT "Stations"."Country",
    to_char(tr."Reading_date", 'YYYY'::text) AS "YEAR",
    tr."Reading_value"
   FROM "Temperature_Readings" tr
     JOIN "Stations" ON tr."Station_id"::text = "Stations"."Station_id"::text
     JOIN ( SELECT "Temperature_Readings"."Station_id",
            count(DISTINCT "Temperature_Readings"."Reading_date") AS "Year_count"
           FROM "Temperature_Readings"
          GROUP BY "Temperature_Readings"."Station_id"
         HAVING count(DISTINCT "Temperature_Readings"."Reading_date") = (( SELECT count(DISTINCT "Temperature_Readings_1"."Reading_date") AS count
                   FROM "Temperature_Readings" "Temperature_Readings_1"))) t ON tr."Station_id"::text = t."Station_id"::text;
