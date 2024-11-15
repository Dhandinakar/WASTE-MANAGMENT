app.post('/api/reports', async (req, res) => {
    const { location, issueType, description, userId } = req.body;
    const newReport = new WasteReport({ location, issueType, description, userId });
    try {
      await newReport.save();
      res.status(201).json(newReport);
    } catch (error) {
      res.status(500).json({ message: "Error creating report", error });
    }
  });
  