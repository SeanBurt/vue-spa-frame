<template>
  <div class="footer">
    <div class="footer-links">
      <a title="help" target="_self" href="">帮助</a>
      <a title="privacy" target="_self" href="">隐私</a>
      <a title="terms" target="_self" href="">条款</a>
    </div>
    <div class="footer-copyright">Copyright <i class="icon-copyright"><svg viewBox="64 64 896 896" class="" data-icon="copyright" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm5.6-532.7c53 0 89 33.8 93 83.4.3 4.2 3.8 7.4 8 7.4h56.7c2.6 0 4.7-2.1 4.7-4.7 0-86.7-68.4-147.4-162.7-147.4C407.4 290 344 364.2 344 486.8v52.3C344 660.8 407.4 734 517.3 734c94 0 162.7-58.8 162.7-141.4 0-2.6-2.1-4.7-4.7-4.7h-56.8c-4.2 0-7.6 3.2-8 7.3-4.2 46.1-40.1 77.8-93 77.8-65.3 0-102.1-47.9-102.1-133.6v-52.6c.1-87 37-135.5 102.2-135.5z"></path></svg></i> 2018 未来体验技术部出品</div>
  </div>
</template>

<script>
export default {
  name: 'IFooter',
  data () {
    return {
    }
  }
}
</script>

<style>
.footer {
  padding: 0 16px;
  margin: 48px 0 24px 0;
  text-align: center;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
}
.footer-links {
  margin-bottom: 8px;
}
.footer-links > a {
  color: rgba(0, 0, 0, 0.45);
}
.footer-links > a:not(:last-child) {
  margin-right: 40px;
}
.icon-copyright {
  display: inline-block;
  font-style: normal;
  vertical-align: -0.125em;
  text-align: center;
  text-transform: none;
  line-height: 1;
  text-rendering: optimizeLegibility;
}
</style>
