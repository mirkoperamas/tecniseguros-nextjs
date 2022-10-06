import classes from "./actresses-list.module.scss";

export const ActressesList = ({ data }) => {
  return (
    <section className={classes.list}>
      <div className={classes.list__container}>
        <h1>Lista de Actrices</h1>

        <div className={classes.list__actresses}>
          {data.actresses.map(({ id, name, img }) => {
            return (
              <div className={classes.list__actressesCard} key={id}>
                <div>
                  <img src={img} alt={`actress-${id}`} />
                </div>

                <div>{name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
