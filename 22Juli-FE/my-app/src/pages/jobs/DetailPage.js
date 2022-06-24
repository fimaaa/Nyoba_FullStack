import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppState } from "../../contexts/appState";
import { getDetailJobs } from "../../redux/actions/jobActions";

const DetailPage = () => {
    const [state, dispatch] = useAppState(); 
    const { id } = useParams();
    const { getDetailJobResult, getDetailJobLoading, getDetailJobError } = state

    useEffect(() => {
        getDetailJobs(dispatch, id); 
    }, [dispatch])

    
    return(
        <div>
             {
            getDetailJobResult ? (
                // <p>SUCCESS</p>
                <div dangerouslySetInnerHTML={{ __html: getDetailJobResult.description }}></div>
                // <div>{getDetailJobResult.description}</div> 
            ) : getDetailJobLoading ? (
                <p>Loading...</p>
            ) : (
                <p>{getDetailJobError ? getDetailJobError : "Data Kosong" }</p>
            )}
        </div>
    )
}

export default DetailPage