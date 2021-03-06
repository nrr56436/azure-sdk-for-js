// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This sample demonstrates how to retrieve time series data.
 */
// Load the .env file if it exists
require("dotenv").config();

const { MetricsAdvisorKeyCredential, MetricsAdvisorClient } = require("@azure/ai-metrics-advisor");

async function main() {
  // You will need to set these environment variables or edit the following values
  const endpoint = process.env["METRICS_ADVISOR_ENDPOINT"] || "<service endpoint>";
  const subscriptionKey = process.env["METRICS_ADVISOR_SUBSCRIPTION_KEY"] || "<subscription key>";
  const apiKey = process.env["METRICS_ADVISOR_API_KEY"] || "<api key>";
  const metricId = process.env["METRICS_ADVISOR_METRIC_ID"] || "<metric id>";
  const detectionConfigId =
    process.env["METRICS_ADVISOR_DETECTION_CONFIG_ID"] || "<detection config id>";

  const credential = new MetricsAdvisorKeyCredential(subscriptionKey, apiKey);

  const client = new MetricsAdvisorClient(endpoint, credential);

  await getMetricSeriesData(client, metricId);

  await getEnrichedSeriesData(client, detectionConfigId);
}

// get enriched series data for a detection configuration
async function getEnrichedSeriesData(client, detectionConfigId) {
  console.log("Retrieving metric enriched series data...");
  try {
    const result = await client.getMetricEnrichedSeriesData(
      detectionConfigId,
      new Date("01/01/2020"),
      new Date("09/12/2020"),
      [
        { city: "Manila", category: "Handmade" },
        { city: "Shanghai", category: "Shoes Handbags & Sunglasses" }
      ]
    );

    for (const enriched of result.results || []) {
      console.log("enriched series:");
      console.log(enriched.series);
      if (enriched.timestamps && enriched.timestamps.length > 0) {
        for (let i = 0; i < enriched.timestamps.length; i++) {
          console.log("  ----");
          console.log(`  timestamp: ${enriched.timestamps[i]}`);
          console.log(`  is abnormal?: ${enriched.isAnomaly[i]}`);
          console.log(`  value: ${enriched.values[i]}`);
          console.log(`  expected value: ${enriched.expectedValues[i]}`);
          console.log(`  lower bound: ${enriched.lowerBounds[i]}`);
          console.log(`  upper bound: ${enriched.upperBounds[i]}`);
          console.log(`  period: ${enriched.periods[i]}`);
        }
      }
    }
  } catch (err) {
    console.log("!!!!!  error in listing enriched series data");
    console.log(err);
  }
}

async function getMetricSeriesData(client, metricId) {
  console.log("Retrieving metric series data...");
  try {
    const result = await client.getMetricSeriesData(
      metricId,
      new Date("09/01/2020"),
      new Date("09/12/2020"),
      [
        { city: "Manila", category: "Handmade" },
        { city: "Shanghai", category: "Shoes Handbags & Sunglasses" }
      ]
    );

    for (const series of result.metricSeriesDataList || []) {
      console.log(series.definition);
      if (series.timestamps && series.timestamps.length > 0)
        for (let i = 0; i < series.timestamps.length; i++) {
          console.log(`  ${series.timestamps[i]}`);
          console.log(`  ${series.values[i]}`);
        }
    }
  } catch (err) {
    console.log("!!!!!  error in listing metric series data");
    console.log(err);
  }
}

main()
  .then((_) => {
    console.log("Succeeded");
  })
  .catch((err) => {
    console.log("Error occurred:");
    console.log(err);
  });
