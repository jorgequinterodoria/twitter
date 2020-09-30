import React from 'react'
import '../css/Sidebar.css'
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar__twitterIcon" />

            <SidebarOption active Icon={HomeIcon} text="Inicio" />
            <SidebarOption Icon={SearchIcon} text="Explorar" />
            <SidebarOption Icon={NotificationsNoneIcon} text="Notificaciones" />
            <SidebarOption Icon={MailOutlineIcon} text="Mensajes" />
            <SidebarOption Icon={BookmarkBorderIcon} text="Guardados" />
            <SidebarOption Icon={ListAltIcon} text="Listas" />
            <SidebarOption Icon={PermIdentityIcon} text="Perfil" />
            <SidebarOption Icon={MoreHorizIcon} text="Más opciones" />

            {/* Button -> Tweet */}
            <Button variant="outlined" className="sidebar__tweet" fullWidth>
                Twittear
            </Button>
        </div>
    )
}

export default Sidebar
