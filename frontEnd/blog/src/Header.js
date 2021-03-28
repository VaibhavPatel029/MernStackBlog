import React, { useEffect, useState } from "react";
import { Avatar, Button, Typography } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import {useHistory, useLocation} from 'react-router-dom'
import "./Header.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import From from "./Form/From";

function Header({ name, submit }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem('profile')));
  },[location])

 const logout = () =>{
    dispatch ({type : 'LOGOUT'});
    history.push('/');
    setUser(null);
 }

  return (
    <div className="header">
      <div className="header_logo">
        <div className="title">
          <Typography component={Link} to="/" variant="h3">
            LOGO
          </Typography>
        </div>
        <div className="user__detail">
          {user?.result ? (
            <div className="user__info">
              <Avatar
                className="avatar"
                alt={user?.result.name}
                src={user?.result.imageUrl}
              >
                {user?.result.name.charAt(0)}
              </Avatar>
              <Typography className="" variant="h6">
                {user?.result.name}
              </Typography>
            </div>
          ) : null}
        </div>
      </div>
      <div className="header_icons">
        <Button component={Link} to="/write" type="submit" size="large">
          {name}
        </Button>
        <Button component={Link} to="/yourpost" color="primary" size="large">
          Your Articles
        </Button>
        {user?.result ? (
          <Button component={Link} to="/auth" onClick={logout} size="large">
            LogOut
          </Button>
        ) : (
          <Button component={Link} to="/auth" size="large">
            Login
          </Button>
        )}
      </div>
    </div>
  );
}

export default Header;
