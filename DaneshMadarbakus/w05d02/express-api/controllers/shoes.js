const Shoe = require('../models/shoe');

//Index
function shoesIndex(req, res) {
  Shoe.find({}, (err, shoes) => {
    if (err) res.status(500).json({ message: err });
    if (!shoes) return res.status(404).json({ message: 'No shoes found'});
    return res.status(200).json(shoes);
  });
}

function shoesCreate(req, res) {
  Shoe.create(req.body.shoe, (err, shoe) => {
    if (err) return res.status(500).json({message: err });
    if (!shoe) return res.status(404).json({ message: 'Please send the correct information'});
    return res.status(201).json(shoe);
  });
}

function shoesShow(req, res) {
  Shoe.findById(req.params.id)
  .exec((err, shoe) => {
    if(err) return res.json({ message: err });
    if(!shoe) return res.json({ message: 'Not a shoe!'});
    return res.json(shoe);
  });
}

function shoesUpdate(req, res) {
  Shoe.findByIdAndUpdate(req.params.id, (err, shoe) => {
    if (err) return res.json({ message: 'Something went wrong.' });
    if (!shoe) return res.json({ message: 'No shoe was found!' });
    return res.json({ message: 'Successfully updated'});
  });
}

function shoesDelete(req, res) {
  Shoe.findByIdAndRemove(req.params.id, (err) => {
    if (err) return res.json({ message: 'Something went wrong.' });
    return res.json({message: 'shoe deleted'});
  });
}

module.exports = {
  index: shoesIndex,
  create: shoesCreate,
  show: shoesShow,
  update: shoesUpdate,
  delete: shoesDelete
};
