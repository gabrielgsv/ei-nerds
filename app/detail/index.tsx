import { ScrollView } from "react-native";
import { YStack } from "tamagui";

import Header from "../../components/Header";
import useSelectContent from "../../store/useSelectContent";

import Credits from "./Credits";
import Overview from "./Overview";
import Poster from "./Poster";
import Title from "./Title";
import Votes from "./Votes";
import WatchProviders from "./WatchProviders";

export default function Detail() {
  const select = useSelectContent((state) => state.select);

  return (
    <>
      <Header title="Sobre" />
      <ScrollView>
        <YStack m="$4" alignItems="center" gap="$3">
          <Poster select={select} />
          <Title select={select} />
          <Votes select={select} />
          <Overview select={select} />
          <WatchProviders select={select} />
          <Credits select={select} />
        </YStack>
      </ScrollView>
    </>
  );
}
