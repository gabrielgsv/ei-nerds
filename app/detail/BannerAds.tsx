import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

export default function BannerAds() {
  const adUnitId = __DEV__
    ? TestIds.BANNER
    : "ca-app-pub-9811756218598664~2534372146";

  return (
    <>
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
    </>
  );
}
