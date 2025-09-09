#!/usr/bin/env node

/**
 * Upload CSV data to Netlify Blobs during build
 * This script runs during the build process to securely upload data
 */

import { getStore } from "@netlify/blobs";
import { readFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function uploadDataToBlobs() {
  try {
    console.log("🔄 Starting data upload to Netlify Blobs...");

    // Initialize the store
    const store = getStore("event-data");

    // Check for data source (environment variable or file)
    let csvData = null;

    // First try environment variable (base64 encoded)
    if (process.env.GUEST_LIST_DATA) {
      console.log("📦 Found data in environment variable, decoding...");
      csvData = Buffer.from(process.env.GUEST_LIST_DATA, "base64").toString(
        "utf-8"
      );
    }
    // Fallback to secure data file
    else {
      console.log("📁 Using secure data file...");
      const secureDataPath = join(
        __dirname,
        "..",
        "data",
        "secure",
        "guest-list.csv"
      );

      if (existsSync(secureDataPath)) {
        csvData = readFileSync(secureDataPath, "utf-8");
      } else {
        throw new Error(
          "No data source found - neither environment variable nor secure data file"
        );
      }
    }

    if (!csvData || csvData.trim().length === 0) {
      throw new Error("CSV data is empty or invalid");
    }

    // Upload to Netlify Blobs
    const result = await store.set("guest-list.csv", csvData, {
      metadata: {
        uploadedAt: new Date().toISOString(),
        source: process.env.GUEST_LIST_DATA ? "environment" : "secure-file",
        size: csvData.length,
        environment: process.env.NODE_ENV || "development",
      },
    });

    console.log("✅ Successfully uploaded data to Netlify Blobs");
    console.log(`📊 Data size: ${csvData.length} bytes`);
    console.log(`🔖 ETag: ${result.etag || "N/A"}`);
    console.log(`📝 Modified: ${result.modified ? "Yes" : "No"}`);

    // Verify the upload
    const verification = await store.getMetadata("guest-list.csv");
    if (verification) {
      console.log("✅ Upload verified successfully");
      console.log(
        `📅 Metadata: ${JSON.stringify(verification.metadata, null, 2)}`
      );
    } else {
      console.warn("⚠️  Could not verify upload");
    }
  } catch (error) {
    console.error("❌ Error uploading data to Netlify Blobs:", error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

// Run the upload if this script is called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  uploadDataToBlobs();
}

export { uploadDataToBlobs };
