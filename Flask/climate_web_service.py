from flask import Flask, jsonify

from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, Table, Column, String, Integer, Float

DATABASE_URI = 'postgresql://postgres:postgres@localhost:5432/project_3'
engine = create_engine(DATABASE_URI)
session = Session(bind=engine)

# Declare a Base using `automap_base()`
Base = automap_base()

# Map the temperature view
class TemperatureReadings(Base):
    __table__ = Table(
        'temperature_readings_filtered',
        Base.metadata,
        Column('Country', String, primary_key=True),
        Column('YEAR', Integer, primary_key=True),
        Column('Reading_value', Float)
    )

# Use the Base class to reflect the database tables
Base.prepare(autoload_with=engine)

CO2Emissions = Base.classes["CO2-Emission"]

app = Flask(__name__)

def addCommonHeaders(response):
    response.headers.add('Access-Control-Allow-Origin', '*')

@app.route("/api/v1.0/annual_co2_emission")
def annual_co2_emission():
    result = session.query(CO2Emissions.Reading_date, func.avg(CO2Emissions.CO2_emission))\
    .group_by(CO2Emissions.Reading_date)\
    .order_by(CO2Emissions.Reading_date)\
    .all()

    result_list = []
    for year, reading in result:
        temp_dict = {}
        temp_dict["Year"] = year
        temp_dict["Value"] = reading
        result_list.append(temp_dict)

    response = jsonify(result_list)
    addCommonHeaders(response)
    return response

@app.route("/api/v1.0/temperature_readings")
def temperature_readings():
    result = session.query(TemperatureReadings).all()

    result_list = []
    for row in result:
        temp_dict = {}
        temp_dict["Year"] = row.YEAR
        temp_dict["Country"] = row.Country
        temp_dict["Value"] = row.Reading_value
        result_list.append(temp_dict)

    response = jsonify(result_list)
    addCommonHeaders(response)
    return response

@app.route("/api/v1.0/annual_temperature_readings")
def annual_temperature_readings():
    result = session.query(TemperatureReadings.YEAR, func.avg(TemperatureReadings.Reading_value))\
        .group_by(TemperatureReadings.YEAR)\
        .order_by(TemperatureReadings.YEAR)\
        .all()

    result_list = []
    for (year, value) in result:
        temp_dict = {}
        temp_dict["YEAR"] = year
        temp_dict["Value"] = value
        result_list.append(temp_dict)

    response = jsonify(result_list)
    addCommonHeaders(response)
    return response

if __name__ == '__main__':
    app.run(debug=True)
