import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
export const AuthTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="SignIn" />
          <Tab label="SignUp" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <SignIn />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SignUp />
      </TabPanel>
    </Box>
  );
};
