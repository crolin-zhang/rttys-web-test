export default {
  nav: {
    home: 'Home',
    features: 'Features',
    docs: 'Docs',
    about: 'About',
  },
  home: {
    title: 'RTTY',
    subtitle: 'Access your terminals from anywhere, in your browser.',
    desc: 'rtty is a reverse proxy tool for sharing your terminal with others. It consists of a C-based lightweight client and a Go-based powerful server.',
    getStarted: 'Get Started',
  },
  features: {
    title: 'Core Features',
    lightweightClient: {
      title: 'Lightweight Client',
      desc: 'The client is written in C, making it extremely small and efficient, perfect for embedded devices.'
    },
    easyDeploy: {
      title: 'Easy Deployment',
      desc: 'The server is written in Go, compiled into a single binary, making deployment a breeze.'
    },
    webAccess: {
      title: 'Web Access',
      desc: 'Access thousands of device terminals globally through a secure and intuitive web interface.'
    }
  },
  about: {
    title: 'About rtty',
    p1: 'rtty is an alternative to traditional remote access tools like SSH. Its core strength lies in its ability to establish a reverse connection from the device to a central server.',
    p2: 'This means devices behind NAT or firewalls can be accessed without complex network configurations. The web-based terminal provides a seamless user experience for managing a fleet of devices.'
  },
  docs: {
      title: 'Documentation',
      p1: 'For detailed installation, configuration, and usage instructions, please visit our official documentation on GitHub.',
      button: 'View on GitHub'
  },
  footer: {
      copyright: 'Copyright © 2024 The rtty authors. All rights reserved.'
  },
  notFound: {
      message: 'Oops! Page not found.',
      button: 'Back to Home'
  }
}
