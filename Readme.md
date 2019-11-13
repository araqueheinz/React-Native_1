# Learning React Native 1


### Tools we will need to download:
  - [Node](https://nodejs.org/en/download/)
  - [VSCode](https://code.visualstudio.com/download)
  - [Expo with client](https://expo.io/tools#client) | On your phone
  - [Android Studio (Optional)](https://developer.android.com/studio) 
  - [iOS Simulator Xcode (Optional)](https://developer.apple.com/xcode/)
  - [Mac - Homebrew](https://brew.sh/)
  - [Windows - Chocolatey](https://chocolatey.org/install)

### Resources
  - [React Native Docs](https://facebook.github.io/react-native/docs/getting-started.html)

## Using Expo CLI
 - [Expo CLI Quick Start](https://facebook.github.io/react-native/docs/getting-started)
 -  `npm install expo-cli --global`

### React Native Globally MAC
  - `npm i -g react-native-cli`

### Get started
  - Create directory 
  - `cd` into directory 
 
  ```
expo init HelloProject

cd HelloProject
npm start # you can also use: expo start
  ```
- Simulator on mac `open -a simulator`
- Give permission to interact with Xcode `sudo xcode-select -s /Applications/Xcode.app`

## Non Expo CLI
  - [React Native CLI Quick Start](https://facebook.github.io/react-native/docs/getting-started)
  - `brew install watchmen`
  - `sudo gem install cocoapods`
  - `brew tap AdoptOpenJDK/openjdk`
  - `brew cask install adoptopenjdk8`
  - `brew cask install android-platform-tools`

  ```
  npx react-native init HelloNative
  ```
## On Mac

### Target Android
- Create  `local.properties` file inside android folder
- In Macintosh HD⁩/⁨Users⁩/⁨heinzaraque⁩/.bash_profile file add:
```
  export ANDROID_HOME=/Users/heinzaraque/Library/Android/sdk
  export PATH=$PATH:$ANDROID_HOME/emulator
  export PATH=$PATH:$ANDROID_HOME/tools
  export PATH=$PATH:$ANDROID_HOME/tools/bin
  export PATH=$PATH:$ANDROID_HOME/platform-tools
```
  - Open Android Studio
  - Open Emaulator | AVD Manager (Create a device id needed)
  - `cd HelloNative`
  - `npx react-native run-android`

### Target iOS
- `npx react-native run-ios`
