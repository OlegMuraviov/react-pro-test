import styles from './results.module.css';
import image from '../../images/image.png';
import { useState, useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { getTestType, getTestAnswers } from 'redux/testInfo/testInfo-selector';
import { getResult } from 'shared/services/test';

const Results = () => {
  const [result, setResult] = useState({
    items: { result: '84%' },
    loading: false,
    error: null,
  });

  const testType = useSelector(getTestType, shallowEqual);
  const testAnswers = useSelector(getTestAnswers, shallowEqual);

  useEffect(() => {
    const resultFetch = async () => {
      setResult({ ...result, loading: true, error: null });
      try {
        const data = await getResult(testType, testAnswers);
        setResult({
          ...result,
          items: data,
          loading: false,
        });
      } catch (error) {
        setResult({ ...result, loading: false, error: error.message });
      }
    };
    resultFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { items, loading } = result;

  return (
    <>
      <div className={styles.border}>
        <h3 className={styles.description}>[ {testType}_]</h3>
      </div>
      {loading && <p className={styles.loading}>LOADING...</p>}
      <div className={styles.graffic}>{/* <Graffic /> */}</div>
      <ul>
        <li>{Number.parseInt(items.result)}% Correct</li>

        <li>{100 - Number.parseFloat(items.result)}% Incorrect</li>
      </ul>
      <ul className={styles.list}>
        <li className={styles.item}>
          Correct answers -{' '}
          <span className={styles.number}>
            {(12 / 100) * Number.parseFloat(items.result)}
          </span>
        </li>
        <span className={styles.decoration}>|</span>
        <li className={styles.item}>
          Total questions - <span className={styles.number}>12</span>
        </li>
      </ul>
      <img className={styles.image} src={image} alt="Cat" />
      <p className={styles.mainMessage}>Not bad!{items.mainMessage}</p>
      <p className={styles.secondaryMessage}>
        But you still need to learn some materials.{items.secondaryMessage}
      </p>
      <button className={styles.button} type="button">
        Try again
      </button>
    </>
  );
};

export default Results;
