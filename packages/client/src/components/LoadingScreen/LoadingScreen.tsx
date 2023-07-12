import React, { ReactNode } from "react";
import styled from "styled-components";
import { SyncState } from "@latticexyz/network";
import { LoadingBar } from "./LoadingBar";
import { BootScreen } from "./BootScreen";
import { useComponentValue } from "@latticexyz/react";
import { useMUD } from "../../MUDContext";

export const LoadingScreen = () => {
  const {
    network: {
      components: {
        LoadingState
      },
      singletonEntity
    }
  } = useMUD();

  const loadingState = useComponentValue(LoadingState, singletonEntity, {
    msg: "Connecting...",
    percentage: 0,
    state: SyncState.CONNECTING,
  });

  if (loadingState.state === SyncState.LIVE) {
    return null;
  }

  return (
    <BootScreen>
      {loadingState.msg as ReactNode}
      <LoadingContainer>
        {Math.floor(loadingState.percentage as number)}%
        <Loading percentage={loadingState.percentage as number} />
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
