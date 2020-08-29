import React, { useContext } from "react";
import { DataContext } from './../Context/Context'


const FoodCategory = ({ lang, nombre, nombre_en, nombre_es, comentario }) => {

  const {foundPlace} = useContext(DataContext)
    const nameFood = () => {
      switch (lang) {
        case "ca":
          return nombre;
        case "en":
          return nombre_en;
        case "es":
          return nombre_es;
        default: return nombre;
    }
  }
    return (
      <div
        className="box "
        style={{
          height: `calc(100vh/${foundPlace.categorias.length})`,
          alignItems: "center",
          display: "flex",
          flexDirection:"column"
        }}
      >
        <h1
          className="headerCategory nice-border "
          style={{
            fontSize: `calc(92vh/${foundPlace.categorias.length}/2.5)`,
            margin: "auto",
            color: foundPlace.color,
            fontFamily: "Brandon Bold"
          }}>
          {nameFood()}
        </h1>
      
      </div>
    );
  }


export default FoodCategory;