import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/avatar.jpg"
          alt="Kamlesh Image"
          width={300}
          height={300}
        />
      </div>
      <h1>HI, I'm Kamlesh</h1>
      <p>I am MERN stack Developer</p>
    </section>
  );
}

export default Hero;
