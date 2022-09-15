import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const SignInUpContainer = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const paperstyle = { width: 200, margin: "10px auto" };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  return (
    <Paper style={paperstyle}>
      <Tabs value={value} onChange={handleChange} aria-label=" tabs">
        <Tab label="SignIn" />
        <Tab label="SignUp" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <SignIn handleChange={handleChange} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SignUp handleChange={handleChange} />
      </TabPanel>
    </Paper>
  );
};

export default SignInUpContainer;
