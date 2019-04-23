import intercept from './intercept';

export function getResourcesToken(): any {
  const url: string = 'token';
  return intercept({
    method: 'get',
    url
  });
}

export function getHomePcBanners(): any {
  const url: string = '/banners';
  return intercept({
    method: 'get',
    url
  });
}

export function getToken(): any {
  const url: string = '/token';
  return intercept({
    method: 'get',
    url
  });
}

export function getCoursesCommend(): any {
  const url: string = '/courses/commend';
  return intercept({
    method: 'get',
    url
  });
}

export function getCoursesClassify(): any {
  const url: string = '/courses/classify';
  return intercept({
    method: 'get',
    url
  });
}

export function getCourseDetails(id: number): any {
  const url: string = '/courses/' + id;
  return intercept({
    method: 'get',
    url
  });
}

export function getHomePageLinks():any {
  const url:string='/discover';
  return intercept({
    method:'get',
    url
  })
}
