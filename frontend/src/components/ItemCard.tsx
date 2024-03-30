import { useState } from "react";
import { ItemOutput } from "../contracts/contracts/ContractAbi";
import { ContractAbi } from "../contracts";
import { BN } from "fuels";

interface ItemCardProps {
  contract: ContractAbi | null;
  item: ItemOutput;
}

const images = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    url: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    url: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 13,
    url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 14,
    url: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 15,
    url: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8",

  },
  // Add more image objects with different IDs and URLs here
];

const assetId =
  "0x0000000000000000000000000000000000000000000000000000000000000000";

export default function ItemCard({ item, contract }: ItemCardProps) {
  const [status, setStatus] = useState<
    "success" | "error" | "loading" | "none"
  >("none");

  async function handleBuyItem() {
    if (contract !== null) {
      setStatus("loading");
      try {
        await contract.functions
          .buy_item(item.id)
          .txParams({
            variableOutputs: 1,
            gasPrice: 1,
            gasLimit: 300_000,
          })
          .callParams({
            forward: [item.price, assetId],
          })
          .call();
        setStatus("success");
      } catch (e) {
        console.log("ERROR:", e);
      }
    }
  }

  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <div className="item-card border">
      <div className="flex flex-row justify-between">
        <div>ID</div>
        <div>{new BN(item.id).toNumber()}</div>
      </div>
      <div>
        {randomImage && (
          <img className="h-[250px] w-[320px]" src={randomImage.url} alt="Random Image" />
        )}
      </div>
      <div className="flex flex-row justify-between">
        <div>Metadata:</div> <div>{item.metadata}</div>
      </div>
      <div className="flex flex-row justify-between">
        <div>Price:</div> <div>{new BN(item.price).formatUnits()} ETH</div>
      </div>
      <h3 className="flex flex-row justify-between">
        <div>Total Bought:</div>{" "}
        <div>{new BN(item.total_bought).toNumber()}</div>
      </h3>
      {status === "success" && <div>Purchased ✅</div>}
      {status === "error" && <div>Something went wrong ❌</div>}
      {status === "none" && (
        <button
          className="font-semibold"
          data-testid={buy-button-${item.id}}
          onClick={handleBuyItem}
        >
          Buy Item
        </button>
      )}
      {status === "loading" && <div>Buying item..</div>}
    </div>
  );
}
