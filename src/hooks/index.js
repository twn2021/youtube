import { useEffect } from "react";

export const useDropdownClickBody = (dropdownEl, onClose) => {
  useEffect(() => {
    const onClick = (e) => {
      if (dropdownEl.current && !dropdownEl.current.contains(e.target)) {
        onClose();
      }
    };
    document.body.addEventListener("click", onClick);
    return () => {
      document.body.removeEventListener("click", onClick);
    };
  }, [dropdownEl, onClose]);
};
