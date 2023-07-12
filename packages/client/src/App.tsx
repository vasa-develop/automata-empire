import { useComponentValue } from "@latticexyz/react";
import { SyncState } from "@latticexyz/network";
import styled from "styled-components";
import { LoadingBar } from "./components/LoadingScreen/LoadingBar";
import { BootScreen } from "./components/LoadingScreen/BootScreen";
import { useMUD } from "./MUDContext";

import { Game } from "./Game";

export const App = () => {
  const {
    components: { LoadingState },

    network: { singletonEntity },
  } = useMUD();

  const loadingState = useComponentValue(LoadingState, singletonEntity, {
    msg: "Connecting...",
    percentage: 0,
    state: SyncState.CONNECTING,
  });

  if (loadingState.state === SyncState.LIVE) {
    return <Game />;
  }

  return (
    <BootScreen>
      {loadingState.msg}
      <LoadingContainer>
        {Math.floor(loadingState.percentage)}%
        <Loading percentage={loadingState.percentage} />
      </LoadingContainer>
    </BootScreen>
  );
};

const LoadingContainer = styled.div`
  display: grid;
  justify-items: start;
  justify-content: start;
  align-items: center;
  height: 30px;
  width: 100%;
  grid-gap: 20px;
  grid-template-columns: auto 1fr;
`;

const Loading = styled(LoadingBar)`
  width: 100%;
  min-width: 200px;
`;
