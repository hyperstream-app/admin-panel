import React from "react";
import Layout from "../../components/Layout";
import useTitle from "../../lib/use-title";
import { IPageProps } from "../../lib/types";
import { usePage } from "@inertiajs/inertia-react";

interface IPaymentsProps {
  // status: number;
  // message?: string;
}

const Index: React.FC<IPaymentsProps> = ({}: IPaymentsProps) => {
  const {
    props: { authenticated, user },
  } = usePage<IPageProps>();
  authenticated ? useTitle(`Payments | ${user.shop_name}`) : useTitle("403");

  return (
    <Layout links={[{ href: "/", label: "home" }]}>
      <div className="flex items-center justify-center h-full w-full px-5">
        <div className="bg-white w-full max-w-sm p-5 rounded-lg">
          <h1>Payments</h1>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
