import { Circle, H4, H6, XStack } from "tamagui";

import { SelectType } from "../../store/useSelectContent";

export default function Votes({ select }: { select: SelectType }) {
  const vote = select.vote_average;
  function voteColor() {
    switch (true) {
      case vote > 7:
        return "#34a853";
      case vote > 4:
        return "#f1c40f";
      case vote > 2:
        return "#e74c3c";
      default:
        break;
    }
  }

  return (
    <XStack
      borderColor="$gray11"
      borderWidth={2}
      borderRadius={30}
      alignItems="center"
      p="$1.5"
    >
      <H6 mx="$3">Avaliação dos usuários:</H6>
      <Circle size="$5" bg={voteColor()}>
        <H4 col="#fff">{Math.round(vote * 10)}</H4>
      </Circle>
    </XStack>
  );
}
