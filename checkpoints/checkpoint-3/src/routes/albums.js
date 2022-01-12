/* eslint-disable no-unused-vars */
const albumRouter = require('express').Router();
const Album = require('../models/album');
const Track = require('../models/track');

// mes routes GET, POST, DELETE
albumRouter.get('/', async (req, res) => {
  const albums = await Album.getAll();
  res.status(200).send(albums);
});

albumRouter.get('/:id', async (req, res) => {
  const album = await Album.getById(req.params.id);
  album ? res.status(200).send(album) : res.sendStatus(404);
});

albumRouter.post('/', async (req, res) => {
  const idAlbum = await Album.create(req.body);
  res.status(201).json({id:idAlbum, ...req.body});
});

albumRouter.delete('/:id', async (req, res) => {
  const albumDeleted = await Album.deleteOne(req.params.id);
  albumDeleted ? res.sendStatus(204) : res.sendStatus(404);
});

albumRouter.get('/:id/tracks', async (req, res) => {
  const tracks = await Track.getTracksByIdAlbum(req.params.id);
  tracks ? res.status(200).send(tracks) : res.sendStatus(404);
});

albumRouter.put('/:id', async (req, res) => {
  const albumUpdated = await Album.update(req.params.id, req.body);
  albumUpdated ? res.sendStatus(204) : res.sendStatus(404);
});

module.exports = albumRouter;
