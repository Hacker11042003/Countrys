import React, { useEffect, useState } from "react";
import "./Flag.css";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const url = "https://restcountries.com/v3.1/all";

const Flags = () => {
  const [city, setCity] = useState([]);
  const [search, setSearch] = useState("");

  const filteredCountries = city.filter((country) => {
    return country.name.common.toLowerCase().includes(search.toLowerCase());
  });

  // const filterCity = (searchText, listCity) =>{
  // if(!searchText){
  // return listCity
  // }
  // return listCity.filter(() => {})
  // }

  // const filteredCountries = city.filter(country=>{
  //   return country.name.toLowerCase().includes(value.toLowerCase())
  // })

  const fetchCountry = async () => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setCity(data);
  };

  useEffect(() => {
    fetchCountry();
  }, []);

  if (city === null) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <div className="filter_input">
        <div className="input">
          <img src="" alt="" />
          <input
            type="text"
            placeholder="Search for a country..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown button
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="cards">
        {filteredCountries.map((el) => {
          return (
            <Card sx={{ maxWidth: 345, margin: "1rem" }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={el.flags.png}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {el.name.common}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Population:{el.population}
                </Typography>{" "}
                <Typography variant="body2" color="text.secondary">
                  Region:{el.region}
                </Typography>{" "}
                <Typography variant="body2" color="text.secondary">
                  Capital:{el.capital}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Flags;
