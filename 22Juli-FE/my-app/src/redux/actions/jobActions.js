import axios from "axios";

const URL = 'http://dev3.dansmultipro.co.id/api/recruitment/positions';

export const GET_JOB = "GET_JOB";
export const GET_DETAIL_JOB = "GET_DETAIL_JOB";
export const ADD_JOB = "ADD_JOB";

export const getJobs = (dispatch, description, location, fullTime) => {
        console.log("2,Masuk ACtion")
        dispatch({
            type: GET_JOB,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        axios({
            method: 'GET',
            url: URL+".json",
            params: {
                description: description,
                location: location, 
                fullTime: fullTime, 
                page: 1
            },
            timeout: 120000
        })
            .then( (res) => {
                console.log("3. Print Success = ",res)
                dispatch({
                    type: GET_JOB,
                    payload: {
                        loading: false,
                        data: res.data,
                        errorMessage: false
                    }
                })
            })
            .catch( (err) => {
                console.log("3. Print error = ",err)
                dispatch({
                    type: GET_JOB,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })
    
}

export const addJobs = (dispatch, description, location, fullTime, page, listJobsBefore) => {
    console.log("ADD JOB", page)
    dispatch({
        type: ADD_JOB,
        payload: {
            loading: true,
            hasNext: false,
            data: false,
            errorMessage: false
        }
    })
    axios({
        method: 'GET',
        url: URL+".json",
        params: {
            description: description,
            location: location, 
            fullTime: fullTime, 
            page: page
        },
        timeout: 120000
    })
        .then( (res) => {
            let data = [...listJobsBefore, ...res.data]
            console.log("ADD JOB SUCCESS", data)
            dispatch({
                type: ADD_JOB,
                payload: {
                    loading: false,
                    hasNext: true,
                    data: data,
                    errorMessage: false
                }
            })
        })
        .catch( (err) => {
            console.log("ADD JOB ERROR", err)
            dispatch({
                type: ADD_JOB,
                payload: {
                    loading: false,
                    data: listJobsBefore,
                    hasNext: false,
                    errorMessage: err.message
                }
            })
        })

}

export const getDetailJobs = (dispatch, id) => {
    dispatch({
        type: GET_DETAIL_JOB,
        payload: {
            loading: true,
            data: false,
            errorMessage: false
        }
    })
    axios({
        method: 'GET',
        url: URL+"/"+id,
        timeout: 120000
    })
        .then( (res) => {
            dispatch({
                type: GET_DETAIL_JOB,
                payload: {
                    loading: false,
                    data: res.data,
                    errorMessage: false
                }
            })
        })
        .catch( (err) => {
            dispatch({
                type: GET_DETAIL_JOB,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: err.message
                }
            })
        })

}
