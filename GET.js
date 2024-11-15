app.get('/api/reports/:id', async (req, res) => {
    try {
      const report = await WasteReport.findById(req.params.id).populate('userId');
      if (report) {
        res.status(200).json(report);
      } else {
        res.status(404).json({ message: "Report not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error fetching report", error });
    }
  });
  