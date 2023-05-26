import { useEffect } from "react";

const UseTitle = (title) => {
    useEffect(() => {
        document.title = `${title} | Heavenly-feast`
    },[title])
};

export default UseTitle;