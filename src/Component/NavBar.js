import React from "react";
import "./styling.css";

import logo from "../Images/AlibabaLogo.png";
import { AppBar, Typography, TextField, Box, Grid, Chip } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import GradingIcon from "@mui/icons-material/Grading";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import SearchIcon from "@mui/icons-material/Search";
const NavBar = (props) => {
  return (
    <>
      <nav class="navbar d-flex justify-content-center">
        <div class="container-fluied">
          <div className="d-flex justify-content-center">
            <div>
              <span className="pdtTxt px-3">Products</span>
              <div
                className=""
                style={{
                  height: 5,
                  width: 40,
                  marginLeft: 40,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 50,
                  backgroundColor: "black",
                }}
              ></div>
            </div>
            <div>
              <span className="mfsTxt px-3" style={{ fontSize: "1.3rem" }}>
                Manufacturers
              </span>
            </div>
          </div>

          {/* <div className='mainNav'>
        <img src={logo} alt=""  style={{width:"10rem", height:'10rem'}}/>
         
        </div>              */}
        </div>
      </nav>
      <div className="px-3" style={{ border: "1px solid 'balck'" }}>
        <AppBar
          sx={{ height: 60, backgroundColor: "white" }}
          elevation={0}
          position="static"
        >
          <Typography component="div" className="typo">
            <Box>
              <img src={logo} alt="" style={{ width: 200, height: 70 }} />
            </Box>
            <TextField
              className="maintxtfld"
              variant="standard"
              onChange={(e) => props.searchItem(e.target.value)}
              placeholder="What are you Looking for...."
              sx={{
                border: "2px solid #ff6a00",
                borderRadius: "50px 0px 0px 50px",
                width: "80%",
                height: "50%",
                textAlign: "center",
                paddingLeft: 3,
                marginLeft: 2,
              }}
            ></TextField>
            <button className="serchBtn px-5">
              <SearchIcon />
            </button>

            <Box
              sx={{
                paddingLeft: 2,
                display: "flex",
                flexDirection: "row ",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <PersonAddAlt1Icon className="icon" />
              <Box
                className="signtext"
                sx={{ color: "black", fontSize: ".7rem" }}
              >
                SignIn
                {/* <li style={{listStyle:"none"}}>   Join for free</li>  */}
              </Box>
            </Box>

            <Box sx={{ paddingLeft: 3 }}>
              <ForumIcon className="icon" />
              <Box sx={{ color: "black", fontSize: ".7rem" }}>Messages</Box>
            </Box>
            <Box sx={{ paddingLeft: 3 }}>
              <GradingIcon className="icon" />
              <Box sx={{ color: "black", fontSize: ".7rem" }}>order</Box>
            </Box>
            <Box sx={{ paddingLeft: 3, paddingRight: 3 }}>
              <ShoppingCartCheckoutIcon className="icon" />
              <Box sx={{ color: "black", fontSize: ".7rem" }}>Cart</Box>
            </Box>
          </Typography>
        </AppBar>
      </div>
    </>
  );
};

export default NavBar;
