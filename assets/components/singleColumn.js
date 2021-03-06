import React from 'react';

import classes from '../scss/modules/singleColumn.module.scss';

const Structure = ({sectionId, children}) => {
  return (
    <section id={sectionId} className={(sectionId ? classes[sectionId] : '') + " " + classes.section}>
      <div className={classes.Container}>
        <div className={classes.Row}>
          <div className={classes.Col}>
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Structure;