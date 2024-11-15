app.get('/api/reports', async (req, res) => {
    try {
      const reports = await WasteReport.find().populate('userId');
      res.status(200).json(reports);
    } catch (error) {
      res.status(500).json({ message: "Error fetching reports", error });
    }
  });
  