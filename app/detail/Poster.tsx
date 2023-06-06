import { Dimensions } from "react-native";
import { Image } from "tamagui";

import { SelectType } from "../../store/useSelectContent";
import { API_IMAGE_URL } from "../../utils/env";

const dimensions = Dimensions.get("window");
const imageWidth = dimensions.width;

export default function Poster({ select }: { select: SelectType }) {
  return (
    <Image
      w={imageWidth}
      h={200}
      style={{ opacity: 0.8, backgroundColor: "#000" }}
      source={{ uri: `${API_IMAGE_URL}/${select.backdrop_path}` }}
    />
  );
}
