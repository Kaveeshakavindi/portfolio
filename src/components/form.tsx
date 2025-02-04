import React from "react";

interface formProps {
  labels: string[];
}
const Form: React.FC<formProps> = ({ labels }) => {
  const handleEmailSubmit = (body: string) => {
    const email = "kaveeshafernando3@gmail.com";
    window.location.href = `mailto:${email}?subject="New message from website"&body=${encodeURIComponent(
      body
    )}`;
  };
  return (
    <div>
      {labels.map((label, index) => (
        <div key={index} className="input-container">
          <div className="label">{label}</div>
          <div className="input">input</div>
        </div>
      ))}
    </div>
  );
};

export default Form;
