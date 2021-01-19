export { default as Logo } from '../../components/Logo.vue'
export { default as WelcomeLayout } from '../../components/Wrapper/WelcomeLayout.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyWelcomeLayout = import('../../components/Wrapper/WelcomeLayout.vue' /* webpackChunkName: "components/Wrapper/WelcomeLayout" */).then(c => c.default || c)
