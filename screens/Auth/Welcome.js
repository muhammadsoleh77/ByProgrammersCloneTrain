import React from 'react';
import {Text, View, Image} from 'react-native';

import {FONTS, COLORS, SIZES, icons, images, constants} from '../../constants';
import {IconTextButton, TextButton} from '../../components';

function Welcome() {
  // Render
  function renderHeaderImage() {
    return (
      <View>
        <Image
          source={images.train}
          style={{
            width: SIZES.width,
            height: 250,
          }}
        />
      </View>
    );
  }

  function renderLoginDetails() {
    return (
      <View
        style={{
          flex: 1,
          padding: SIZES.padding,
          justifyContent: 'space-between',
        }}>
        {/* Title & Desc */}
        <View>
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.gray50,
            }}>
            Log In
          </Text>
          <Text
            style={{
              ...FONTS.ps3,
              color: COLORS.gray50,
            }}>
            Please choose how would you like to log in.
          </Text>
        </View>

        {/* Login Buttons */}
        <View>
          {/* Phone Number */}
          <IconTextButton
            icon={icons.smartphone}
            label="Continue with Phone Number"
            containerStyle={{
              borderColor: COLORS.primary500,
              backgroundColor: COLORS.primary500,
            }}
            onPress={() => {}}
          />

          {/* Apple */}
          <IconTextButton
            icon={icons.apple_logo}
            label="Continue with Apple"
            containerStyle={{
              marginTop: SIZES.padding,
            }}
            onPress={() => {}}
          />

          {/* Google */}
          <IconTextButton
            icon={icons.google_logo}
            label="Continue with Google"
            containerStyle={{
              marginTop: SIZES.padding,
            }}
            onPress={() => {}}
          />

          {/* Facebook */}
          <IconTextButton
            icon={icons.fb_logo}
            label="Continue with Facebook"
            containerStyle={{
              marginTop: SIZES.padding,
            }}
            onPress={() => {}}
          />
        </View>

        {/* Sign Up */}
        <View>
          <Text
            style={{
              ...FONTS.l3,
              textAlign: 'center',
              color: COLORS.gray400,
            }}>
            Don't have an account?
          </Text>

          <TextButton
            label="Create an Account"
            contentContainerStyle={{
              marginTop: SIZES.padding,
            }}
            onPress={() => {}}
          />
        </View>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.gray400,
      }}>
      <View
        style={{
          flex: 1,
          overflow: 'hidden',
          backgroundColor: COLORS.gray900,
        }}>
        {/* Header Image */}
        {renderHeaderImage()}

        {/* Login Details */}
        {renderLoginDetails()}
      </View>
    </View>
  );
}

export default Welcome;
