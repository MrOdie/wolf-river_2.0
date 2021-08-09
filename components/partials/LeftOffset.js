import * as React from 'react';
import classes from '../../assets/scss/modules/leftOffset.module.scss';

const LeftOffset = ({ parent, children }) => {
  return (
    <>
      <article className={classes[parent]}>{ children } </article>
    </>
  )
};

export default LeftOffset;
