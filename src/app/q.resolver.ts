import { ResolveFn } from '@angular/router';

export const qResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
