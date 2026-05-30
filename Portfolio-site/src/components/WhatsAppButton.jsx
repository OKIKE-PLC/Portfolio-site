import React from "react";

export default function WhatsAppButton({ 
  text = "Contact Us", 
  message = "Hello I am interested in your services", 
  phoneNumber = "2349045942474", 
  className = "bg-orange-600 text-stone-100 rounded-lg hover:bg-orange-800 transition duration-300", 
  style = { padding: ".5rem 1rem" } 
}) {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={style}
    >
      {text}
    </a>
  );
}
