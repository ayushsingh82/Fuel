import { useState } from "react";
import { ContractAbi } from "../contracts";
import { bn } from "fuels";

interface ListItemsProps {
  contract: ContractAbi | null;
}

export default function ListItem({ contract }: ListItemsProps) {
  const [metadata, setMetadata] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [price, setPrice] = useState<string>("0");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [status, setStatus] = useState<
    "success" | "error" | "loading" | "none"
  >("none");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    if (contract !== null) {
      try {
        const priceInput = bn.parseUnits(price.toString());
        await contract.functions
          .list_item(priceInput, metadata)
          .txParams({
            gasPrice: 1,
            gasLimit: 300_000,
          })
          .call();
        setStatus("success");
      } catch (e) {
        console.log("ERROR:", e);
        setStatus("error");
      }
    } else {
      console.log("ERROR: Contract is null");
    }
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      // Read the file as data URL
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setImageUrl(event.target.result.toString());
        }
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <div>
      <h2 className="text-3xl font-semibold py-3">List an Item</h2>
      {status === "none" && (
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">Item Name:</label>
            <input
              id="name"
              type="text"
              required
              onChange={(e) => setMetadata(e.target.value)}
              style={{ backgroundColor: "rgb(35, 35, 35)" }}
              className="p-2 rounded-lg"
            />
          </div>

          <div className="form-control">
            <label htmlFor="desc">Item Description:</label>
            <input
              id="desc"
              type="text"
              required
              onChange={(e) => setDesc(e.target.value)}
              style={{ backgroundColor: "rgb(35, 35, 35)" }}
              className="p-2 rounded-lg"
            />
          </div>

          <div className="form-control">
            <label htmlFor="metadata">Item Metadata:</label>
            <input
              id="metadata"
              type="text"
              pattern="\w{20}"
              title="The metatdata must be 20 characters"
              required
              onChange={(e) => setMetadata(e.target.value)}
              style={{ backgroundColor: "rgb(35, 35, 35)" }}
              className="p-2 rounded-lg"
            />
          </div>

          <div className="form-control">
            <label htmlFor="price">Item Price:</label>
            <input
              id="price"
              type="number"
              required
              min="0"
              step="any"
              inputMode="decimal"
              placeholder="0.00"
              onChange={(e) => setPrice(e.target.value)}
              style={{ backgroundColor: "rgb(35, 35, 35)" }}
              className="p-2 rounded-lg"
            />
          </div>

          <div className="form-control">
            {/* File input for image upload */}
            <label htmlFor="imageUpload">Upload Image:</label>
            <input
              id="imageUpload"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ backgroundColor: "rgb(35, 35, 35)" }}
              className="p-2 rounded-lg"
            />
          </div>

          <div className="form-control">
            <button type="submit" className="font-semibold">
              List item
            </button>
          </div>
        </form>
      )}

      {status === "success" && <div>Item successfully listed!</div>}
      {status === "error" && <div>Error listing item. Please try again.</div>}
      {status === "loading" && <div>Listing item...</div>}
      
      {/* Display the uploaded image */}
      {imageUrl && (
        <div className="mt-4">
          <label>Uploaded Image:</label>
          <img src={imageUrl} alt="Uploaded" className="max-w-xs max-h-xs" />
        </div>
      )}
    </div>
  );
}
