const axios = require('axios');
const {parse, stringify} = require('flatted');

const URL = 'http://dev3.dansmultipro.co.id/api/recruitment/positions';

class JobsController {
    static async getAllJobs(req, res) {
        console.log("REQUEST = ",req.query)
        axios
            .get(URL+".json", {
                params:{
                    description: req.query.description,
                    location: req.query.location,
                    full_time: req.query.full_time,
                    page: req.query.page
                }
            })
            .then(response => {
                res.status(200).json({
                    status: 200,
                    success: true,
                    data: response.data
                })
            })
            .catch(error => {
                console.log("ERROR ",error)
                res.status(500).json({
                    status: error.status,
                    message:error.message,
                    error: error
                })
            });
    }
    static async getDetailJobs(req, res) {
        axios
            .get(URL+"/"+req.query.id)
            .then(res => {
                res.status(200).json(res.data)
            })
            .catch(error => {
                res.status(500).json({
                    message: `Failed`,
                    error: error
                })
            });
    }
}

module.exports = JobsController;