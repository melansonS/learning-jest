import React from "react";
import styles from "./tabs.module.css";

const Tabs = () => {
  return (
    <div>
      <ul className={styles.tabs}>
        <li className={styles.current}>Tab 1</li>
        <li>Tab 2</li>
        <li>Tab 3</li>
      </ul>
      <div className={styles.content}>
        <div>
          <h2>Tab 1</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </p>
        </div>
        <div>
          <h2>Tab 2</h2>
          <p>
            sure there isn't anything embarrassing hidden in the middle of text.
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Internet. It uses a dicti There are many variations of
            passages of Lorem Ipsum available, but the majority have suffered
            alteration in some form, by injected humour, or randomised words
            which don't look even slightly believable. If you are going to use a
            passage of Lorem Ipsum, you need to beonary of over 200 Latin words,
            combined with a handful of model sentence structures, to generate
            Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
            therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </p>
        </div>
        <div>
          <h2>Tab 3</h2>
          <p>
            embarrassing hidden in the middle of text. All the Lorem Ipsum
            generators on the Internet tend to repeat predefined chunks as
            necessary, making this the first true generator on the Internet. It
            uses a dictionary of over 200 Latin words, combined with ich don't
            look even slightly believable. If you are going to use a passage of
            Lorem Ipsum, you need to be sure there isn't anythingh looks
            reasonable. The generated Lorem Ipsum is therefore always free from
            repetition, injected humour, or non-characteristic words etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
