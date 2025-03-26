<template>
  <main class="privacy">
    <div class="privacy__container">
      <h1 class="privacy__title">Política de privacidad</h1>
      <span class="privacy__date">Última actualización: 1/4/2024</span>
      <p class="privacy__intro">
        ByAriana se compromete a proteger la privacidad de los usuarios. Esta
        política explica qué datos recopilamos, cómo los usamos y qué medidas
        tomamos para protegerlos.
      </p>

      <section class="privacy__section">
        <h2 class="privacy__section-title">Datos recopilados</h2>
        <p class="privacy__section-text">
          ByAriana recopila la siguiente información cuando un usuario deja una
          opinión en la página:
        </p>
        <ul class="privacy__list">
          <li class="privacy__list-item">Nombre y apellido</li>
          <li class="privacy__list-item">Correo electrónico</li>
          <li class="privacy__list-item">Opinión proporcionada</li>
        </ul>
      </section>

      <section class="privacy__section">
        <h2 class="privacy__section-title">Uso de la información</h2>
        <p class="privacy__section-text">
          La información recopilada se utiliza únicamente con el propósito de
          mejorar los servicios ofrecidos por ByAriana. No se usará con fines
          publicitarios ni se enviarán correos no solicitados.
        </p>
      </section>

      <section class="privacy__section">
        <h2 class="privacy__section-title">
          Uso de cookies y herramientas de análisis
        </h2>
        <p class="privacy__section-text">
          ByAriana no utiliza cookies, Google Analytics ni otras herramientas de
          rastreo para recopilar información sobre los usuarios.
        </p>
      </section>

      <section class="privacy__section">
        <h2 class="privacy__section-title">
          Compartición de datos con terceros
        </h2>
        <p class="privacy__section-text">
          ByAriana no comparte, vende ni cede la información personal de los
          usuarios a terceros bajo ninguna circunstancia.
        </p>
      </section>

      <section class="privacy__section">
        <h2 class="privacy__section-title">Seguridad de los datos</h2>
        <p class="privacy__section-text">
          Los datos recopilados se almacenan en una base de datos MySQL segura.
          En el futuro, se implementarán medidas adicionales como middleware
          para prevenir accesos no autorizados o ataques de fuerza bruta.
        </p>
      </section>

      <section class="privacy__section">
        <h2 class="privacy__section-title">Modificaciones en la política</h2>
        <p class="privacy__section-text">
          ByAriana se reserva el derecho de modificar esta política de
          privacidad en cualquier momento sin previo aviso. Se recomienda a los
          usuarios revisar periódicamente esta sección para estar informados
          sobre posibles cambios.
        </p>
      </section>
    </div>
  </main>
</template>

<script lang="ts" setup></script>

<style>
.privacy__container {
  margin: 1rem;
}

.privacy__title {
  font-size: 3.2rem;
  margin: 1rem 0;
}

.privacy__date {
  font-size: 1.2rem;
  color: #222222;
  font-weight: bold;
}

.privacy__intro {
  margin-top: 0.5rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #222222;
}

.privacy__section-title {
  font-size: 2rem;
  font-family: "Libre Baskerville", serif;
}

.privacy__section-text,
.privacy__intro,
.privacy__list-item {
  font-size: 1.3rem;
}

.privacy__section-text {
  margin: 0.5rem 0;
}

.privacy__list {
  margin: 0.5rem 0 0.5rem 2.5rem;
}

.privacy__list-item {
  list-style: disc;
  margin: 1rem 0;
}
</style>
