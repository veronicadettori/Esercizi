import React from 'react';
import Badge from 'react-bootstrap/Badge';
import '../style/myBadge.css'

function MyBadge(props) {
  return (
    <Badge className='myBadge' variant={props.color}>{props.text}</Badge>
  );
}

export default MyBadge;
