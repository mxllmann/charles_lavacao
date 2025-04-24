

import React, { useState } from "react";
import {
  Stack,
  Link,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import MessageIcon from "@mui/icons-material/Message";
import InfoIcon from "@mui/icons-material/Info";


export default function MobileMenu() {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleCloseMenu = () => {
        setAnchorEl(null);
      };

    return (
        <>
              <IconButton onClick={handleOpenMenu}>
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                keepMounted
              >
                <MenuItem onClick={handleCloseMenu} component="a" href="/">
                  <ListItemIcon>
                    <DirectionsCarIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </MenuItem>
                <MenuItem onClick={handleCloseMenu} component="a" href="/servicos">
                  <ListItemIcon>
                    <WaterDropIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Serviços" />
                </MenuItem>
                <MenuItem onClick={handleCloseMenu} component="a" href="/contato">
                  <ListItemIcon>
                    <MessageIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Contato" />
                </MenuItem>
                <MenuItem onClick={handleCloseMenu} component="a" href="/sobre">
                  <ListItemIcon>
                    <InfoIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Sobre" />
                </MenuItem>
              </Menu>
            </>
    )
}