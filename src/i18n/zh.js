export default {
  nav: {
    home: '首页',
    features: '特性',
    docs: '文档',
    about: '关于',
  },
  home: {
    title: 'RTTY',
    subtitle: '随时随地，通过浏览器访问您的设备终端。',
    desc: 'rtty 是一个用于共享您终端的反向代理工具。它由一个 C 语言实现的轻量级客户端和一个 Go 语言实现的强大服务端组成。',
    getStarted: '快速开始',
  },
  features: {
    title: '核心特性',
    lightweightClient: {
      title: '轻量级客户端',
      desc: '客户端由 C 语言编写，极致小巧高效，非常适合嵌入式设备。'
    },
    easyDeploy: {
      title: '便捷部署',
      desc: '服务端由 Go 语言编写，编译为单个二进制文件，部署极其简单。'
    },
    webAccess: {
      title: '浏览器访问',
      desc: '通过安全直观的 Web 界面，在全球范围内访问成千上万的设备终端。'
    }
  },
  about: {
    title: '关于 rtty',
    p1: 'rtty 是 SSH 等传统远程访问工具的替代品。其核心优势在于能够从设备向中央服务器建立反向连接。',
    p2: '这意味着即使设备位于 NAT 或防火墙之后，也无需复杂的网络配置即可访问。基于 Web 的终端为管理设备集群提供了无缝的用户体验。'
  },
  docs: {
      title: '文档',
      p1: '有关详细的安装、配置和使用说明，请访问我们在 GitHub 上的官方文档。',
      button: '在 GitHub 上查看'
  },
  footer: {
      copyright: '版权所有 © 2024 rtty 作者。保留所有权利。'
  },
  notFound: {
      message: '噢！页面找不到了。',
      button: '返回首页'
  }
}
