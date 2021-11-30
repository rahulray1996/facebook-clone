import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import './HomeHeader.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from'@material-ui/core';
import GroupAddIcon  from "@material-ui/icons/GroupAdd";
import TelegramIcon  from "@material-ui/icons/Telegram";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";


function HomeHeader(user) {
    const history = useHistory('');

    if(user === false) {
        history.push("/login")
    }

    const logout = (event) => {
        event.preventDefault();
        history.push("/login");
    }

    return (
        <div className="homeHeader">
            <div className="homeHeader_left">
                <Link to="/">
                    <img src="https://i.ibb.co/WzybLQK/del.png" alt="Facebook Logo" className="homeHeader_logo" />
                </Link> 
            </div>

            <div className="homeHeader_inputSearch">
                <input type="text" placeholder="Search" />
                <SearchIcon className="homeHeader_inputButton" />
            </div>

            <div className="homeHeader_icons">
                <section>
                    <Avatar className="homeHeader__avatar" alt="" src="" />
                    <h3 className="homeHeader_name">Rahul</h3>
                </section>

                <h3 className="homeHeader_dash"> | </h3>

                <section>
                    <h3 className="homeHeader_name">Home</h3>
                </section>

                <h3 className="homeHeader_dash"> | </h3>

                <section>
                    <h3 className="homeHeader_name">Find Friends</h3>
                </section>

                <h3 className="homeHeader_dash"> | </h3>

                <section>
                    <h3 className="homeHeader_name">Create</h3>
                </section>

                <h3 className="homeHeader_dash"> | </h3>

                <section>
                    <GroupAddIcon />
                </section>

                <h3 className="homeHeader_dash"> | </h3>

                <section>
                    <TelegramIcon />
                </section>

                <h3 className="homeHeader_dash"> | </h3>

                <section>
                    <NotificationsIcon />
                </section>

                <h3 className="homeHeader_dash"> | </h3>

                <section>
                    <AssignmentIndIcon />
                </section>

                <h3 className="homeHeader_dash"> | </h3>
                
                <section>
                    <div className="dropdown">
                         <ArrowDropDownIcon className="dropdown" /> 
                        <div className="dropdown-content"> 
                            <a onClick={logout}><p>Logout</p></a>
                        </div>
                    </div>
                </section>

                <h3 className="homeHeader_dash"> | </h3>
            </div>
        </div>
    )
}

export default HomeHeader;