import { useEffect } from "react";

export default function Menu() {
  useEffect(() => {
    window.location.replace("/#menu");
  }, []);
  return null;
}
