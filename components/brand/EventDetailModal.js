// components/EventDetailModal.js
import React from "react";
import styles from "@/app/styles/EventCard.module.css";

export default function EventDetailModal({ event, isOpen, onClose }) {
  const modalClass = isOpen ? `${styles.modal} ${styles.open}` : styles.modal;
  return (
    <div className={`${styles.modal} ${modalClass}`}>
      <div className={`${styles.modalContent}`}>
        <span className={`${styles.close}`} onClick={onClose} aria-label="Close modal">
          &times;
        </span>
        <h2>{event.name}</h2>
        <p>{event.details}</p>
        {/* More event details here */}
      </div>
    </div>
  );
}
