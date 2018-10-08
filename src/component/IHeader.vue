<template>
  <el-header class="header">
    <i @click="collapse" class="header-trigger">
      <svg v-show="!isCollapse" viewBox="64 64 896 896" class="" data-icon="menu-fold" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 0 0 0 13.8z"></path></svg>
      <svg v-show="isCollapse" viewBox="64 64 896 896" class="" data-icon="menu-unfold" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"></path></svg>
    </i>
    <el-dropdown @command="handleLanguage" class="header-language">
      <span>{{$t('message.language')}}<i class="el-icon-arrow-down el-icon--right"></i></span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item  command="a" v-text="$t('message.chinese')"></el-dropdown-item>
        <el-dropdown-item  command="b" v-text="$t('message.english')"></el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-dropdown @command="handleSetting" class="header-setting">
      <span>{{userName}}<i class="el-icon-arrow-down el-icon--right"></i></span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item  command="a" v-text="$t('message.personalSetting')"></el-dropdown-item>
        <el-dropdown-item  command="b" divided v-text="$t('message.logout')"></el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <span class="avatar-image"><img src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" alt="avatar"></span>
  </el-header>
</template>

<script>
import { Header, Dropdown, DropdownMenu, DropdownItem } from 'element-ui'
export default {
  name: 'IHeader',
  components: {
    'el-header': Header,
    'el-dropdown': Dropdown,
    'el-dropdown-menu': DropdownMenu,
    'el-dropdown-item': DropdownItem
  },
  props: {},
  data () {
    return {
    }
  },
  computed: {
    isCollapse () {
      return this.$store.getters.getIsCollapse
    },
    userName () {
      return this.$t('message.future')
    }
  },
  created () {},
  mounted () {
  },
  methods: {
    handleSetting (command) {
      if (command === 'a') {
      } else if (command === 'b') {
        this.$confirm(this.$t('message.promptLogout'), this.$t('message.prompt')).then(() => {
          this.$router.push({ path: '/User' })
        }).catch(() => {
        })
      }
    },
    // shrink menu
    collapse () {
      this.$store.dispatch('COLLAPSE_MUTATION')
    },
    // switch language
    handleLanguage (command) {
      if (command === 'a') {
        this.language = '中　文'
        this.$i18n.locale = 'cn'
      } else if (command === 'b') {
        this.language = 'English'
        this.$i18n.locale = 'en'
      }
    }
  }
}
</script>

<style>
.header {
  position: relative;
  background: #fff;
}
.header-trigger {
  display: inline-block;
  padding: 18px 0 22px;
  height: 60px;
  font-size: 20px;
}
.avatar-image {
  float: right;
  margin-top: 18px;
  width: 24px;
  height: 24px;
  line-height: 24px;
  border-radius: 50%;
}
.avatar-image > img {
  width: 100%;
  height: 100%;
  display: block;
}
.header-setting {
  float: right;
  padding: 20px 6px 6px 6px;
}
.header-language {
  float: right;
  padding: 20px 0 6px 10px;
}
.header-setting:hover, .header-trigger:hover, .header-language:hover {
  cursor: pointer;
}
</style>
