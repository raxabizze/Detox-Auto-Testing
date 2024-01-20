/** @type {Detox.DetoxConfig} */
module.exports = {
  testRunner: {
    args: {
      '$0': 'jest',
      config: 'e2e/jest.config.js'
    },
    jest: {
      setupTimeout: 120000
    }
  },
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
  },
  devices: {
    simulator: {
      type: 'ios.simulator',
      device: {
        type: 'iPhone 14'
      }
    },
    attached: {
      type: 'android.attached',
      device: {
        adbName: '.*'
      }
    },
    emulator: {
      type: 'android.emulator',
      device: {
        avdName: 'Pixel_3a_API_34_extension_level_7_x86_64'
      }
    }
  },
  configurations: {
    'ios.sim.debug': {
      device: 'simulator',
      app: 'ios.debug'
    },
    'ios.sim.release': {
      device: 'simulator',
      app: 'ios.release'
    },
    'android.att.debug': {
      device: 'attached',
      app: 'android.debug'
    },
    'android.att.release': {
      device: 'attached',
      app: 'android.release'
    },
    'android.emu.debug': {
      device: 'emulator',
      app: 'android.debug'
    },
    'android.emu.release': {
      device: 'emulator',
      app: 'android.release'
    }
  }
};
