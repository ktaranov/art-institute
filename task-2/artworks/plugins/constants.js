import constants from '@/constants/';

export default ({ app }, inject) => {
  inject('constants', constants)
}
