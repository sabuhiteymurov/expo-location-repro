# Expo Location iOS Background Permission Bug

This repo demonstrates a bug in expo-location package where the first background location permission request on iOS returns "denied" immediately without waiting for user response.

## The Issue

When requesting background location permission on iOS:

1. First attempt returns "Denied" instantly (without waiting for the permission dialog to close).
2. Second attempt works correctly

This only happens:

- On iOS
- On Expo SDK 52
- On the first background permission request after app install

## Steps to Reproduce

1. Clone and install

```
git clone https://github.com/sabuhiteymurov/expo-location-repro
cd expo-location-repro
yarn
```

2. Build and run on iOS

```
yarn expo prebuild
expo run:ios
```

3. Test the bug:
   - First tap "Request Foreground Permission" - works without issues
   - Then tap "Request Background Permission" - returns "denied" instantly without waiting for user response
   - Tap "Request Background Permission" again - now returns the previous user permission.

The app shows the permission results at the bottom of the screen and logs them to the console.

## Environment

- Expo SDK: 52
- expo-location: 18.0.6
- iOS: 18.3
- New Architecture: Enabled

## Expected Behavior

- First background permission request result should wait for user's response
- Status should only update after user interaction with the permission dialog

## Actual Behavior

- First request returns "denied" immediately without waiting for user response
- Second request works correctly
- When we tap "Request Background Permission" without first selecting "Request Foreground Permission," the issue occurs if we choose "Allow Once." However, I found that it doesn’t happen if we select "Allow While Using App" from the dialog in this scenario.
