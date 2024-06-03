import dbConnect from '@/db/dbConnect';
import ShortLink from '@/db/models/ShortLink';

export default async function handler(req, res) {
  await dbConnect();

  switch (req.method) {
    case 'POST':
      const shortLink = await ShortLink.create(req.body);
      res.status(201).send(shortLink);
      break;

    case 'GET':
      const shortLinks = await ShortLink.find();
      res.send(shortLinks);
      break;

    default:
      res.status(404).send();
      break;
  }
}
