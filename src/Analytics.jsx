import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", visitors: 1200 },
  { month: "Feb", visitors: 1800 },
  { month: "Mar", visitors: 1600 },
  { month: "Apr", visitors: 2400 },
  { month: "May", visitors: 3100 },
  { month: "Jun", visitors: 4200 },
];

const metrics = [
  { value: "4.8K", label: "Website Visitors" },
  { value: "2.1K", label: "Product Views" },
  { value: "318", label: "WhatsApp Clicks" },
  { value: "5.8%", label: "Conversion Rate" },
];

function Analytics() {
  return (
    <section id="analytics" className="section analytics">
      <div className="container">
        <p className="section-label">04 / ANALYTICS</p>

        <div className="analytics-heading">
          <h2 className="section-title">
            Data should inform every marketing decision.
          </h2>

          <p>
            A sample marketing performance dashboard demonstrating how
            campaign and website data can be transformed into useful
            business insights.
          </p>
        </div>

        <div className="metrics-grid">
          {metrics.map((metric) => (
            <div className="metric-card" key={metric.label}>
              <h3>{metric.value}</h3>
              <p>{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="chart-card">
          <div className="chart-header">
            <div>
              <p>Website Performance</p>
              <h3>Visitor Growth</h3>
            </div>

            <span className="demo-badge">Sample Data</span>
          </div>

          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <XAxis dataKey="month" axisLine={false} tickLine={false} />

                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="visitors"
                  stroke="currentColor"
                  fill="currentColor"
                  fillOpacity={0.15}
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Analytics;