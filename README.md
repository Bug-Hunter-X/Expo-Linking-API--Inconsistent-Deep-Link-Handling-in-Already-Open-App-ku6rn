# Expo Linking API: Inconsistent Deep Link Handling

This repository demonstrates a bug in Expo's `Linking` API where deep link handling is inconsistent when the app is already open.  The `Linking.addEventListener` callback is not always triggered, leading to unpredictable behavior.

## Bug Description

The issue occurs when the app is already running and a deep link is clicked. The app should respond by navigating to the appropriate screen based on the deep link. However, in some cases, the `Linking.addEventListener` callback function doesn't fire, and the app doesn't handle the deep link.

## How to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the app: `expo start`
4. Open the app. 
5. Open a second browser/simulator instance.
6. Click a deep link (e.g., `exp://your-app-id.exponentapp.com/deeplink-route`).
7. Observe inconsistent behavior.

## Solution

The solution involves using both `Linking.addEventListener` and `Linking.getInitialURL`. `getInitialURL` handles the initial deep link when the app is launched through a deep link while `addEventListener` listens for subsequent deep links while the app is already running. This approach ensures reliable deep link handling, regardless of the app's initial state.