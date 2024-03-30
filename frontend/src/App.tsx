import React, { useState, useMemo } from "react";
import { useConnectUI, useIsConnected, useWallet } from "@fuels/react";
import { ContractAbi__factory } from "./contracts";
import AllItems from "./components/AllItems";
import ListItem from "./components/ListItem";
import Home from "./components/Home";
import "./App.css";

const CONTRACT_ID =
  "0x3b598fc9103ce3c5c7a29663aee51099b3374958ba1016280caf802fdeb5aad8";

function App() {
  const [active, setActive] = useState<"all-items" | "list-item" | "home">(
    "home"
  );
  const { isConnected } = useIsConnected();
  const { connect, isConnecting } = useConnectUI();
  const { wallet } = useWallet();

  const contract = useMemo(() => {
    if (wallet) {
      const contract = ContractAbi__factory.connect(CONTRACT_ID, wallet);
      return contract;
    }
    return null;
  }, [wallet]);

  return (
    <div className="App">
      <header>
        <h1 className="font-semibold text-3xl py-5">Sway Marketplace</h1>
      </header>
      <nav>
        <ul>
          <li
            className={active === "home" ? "active-tab" : ""}
            onClick={() => setActive("home")}
            style={{ padding: "4px 12px", borderRadius: "16px" }}
          >
            Home
          </li>
          <li
            className={active === "all-items" ? "active-tab" : ""}
            onClick={() => setActive("all-items")}
            style={{ padding: "4px 12px", borderRadius: "16px" }}
          >
            See All Items
          </li>
          <li
            className={active === "list-item" ? "active-tab" : ""}
            onClick={() => setActive("list-item")}
            style={{ padding: "4px 12px", borderRadius: "16px" }}
          >
            List an Item
          </li>
        </ul>
      </nav>
      <div>
        {isConnected ? (
          <div>
            {active === "all-items" && <AllItems contract={contract} />}
            {active === "list-item" && <ListItem contract={contract} />}
            {active === "home" && <Home />}
          </div>
        ) : (
          <div>
            <button
              onClick={() => {
                connect();
              }}
            >
              {isConnecting ? "Connecting" : "Connect"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
