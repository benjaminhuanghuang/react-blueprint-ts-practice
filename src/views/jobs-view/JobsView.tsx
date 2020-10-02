import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, Intent, Label, MenuItem } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import axios from "axios";
import ReactTable from "react-table";
import "react-table/react-table.css"
import { Filter } from "react-table";
//
import ViewControlBar from "../../components/ViewControlBar/ViewControlBar";
import { useSession } from '../../UserProvider';
//
import { getJobs } from "../../api/workflow";

export const JobsView = () => {
  const [jobsData, setJobsData] = useState([]);
  const [filter, setFilter] = useState(null);
  const [loading, setLoading] = useState(false);
  const {token} = useSession();

  const fetchData = async (filter: any) => {
    setLoading(true);

    const data = await getJobs(token, filter);
    setJobsData(data.workflows as any);
    setLoading(false);
  };

  useEffect(() => {
    fetchData(null);
  }, [filter]);


  const deleteRow = (id:string)=>{
    console.log(id);

  }
  const columns = [
    {
      Header: "Job Id",
      accessor: "id",
      style:{
        textAlign: 'center'
      }
    },
    {
      Header: "User Name",
      accessor: "userName",
    },
    {
      Header: "Type",
      accessor: "type",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Start Time",
      accessor: "startTime",
    },
    {
      Header: "End Time",
      accessor: "endTime",
      filterable: false
    },
    {
      Header: "Progress",
      accessor: "progress",
      sortable: false,
      filterable: false,
      style:{
        textAlign: 'center'
      },
      width: 200,
      maxWidth: 200,
      Cell: (props: any) => {
        return (
          <progress value={props.original.progress} max={100}></progress>
        )
      },
    },
    {
      Header: "Actions",
      Cell: (props:any) => {
        return (
          <button style={{backgroundColor:'grey'}}
            onClick={()=>{
              console.log(props);
              deleteRow(props.original.id);

            }}
          >Delete</button>
        )
      },
      sortable: false,
      filterable: false,
    }
  ]
  return (!loading && <div>
    <ReactTable
      className="filter-table -striped -highlight"
      data={jobsData as any}
      columns = {columns}
      defaultPageSize={20}
      showPagination={true}
      sortable={true}
      filterable
      noDataText = {"There is no data"}
    />
  </div>);
};
