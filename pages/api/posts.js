import fetch from 'node-fetch';

export default async (req, res) => {
  const { body, method } = req;
  if (method === 'POST') {
    const result = await fetch('http://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        'x-token-access': 'random',
      },
    });
    const data = await result.json();
    res.status(200).end();
  }
};
