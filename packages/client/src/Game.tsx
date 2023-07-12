// import { useComponentValue } from "@latticexyz/react";
// import { SyncState } from "@latticexyz/network";
import Phaser from "phaser";
// import { useMUD } from "./MUDContext";
import "./game/index";
import { useEffect, useRef } from "react";
import { PhaserConfig } from "./game/index";

export const Game = () => {
  // const {
  //   components: { Counter },
  //   systemCalls: { increment },
  //   network: { singletonEntity },
  // } = useMUD();

  // const counter = useComponentValue(Counter, singletonEntity);
  useEffect(() => {
    new Phaser.Game(PhaserConfig);
  }, []);
  return (
    <>
      {/* <div>
        Counter: <span>{counter?.value ?? "??"}</span>
      </div>
      <button
        type="button"
        onClick={async (event) => {
          event.preventDefault();
          console.log("new counter value:", await increment());
        }}
      >
        Increment
      </button> */}
    </>
  );
};
