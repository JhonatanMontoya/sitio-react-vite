import React from "react";
import "./App.css";

export default function App() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <h1>Bienvenido a Mi Landing</h1>
          <p>Una landing simple y funcional hecha con React + Vite.</p>
          <a href="#contacto" className="btn-contact">Contacto</a>
        </div>

        <div className="hero-right">
          <img src="/foto1.jpeg" alt="Presentación" />
        </div>
      </section>

      {/* FORMULARIO */}
      <section id="contacto" className="form-section">
        <h2>Formulario de Contacto</h2>

        <form className="formulario" onSubmit={(e) => { e.preventDefault(); alert("Gracias — mensaje enviado"); }}>
          <input type="text" placeholder="Tu nombre" required />
          <input type="email" placeholder="Tu correo" required />
          <textarea placeholder="Tu mensaje" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </>
  );
}
