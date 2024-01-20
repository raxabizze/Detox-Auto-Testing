Environment Setup:
```
npm install detox-cli --global
```
```
brew tap wix/brew
```
```
brew install applesimutils
```

----------------------------------------

Project Seup:
```
mkdir Detox
```
```
cd Detox
```
```
npm init -y
```
```
npm install jest --save-dev
```
```
detox init
```

----------------------------------------
Update config:

.detoxrc.js
```
 apps: {
    'ios.debug': {
      type: 'ios.app',
      binaryPath: 'ios/build/Build/Products/Debug-iphonesimulator/<iOS_APP_NAME>.app',
      build: 'xcodebuild -workspace <iOS_PATH_TO_APP.xcworkspace> -scheme <SCHEME_NAME> -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build EXCLUDED_ARCHS=arm64'
    },
    'ios.release': {
      type: 'ios.app',
      binaryPath: 'ios/build/Build/Products/Release-iphonesimulator/<iOS_APP_NAME>.app',
      build: 'xcodebuild -workspace <iOS_PATH_TO_APP.xcworkspace> -scheme <SCHEME_NAME> -configuration Release -sdk iphonesimulator -derivedDataPath ios/build EXCLUDED_ARCHS=arm64'
    },
    'android.debug': {
      type: 'android.apk',
      binaryPath: '<ANDROID_APP_PATH>app/build/outputs/apk/debug/app-debug.apk',
      build: 'cd <ANDROID_APP_PATH> && sh gradlew assembleDebug assembleAndroidTest -DtestBuildType=debugma',
      reversePorts: [
        8081
      ]
    },
    'android.release': {
      type: 'android.apk',
      binaryPath: '<ANDROID_APP_PATH>app/build/outputs/apk/release/app-release.apk',
      build: 'cd <ANDROID_APP_PATH> && sh gradlew assembleRelease assembleAndroidTest -DtestBuildType=release'
    }
  }
  ```
----------------------------------------

iOS:

Build:
```
detox build --configuration android.emu.debug
```

Clean build cache:
```
detox clean-framework-cache && detox build-framework-cache
```

Clean build cache:
```
detox test --configuration android.emu.debug
```
----------------------------------------

Android: 

```
chmod +x gradlew
```
```
export JAVA_HOME=/Applications/Android\ Studio.app/Contents/jbr/Contents/Home/
```
(https://stackoverflow.com/a/49075443/9797997)

```
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

(https://stackoverflow.com/a/68921708/9797997)

Build:
```
detox build --configuration android.emu.debug
```

Clean build cache:
```
detox clean-framework-cache && detox build-framework-cache
```

Clean build cache:
```
detox test --configuration android.emu.debug
```

----------------------------------------
Reference:

https://wix.github.io/Detox/docs/introduction/project-setup

https://juejin.cn/post/7153181302647160868
