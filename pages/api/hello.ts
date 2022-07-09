// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

let test = 1;

export default (req, res) => {
  test++;
  res.status(200).json({ name: 'John Doe', count: test })
}
