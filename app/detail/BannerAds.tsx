import { BannerAd, BannerAdSize } from "react-native-google-mobile-ads";

export default function BannerAds() {
  return (
    <>
      <BannerAd
        unitId={"ca-app-pub-9811756218598664/5846909116"}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
    </>
  );
}
