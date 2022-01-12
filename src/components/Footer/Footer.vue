<template>
  <div class="footer">
    <hr />
    <div class="footer-text">
      <p>GRANDX 2021 - Todos os direitos reservados. Termos de uso e Política de Privacidade</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Footer',
}

</script>

<style scoped>
  p {
    text-align: center;
  }

  .footer {
    display: flex;
    flex-direction: column;
    height:60px;
    border-bottom: 5px solid #0EB481;
  }

  .footer-text {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
</style>