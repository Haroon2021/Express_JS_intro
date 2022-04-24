;const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

router.get('/', (req,res) => {
    res.send('User List');
})

router.get('/new', (req,res) => {
    res.send('New User form');
});

router.post('/', (req, res) => {
    res.send('Create User');
});

// Always put the statis routes above the dynamic routes!!

// router.get('/:id', (req, res) => {
//     console.log(req.params.id);
//     res.send(`Get User with ID ${req.params.id}`);
// });

// router.put('/:id', (req, res) => {
//     console.log(req.params.id);
//     res.send(`Update User with ID ${req.params.id}`);
// });

// router.delete('/:id', (req, res) => {
//     console.log(req.params.id);
//     res.send(`Delete User with ID ${req.params.id}`);
// });

// The alternative to using all 3 methods (lines 19 to 32) seperately above is this:

router
    .route("/:id")
    .get((req, res) => {
        // console.log(req.user)
        res.send(`Get User with ID ${req.params.id}`);
    })
    .put((req, res) => {
        
        res.send(`Update User with ID ${req.params.id}`);
    })
    .delete((req, res) => {
        
        res.send(`Delete User with ID ${req.params.id}`);
    })

const users = [{name: "Kyle"},{name:"Sally"}]
router.param("id", (req,res,next,id) => {
    req.user = users[id]
    next()
})


module.exports = router;