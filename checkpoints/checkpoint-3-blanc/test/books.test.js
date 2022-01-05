const supertest = require('supertest');

const app = require('../src/app');

const booksKeys = [
  'idbooks',
  'title',
  'genre',
  'picture',
  'artist',
  'summary',
  'year',
];
const bookToCreate = {
  title: 'A Song Of Ice And Fire',
  genre: 'fantasy',
  year: 2000,
  picture:
    'https://upload.wikimedia.org/wikipedia/en/thumb/9/93/AGameOfThrones.jpg/220px-AGameOfThrones.jpg',
  artist: 'George R R Martin',
  summary:
    'A Game of Thrones is the first novel in A Song of Ice and Fire, a series of fantasy novels by the American author George R. R. Martin. It was first published on August 1, 1996. The novel won the 1997 Locus Award[2] and was nominated for both the 1997 Nebula Award[2] and the 1997 World Fantasy Award.[3] The novella Blood of the Dragon, comprising the Daenerys Targaryen chapters from the novel, won the 1997 Hugo Award for Best Novella. In January 2011, the novel became a New York Times Bestseller[4] and reached No. 1 on the list in July 2011.[5]',
};

describe('BOOKS ROUTES', () => {
  const persistentDatas = {};

  it('should get the books list 🧪 /api/books', async () => {
    const res = await supertest(app)
      .get('/api/books')
      .expect(200)
      .expect('Content-Type', /json/);

    expect(Array.isArray(res.body)).toBe(true);

    res.body.forEach((books) => {
      booksKeys.map((prop) => {
        expect(books).toHaveProperty(prop);
      });
    });
  });

  it('should get the books with id 1 🧪 /api/books/1', async () => {
    const res = await supertest(app)
      .get('/api/books/1')
      .expect(200)
      .expect('Content-Type', /json/);

    booksKeys.map((prop) => {
      expect(res.body).toHaveProperty(prop);
    });
  });

  it('should create a new books 🧪 /api/books', async () => {
    const res = await supertest(app)
      .post('/api/books')
      .send(bookToCreate)
      .expect(201)
      .expect('Content-Type', /json/);

    booksKeys.map((prop) => {
      expect(res.body).toHaveProperty(prop);
    });

    persistentDatas.createdBooks = res.body;
  });

  it(`should update the created books title 🧪 /api/books/`, async () => {
    await supertest(app)
      .put(`/api/books/${persistentDatas.createdBooks.idbooks}`)
      .send({
        title: 'The Light Side of the Sun',
      })
      .expect(204);

    const res = await supertest(app).get(
      `/api/books/${persistentDatas.createdBooks.idbooks}`
    );

    expect(res.body).toHaveProperty('title', 'The Light Side of the Sun');
  });

  it(`should delete the created books 🧪 /api/books/`, async () => {
    await supertest(app)
      .delete(`/api/books/${persistentDatas.createdBooks.idbooks}`)
      .expect(204);

    await supertest(app)
      .get(`/api/books/${persistentDatas.createdBooks.idbooks}`)
      .expect(404);
  });
});
