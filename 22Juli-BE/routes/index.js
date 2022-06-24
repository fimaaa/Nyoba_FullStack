const route = require('express').Router();

route.get('/api', (req, res) => {
    res.json({
        message: "Homepage Codigram"
    })
})

const userRoutes = require('./user');
route.use('/api/users', userRoutes);

const jobsRoutes = require('./jobs');
route.use('/api/jobs', jobsRoutes);


module.exports = route;