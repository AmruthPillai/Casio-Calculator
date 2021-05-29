import styles from '../styles/Calculator.module.scss';

const Calculator = () => (
  <div className={styles.container}>
    <div className={styles.calculator}>
      <header>
        <div className={styles.logo}>CASIO</div>
        <div className={styles.solar} />
        <div className={styles.model}>MJ-120D</div>
      </header>

      <section className={styles.display}>
        <div className={styles.placeholder}>888888888888</div>
      </section>

      <section className={styles.buttonGrid}>
        {/* Row 1 */}
        <div>DISP</div>
        <div>GO TO</div>
        <div>AUTO REVIEW</div>
        <div>CORRECT</div>
        <div>
          <i className="material-icons">
            arrow_drop_up
          </i>
        </div>
        <div>
          <i className="material-icons">
            arrow_drop_down
          </i>
        </div>

        {/* Row 2 */}
        <div>TAX+</div>
        <div>TAX-</div>
        <div>%</div>
        <div>&#8730;</div>
        <div>
          <i className="material-icons">
            play_arrow
          </i>
        </div>
        <div>MU</div>

        {/* Row 3 */}
        <div>
          <sup>+</sup>
          <small>/</small>
          <sub>-</sub>
        </div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>x</div>
        <div>&#247;</div>

        {/* Row 4 */}
        <div>C</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>-</div>
        <div>MRC</div>

        {/* Row 5 */}
        <div>AC</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>+</div>
        <div>M-</div>

        {/* Row 6 */}
        <div>0</div>
        <div>00</div>
        <div>.</div>
        <div>=</div>
        <div>M+</div>
      </section>
    </div>
  </div>
);

export default Calculator;
