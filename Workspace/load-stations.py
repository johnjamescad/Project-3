# Python SQL toolkit and Object Relational Mapper
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
# from sqlalchemy import inspect

import requests
# import json
# import pprint

import geopandas as gpd
from shapely.geometry import Point

import config

# Load the world map data from geopandas
world = gpd.read_file(gpd.datasets.get_path('naturalearth_lowres'))

DATABASE_URI = 'postgresql://postgres:postgres@localhost:5432/project_3_dev'
engine = create_engine(DATABASE_URI)
session = Session(bind=engine)

# Declare a Base using `automap_base()`
Base = automap_base()

# Use the Base class to reflect the database tables
Base.prepare(autoload_with=engine)

# Uncomment the below two lines to make sure the tables are loaded.
# for key in Base.classes.keys():
#   print(key)

Station = Base.classes.Stations

# Uncomment the below four lines to find the column names in the table.
# inspector = inspect(engine)
#
# for key in inspector.get_columns('Stations'):
#   print(key)

stations_url = "https://www.ncei.noaa.gov/cdo-web/api/v2/stations/?limit=1000&offset="

count = 0
response = requests.get(stations_url + str(count + 1), headers={
    'token': config.noaa_api_key
}).json()

# Uncomment the below line to find the response structure.
# print(json.dumps(response, indent=4, sort_keys=True))

def get_country(lat, lon):
    # Create a Point object from the latitude and longitude
    point = Point(lon, lat)

    # Iterate over each country polygon in the GeoDataFrame
    for index, row in world.iterrows():
        # Check if the point is within the country polygon
        if row['geometry'].contains(point):
            # If it is, return the name of the country
            return row['name']
    
    # If the point is not within any country polygon, return None
    return None

def saveStation(result):
    lat = result["latitude"]
    lon = result["longitude"]
    station = Station(\
        Station_id=result["id"],\
        Station_name=result["name"],\
        Latitude=lat,\
        Longitude=lon,\
        Country=get_country(lat, lon)
    )
    session.add(station)

for result in response["results"]:
    saveStation(result)

session.commit()

maxCount = int(response["metadata"]["resultset"]["count"])

count += len(response["results"])
i = 0
while (count < maxCount):
    response = requests.get(stations_url + str(count + 1), headers={
        'token': config.noaa_api_key
    }).json()

    for result in response["results"]:
        saveStation(result)

    session.commit()

    count += len(response["results"])
    i += 1

session.close()
