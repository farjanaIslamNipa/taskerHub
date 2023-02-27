import AOS from 'aos';

export default ({ app }, inject) => {
    // eslint-disable-next-line no-use-before-define
    app.AOS =   AOS.init({disable: window.innerWidth < 1024});
}