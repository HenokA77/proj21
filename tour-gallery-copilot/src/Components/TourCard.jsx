import React, { useState } from "react";

const TourCard = ({ tour, onRemove }) => {
    const { id, name, info, image, price } = tour;
    const [showInfo, setShowInfo] = useState(false);

    return (
        <div className="tour-card" style={styles.card}>
            <img src={image} alt={name} style={styles.image} />
            <div style={styles.content}>
                <h2>{name}</h2>
                <h4 style={styles.price}>${price}</h4>
                <p>
                    {showInfo ? info : `${info.substring(0, 100)}...`}
                    <button
                        onClick={() => setShowInfo(!showInfo)}
                        style={styles.toggleButton}
                    >
                        {showInfo ? "Show Less" : "Read More"}
                    </button>
                </p>
                <button onClick={() => onRemove(id)} style={styles.removeButton}>
                    Not Interested
                </button>
            </div>
        </div>
    );
};

const styles = {
    card: {
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
        margin: "16px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        maxWidth: "400px",
    },
    image: {
        width: "100%",
        height: "200px",
        objectFit: "cover",
    },
    content: {
        padding: "16px",
    },
    price: {
        color: "#2a9d8f",
        margin: "8px 0",
    },
    toggleButton: {
        background: "none",
        border: "none",
        color: "#007BFF",
        cursor: "pointer",
        marginLeft: "8px",
    },
    removeButton: {
        backgroundColor: "#e63946",
        color: "#fff",
        border: "none",
        padding: "8px 16px",
        borderRadius: "4px",
        cursor: "pointer",
        marginTop: "16px",
    },
};

export default TourCard;