import React from "react";

import { OrganizationSwitcher } from "@clerk/nextjs";
//@ts-ignore
function OrgSwitcher(maxWidth) {
  return (
    <OrganizationSwitcher
      hidePersonal={true}
      appearance={{
        elements: {
          rootBox: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            maxWidth: "300px",
          },
          organizationSwitcherTrigger: {
            padding: "6px",
            width: "100%",
            borderRadius: "8px",
            border: "1px solid #E5E7EB",
            justifyContent: "space-between",
            backgroundColor: "white",
          },
        },
      }}
    />
  );
}

export default OrgSwitcher;
