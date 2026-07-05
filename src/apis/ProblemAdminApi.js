const axiosInstance = require("../config/axiosInstance");
const {PROBLEM_ADMIN_SERVICE} = require('../config/serverConfig');
const PROBLEM_ADMIN_API = `${PROBLEM_ADMIN_SERVICE}/api/v1`;

async function fetchProblemDetails(problemId){
    try {
        const url = PROBLEM_ADMIN_API + `/problems/${problemId}`
        const response = await axiosInstance.get(url);
        console.log("API RESPONSE: ", response);
        return response.data;
        
    } catch (error) {
        console.log("Something went wrong with fetching problem data");
        console.log(error);
    }
}
module.exports = {
    fetchProblemDetails
} 