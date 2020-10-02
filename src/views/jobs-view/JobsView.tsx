import React, {useState, useEffect} from "react";
import { Button, ButtonGroup, Intent, Label, MenuItem } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import axios from "axios";
import ReactTable from "react-table";
import { Filter } from "react-table";
//
import ViewControlBar from "../../components/ViewControlBar/ViewControlBar";

export const JobsView = ()=> {
  const [jobsData, setJobsData] = useState();
  const [filter, setFilter] = useState();

  const fetchData = (filter:any) =>{
    console.log(filter);

  }


  useEffect(()=>{


  }, [filter]);


  return <div>JobsView</div>;
}
