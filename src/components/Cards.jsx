import { CardActions, Button } from "@mui/material";
import { useState,useEffect } from "react";

export default function Cards() {
    const [orderItems, setOrderItems] = useState([]);

    // Simulate fetching data from an API with useEffect
    useEffect(() => {
      // This is where you'd normally fetch data from an API
      const fetchedData = [
        { quantity: 2, name: "Crispy Chicken Burger", size: "Regular" },
        { quantity: 1, name: "Cheese Veg Wrap", size: "Regular" },
        { quantity: 2, name: "Coke", size: "Medium" },
        { quantity: 2, name: "Coke", size: "Medium" }
      ];

      // Set the fetched data to state
      setOrderItems(fetchedData);
    }, []); 


  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#fff",
        width: 210,
        borderRadius: 10,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        fontFamily: "Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Header Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#318CE7",
          justifyContent: "space-between",
          borderRadius: 10,
          padding: "10px",
          color: "#fff",
        }}
      >
        {/* Left side (Table info, Order ID, and Time) */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontWeight: "bold", fontSize: "14px" }}>Table 5</div>
          <div style={{ fontSize: "12px" }}>Order #11613</div>
          <div style={{ fontSize: "12px" }}>01:52 PM</div>
        </div>

        {/* Right side (Dine In button and time remaining) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <Button
            size="small"
            variant="outlined"
            style={{
              color: "white",
              borderColor: "white",
              marginBottom: "5px",
              fontSize: "12px",
            }}
          >
            Dine In
          </Button>
          <div style={{ fontSize: "12px", color: "#fff" }}>5 mins</div>
        </div>
      </div>

      {/* Middle Section (Order items) */}
      <div
        style={{
          flexGrow: 1, // Allow the middle section to grow dynamically
          padding: "10px",
          fontSize: "14px",
          color: "#333",
          overflowY: "auto", // Add scroll behavior in case of too many items
          maxHeight: "300px", // Optional: Limit max height if needed
        }}
      >
        {orderItems.map((item, index) => (
          <div key={index} style={{ marginBottom: "5px" }}>
            <strong>{item.quantity}x</strong> {item.name} <br />
            <span style={{ fontSize: "12px", color: "#888" }}>{item.size}</span>
          </div>
        ))}
      </div>

      {/* Bottom Section (Start and Finish buttons) */}
      <CardActions style={{ justifyContent: "space-between", padding: "10px" }}>
        <Button
          size="small"
          color="primary"
          variant="contained"
          sx={{
            backgroundColor: "#318CE7",
            color: "#fff",
            "&:hover": { backgroundColor: "#267ac1" },
          }}
        >
          Start
        </Button>
        <Button
          size="small"
          color="primary"
          variant="contained"
          sx={{
            backgroundColor: "#318CE7",
            color: "#fff",
            "&:hover": { backgroundColor: "#267ac1" },
          }}
        >
          Finish
        </Button>
      </CardActions>
    </div>
  );
}
