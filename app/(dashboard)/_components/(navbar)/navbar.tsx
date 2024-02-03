"use client";

import { UserButton, useOrganization } from "@clerk/nextjs";
import { SearchInput } from "./search-input";
import OrgSwitcher from "../(orgsidebar)/org-switcher";
import { InviteButton } from "../invite-button";

function Navbar() {
  const { organization } = useOrganization();
  return (
    <div className="flex items-center gap-x-4 p-5">
      <div className="hidden lg:flex lg:flex-1">
        <SearchInput />
      </div>
      <div className="block lg:hidden flex-1">
        <OrgSwitcher />
      </div>
      {organization && <InviteButton />}
      <UserButton />
    </div>
  );
}

export default Navbar;
