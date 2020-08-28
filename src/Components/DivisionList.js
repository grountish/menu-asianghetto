import React, { useContext } from "react";
import { DataContext } from "../Context/Context";
import Division from "./Division";
import { Link } from "react-router-dom";
import CategoryAloneList from './CategoryAloneList'
const DivisionList = () => {
  const { foundPlace, lang } = useContext(DataContext);

  const divisions = foundPlace.divisiones;
  return (
    <div className="centered fadeIn" >
      <div className="list-add division-list">
        <ul className="list-food">
        <CategoryAloneList />
          {divisions.map((division, index) => {
            return (
              <Link
                style={{ color: foundPlace.color }}
                key={index}
                to={`${foundPlace.place}/division/${division.nombre_es}`}
              >
                <Division {...division} lang={lang} />
              </Link>
            );
          })}
        </ul>
      </div>
      
    </div>
  );
};

export default DivisionList;

