const express = require('express');
const os = require('os');

const app = express();
const PORT = 3000;

// Serve static UI
app.use(express.static('public'));

// Main status API
app.get('/status', (req, res) => {
  res.json({
    app: "DevOps Health Dashboard",
    status: "Running",
    hostname: os.hostname(),
    platform: os.platform(),
    uptime_seconds: Math.floor(os.uptime()),
    cpu_cores: os.cpus().length,
    memory: {
      total_MB: Math.round(os.totalmem() / 1024 / 1024),
      free_MB: Math.round(os.freemem() / 1024 / 1024)
    },
    timestamp: new Date()
  });
});

// Health endpoint (for load balancers / k8s)
app.get('/health', (req, res) => {
  res.status(200).send("OK");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
