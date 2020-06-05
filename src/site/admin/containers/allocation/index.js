import React from "react";
import { AdminPage } from "@admin/components/admin";
import { PhanBo } from "@admin/components/statistic";
function index(props) {
  return (
    <AdminPage>
      <PhanBo />
    </AdminPage>
  );
}

export default index;
