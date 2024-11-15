app.get('/api/reports/status/:status', async (req, res) => {
    try {
      const reports = await WasteReport.find({ status: req.params.status }).populate('userId');
      res.status(200).json(reports);
    } catch (error) {
      res.status(500).json({ message: "Error fetching reports", error });
    }
  });
  