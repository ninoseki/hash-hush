<template>
  <div class="home">
    <div class="content">
      <h3>What is it?</h3>
      <p>Smart links for hashes.</p>

      <h3>Create a link for a hash</h3>
      <p>
        Build a URL which follows this pattern:
        <code>/hash/#{MD5|SHA1|SHA256|SHA512}</code>
      </p>

      <h3>Example</h3>
      <p>
        <router-link
          to="/hash/275a021bbfb6489e54d471899f7db9d1663fc695ec2fe2a2c4538aabf651fd0f"
        >275a021bbfb6489e54d471899f7db9d1663fc695ec2fe2a2c4538aabf651fd0f</router-link>
      </p>
    </div>
  </div>
</template>
