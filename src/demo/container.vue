<script setup lang="ts"></script>

<template>
  <div style="border: 1px solid #666">
    <h2>布局1</h2>
    <HarexsContainer class="wrap">
      <HarexsHeader>1234</HarexsHeader>
      <HarexsContainer>
        <HarexsAside width="200px">123</HarexsAside>
        <HarexsContainer>
          <HarexsMain>123</HarexsMain>
          <HarexsFooter>123</HarexsFooter>
        </HarexsContainer>
      </HarexsContainer>
    </HarexsContainer>
  </div>
  <div style="border: 1px solid #666">
    <h2>布局2</h2>
    <HarexsContainer class="wrap">
      <HarexsAside width="200px">123</HarexsAside>
      <HarexsContainer>
        <HarexsMain>123</HarexsMain>
        <HarexsFooter>123</HarexsFooter>
      </HarexsContainer>
    </HarexsContainer>
  </div>
</template>

<style scoped lang="scss">
.wrap {
  width: 100%;
  height: 500px;
  * {
    border: 1px solid #999;
  }
}
</style>
