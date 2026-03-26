export default function handler(req, res) {
  const { key } = req.query;

  // Replace this array with all your valid generated codes
  const validKeys = [
    "ABC123",
    "XYZ789",
    "FROST001"
  ];

  res.status(200).json({ valid: validKeys.includes(key) });
}
