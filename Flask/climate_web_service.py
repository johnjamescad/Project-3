from flask import Flask, jsonify

from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

DATABASE_URI = 'postgresql://postgres:postgres@localhost:5432/project_3'
engine = create_engine(DATABASE_URI)
session = Session(bind=engine)

# Declare a Base using `automap_base()`
Base = automap_base()

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

if __name__ == '__main__':
    app.run(debug=True)
