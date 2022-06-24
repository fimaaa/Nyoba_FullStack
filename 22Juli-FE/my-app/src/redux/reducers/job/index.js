import { GET_JOB, GET_DETAIL_JOB, ADD_JOB } from "../../actions/jobActions"

const job = (state, action) => {
    switch (action.type) {
        case GET_JOB:
            return {
                ...state,
                getJobResult: action.payload.data,
                getJobLoading: action.payload.loading,
                getJobError: action.payload.errorMessage,
                listJobHasNext: true,
            }
        case ADD_JOB:
            return {
                ...state,
                getJobResult: action.payload.data,
                listJobLoading: action.payload.loading,
                listJobHasNext: action.payload.hasNext,
                listJobError: action.payload.errorMessage
            }
        case GET_DETAIL_JOB:
            return {
                ...state,
                getDetailJobResult: action.payload.data,
                getDetailJobLoading: action.payload.loading,
                getDetailJobError: action.payload.errorMessage
            }
        default:
            return state
    }
}

export default job;