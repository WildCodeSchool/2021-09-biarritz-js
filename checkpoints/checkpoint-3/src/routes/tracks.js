const trackRouter = require('express').Router();
const Track = require('../models/track');

// mes routes GET, POST, DELETE
trackRouter.get('/', async (req, res) => {
  const tracks = await Track.getAll();
  res.status(200).send(tracks);
});

trackRouter.get('/:id', async (req, res) => {
  const track = await Track.getById(req.params.id);
  track ? res.status(200).send(track) : res.sendStatus(404);
});

trackRouter.post('/', async (req, res) => {
  const idTrack = await Track.create(req.body);
  res.status(201).json({id:idTrack, ...req.body});
});


trackRouter.delete('/:id', async (req, res) => {
  const trackDeleted = await Track.deleteOne(req.params.id);
  trackDeleted ? res.sendStatus(204) : res.sendStatus(404);
});

trackRouter.put('/:id', async (req, res) => {
  const trackUpdated = await Track.update(req.params.id, req.body);
  trackUpdated ? res.sendStatus(204) : res.sendStatus(404);
});

module.exports = trackRouter;
