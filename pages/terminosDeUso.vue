<template>
  <main class="terms">
    <div class="terms__container">
      <h1 class="terms__title">Término de uso</h1>
      <span class="terms__update">Última actualización: 1/4/2024</span>
      <p class="terms__intro">
        Bienvenido a ByAriana. Al acceder y utilizar este sitio web, aceptas
        cumplir con los siguientes términos de uso. Si no estás de acuerdo con
        alguna de estas condiciones, te recomendamos que no utilices nuestro
        sitio.
      </p>

      <section class="terms__section">
        <h2 class="terms__section-title">Información en la página</h2>
        <p class="terms__section-content">
          ByAriana tiene como objetivo brindar información sobre los servicios
          ofrecidos, los precios actualizados y los métodos de contacto. No se
          realizan reservas ni ventas a través del sitio.
        </p>
      </section>

      <section class="terms__section">
        <h2 class="terms__section-title">Responsabilidad</h2>
        <p class="terms__section-content">
          ByAriana se hace responsable de cancelaciones y de resultados
          inesperados o no deseados en los servicios prestados. Para cualquier
          consulta o reclamo, los usuarios pueden comunicarse a través de los
          medios de contacto indicados en la página.
        </p>
      </section>

      <section class="terms__section">
        <h2 class="terms__section-title">Uso del sitio</h2>
        <p class="terms__section-content">
          Los usuarios pueden utilizar el sitio únicamente con fines
          informativos y para dejar opiniones sobre los servicios. No está
          permitido el uso del contenido con fines comerciales sin autorización
          expresa.
        </p>
      </section>

      <section class="terms__section">
        <h2 class="terms__section-title">Propiedad intelectual</h2>
        <ul class="terms__section-list">
          <li class="terms__section-list-item">
            Las imágenes y fotografías del sitio son propiedad de ByAriana,
            salvo aquellas obtenidas de plataformas como Pinterest.
          </li>
          <li class="terms__section-list-item">
            Los íconos de redes sociales (WhatsApp, Instagram, etc.) son de uso
            libre y no están sujetos a derechos de autor exclusivos.
          </li>
          <li class="terms__section-list-item">
            Queda prohibida la reproducción, distribución o modificación del
            contenido sin permiso.
          </li>
        </ul>
      </section>

      <section class="terms__section">
        <h2 class="terms__section-title">Modificaciones en los términos</h2>
        <p class="terms__section-content">
          ByAriana se reserva el derecho de modificar estos términos en
          cualquier momento sin previo aviso. Se recomienda a los usuarios
          revisar esta sección periódicamente para estar informados de los
          cambios.
        </p>
      </section>
    </div>
  </main>
</template>

<script lang="ts" setup></script>

<style>
.terms__container {
  margin: 1rem;
}

.terms__title {
  font-size: 3.2rem;
  margin: 1rem 0;
}

.terms__update {
  font-size: 1.2rem;
  color: #222222;
  font-weight: bold;
}

.terms__intro {
  margin-top: 0.5rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #222222;
}

.terms__section-title {
  font-size: 2rem;
  font-family: "Libre Baskerville", serif;
}

.terms__section-content,
.terms__intro,
.terms__section-list-item {
  font-size: 1.3rem;
}

.terms__section-content {
  margin: 0.5rem 0;
}

.terms__section-list {
  margin: 0.5rem 0 0.5rem 2.5rem;
}

.terms__section-list-item {
  list-style: disc;
  margin: 1rem 0;
}
</style>
