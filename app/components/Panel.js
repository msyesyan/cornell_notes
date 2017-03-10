import React from 'react';

const Panel = (props) => {
  return (
    <div className={['panel', props.className].join(' ')} >
      <div className="panel-header"></div>
      <div className="panel-body">
        {React.Children.only(props.panelBody)}
      </div>
    </div>
  )
}

Panel.propTypes = {
}

export default Panel;
