import React from "react";
import { categoryInfos} from "./catagoryfullinfos";
import CategoryCard from "./CatagoryCard";
import classes from "./catagory.module.css";

const Category = () => {
  return (
    <section className={classes.Category__container}>
      {categoryInfos.map((infos) => (
        <CategoryCard data={infos} key={infos.name} />
      ))}
    </section>
  );
}

export default Category;
