import repository from '~/api/repository';

export default (ctx, inject) => {
  const repositoryWithAxios = repository(ctx.$axios);
  inject('getRepository', repositoryWithAxios(ctx.$axios.defaults.baseURL));
}
