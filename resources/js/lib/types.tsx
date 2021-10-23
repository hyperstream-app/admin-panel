import { ErrorBag, Errors, Page, PageProps } from "@inertiajs/inertia";

export interface IUser {
  id: string;
  shop_name: string;
  address: string;
  phone: string;
  email: string;
  password: string;

  owner_name: string;
  shop_id: string;
}

export interface IPageProps extends Page<PageProps> {
  props: {
    errors: Errors & ErrorBag;
    authenticated: boolean;
    user: IUser;
  };
}
