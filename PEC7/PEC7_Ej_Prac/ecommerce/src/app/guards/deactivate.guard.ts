import { CanDeactivateFn } from '@angular/router';
import { ArticleNewReactiveComponent } from '../article-new-reactive/article-new-reactive.component';
export const deactivateGuard: CanDeactivateFn<ArticleNewReactiveComponent> = (component) => {
  if (component.articleForm.valid) {
    return true;
  }
  return window.confirm('Do you want to navigate away from this page?');
}
