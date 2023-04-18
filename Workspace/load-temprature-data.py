# Python SQL toolkit and Object Relational Mapper
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

import requests

import config

DATABASE_URI = 'postgresql://postgres:postgres@localhost:5432/project_3'
engine = create_engine(DATABASE_URI)
session = Session(bind=engine)

# Declare a Base using `automap_base()`
Base = automap_base()

# Use the Base class to reflect the database tables
Base.prepare(autoload_with=engine)

Temperature = Base.classes.Temperature_Readings

def retrieveData(year, offset):
    temperature_url_1 = "https://www.ncei.noaa.gov/cdo-web/api/v2/data?datasetid=GSOY&datatypeid=TAVG&startdate="
    temperature_url_2 = "-01-01&enddate="
    temperature_url_3 = "-12-31&limit=1000&offset="

    end_year = year + 9
    if year == 2022:
        end_year = year
    temperature_url = temperature_url_1 + str(year) + temperature_url_2 + str(end_year) + temperature_url_3 + str(offset)
    response = requests.get(temperature_url, headers={
        'token': config.noaa_api_key
    }).json()
    return response

def saveReading(result):
    reading = Temperature(\
        Station_id=result["station"],\
        Reading_date=result["date"],\
        Reading_value=result["value"]
    )
    session.add(reading)

year = 1992
while year <= 2022:
    response = retrieveData(year, 0)
    for result in response["results"]:
        saveReading(result)
    session.commit()

    maxCount = int(response["metadata"]["resultset"]["count"])
    count = len(response["results"])

    retries = 0
    while (count < maxCount):
        try:
            response = retrieveData(year, count + 1)
            for result in response["results"]:
                saveReading(result)
            session.commit()
            count += len(response["results"])
            retries = 0
        except:
            retries += 1
            print(f"Error calling web service for year {year} and offset {count + 1}. Retrying...{retries}")
            if retries > 3:
                print("Retried 3 times. Quitting...")
                break
    year += 10

session.close()
