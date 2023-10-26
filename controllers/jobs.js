const getAllJobs = async (req, res) => {
    res.send("Get all jobs");
};

const getJob = async (req, res) => {
    res.send("Get one job");
};

const createJob = async (req, res) => {
    res.send("Create a new job");
};

const updateJob = async (req, res) => {
    res.send("Update a job");
};

const deleteJob = async (req, res) => {
    res.send("Delete a job");
};

module.exports = { getAllJobs, getJob, createJob, updateJob, deleteJob };
