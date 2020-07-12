import React, { useState } from "react";
import "./PersonalProjects.scss";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "../../UI/Tabs/TabPanel/TabPanel";
import ReactProjectItems from "./PersonalProjectItems/React/ReactProjectItems";
import ReactNativeProjectItems from "./PersonalProjectItems/ReactNative/ReactNativeProjectItems";
import NegativeTopMargin from "../../Layout/NegativeTopMargin/NegativeTopMargin";

const PersonalProjects = (props) => {
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <NegativeTopMargin>
      <div className="tabs">
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            variant="fullWidth"
            aria-label="nav tabs example"
            className="appBar"
          >
            <Tab className="tabTitle" label="React" {...a11yProps(0)} />
            <Tab className="tabTitle" label="React Native" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <ReactProjectItems />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <ReactNativeProjectItems />
          </TabPanel>
        </SwipeableViews>
      </div>
    </NegativeTopMargin>
  );
};

export default PersonalProjects;
