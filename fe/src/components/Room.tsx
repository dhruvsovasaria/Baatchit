import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const Room = () => {
  const searchParams = useSearchParams()[0];
  const name = searchParams.get("name") ?? "Anonymous";

  useEffect(() => {
    //logic to initialize room for the user with the given name
    console.log(`Initializing room for ${name}`);
  }, [name]);
  // const name = searchParams.get("name") || "Anonymous";
  return <div>Room Component for {name}</div>;
};
