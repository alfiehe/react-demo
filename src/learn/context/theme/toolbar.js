import React from "react";
import Button from './button';

function Toolbar(props) {
  return (
    <Button onClick={props.changeTheme} />
  )
}

export default Toolbar;