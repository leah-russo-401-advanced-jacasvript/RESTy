import React from 'react';
import JSONPretty from 'react-json-pretty';

function Results(props) {

  return(
    <ul>
      <JSONPretty id="json-pretty" data={props.results}/>
    </ul>
  )
}
export default Results;