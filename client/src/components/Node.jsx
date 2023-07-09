import React, {useState} from "react";
import { motion } from "framer-motion";
import NodePopup from "./NodePopup.jsx";

const Node = ({ type, task, coins, open }) => {
    let imageSrc = "";

    const [popupVisible, setPopupVisible] = useState(false);

    switch (type) {
        case "current":
            imageSrc = "node_current.svg";
            break;
        case "finished":
            imageSrc = "node_finished.svg";
            break;
        default:
            imageSrc = "node_future.svg"
            break;
    }

    const handleClick = () => {
        if (type === "current") {
            setPopupVisible(!popupVisible);
        }
    }


    return (
        <div>
            <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{height:"100px", width: "auto"}}
                onClick={handleClick}
                src={imageSrc}
                alt={type}
            />
            {popupVisible && <NodePopup task={task} coins={coins} open={open}/>}
        </div>

    )
};

export default Node;