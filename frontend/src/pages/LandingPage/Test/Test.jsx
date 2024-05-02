import React, { useState } from "react";

const KlaviyoForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const apiKey = "RfYvCN"; // Replace with your API Key
    const listId = "SpuugS"; // Replace with your List ID

    const data = {
      email: email,
    };

    fetch(`https://manage.klaviyo.com/api/v1/list/${listId}/profiles`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Email submitted to Klaviyo:", data);
        // Clear email input or show a success message
      })
      .catch((error) => {
        console.error("Error submitting email to Klaviyo:", error);
        // Show an error message or handle the error appropriately
      });
  };

  return (
    <div class="klaviyo-form-XTMT43"></div>
  );
};

export default KlaviyoForm;