import { CanDeactivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

@Injectable()
export class UnsavedChangesGuard implements CanDeactivate<ProductDetailComponent> {

  canDeactivate(component: ProductDetailComponent) {
    if (component.name.dirty) {
      return window.confirm("You might want to wait a minute, you have unsaved changes.  Are you sure you want to leave?");
    } else {
      return true;
    }
  }
}