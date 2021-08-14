import classes from "./Portfolio.module.css";
import { useState } from "react";
import ProjectsData from "./Projectsdata";

const Portfolio = () => {
  return (
    <div className={classes.containerright} id="portfolio">
      <div>
        <h2 className={classes.title}>Projects</h2>
      </div>
      <div>
        <ul className={classes.projectscontainer}>
          {ProjectsData.map((item) => (
            <li key={item.id}>
              <div className={classes.imgcontainer}>
                <img className={classes.imgs} src={item.pic} alt="" />
                <a href={item.link}>
                  <div className={classes.after}>
                    <p className={classes.view}>View</p>
                  </div>
                </a>
              </div>

              <div className={classes.titlecl}>
                <div className={classes.cardIcons}>
                  <i className="fa fa-github" />
                  <a href={item.link}>{item.title}</a>
                  <i></i>
                  <p className={classes.descr}>{item.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <a href="https://github.com/MilneS">
          <button id="bouton">Full Portfolio</button>
        </a>
      </div>
      <div className={classes.line} />
    </div>
  );
};

export default Portfolio;