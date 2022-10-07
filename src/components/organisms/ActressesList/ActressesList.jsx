import classes from "./actresses-list.module.scss";

export const ActressesList = ({ data }) => {
  return (
    <section className={classes.list}>
      <div className={classes.list__container}>
        <h1>Lista de Actrices</h1>

        <div className={classes.list__actresses}>
          {data && (
            <>
              {data.actresses.map((actress) => {
                return (
                  <div
                    className={classes.list__actressesCard}
                    key={actress?.id}
                  >
                    <div>
                      <img src={actress?.img} alt={`actress-${actress?.id}`} />
                    </div>

                    <div>{actress?.name}</div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </section>
  );
};
