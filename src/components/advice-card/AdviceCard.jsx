import { motion } from "framer-motion";
import "./advice-card.scss";

import dividerMobile from "../../images/pattern-divider-mobile.svg";
import dividerDesktop from "../../images/pattern-divider-desktop.svg";
import diceIcon from "../../images/icon-dice.svg";

const AdviceCard = ({ advice, onClick }) => {
  return (
    <section className='card__container'>
      <h1>Advice #{advice.id}</h1>
      <p>"{advice.advice}"</p>
      <picture>
        <source
          media='(min-width: 800px)'
          srcSet={dividerDesktop}
          type='image/svg+xml'
        />
        <img src={dividerMobile} alt='pause divider' />
      </picture>
      <motion.div
        className='card__cta'
        animate={{ rotate: 270 }}
        transition={{
          repeat: Infinity,
          duration: 2,
          repeatDelay: 1,
        }}
      >
        <button type='button' onClick={onClick}>
          <img src={diceIcon} alt='2d dice' />
        </button>
      </motion.div>
    </section>
  );
};

export default AdviceCard;
