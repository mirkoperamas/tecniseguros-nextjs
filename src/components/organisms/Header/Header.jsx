import Image from "next/image";
import classes from "./header.module.scss";

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__container}>
        <div className={classes.header__logo}>
          <Image
            src="/images/logo.png"
            layout="fixed"
            width={120}
            height={55}
            alt="logo"
          />
        </div>

        <div className={classes.header__links}>
          <a>Link</a>
          <a>Link</a>
          <a>Link</a>
        </div>
      </div>
    </header>
  );
};
