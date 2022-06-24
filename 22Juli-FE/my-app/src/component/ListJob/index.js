import React, { useEffect, useState} from 'react'
import { useAppState } from '../../contexts/appState';
import { getJobs, addJobs } from '../../redux/actions/jobActions';
import { useNavigate } from 'react-router-dom';

function ListJob(data) {
    const [state, dispatch] = useAppState(); 
    const { 
        getJobResult, getJobLoading, getJobError ,
        listJobLoading, listJobHasNext, listJobError
    } = state

    const navigation = useNavigate();

    const [page, setPage] = useState(1);

    useEffect(() => {
        getJobs(dispatch, data.description, data.location, data.fullTime, data.page); 
    }, [dispatch])

    function addJob() {
        console.log("USE EFFECT ADDJOB")
        setPage(page+1)
        addJobs(dispatch, data.description, data.location, data.fullTime, page+1, getJobResult); 
    }

    return (
        <div>
            <h4>List Jobs</h4> 
            {
                getJobResult ? (
                    getJobResult.map((job) => { 
                        if(job != null){
                            if((data.fullTime && data.type == "Full Time") || (!data.fullTime && data.type != "Full Time")) {
                                return (
                                    <p  onClick={() => {           
                                        navigation('/home/'+job.id);
                                        window.location.reload();
                                    }} key={job.id}>{job.type} - {job.company}</p>
                                )
                            } 
                        } 
                    })
                ) : getJobLoading ? (
                    <p>Loading...</p>
                ) : (
                    <p>{getJobError ? getJobError : "Data Kosong" }</p>
                )
            }
            {
                getJobResult && listJobLoading ? (<p>Loading...</p> ): <div></div>
            }
            {
                getJobResult ? (listJobHasNext ? <div onClick={addJob}>More List</div> : <p>End Of List</p>) : <div></div>
            }
            {
                getJobResult && listJobError && listJobHasNext ? (<p>${listJobError}</p> ): <div></div>
            }
        </div>
    )
}

export default ListJob