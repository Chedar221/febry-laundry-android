# FEBRY LAUNDRY — Android APK

This repository builds an Android application that opens the existing FEBRY LAUNDRY website.

- App name: FEBRY LAUNDRY
- Android application ID: id.co.febrylaundry.app
- Website: https://febry-laundry.vercel.app
- Existing website backend/database remains unchanged.

## Build

The GitHub Actions workflow starts automatically on pushes to `main`, or manually from **Actions → Build FEBRY LAUNDRY Android APK → Run workflow**.

When the workflow completes successfully, open the run and download the artifact named **FEBRY-LAUNDRY-APK**. Extract it and install `app-debug.apk` on the Android phone. Android may ask permission to install apps from the browser or file manager.

## Notes

This is a WebView wrapper around the live website, not a separate rewrite of the laundry system. The included icon is a temporary laundry-themed icon, not the website's official logo.
