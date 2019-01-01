const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{
    res.status(200).json({
        message: 'Orders were fetched'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST requests to /products'
    });
});

router.patch('/:productId', (req, res, next) => {
  
        res.status(200).json({
            message: 'Updated product!!',
       });
});

router.delete('/:productId', (req, res, next) => {
  
    res.status(200).json({
        message: 'Deleted product!!!',
   });
});

module.exports = router;